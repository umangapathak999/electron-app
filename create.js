#!/usr/bin/env node
import fs from "fs-extra";
import path from "path";

const args = process.argv.slice(2);
if (!args[0]) {
  console.log("Usage: npx <repo> <project-name>");
  process.exit(1);
}

const projectName = args[0];
const targetDir = path.join(process.cwd(), projectName);
const templateDir = path.resolve(); // root of repo

if (fs.existsSync(targetDir)) {
  console.log(`❌ Folder '${projectName}' already exists!`);
  process.exit(1);
}

fs.copySync(templateDir, targetDir, {
  filter: (src) =>
    !src.includes("node_modules") &&
    !src.includes(".git") &&
    !src.includes("dist") &&
    !src.includes("dist-electron")
});

console.log(`✅ Project '${projectName}' created successfully!`);
console.log("\nNext steps:");
console.log(`cd ${projectName}`);
console.log("npm install");
console.log("npm run dev");

