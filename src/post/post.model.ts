export class PostModel {
  id?: number;
  title?: string;
  description?: string;
  type?: PostType;
  status?: PostStatus;
  userId?: number;
  wordAmount?: string;
  readTime?: string;
  content?: string;
}

export enum PostType {
  technology = 'technology', // 技术
  life = 'life', // 生活感想
  story = 'story', // 故事
  other = 'other', // 其他
}

export enum PostStatus {
  published = 'published', // 已发布
  draft = 'draft', // 草稿
  archived = 'archived', // 
}