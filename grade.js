const fs = require("fs");

const readmePath = "README.md";
if (!fs.existsSync(readmePath)) {
  console.error("❌ README.md not found.");
  console.log("[autograding-result] README.md existence: 0/1");
  process.exit(1);
}

const content = fs.readFileSync(readmePath, "utf-8");

let totalScore = 0;
let maxScore = 2; // Adjust this based on the number of tests

// ✅ Check word count (1 point)
const wordCount = content.split(/\s+/).length;
if (wordCount >= 50) {
  console.log(`✅ Word count: ${wordCount} (PASS)`);
  totalScore += 1;
  console.log("[autograding-result] Word Count Check: 1/1");
} else {
  console.error(`❌ README.md has only ${wordCount} words. Minimum required: 50.`);
  console.log("[autograding-result] Word Count Check: 0/1");
}

// ✅ Check for JavaScript concepts (1 point)
const regex = /\b(data types?|variables?|conditionals?)\b/gi; // ✅ Fixed Regex
const matches = content.match(regex);
if (matches) {
  console.log(`✅ JavaScript concepts detected: ${matches.join(", ")}`);
  totalScore += 1;
  console.log("[autograding-result] JavaScript Concepts Check: 1/1");
} else {
  console.error(
    "❌ README.md must mention at least one JavaScript concept: 'data types', 'data type', 'variables', or 'conditionals'."
  );
  console.log("[autograding-result] JavaScript Concepts Check: 0/1");
}

// ✅ Final Score Output for GitHub Classroom
console.log(`[autograding-result] Total Score: ${totalScore}/${maxScore}`);

process.exit(totalScore === maxScore ? 0 : 1);
