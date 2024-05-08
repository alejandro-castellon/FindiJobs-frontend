export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Resume = {
  id: string;
  user_id: string;
  name: string;
  title: string;
};
