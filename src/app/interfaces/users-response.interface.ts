export interface UsersResponse {
  users: UserItem[];
}

export interface UserItem {
  id: number;
  imageurl: string;
  fullname: string;
  position: string;
}
