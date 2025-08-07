const fs = require('fs');
const path = require('path');

console.log('Stark AI Editor - Icon Replacement Script');
console.log('==========================================');

// Create backup of original icons
const backupDir = path.join(__dirname, 'icon-backup');
if (!fs.existsSync(backupDir)) {
	fs.mkdirSync(backupDir);
	console.log('Created backup directory:', backupDir);
}

// Windows icons
const win32Dir = path.join(__dirname, 'resources', 'win32');
const win32BackupDir = path.join(backupDir, 'win32');
if (!fs.existsSync(win32BackupDir)) {
	fs.mkdirSync(win32BackupDir, { recursive: true });
}

// Backup original code.ico
const originalCodeIco = path.join(win32Dir, 'code.ico');
const backupCodeIco = path.join(win32BackupDir, 'code.ico');
if (fs.existsSync(originalCodeIco)) {
	fs.copyFileSync(originalCodeIco, backupCodeIco);
	console.log('Backed up original code.ico');
}

// Linux icons
const linuxDir = path.join(__dirname, 'resources', 'linux');
const linuxBackupDir = path.join(backupDir, 'linux');
if (!fs.existsSync(linuxBackupDir)) {
	fs.mkdirSync(linuxBackupDir, { recursive: true });
}

// Backup original code.png
const originalCodePng = path.join(linuxDir, 'code.png');
const backupCodePng = path.join(linuxBackupDir, 'code.png');
if (fs.existsSync(originalCodePng)) {
	fs.copyFileSync(originalCodePng, backupCodePng);
	console.log('Backed up original code.png');
}

// macOS icons
const darwinDir = path.join(__dirname, 'resources', 'darwin');
const darwinBackupDir = path.join(backupDir, 'darwin');
if (!fs.existsSync(darwinBackupDir)) {
	fs.mkdirSync(darwinBackupDir, { recursive: true });
}

// Backup original code.icns
const originalCodeIcns = path.join(darwinDir, 'code.icns');
const backupCodeIcns = path.join(darwinBackupDir, 'code.icns');
if (fs.existsSync(originalCodeIcns)) {
	fs.copyFileSync(originalCodeIcns, backupCodeIcns);
	console.log('Backed up original code.icns');
}

console.log('\nIcon backup completed!');
console.log('\nNext steps:');
console.log('1. Convert custom-icon.svg to the required formats:');
console.log('   - Windows: .ico format (256x256, 48x48, 32x32, 16x16)');
console.log('   - Linux: .png format (512x512, 256x256, 128x128, 64x64, 32x32)');
console.log('   - macOS: .icns format (1024x1024, 512x512, 256x256, 128x128, 64x64, 32x32, 16x16)');
console.log('\n2. Replace the following files:');
console.log(`   - ${path.join(win32Dir, 'code.ico')}`);
console.log(`   - ${path.join(linuxDir, 'code.png')}`);
console.log(`   - ${path.join(darwinDir, 'code.icns')}`);
console.log('\n3. Run this script again to apply the new icons');
console.log('\nTools you can use for conversion:');
console.log('- Online converters: convertio.co, cloudconvert.com');
console.log('- Command line: ImageMagick, Inkscape');
console.log('- macOS: Icon Composer (part of Xcode)');
