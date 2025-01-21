const fs = require("fs");
const path = require("path");
const readline = require("readline");

// 创建命令行交互工具
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 工具函数：创建目录
function createDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`目录已创建: ${dirPath}`);
  } else {
    console.log(`目录已存在: ${dirPath}`);
  }
}

// 工具函数：创建文件
function createFile(filePath, content = "") {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`文件已创建: ${filePath}`);
  } else {
    console.log(`文件已存在: ${filePath}`);
  }
}

// 主流程
rl.question("请输入目录名称: ", (dirName) => {
  if (!dirName) {
    console.log("目录名称不能为空！");
    rl.close();
    return;
  }

  rl.question("请输入 MD 文件的名称: ", (mdName) => {
    if (!mdName) {
      console.log("MD 文件名称不能为空！");
      rl.close();
      return;
    }

    // 定义目录和文件路径
    const baseDir = path.join(process.cwd(), dirName);
    const codeDir = path.join(baseDir, "code");
    const noteDir = path.join(baseDir, "note");
    const mdFilePath = path.join(noteDir, `${mdName}.md`);

    // 创建目录和文件
    createDirectory(baseDir);
    createDirectory(codeDir);
    createDirectory(noteDir);
    createFile(mdFilePath, `# ${mdName}`);

    console.log("所有操作完成！");
    rl.close();
  });
});