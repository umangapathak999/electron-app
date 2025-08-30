#!/usr/bin/env node

import { fileURLToPath } from "url";
import { dirname, resolve, join } from "path";
import fs from "fs-extra";

// Get current file and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.error("❌ Please provide a project name: create-electron-app <project-name>");
    process.exit(1);
  }

  const projectName = args[0];
  const targetDir = resolve(process.cwd(), projectName);
  const templateDir = join(__dirname, "template");

  try {
    // Check template folder
    if (!fs.existsSync(templateDir)) {
      console.error("❌ Template directory not found:", templateDir);
      process.exit(1);
    }

    // Check if target directory exists
    if (fs.existsSync(targetDir)) {
      console.error(`❌ Directory '${projectName}' already exists. Choose another name.`);
      process.exit(1);
    }

    console.log("Project Directory:", targetDir);

    // Copy template → target
    await fs.copy(templateDir, targetDir);

    console.log(`✅ Project '${projectName}' created successfully!\n`);
    console.log("Next steps:");
    console.log(`  cd ${projectName}`);
    console.log("  npm install");
    console.log("  npm run dev\n");
  } catch (err) {
    console.error("❌ Error creating project:", err.message);
    process.exit(1);
  }
}

main();

