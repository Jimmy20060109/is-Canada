// WordPress 数据类型定义

export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  excerpt?: string;
  content: string;
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  author: {
    node: {
      name: string;
      avatar?: {
        url: string;
      };
    };
  };
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
}

export interface SiteSettings {
  title: string;
  description: string;
  url: string;
}

export interface PostsResponse {
  posts: {
    nodes: Post[];
  };
}

export interface PostResponse {
  post: Post;
}

export interface PagesResponse {
  pages: {
    nodes: Page[];
  };
}

export interface PageResponse {
  page: Page;
}

export interface SiteSettingsResponse {
  generalSettings: SiteSettings;
}
