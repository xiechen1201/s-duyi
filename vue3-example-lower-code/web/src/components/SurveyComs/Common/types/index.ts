/**
 * @description: 图片上传的响应类型
 */
export type ResponseType = {
  message: string;
  imageUrl: string;
};

/**
 * @description: 注入获取链接函数类型
 */
export type InjectGetLink = (data: { index: number; link: string }) => void;
