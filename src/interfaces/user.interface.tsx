// UserInterface.tsx

export interface User {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  role_id: number;
  role: string;
  created_at: string; // ISO format string
}

export const userDefault: User = {
  id: 0,
  name: '',
  email: '',
  password_hash: '',
  role_id: 0,
  role: "",
  created_at: new Date().toISOString(), // default current timestamp
};
export default userDefault;
