
import { readFile } from "node:fs/promises";
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SECRET_KEY;

if (!url || !key) {
  throw new Error("Missing Supabase URL or secret key in .env.local");
}

const supabase = createClient(url, key);

const db = JSON.parse(
  await readFile(new URL("../db.json", import.meta.url), "utf8")
);

const collections = [
  { source: "courses", table: "courses" },
  { source: "comments", table: "comments", courseId: true },
  { source: "users", table: "users" },
  { source: "progress", table: "progress" },
  { source: "questions", table: "questions", courseId: true },
  {
    source: "quizQuestions",
    table: "quiz_questions",
    courseId: true,
    lessonId: true,
  },
];

for (const collection of collections) {
  const items = db[collection.source] ?? [];

  const rows = items.map((item) => {
    if (item.id === undefined || item.id === null) {
      throw new Error(
        `An item in ${collection.source} has no id`
      );
    }

    const row = {
      id: String(item.id),
      data: item,
    };

    if (collection.courseId) {
      const value = item.courseId ?? item.course_id;
      row.course_id =
        value == null ? null : String(value);
    }

    if (collection.lessonId) {
      const value = item.lessonId ?? item.lesson_id;
      row.lesson_id =
        value == null ? null : String(value);
    }

    return row;
  });

  for (let i = 0; i < rows.length; i += 100) {
    const batch = rows.slice(i, i + 100);

    const { error } = await supabase
      .from(collection.table)
      .upsert(batch, { onConflict: "id" });

    if (error) {
      throw new Error(
        `Failed to import ${collection.source}: ${error.message}`
      );
    }
  }

  console.log(
    `Imported ${rows.length} records into ${collection.table}`
  );
}

console.log("Migration completed successfully!");
