// RoleInterface.tsx

export interface Role {
  id: number;
  role_name: string;
  description: string;
  created_at: string; // ISO timestamp format
}

export const roleDefault: Role = {
  id: 0,
  role_name: "",
  description: "",
  created_at: new Date().toISOString(),
};
export default roleDefault;