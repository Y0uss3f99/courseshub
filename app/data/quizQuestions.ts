
export type QuizOption = {
  id: string;
  text: string;
};

export type QuizQuestion = {
  id: number;
  question: string;
  code?: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What does SEO stand for?",
    options: [
      { id: "a", text: "Search Engine Optimization" },
      { id: "b", text: "Software Engineering Operation" },
      { id: "c", text: "Search Email Organization" },
      { id: "d", text: "System Engine Output" },
    ],
    correctOptionId: "a",
    explanation:
      "SEO stands for Search Engine Optimization.",
  },
  {
    id: 2,
    question: "Which HTML tag is commonly used for the main page heading?",
    options: [
      { id: "a", text: "<p>" },
      { id: "b", text: "<h1>" },
      { id: "c", text: "<footer>" },
      { id: "d", text: "<span>" },
    ],
    correctOptionId: "b",
    explanation:
      "The h1 element represents the main heading of a page.",
  },
  {
    id: 3,
    question: "What is the main purpose of a meta description?",
    options: [
      { id: "a", text: "To create website animations" },
      { id: "b", text: "To replace all page content" },
      { id: "c", text: "To summarize the page content" },
      { id: "d", text: "To increase image resolution" },
    ],
    correctOptionId: "c",
    explanation:
      "A meta description summarizes a page and may appear in search results.",
  },
  {
    id: 4,
    question: "Which HTTP status code means the page was found successfully?",
    options: [
      { id: "a", text: "404" },
      { id: "b", text: "500" },
      { id: "c", text: "301" },
      { id: "d", text: "200" },
    ],
    correctOptionId: "d",
    explanation:
      "HTTP 200 indicates that the request succeeded.",
  },
  {
    id: 5,
    question: "Which attribute provides alternative text for an image?",
    options: [
      { id: "a", text: "src" },
      { id: "b", text: "alt" },
      { id: "c", text: "href" },
      { id: "d", text: "class" },
    ],
    correctOptionId: "b",
    explanation:
      "The alt attribute provides a text alternative for an image.",
  },
];
