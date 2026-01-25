# 🚀 GitHub Pages 部署 SOP

## 准备工作 ✅
- [x] 项目已推送到 GitHub: `https://github.com/axis676/visionary.git`
- [x] GitHub Actions 工作流文件已创建: `.github/workflows/deploy.yml`
- [x] Vite 配置已更新: `base: '/visionary/'`

---

## 📝 部署步骤

### 步骤 1: 提交并推送新文件到 GitHub

在项目根目录下执行以下命令：

```bash
# 进入项目根目录
cd c:\Users\ovov9\Desktop\visionary

# 添加新文件
git add .github/workflows/deploy.yml
git add visionary-demo/vite.config.js
git add DEPLOYMENT_SOP.md

# 提交更改
git commit -m "Fix GitHub Actions deployment workflow path"

# 推送到 GitHub
git push origin master
```

### 步骤 2: 在 GitHub 上启用 GitHub Pages

1. 打开浏览器，访问你的仓库：
   `https://github.com/axis676/visionary`

2. 点击仓库顶部的 **Settings**（设置）标签

3. 在左侧菜单中找到 **Pages** 选项

4. 在 "Build and deployment" 部分：
   - **Source** 选择: `GitHub Actions`
   - ⚠️ 如果看不到这个选项，选择 "Deploy from a branch" 然后再切换回 "GitHub Actions"

5. 点击 **Save**（保存）

### 步骤 3: 触发部署

部署会在以下情况自动触发：
- ✅ 每次推送代码到 `master` 分支
- ✅ 手动触发（在 Actions 页面）

**首次部署：**
1. 访问：`https://github.com/axis676/visionary/actions`
2. 你应该会看到一个名为 "Deploy to GitHub Pages" 的工作流正在运行
3. 等待 2-3 分钟，直到显示绿色的 ✓ 标记

**手动触发部署：**
1. 访问：`https://github.com/axis676/visionary/actions`
2. 点击左侧的 "Deploy to GitHub Pages"
3. 点击右侧的 "Run workflow" 按钮
4. 选择分支（通常是 master）
5. 点击绿色的 "Run workflow" 按钮

### 步骤 4: 访问你的网站

部署成功后，你的网站将发布在：

🌐 **https://axis676.github.io/visionary/**

---

## 🔧 常见问题解决

### 问题 1: 推送后没有自动部署
**解决方案：**
- 确认 GitHub Actions 已启用
- 检查 Settings > Actions > General > Workflow permissions 是否设置为 "Read and write permissions"

### 问题 2: 部署失败
**解决方案：**
- 检查 Actions 页面的错误日志
- 确认 `package.json` 中的依赖都正确安装
- 确认 `npm run build` 在本地能正常执行

### 问题 3: 页面加载但样式丢失
**解决方案：**
- 确认 `vite.config.js` 中的 `base: '/visionary/'` 设置正确
- 仓库名称必须与 base 路径一致

### 问题 4: 404 错误
**解决方案：**
- 确认 GitHub Pages 的 Source 设置为 "GitHub Actions"
- 等待几分钟，DNS 可能需要时间生效

---

## 📊 监控部署状态

### 查看部署历史
1. 访问：`https://github.com/axis676/visionary/actions`
2. 查看每次部署的状态、日志和时间

### 查看 Pages 设置
1. 访问：`https://github.com/axis676/visionary/settings/pages`
2. 查看当前部署的 URL 和状态

---

## 🔄 后续更新流程

每次修改代码后，只需要：

```bash
# 1. 提交更改
git add .
git commit -m "你的更新说明"

# 2. 推送到 GitHub
git push origin master

# 3. 等待自动部署（2-3分钟）
# 4. 访问 https://axis676.github.io/visionary/ 查看更新
```

---

## ✅ 部署成功标志

- GitHub Actions 显示绿色 ✓
- Pages 设置页面显示 "Your site is live at..."
- 可以通过 URL 访问你的网站
- 所有样式和功能正常工作

---

## 📂 项目结构说明

```
visionary/                          # Git 仓库根目录
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions 配置
├── visionary-demo/                 # 实际项目代码
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── ...
└── DEPLOYMENT_SOP.md               # 本文档
```

⚠️ **重要提示：** 
- `.github` 文件夹必须在仓库根目录
- 项目代码在 `visionary-demo` 子目录
- Actions 会自动进入 `visionary-demo` 目录执行构建

---

## 📞 需要帮助？

如果遇到任何问题：
1. 检查 GitHub Actions 的错误日志
2. 确认本地 `npm run build` 能正常执行
3. 检查 GitHub Pages 设置是否正确
