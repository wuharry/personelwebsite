# Harvey Wu — Personal Website

以 React、TypeScript、Vite 與 Tailwind CSS 建置的個人網站，包含工作經歷、技能、作品、GitHub 近期活動與聯絡表單。

正式站：[wuharry.github.io/personelwebsite](https://wuharry.github.io/personelwebsite/)

## 開發環境

- Node.js 22.12 或更新版本
- Bun 1.4.0

```bash
bun install --frozen-lockfile
bun run dev
```

開發伺服器預設位於 `http://127.0.0.1:9487/personelwebsite/`。

## 常用指令

| 指令                 | 用途                         |
| -------------------- | ---------------------------- |
| `bun run dev`        | 啟動 Vite 開發伺服器         |
| `bun run check`      | 執行 lint、TypeScript 與測試 |
| `bun run lint:fix`   | 自動修正可修復的 lint 問題   |
| `bun run test:watch` | 以 watch 模式執行 Vitest     |
| `bun run build`      | 建立 production bundle       |
| `bun run preview`    | 預覽 production build        |

## 專案結構

```text
src/
├── components/   共用元件與 UI primitives
├── i18n/         中英文翻譯
├── sections/     首頁各內容區塊
├── static/       固定資料與 SVG
└── assets/       經壓縮的網站圖片
```

作品、GitHub 圖表與聯絡表單採接近 viewport 才載入的方式，避免它們進入首屏下載路徑。GitHub 活動使用公開 API；請勿把私人 token 放進 `VITE_*` 環境變數，因為這類值會被打包到瀏覽器端。

## 部署

推送至 `main` 後，GitHub Actions 會使用固定版本的 Bun 安裝套件、執行品質檢查、建置，並部署 `dist/` 至 GitHub Pages。`dist/` 是可重建產物，不提交至版本庫。
