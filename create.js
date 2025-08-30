#!/usr/bin/env node
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// CLI argument: project name
const args = process.argv.slice(2);
if (!args[0]) {
  console.log("Usage: npx <repo> <project-name>");
  process.exit(1);
}
const projectName = args[0];
const targetDir = path.join(process.cwd(), projectName);

// Template folder inside the package
const templateDir = path.join(__dirname, "template");

// Check template exists
if (!fs.existsSync(templateDir)) {
  console.error("❌ Template folder not found in npm package!");
  process.exit(1);
}

// Check target doesn't exist
if (fs.existsSync(targetDir)) {
  console.error(`❌ Folder '${projectName}' already exists!`);
  process.exit(1);
}

// Copy template folder to new project
fs.copySync(templateDir, targetDir, {
  filter: (src) =>
    !src.includes("node_modules") &&
    !src.includes("dist") &&
    !src.includes("dist-electron") &&
    !src.includes(".git") &&
    !src.includes("create.js") // exclude itself
});

console.log(`✅ Project '${projectName}' created successfully!`);
console.log("\nNext steps:");
console.log(`cd ${projectName}`);
console.log("npm install");
console.log("npm run dev");

