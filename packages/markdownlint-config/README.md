# `@fe-spec/markdownlint-config`

本包提供了配套的 [markdownlint 可共享配置](https://www.npmjs.com/package/markdownlint#optionsconfig)。

## 安装

除了本包，你需要同时安装 [markdownlint](https://www.npmjs.com/package/markdownlint)：

```bash
npm install @fe-spec/markdownlint-config markdownlint --save-dev
```

## 使用

在 `.markdownlint.json` 中继承本包:

```json
{
  "extends": "@fe-spec/markdownlint-config"
}
```