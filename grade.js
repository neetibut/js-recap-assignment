const fs = require("fs");

const readmePath = "README.md";
if (!fs.existsSync(readmePath)) {
  console.error("❌ README.md not found.");
  process.exit(1);
}

const content = fs.readFileSync(readmePath, "utf-8");
const wordCount = content.split(/\s+/).length;

if (wordCount < 100) {
  console.error(`❌ README.md has only ${wordCount} words. Minimum required: 100.`);
  process.exit(1);
}

console.log(`✅ README.md meets the 100-word requirement (${wordCount} words).`);
