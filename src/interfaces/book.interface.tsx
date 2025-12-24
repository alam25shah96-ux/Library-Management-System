export interface Book {
  book_id: number;
  cover_photo: string;
  file?: File | null,
  title: string;
  author_id: string;
  author: string;
  category_id: string ;
  category: string;
  isbn: string ;
  available: number;
  created_at: string;
}

export const bookDefault: Book = {
  book_id: 0,
  cover_photo: "",
  file: null,
  title: "",
  author_id: "",
  author: "",
  category_id:"",
  category: "",
  isbn: "",
  available: 1,
  created_at: "",
};
export  default bookDefault;