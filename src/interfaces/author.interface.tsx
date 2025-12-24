export interface Author {
  id: number,
  name: string
  date_of_birth: string,
  nationality:string,
  created_at: string; 
}

const authorDefault: Author = { 
  id: 0, 
  name: "" ,
  date_of_birth: "",
  nationality: "",
  created_at: "",
};

export default authorDefault;