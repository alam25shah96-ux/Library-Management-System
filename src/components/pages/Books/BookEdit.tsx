import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import api from '../../../config';
import { useEffect, useState } from 'react';
import type { Author } from "../../../interfaces/author.interface";
import type { Cate } from "../../../interfaces/category.interface";
import bookDefault from '../../../interfaces/book.interface';

function EditBook() {
    const params = useParams();
     const [author, setAuthor] = useState<Author[]>([]);
    const [category, setCategory] = useState<Cate[]>([]);

    const [book, setBook] = useState(bookDefault);
    useEffect(() => {
        getBooks();
         getAuthors();
         getCategory();
    },[])
     const getAuthors = () => {
        api.get("author")
        .then((res) => {
            // console.log(res.data);
            setAuthor(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    }

     const getCategory = () => {
        api.get("category")
        .then((res) => {
            // console.log(res.data);
           setCategory(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    }
    const getBooks = ()=>{
        api.get(`book?book_id=${params.book_id}`)
        .then((res)=>{
            console.log(res.data);
            setBook(res.data);
        })
        .catch((err)=>{
            console.error(err);
        })
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(book);
        api.put(`edit-role`, book)
        .then((res)=>{
            console.log(res.data);
            alert("Data updated successfully");
        })
        .catch((err)=>{
            console.error(err);
        })
    }
  return (
    <>
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4"><Link to="/books/manage" className="text-muted fw-light">Books /</Link> Edit</h4>
      <div className="card mt-3">
        <h5 className="card-header">Edit Role</h5>
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                <input type="hidden" value={params.book_id} />
                <div className="mb-3">
                    <label className="form-label">Cover Photo</label>
                    <input type="file" name="cover_photo" className="form-control" onChange={(e)=>setBook({...book, cover_photo: e.target.value})} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" name="title" className="form-control" value={book.title} onChange={(e)=>setBook({...book, title: e.target.value})} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <select name="author" className="form-select" value={book.author} onChange={(e)=>setBook({...book, author: e.target.value})}>
                        <option value="0" disabled>Select one...</option>
                        {
                            author.map((authr)=>
                                <option value={authr.id} key={authr.id}>{authr.name}</option>
                            )   
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Category</label>
                     <select name="category" className="form-select" value={book.category} onChange={(e)=>setBook({...book, category: e.target.value})}>
                        <option value="0" disabled>Select one...</option>
                        {
                            category.map((categ)=>
                                <option value={categ.id} key={categ.id}>{categ.name}</option>
                            )   
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Isbn</label>
                    <input type="text" name="isbn" className="form-control" value={book.isbn} onChange={(e)=>setBook({...book, isbn: e.target.value})} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Available</label>
                    <input type="text" name="available" className="form-control" value={book.available} onChange={(e)=>setBook({...book, available: parseInt(e.target.value)})} />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default EditBook