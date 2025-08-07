# Stark AI Editor

A customized version of VS Code branded as "Stark AI Editor" by Sunny Stark.

## What's Changed

### Branding Updates
- **Application Name**: Changed from "Code - OSS" to "Stark AI"
- **Long Name**: "Stark AI Code Editor"
- **Author**: Sunny Stark
- **Bundle Identifier**: `com.starkai.editor`
- **Data Folder**: `.stark-ai` (instead of `.vscode-oss`)
- **Mutex Names**: Updated to use `starkai` prefix
- **URL Protocol**: `stark-ai://`

### Configuration Files Modified
- `package.json` - Updated name, version, author, and distro
- `product.json` - Updated all branding information
- `resources/linux/code.desktop` - Updated desktop entry
- `resources/linux/code.appdata.xml` - Updated app metadata

### Custom Icon
- Created `custom-icon.svg` with Stark AI branding
- Features a gradient background with "STARK AI" text
- Ready for conversion to required formats

## Building Your Custom Editor

### Prerequisites
1. Node.js (version 18 or higher)
2. Python (for some build dependencies)
3. Git

### Setup Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Prepare Icons** (Important!)
   ```bash
   node replace-icons.js
   ```

   This will backup the original icons and provide instructions for converting your custom icon.

3. **Convert Custom Icon**
   You need to convert `custom-icon.svg` to the following formats:

   - **Windows**: `resources/win32/code.ico` (256x256, 48x48, 32x32, 16x16)
   - **Linux**: `resources/linux/code.png` (512x512, 256x256, 128x128, 64x64, 32x32)
   - **macOS**: `resources/darwin/code.icns` (1024x1024, 512x512, 256x256, 128x128, 64x64, 32x32, 16x16)

   **Icon Conversion Tools:**
   - Online: convertio.co, cloudconvert.com
   - Command line: ImageMagick, Inkscape
   - macOS: Icon Composer (part of Xcode)

4. **Build the Editor**
   ```bash
   # Compile the source code
   npm run compile

   # Build for your platform
   npm run gulp -- vscode-win32-x64  # Windows 64-bit
   npm run gulp -- vscode-linux-x64  # Linux 64-bit
   npm run gulp -- vscode-darwin-x64 # macOS 64-bit
   ```

5. **Run the Editor**
   ```bash
   # Development mode
   npm run electron

   # Or run the built executable from the output directory
   ```

## Customization Options

### Changing the Name
Edit `product.json` and update:
- `nameShort`: Short display name
- `nameLong`: Full application name
- `applicationName`: Internal application name

### Changing Colors
Modify `custom-icon.svg` to change the gradient colors:
- Current: Green to Blue gradient
- You can change the `stop-color` values in the `linearGradient`

### Adding Custom Features
The editor is built on VS Code's architecture, so you can:
- Add custom extensions
- Modify the UI themes
- Add custom commands
- Integrate with AI services

## File Structure

```
├── package.json              # Main package configuration
├── product.json              # Product branding and configuration
├── custom-icon.svg           # Custom Stark AI icon
├── replace-icons.js          # Icon replacement script
├── resources/
│   ├── win32/               # Windows icons and resources
│   ├── linux/               # Linux icons and desktop files
│   └── darwin/              # macOS icons
└── build/                   # Build configuration files
```

## Troubleshooting

### Build Issues
- Ensure all dependencies are installed: `npm install`
- Clear build cache: `npm run clean`
- Check Node.js version compatibility

### Icon Issues
- Verify icon formats are correct
- Ensure icon files are in the right locations
- Check file permissions

### Runtime Issues
- Check that data folder `.stark-ai` is writable
- Verify mutex names don't conflict with other applications

## License

This project is based on VS Code which is licensed under the MIT License. See the original LICENSE file for details.

## Contributing

This is a customized version for personal use. For contributions to the main VS Code project, visit: https://github.com/microsoft/vscode

---

**Created by Sunny Stark**
**Stark AI Editor v1.0.0**
