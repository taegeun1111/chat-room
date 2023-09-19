export interface ResponseData {
  created_at: string;
  id: number;
  msg: {
    content: string;
    mtype: string;
  };
  photo_url: string;
  user_id: number;
  user_name: string;
}

export interface ChatData {
  user_id: number;
  create_at: Date;
  id: number;
  msg: string;
  photo_url?: string;
}
