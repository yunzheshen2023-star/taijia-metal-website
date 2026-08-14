# 泰嘉金属官网｜彩色客户 Logo 更新版

这是已确认的“原网站 + 彩色合作公司 Logo”版本。除新增客户展示板块外，没有采用后续的多页改版或专业优化方案。

## 本次新增内容

- 河南明泰铝业
- 上海思源电气
- 上海通用（上汽通用）
- 上海大众（上汽大众）
- 上海三菱电梯
- 西南铝业

Logo 采用彩色展示，并保留中英文切换及电脑、平板、手机响应式布局。

## 上传到 GitHub

1. 解压 ZIP。
2. 打开解压后的文件夹，确认最外层可以直接看到 `index.html`。
3. 在 GitHub 仓库点击 **Add file → Upload files**。
4. 上传解压目录中的全部文件和文件夹，不要只上传 `index.html`。
5. 提交后确认仓库根目录仍可直接看到 `index.html`、`styles.css`、`assets/` 和 `partners/`。

如果是更新现有仓库，上传全部内容并让同名文件替换旧版本即可。建议先在 GitHub 创建一个备份分支。

## Netlify 从 GitHub 发布

选择该 GitHub 仓库后使用以下设置：

```text
Base directory: 留空
Build command: 留空
Publish directory: .
```

这是纯静态网站，不需要运行 npm、pnpm 或其他构建命令。GitHub `main` 分支更新后，Netlify 会自动重新发布。

## 重要说明

- `index.html` 必须位于仓库根目录。
- `customer-logos.css` 和整个 `partners/` 文件夹都必须上传，否则客户 Logo 板块无法完整显示。
- GitHub Pages 可以展示网页，但原询价表单依赖 Netlify Forms；需要通过 Netlify 发布才能继续使用该表单功能。
- 客户名称和商标归各自权利人所有，仅用于说明既往服务关系。

