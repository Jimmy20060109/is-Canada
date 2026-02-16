# IS Canada - WordPress + Next.js 开发指南

这是一个使用 **Headless WordPress** 架构的网站项目，WordPress 作为 CMS 后端，Next.js 作为前端展示层。

## 🚀 快速开始

### 1. 配置 WordPress 后端

1. 进入 WordPress 管理后台：`http://iscanada-local.local/wp-admin`
2. 安装并激活 **WPGraphQL** 插件：
   - 进入：插件 → 安装插件
   - 搜索：WPGraphQL
   - 点击安装并激活

3. GraphQL API 将自动启用在：
   ```
   http://iscanada-local.local/graphql
   ```

### 2. 安装依赖

```bash
cd "c:\Users\Lenovo\Local Sites\iscanada-local"
npm install
```

### 3. 运行开发服务器

```bash
npm run dev
```

访问：`http://localhost:3000`

说明：前端源码统一在仓库根目录；`app/public/wp-content/themes/is-canada` 仅保留为 Headless 占位主题，不再放置 Next.js 源码。

## 📁 项目结构

```
is-canada/
├── app/                      # Next.js App Router
│   ├── page.tsx             # 首页（文章列表）
│   ├── posts/
│   │   └── [slug]/
│   │       └── page.tsx     # 文章详情页
│   ├── layout.tsx           # 根布局
│   └── globals.css          # 全局样式
│
├── lib/                      # 工具库
│   ├── graphql-client.ts    # GraphQL 客户端配置
│   ├── queries.ts           # GraphQL 查询语句
│   └── types.ts             # TypeScript 类型定义
│
├── .env.local               # 环境变量（不提交到 Git）
└── package.json             # 项目配置
```

## 🔧 开发工作流

### 在 WordPress 中创建内容

1. 登录 WordPress 后台
2. 创建文章（文章 → 新建文章）
3. 添加标题、内容、特色图片
4. 发布文章

### 在 Next.js 中显示内容

内容会自动通过 GraphQL API 获取并显示在前端。

### 添加新页面

1. 在 WordPress 中创建页面
2. 在 Next.js 中创建对应的路由：

```tsx
// app/about/page.tsx
import graphQLClient from "@/lib/graphql-client";
import { GET_PAGE_BY_SLUG } from "@/lib/queries";
import type { PageResponse } from "@/lib/types";

export default async function AboutPage() {
  const data = await graphQLClient.request<PageResponse>(
    GET_PAGE_BY_SLUG,
    { slug: "about" }
  );
  
  return (
    <div>
      <h1>{data.page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.page.content }} />
    </div>
  );
}
```

## 📝 常用 GraphQL 查询

### 获取所有文章
```typescript
import { GET_ALL_POSTS } from "@/lib/queries";
const data = await graphQLClient.request<PostsResponse>(GET_ALL_POSTS);
```

### 获取单个文章
```typescript
import { GET_POST_BY_SLUG } from "@/lib/queries";
const data = await graphQLClient.request<PostResponse>(
  GET_POST_BY_SLUG,
  { slug: "my-post-slug" }
);
```

### 获取站点设置
```typescript
import { GET_SITE_SETTINGS } from "@/lib/queries";
const data = await graphQLClient.request<SiteSettingsResponse>(GET_SITE_SETTINGS);
```

## 🎨 定制样式

项目使用 **Tailwind CSS**，可以直接在 JSX 中使用 utility classes：

```tsx
<div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-6">
  <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
    标题
  </h1>
</div>
```

## 🔍 测试 GraphQL API

访问 GraphQL 调试界面（需要安装 WPGraphQL 插件）：
```
http://iscanada-local.local/graphql?debug=1
```

或使用 GraphiQL IDE（推荐安装 WPGraphiQL 插件）。

## 📦 构建生产版本

```bash
npm run build
npm run start
```

## ⚠️ 常见问题

### 无法获取数据？

1. 检查 WordPress 是否正在运行
2. 确认 WPGraphQL 插件已激活
3. 检查 `.env.local` 中的 API 地址是否正确
4. 查看浏览器控制台的错误信息

### 图片无法显示？

在 `next.config.ts` 中添加图片域名：

```typescript
const nextConfig: NextConfig = {
  images: {
    domains: ['iscanada-local.local'],
  },
};
```

## 📚 学习资源

- [Next.js 文档](https://nextjs.org/docs)
- [WPGraphQL 文档](https://www.wpgraphql.com/docs/introduction)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [TypeScript 文档](https://www.typescriptlang.org/docs)

## 🤝 开发建议

1. **组件化**：将重复的 UI 提取为可复用组件
2. **类型安全**：充分利用 TypeScript 的类型检查
3. **性能优化**：使用 Next.js 的图片优化和静态生成
4. **SEO 优化**：在 `layout.tsx` 中配置 metadata
5. **错误处理**：添加 loading 和 error 状态处理

---

**开发者：** IS Canada Team  
**技术栈：** WordPress + WPGraphQL + Next.js + React + TypeScript + Tailwind CSS
