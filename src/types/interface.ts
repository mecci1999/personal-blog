/**
 * 此文件下都是各种数据的类型定义接口
 */
import { CommentStatus } from './enum';

export interface CommentDataType {
  id?: number; //ID
  avatarImgUrl?: string; // 头像地址
  name?: string; // 评论作者
  email?: string; // 邮箱地址
  cotent?: string; // 内容
  postId?: number; // 博客id
  parentId?: number | null; // 父级评论Id
  os?: string; // 操作系统类型
  browser?: string; //浏览器类型
  address?: string; // 所在省份
  status?: CommentStatus; // 评论状态
  created?: string; // 发表时间
  updated?: string; // 更新时间
}

/**
 * post博客内容接口
 */
export interface PostDataType {
  id?: number;
  bgImgUrl?: string; // 博客相关的封面地址
  title?: string; // 标题
  description?: string; // 描述
  wordAmount?: string; // 字数
  readTime?: string; // 时长
  created?: string; // 发表时间
  updated?: string; // 更新时间
  commentAmount?: number; // 评论数量
  accessAmount?: number; // 访问数量
  content?: string; // 内容
  tags?: TypesAndTagsDataType; // 标签
  types?: TypesAndTagsDataType; // 分类
}

/**
 * 时间线接口例如网站公告、更新日志、博客归档等数据
 */
export interface TimeLineDataType {
  id?: number;
  date?: string;
  content?: string | Array<string>;
}

export interface AdwardInfoDataType {
  id?: number;
  date?: string;
  name?: string;
  amount?: string;
}

/**
 * 分类、标签类型数据
 */
export interface TypesAndTagsDataType {
  id?: number; // id
  name?: string; // 名字
  amount?: number; //数量
}
