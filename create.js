#!/usr/bin/env node
import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

// Use __dirname of the create.js file itself
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
if (!args[0]) {
  console.log("Usage: npx <repo> <project-name>");
  process.exit(1);
}

const projectName = args[0];
const targetDir = path.join(process.cwd(), projectName);

// Template root is where create.js lives in the npm repo
const templateDir = path.join(__dirname); 

if (fs.existsSync(targetDir)) {
  console.log(`❌ Folder '${projectName}' already exists!`);
  process.exit(1);
}

fs.copySync(templateDir, targetDir, {
  filter: (src) =>
    !src.includes("node_modules") &&
    !src.includes("dist") &&
    !src.includes("dist-electron") &&
    !src.includes(".git") &&
    !src.includes("create.js") // avoid copying itself
});

console.log(`✅ Project '${projectName}' created successfully!`);
console.log("\nNext steps:");
console.log(`cd ${projectName}`);
console.log("npm install");
console.log("npm run dev");

