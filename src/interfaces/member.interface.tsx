export interface Member {
  id: number;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  membership_date?: string;
  created_at: string;
  updated_at: string;
}

const memberDefault: Member = {
  id: 0,
  name: "",
  email: "",
  phone: "",
  address: "",
  membership_date: "",
  created_at: "",
  updated_at: "",
};

export default memberDefault;
