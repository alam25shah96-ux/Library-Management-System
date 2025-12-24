import { Link } from "react-router-dom";
import api from "../../../config";
import { useEffect,useState } from "react";
import type { Author } from "../../../interfaces/author.interface";
import type { Cate } from "../../../interfaces/category.interface";
import type { Book } from "../../../interfaces/book.interface";
import bookDefault from "../../../interfaces/book.interface";

function CreateBooks() {
    const [author, setAuthor] = useState<Author[]>([]);
    const [category, setCategory] = useState<Cate[]>([]);
    const [book, setBooks] = useState<Book>(bookDefault);
    useEffect(() => {
        document.title = "Create User";
        getAuthors();
        getCategory();
    },[]);
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
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        // console.log(user);
        const formdata = new FormData();
       
        if(book.file) formdata.append("cover_photo", book.file);
          formdata.append("title", book.title);
          formdata.append("author_id", book.author);
          formdata.append("category_id", book.category);
          formdata.append("isbn", book.isbn);
          formdata.append("available", book.available.toString());
        
        // console.log(formdata);  

        // for (const [key, value] of formdata.entries()) {
        //     console.log(key, value);
        // }
        api.post("create-book", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then((res) => {
            console.log(res.data);
             alert("Data created successfully");
        })
        .catch((err) => {
            console.log(err);
        })
    }
  return (
    <>
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4"><Link to="/books/manage" className="text-muted fw-light">Books /</Link> Create</h4>
      <div className="card mt-3">
        <h5 className="card-header">Create User</h5>
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                 <div className="mb-3">
                    <label className="form-label">Cover Photo</label>
                    <input type="file" name="cover_photo" className="form-control" 
                    onChange={(e)=>{
                        if(e.target.files !== null) setBooks({...book, file: e.target.files[0]});
                    }} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" name="name" className="form-control" value={book.title} onChange={(e)=>setBooks({...book, title: e.target.value})} />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <select name="author" className="form-select" value={book.author} onChange={(e)=>setBooks({...book, author: e.target.value})}>
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
                    <select name="category" className="form-select" value={book.category} onChange={(e)=>setBooks({...book, category: e.target.value})}>
                        <option value="0" disabled>Select one...</option>
                        {
                            category.map((categ)=>
                                <option value={categ.id} key={categ.id}>{categ.name}</option>
                            )   
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">ISBN</label>
                    <textarea name="address" className="form-control"  value={book.isbn} onChange={(e)=>setBooks({...book, isbn: e.target.value})}></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Avaialble</label>
                    <textarea name="address" className="form-control"  value={book.available} onChange={(e)=>setBooks({...book, available: parseInt(e.target.value)})}></textarea>
                </div>
               
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default CreateBooks;