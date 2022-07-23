export class CommentModel {
  id?: number;
  content?: string;
  postId?: number;
  parentId?: number;
  avatarImgUrl?: string;
  name?: string;
  eMail?: string;
  os?: string;
  browser?: string;
  address?: string;
  status?: CommentStatus;
}

export enum CommentStatus {
  pending = "pending", // 审核中
  approved = "approved", // 通过
  denied = "denied", // 拒绝
}
