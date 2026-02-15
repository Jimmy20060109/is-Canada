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
<<<<<<< HEAD

export interface HomePageAcfFields {
  heroTitle?: string | null;
  heroSubtitle?: string | null;
  ctaButtonText?: string | null;
}

export interface HomePageNode {
  id: string;
  title: string;
  uri: string;
}

export interface HomePageWithAcfNode extends HomePageNode {
  homePageTest?: HomePageAcfFields | null;
}

export interface HomePageWithAcfResponse {
  pageBy: HomePageWithAcfNode | null;
}

export interface HomePageFallbackResponse {
  pageBy: HomePageNode | null;
}
=======
>>>>>>> ed0cd2101aeaa540f501bb7a6a53dc0c2bc0ea35
