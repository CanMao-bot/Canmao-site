# 罐头喵 Canmao — 官网与文档 🐱

> 罐头喵（Canmao）的官方网页与中文文档站。

## 🌐 在线访问

**<https://canmao-bot.github.io/Canmao-site/>**

## 🛠 技术栈

- [Astro](https://astro.build) v7 — 静态站点框架
- 粉色主题，响应式，中文文档
- [GitHub Pages](https://pages.github.com) 自动部署（.github/workflows/deploy.yml）

## 📁 结构

```
src/
  pages/          # 页面 (index 官网落地页 + docs/ 文档)
    index.astro
    docs/guide/       # 快速开始 / 特性 / 架构 / 配置
    docs/capabilities # 记忆 / 心情 / 人设 / 媒体 / Web / opencode
    docs/ops/         # 命令 / 提供商 / 部署
  layouts/        # Layout (DocsLayout 含侧边栏)
  components/     # Header / Footer
  styles/         # global.css (粉色主题)
public/           # favicon
.github/workflows/ # 部署 Action
```

## 🚀 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 dist/
```

> 注意：站点部署在组织 Pages 的 `/Canmao-site/` 子路径下，`astro.config.mjs` 已配置 `base`。

## 📦 相关仓库

- [CanMao-bot/Canmao](https://github.com/CanMao-bot/Canmao) — 罐头喵 QQ 机器人本体
