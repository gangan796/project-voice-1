# Google Cloud App Engine 部署 Vue.js 项目完全指南

## Disclaimer

本指南由Gemini生成，任何地方都有可能有错误，步骤仅供参考。

----------------

本指南将一步步带你将一个本地的 Vue.js 项目（使用 Vite 构建）部署到 Google Cloud 的 App Engine 服务上。本教程专为初学者设计，无需任何 Google Cloud 使用经验。

**最终目标：** 生成一个公开的网址，任何人都可以通过它访问你的 Vue 应用。

---

## 第一部分：准备 Google Cloud 环境

在部署代码之前，我们需要先设置好云端的环境。

### 1.1. 创建 Google Cloud 账号与项目

1.  **注册账号**：访问 [Google Cloud 官网](https://cloud.google.com/)，使用你的 Google 账号登录并创建一个新的云账号。
2.  **启用结算**：Google Cloud 需要绑定一张信用卡或借记卡以验证身份并启用结算功能。
    > **注意**：App Engine 提供了非常慷慨的[每月免费额度](https://cloud.google.com/appengine/pricing#standard_environment_instances)，对于小型项目或学习目的，通常不会产生费用。但启用结算是必须的步骤。
3.  **创建项目**：
    *   进入 [Google Cloud Console](https://console.cloud.google.com/)。
    *   在页面顶部的项目选择器下拉菜单中，点击 “**新建项目**”。
    *   为你的项目起一个名字（例如 `my-vue-app-on-cloud`），然后点击 “**创建**”。

### 1.2. 安装并配置 Google Cloud SDK (gcloud CLI)

gcloud CLI 是你从本地终端管理 Google Cloud 资源的核心工具。

1.  **下载并安装**：根据你的操作系统，访问 [Google Cloud SDK 安装指南](https://cloud.google.com/sdk/docs/install) 并完成安装。

2.  **初始化 SDK**：安装完成后，打开你的终端（Terminal、PowerShell 或命令提示符），运行以下命令：
    ```bash
    gcloud init
    ```
    这个命令会引导你完成几个关键步骤：
    *   **登录**：它会打开一个浏览器窗口，让你登录你的 Google 账号。
    *   **选择项目**：在列表中选择你刚刚创建的项目（例如 `my-vue-app-on-cloud`）。
    *   **设置默认区域**：系统会提示你选择一个默认的计算区域。你可以选择一个离你或你的用户近的区域，例如 `asia-east1` (台湾) 或 `us-central1` (美国中部)。

完成这些步骤后，你的本地环境就和你的云端项目关联起来了。

---

## 第二部分：为项目配置 App Engine

现在，我们需要在你的 Vue 项目中添加几个文件，以告诉 App Engine 如何运行它。

### 2.1. 创建核心配置文件 `app.yaml`

`app.yaml` 是 App Engine 的部署描述文件。在你的项目根目录下（与 `package.json` 同级）创建一个名为 `app.yaml` 的文件，并填入以下内容：

```yaml
# 指定运行时环境为 Node.js 20
runtime: nodejs20

# 使用标准环境 (Standard Environment)
env: standard

# 路由处理器，告诉 App Engine 如何处理请求
handlers:
  # 对于指向静态资源（如 CSS, JS, 图片）的请求
  # Vite 构建后，这些资源通常在 dist/assets 目录下
  - url: /assets
    static_dir: dist/assets

  # 对于所有其他请求（例如 /, /about, /user/profile）
  # 将它们全部指向 index.html，这是单页面应用（SPA）的典型配置
  # 它确保了 Vue Router 能够接管前端路由
  - url: /.*
    static_files: dist/index.html
    upload: dist/index.html
```

### 2.2. 创建 `.gcloudignore` 文件

为了加快部署速度并减少不必要的上传，我们需要告诉 gcloud CLI 忽略哪些文件。在项目根目录创建一个名为 `.gcloudignore` 的文件，并填入以下内容：

```
# 忽略所有隐藏文件
.DS_Store
.env
.git
.gitignore

# 忽略 Node.js 依赖目录，云端会自动安装
node_modules/

# 忽略本地构建输出目录，云端会自动构建
dist/

# 忽略 IDE 和编辑器配置文件
.vscode/
*.sublime-workspace

# 忽略日志文件
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

### 2.3. 检查 `package.json`

App Engine 在部署时，会默认执行 `npm run build` 命令来构建你的应用。请确保你的 `package.json` 文件中 `scripts` 部分包含一个有效的 `build` 命令。对于本项目，它看起来是这样的：

```json
{
  "scripts": {
    "build": "vue-tsc && vite build",
    // ... 其他脚本
  }
}
```
这个配置是标准的，通常无需修改。

---

## 第三部分：部署到 App Engine

所有配置都已完成，现在可以执行部署了。

1.  **打开终端**：确保你的终端位于项目根目录下。
2.  **运行部署命令**：
    ```bash
    gcloud app deploy
    ```
3.  **确认部署**：
    *   CLI 会分析你的文件，并显示它将要部署的服务详情（包括项目 ID、服务名 `default`、版本号等）。
    *   它会询问你 “**Do you want to continue (Y/n)?**”。输入 `Y` 并按回车。

现在，gcloud CLI 会将你的代码（忽略 `.gcloudignore` 中指定的文件）上传到云端，然后 Google Cloud 的构建服务会：
1.  根据 `package.json` 中的 `dependencies` 安装生产依赖 (`npm install`)。
2.  执行 `npm run build` 来构建你的 Vue 应用。
3.  根据 `app.yaml` 的配置，启动服务。

这个过程可能需要几分钟时间。

---

## 第四部分：验证与访问

部署成功后，你就可以访问你的线上应用了。

### 4.1. 访问你的线上应用

*   部署命令的最后一行输出会包含你的应用 URL，格式通常是 `https://<你的项目ID>.uc.r.appspot.com`。
*   你也可以随时在终端运行以下命令，它会自动在浏览器中打开你的应用：
    ```bash
    gcloud app browse
    ```

### 4.2. 查看日志与故障排查

如果应用无法正常访问或出现 `500 Server Error`，最直接的排查方法是查看实时日志。在终端运行：

```bash
gcloud app logs tail -s default
```
这个命令会持续输出最新的应用日志，帮助你定位问题。

---

## 第五部分：后续步骤与最佳实践

恭喜你，你的应用已经成功上线！以下是一些有用的后续步骤。

### 5.1. 费用管理

虽然有免费额度，但养成监控费用的好习惯很重要。访问 Google Cloud Console 的 “**结算**” -> “**预算和提醒**” 页面，为你的项目设置一个预算提醒（例如，每月 5 美元），当费用接近时你会收到邮件通知。

### 5.2. 自定义域名（可选）

如果你想使用自己的域名（例如 `www.your-domain.com`）而不是 `appspot.com` 的地址，可以进入 Cloud Console -> App Engine -> 设置 -> 自定义域名，按照指引进行配置。

### 5.3. 清理资源

如果你只是为了学习，并希望在完成后关闭应用以确保不会产生任何费用，可以：
*   **禁用应用**：进入 App Engine 信息中心，点击 “**设置**”，然后点击 “**停用应用**”。
*   **删除项目**：如果你想彻底删除所有相关资源，可以进入 “**IAM 和管理**” -> “**管理资源**” 页面，选择并删除你的整个项目。

---
**指南结束**
