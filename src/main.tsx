import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/custom.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout.tsx'
import Dashboard from './components/pages/Dashboard.tsx'
import Users from './components/pages/Users/Users.tsx'
import UserCreate from './components/pages/Users/UserCreate.tsx'
import UserDetail from './components/pages/Users/UserDetail.tsx'
import UserEdit from './components/pages/Users/UserEdit.tsx'
import Roles from './components/pages/Roles/Roles.tsx'
import RolesCreate from './components/pages/Roles/RolesCreate.tsx'
import RolesDetails from './components/pages/Roles/RolesDetails.tsx'
import RolesEdit from './components/pages/Roles/RolesEdit.tsx'
import AuthorsManage from './components/pages/Authors/AuthorsManage.tsx'
import AuthorCreate from './components/pages/Authors/AuthorCreate.tsx'
import AuthorEdit from './components/pages/Authors/AuthorEdit.tsx'
import AuthorDetail from './components/pages/Authors/AuthorDetail.tsx'
import BookManage from './components/pages/Books/BookManage.tsx'
import BookCreate from './components/pages/Books/BookCreate.tsx'
import BookEdit from './components/pages/Books/BookEdit.tsx'
import BookDetail from './components/pages/Books/BookDetail.tsx'
import MemberManage from './components/pages/Members/MemberManage.tsx'
import MemberCreate from './components/pages/Members/MemberCreate.tsx'
import MemberEdit from './components/pages/Members/MemberEdit.tsx'
import MemberDetail from './components/pages/Members/MemberDetail.tsx'
import CategoryManage from './components/pages/Categories/categoryManage.tsx'
import CategoryCreate from './components/pages/Categories/CategoryCreate.tsx'
import CategoryEdit from './components/pages/Categories/CategoryEdit.tsx'
import CategoryDetail from './components/pages/Categories/CategoryDetail.tsx'
import IsseuBookManage from './components/pages/IssuedBooks/IsseuBookManage.tsx'
import IsseuBookCreate from './components/pages/IssuedBooks/IsseuBookCreate.tsx'
import IsseuBookEdit from './components/pages/IssuedBooks/IsseuBookEdit.tsx'
import IsseuBookDetail from './components/pages/IssuedBooks/IsseuBookDetail.tsx'
import FinesManage from './components/pages/FinesTable/FinesManage.tsx'
import FinesCreate from './components/pages/FinesTable/FinesCreate.tsx'
import FinesEdit from './components/pages/FinesTable/FinesEdit.tsx'
import FinesDetail from './components/pages/FinesTable/FinesDetail.tsx'

const links = createBrowserRouter([
  {path: '/', element: <Layout />,
    children: [
      {index: true, element: <Dashboard />},
      {path: '/dashboard', element: <Dashboard />},
      {path: '/user', element: <Users/>},
      {path: '/usercreate', element: <UserCreate/>},
      {path: '/userdetail', element: <UserDetail/>},
      {path: '/userEdit', element: <UserEdit/>},
      {path: '/roles', element: <Roles/>},
      {path: '/RolesCreate', element: <RolesCreate/>},
      {path: '/RolesDetails', element: <RolesDetails/>},
      {path: '/RolesEdit', element: <RolesEdit/>},
      {path: '/AuthorsManage', element: <AuthorsManage/>},
      {path: '/AuthorCreate', element: <AuthorCreate/>},
      {path: '/AuthorEdit', element: <AuthorEdit/>},
      {path: '/AuthorDetail', element: <AuthorDetail/>},
      {path: '/BookManage', element: <BookManage/>},
      {path: '/BookCreate', element: <BookCreate/>},
      {path: '/BookEdit', element: <BookEdit/>},
      {path: '/BookDetail', element: <BookDetail/>},
      {path: '/MemberManage', element: <MemberManage/>},
      {path: '/MemberCreate', element: <MemberCreate/>},
      {path: '/MemberEdit', element: <MemberEdit/>},
      {path: '/MemberDetail', element: <MemberDetail/>},
      {path: '/CategoryManage', element: <CategoryManage/>},
      {path: '/CategoryCreate', element: <CategoryCreate/>},
      {path: '/CategoryEdit', element: <CategoryEdit/>},
      {path: '/CategoryDetail', element: <CategoryDetail/>},
      {path: '/IsseuBookManage', element: <IsseuBookManage/>},
      {path: '/IsseuBookCreate', element: <IsseuBookCreate/>},
      {path: '/IsseuBookEdit', element: <IsseuBookEdit/>},
      {path: '/IsseuBookDetail', element: <IsseuBookDetail/>},
      {path: '/FinesManage', element: <FinesManage/>},
      {path: '/FinesCreate', element: <FinesCreate/>},
      {path: '/FinesEdit', element: <FinesEdit/>},
      {path: '/FinesDetail', element: <FinesDetail/>},
     
    ]
  },
  {path: '/login', element: <h1>login</h1>},
  {path: '*', element: <h1 className='text-danger text-center my-5'>404 Page not found</h1>},
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={links} />
  </StrictMode>,
)
