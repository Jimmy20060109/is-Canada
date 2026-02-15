import { gql } from 'graphql-request';

// 获取所有文章
export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    posts(first: 100) {
      nodes {
        id
        title
        slug
        date
        excerpt
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
`;

// 根据 slug 获取单个文章
export const GET_POST_BY_SLUG = gql`
  query GetPostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      content
      date
      slug
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
    }
  }
`;

// 获取所有页面
export const GET_ALL_PAGES = gql`
  query GetAllPages {
    pages(first: 100) {
      nodes {
        id
        title
        slug
        content
      }
    }
  }
`;

// 根据 slug 获取单个页面
export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: ID!) {
    page(id: $slug, idType: URI) {
      id
      title
      content
      slug
    }
  }
`;

// 获取站点设置
export const GET_SITE_SETTINGS = gql`
  query GetSiteSettings {
    generalSettings {
      title
      description
      url
    }
  }
`;
<<<<<<< HEAD

// 读取首页（URI）的 ACF 字段组
// 注意：`homePageTest` 依赖 ACF 字段组 GraphQL Field Name。
export const GET_HOME_PAGE_WITH_ACF = gql`
  query GetHomePageWithAcf($uri: String!) {
    pageBy(uri: $uri) {
      id
      title
      uri
      homePageTest {
        heroTitle
        heroSubtitle
        ctaButtonText
      }
    }
  }
`;

// 当 ACF 字段未暴露到 GraphQL 时的回退查询
export const GET_HOME_PAGE_FALLBACK = gql`
  query GetHomePageFallback($uri: String!) {
    pageBy(uri: $uri) {
      id
      title
      uri
    }
  }
`;
=======
>>>>>>> ed0cd2101aeaa540f501bb7a6a53dc0c2bc0ea35
