export const languages = [
  {
    id: 63,
    name: "JavaScript (Node.js 12.14.0)",
    label: "JavaScript (Node.js 12.14.0)",
    value: "javascript",
  },

  {
    id: 75,
    name: "C (Clang 7.0.1)",
    label: "C (Clang 7.0.1)",
    value: "c",
  },
  {
    id: 76,
    name: "C++ (Clang 7.0.1)",
    label: "C++ (Clang 7.0.1)",
    value: "cpp",
  },

  {
    id: 60,
    name: "Go (1.13.5)",
    label: "Go (1.13.5)",
    value: "go",
  },

  {
    id: 62,
    name: "Java (OpenJDK 13.0.1)",
    label: "Java (OpenJDK 13.0.1)",
    value: "java",
  },

  {
    id: 78,
    name: "Kotlin (1.3.70)",
    label: "Kotlin (1.3.70)",
    value: "kotlin",
  },

  {
    id: 68,
    name: "PHP (7.4.1)",
    label: "PHP (7.4.1)",
    value: "php",
  },
  {
    id: 43,
    label: "Plain Text",
    name: "Plain Text",
    value: "text",
  },

  {
    id: 70,
    name: "Python (2.7.17)",
    label: "Python (2.7.17)",
    value: "python",
  },

  {
    id: 80,
    name: "R (4.0.0)",
    label: "R (4.0.0)",
    value: "r",
  },
  {
    id: 72,
    name: "Ruby (2.7.0)",
    label: "Ruby (2.7.0)",
    value: "ruby",
  },
  {
    id: 73,
    name: "Rust (1.40.0)",
    label: "Rust (1.40.0)",
    value: "rust",
  },

  {
    id: 82,
    name: "SQL (SQLite 3.27.2)",
    label: "SQL (SQLite 3.27.2)",
    value: "sql",
  },

  {
    id: 74,
    name: "TypeScript (3.7.4)",
    label: "TypeScript (3.7.4)",
    value: "typescript",
  },
];

export const defaultCode = `
  console.log("welcome there")`;

const fetchLanguages = async () => {
  try {
    const response = await fetch("https://ce.judge0.com/languages/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const languagesArray = await response.json(); // This should be an array of languages
    console.log(languagesArray);
    return languagesArray; // Return the languages array
  } catch (error) {
    console.error("Error fetching languages:", error);
  }
};

// Example usage
// fetchLanguages().then((languages) => {
//   console.log("Languages:", languages);
// });

export const jlanguages = [
  {
    id: 4,
    name: "JavaScript (Node.js 12.14.0)",
    extension: "js",
    compiled: false,
    environment: "node",
  },
  {
    id: 1,
    name: "C (gcc 9.3.0)",
    extension: "c",
    compiled: true,
    environment: "gcc",
  },
  {
    id: 2,
    name: "Java (OpenJDK 11.0.10)",
    extension: "java",
    compiled: true,
    environment: "jdk",
  },
  {
    id: 3,
    name: "Python (3.8.6)",
    extension: "py",
    compiled: false,
    environment: "python",
  },
];
