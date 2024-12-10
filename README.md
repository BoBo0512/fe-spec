# 前端编程规范手册

## 功能

## 规范

-编码规范
  - [JavaScript 编码规范](docs/coding/javascript.md)
  - [TypeScript 编码规范](docs/coding/typescript.md)
  - [React 编码规范](docs/coding/react.md)
  - [Node.js 开发规范](docs/coding/node.md)
  - [CSS 编码规范](docs/coding/css.md)
  - [HTML 编码规范](docs/coding/html.md)

-工程规范
  - [Git 相关规范](docs/engineering/git.md)
  - [文档通用规范](docs/engineering/doc.md)
  - [更新日志规范](docs/engineering/changelog.md)

## 工具

我们引入了多个业界流行的 Linter 作为规约文档的配套工具，并根据规约内容定制了对应的规则包，它们包括：

| 规约                | 工具           | 规则                      |
| ------------------- | -------------- | ------------------------- |
| JavaScript 编码规约 | [ESLint]       | [eslint-config]       |
| TypeScript 编码规约 | [ESLint]       | [eslint-config]       |
| React 编码规约      | [ESLint]       | [eslint-config]       |
| Node.js 开发规约    | [ESLint]       | [eslint-config]       |
| CSS 编码规约        | [stylelint]    | [stylelint-config]    |
| Git 规约            | [commitlint]   | [commitlint-config]   |
| 文档通用规约        | [markdownlint] | [markdownlint-config] |

[ESLint]: https://eslint.org/
[eslint-config-toolkit]: https://www.npmjs.com/package/eslint-config-toolkit
[stylelint]: https://stylelint.io/
[stylelint-config-toolkit]: https://www.npmjs.com/package/stylelint-config-toolkit
[commitlint]: https://commitlint.js.org/
[commitlint-config-toolkit]: https://www.npmjs.com/package/commitlint-config-toolkit
[markdownlint]: https://github.com/DavidAnson/markdownlint
[markdownlint-config-toolkit]: https://www.npmjs.com/package/markdownlint-config-toolkit