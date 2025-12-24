import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/custom.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout.tsx'
import Dashboard from './components/pages/Dashboard.tsx'
import Login from './components/pages/Login.tsx'
import {requireAuth, redirectIfAuthenticated} from './utils/auth.ts'
import ManageBooks from './components/pages/books/booksManage.tsx'
import CreateBooks from './components/pages/books/bookCreate.tsx'
import EditBook from './components/pages/books/bookEdit.tsx'
import DetailsBook from './components/pages/books/bookDetails.tsx'
import ManageAuthor from './components/pages/authors/manageAuthor.tsx'
import CreateAuthor from './components/pages/authors/authorCreate.tsx'
import DetailsAuthor from './components/pages/authors/authorDetails.tsx'
import EditAuthor from './components/pages/authors/authorEdit.tsx'
import Userss from './components/pages/users/userManage.tsx'
import UserCreate from './components/pages/users/userCreate.tsx'
import UserEdit from './components/pages/users/userEdit.tsx'
import UserDetails from './components/pages/users/userDetails.tsx'
import ManageRoles from './components/pages/Roles/rolesManage.tsx'
import CreateRole from './components/pages/Roles/roleCreate.tsx'
import EditRole from './components/pages/Roles/rolesEdit.tsx'
import RoleDetails from './components/pages/Roles/roleDetails.tsx'
import ManageLoans from './components/pages/loans/loansManage.tsx'
import LoanCreate from './components/pages/loans/loansCreate.tsx'
import Memberss from './components/pages/members/memberManage.tsx'
import MemberCreate from './components/pages/members/memberCreate.tsx'
import ManageCategories from './components/pages/Categories/CategoryManage.tsx'



const links = createBrowserRouter([
  {path: '/', element: <Layout />, loader: requireAuth,
    children: [
      {index: true, element: <Dashboard />},
      {path: '/dashboard', element: <Dashboard />},
      {path: '/books/manage', element: <ManageBooks />},
      {path: '/books/manage', element: <ManageBooks />}, 
      {path: '/create/book', element: <CreateBooks />},
      {path: '/book/edit/:book_id', element: <EditBook />},
      {path: '/book/details/:book_id', element: <DetailsBook />},
      {path: '/author/manage/', element: <ManageAuthor />},
      {path: '/authors/create/', element: <CreateAuthor />},
      {path: '/authors/details/:id', element: <DetailsAuthor />},
      {path: '/authors/edit/:id', element: <EditAuthor />},
      {path: '/user/manage/', element: <Userss/>},
      {path: '/user/create/', element: <UserCreate/>},
      {path: '/user/edit/:id', element: <UserEdit/>},
      {path: '/user/details/:id', element: <UserDetails/>},
      {path: '/role/manage/', element: <ManageRoles/>},
      {path: '/role/create/', element: <CreateRole/>},
      {path: '/role/edit/:id', element: <EditRole/>},
      {path: '/role/details/:id', element: <RoleDetails/>},
      {path: '/loan/manage/', element: <ManageLoans/>},
      {path: '/create/loan/', element: <LoanCreate/>},
      {path: '/member/manage/', element: <Memberss/>},
      {path: '/member/create/', element: <MemberCreate/>},
      {path: '/category/manage/', element: <ManageCategories/>},

    
    ]
  },
  {path: '/login', element: <Login />, loader: redirectIfAuthenticated},
  {path: '*', element: <h1 className='text-danger text-center my-5'>404 Page not found</h1>},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={links} />
  </StrictMode>,
)
