export interface Loan {
  id: number;
  book_id: number;
  member_id: number;
  issue_date: string;
  due_date: string ;
  return_date: string ;
  issued_by: string;
  created_at: string;
  updated_at: string;
}

export const loanDefault: Loan = {
  id: 0,
  book_id: 0,
  member_id: 0,
  issue_date: "",
  due_date: "",
  return_date: "",
  issued_by: "",
  created_at: "",
  updated_at: "",
};

export default loanDefault;
