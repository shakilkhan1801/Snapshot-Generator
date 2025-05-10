# Snapshot Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![npm version](https://img.shields.io/npm/v/snapshot-generator.svg)](https://www.npmjs.com/package/snapshot-generator)

This **Node.js-based Code Snapshot Generator** allows developers to create **automated snapshots** of multiple code files in a structured **Markdown format**. It supports **JavaScript, Python, Solidity, TypeScript, Rust, C++, HTML, CSS**, and many more languages by automatically detecting file extensions and applying the correct **syntax highlighting**.  

## 🔹 Features
✅ **Multi-language support** – Detects file types and applies proper Markdown formatting  
✅ **Automatic timestamp** – Captures the exact time of the snapshot for version tracking  
✅ **Easy documentation** – Saves snapshots in `snapshot2.md` for better project tracking  
✅ **Backup and reference** – Helps in keeping records of important code changes  

## 📦 Installation

```bash
# Install globally
npm install -g snapshot-generator

# Or install as a project dependency
npm install snapshot-generator
```

## 🚀 Usage

### As a CLI tool (if installed globally):
```bash
snapshot-generator
```

### As a module in your code:
```javascript
const { generateSnapshot } = require('snapshot-generator');

// Define files to snapshot
const files = ['app.js', 'bot.js', 'index.js'];

// Generate snapshot
generateSnapshot(files);
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📂 Perfect for developers
who want to document, track, and share their code snapshots efficiently.

## 📫 Questions?

Feel free to open an issue for any questions you might have.  