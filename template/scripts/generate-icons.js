#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import png2icons from 'png2icons';

const ICON_SRC = path.resolve('build-assets/icon.png');
const ICON_OUT = path.resolve('build-assets');

if (!fs.existsSync(ICON_SRC)) {
  console.error("❌ icon.png not found in build-assets!");
  process.exit(1);
}

// Generate Windows .ico
const icoBuffer = png2icons.createICO(fs.readFileSync(ICON_SRC), png2icons.BICUBIC, true);
if (icoBuffer) {
  fs.writeFileSync(path.join(ICON_OUT, 'icon.ico'), icoBuffer);
  console.log('✅ Windows icon.ico generated.');
}

// Generate macOS .icns
const icnsBuffer = png2icons.createICNS(fs.readFileSync(ICON_SRC), png2icons.BICUBIC);
if (icnsBuffer) {
  fs.writeFileSync(path.join(ICON_OUT, 'icon.icns'), icnsBuffer);
  console.log('✅ macOS icon.icns generated.');
}

