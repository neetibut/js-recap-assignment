const fs = require("fs");

const readmePath = "README.md";
if (!fs.existsSync(readmePath)) {
  console.error("❌ README.md not found.");
  process.exit(1);
}

const content = fs.readFileSync(readmePath, "utf-8");

// ✅ Check word count
const wordCount = content.split(/\s+/).length;
if (wordCount < 50) {
  console.error(`❌ README.md has only ${wordCount} words. Minimum required: 50.`);
  process.exit(1);
}

// ✅ Check for JavaScript concepts using regex
const regex = /(?i)\b(data types?|variables?|conditionals?)\b/g;
const matches = content.match(regex);

if (!matches) {
  console.error(
    "❌ README.md must mention at least one JavaScript concept: 'data types', 'data type', 'variables', or 'conditionals'."
  );
  process.exit(1);
}

console.log(`✅ README.md meets all requirements. Word count: ${wordCount}. JavaScript concepts detected: ${matches.join(", ")}`);

