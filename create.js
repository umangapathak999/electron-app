#!/usr/bin/env node

import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
if (!args[0]) {
  console.log("Usage: npx <github-user>/<repo> <project-name>");
  process.exit(1);
}

const projectName = args[0];
const targetDir = path.join(process.cwd(), projectName);

console.log("Project Directory", targetDir);

// Resolve template folder inside package (works for npx GitHub tarball)
const templateDir = path.resolve(__dirname, "template");

if (!fs.existsSync(templateDir)) {
  console.error("❌ Template folder not found!");
  process.exit(1);
}

if (fs.existsSync(targetDir)) {
  console.error(`❌ Folder '${projectName}' already exists!`);
  process.exit(1);
}

// Copy template folder recursively
fs.copySync(templateDir, targetDir, {
  filter: (src) => !src.includes("node_modules") && !src.includes("dist")
});

console.log(`✅ Project '${projectName}' created successfully!`);
console.log("\nNext steps:");
console.log(`cd ${projectName}`);
console.log("npm install");
console.log("npm run dev");

