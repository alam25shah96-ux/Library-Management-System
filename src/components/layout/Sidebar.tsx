import { useState } from "react";
import {  NavLink } from "react-router-dom"

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <>
    <input type="checkbox" id="sidebarMenu" className="d-none" />
    <label htmlFor="sidebarMenu" className="bg-layer"></label>
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme ">
            <div className="app-brand demo  card">
              <a href="index.html" className="app-brand-link ">
                <span className="app-brand-logo demo">                  
                </span>
                <span className="app-brand-text demo menu-text fw-bolder ms-2 mt-3 text-black">aLibrary</span>
              </a>
              <label htmlFor="sidebarMenu" className="menu-link fs-1 text-danger ms-auto d-block d-xl-none">×</label>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1  card">
            
              <NavLink to="/" className="menu-item">
                <li className="menu-link">
                  <i className="menu-icon tf-icons bx bx-home-circle"></i>
                  <div data-i18n="Analytics" className="text-black fw-bold">Dashboard</div>
                </li>
              </NavLink>

              
              
              <NavLink to="/user/manage/" className={({isActive})=>isActive ? "menu-item active" : "menu-item"}>
                <li className="menu-link">
                  <i className="menu-icon tf-icons bx bx-box"></i>
                  <div className="text" data-i18n="Analytics">Users</div>
                </li>
              </NavLink>
              <NavLink to="/role/manage/" className={({isActive})=>isActive ? "menu-item active" : "menu-item"}>
                <li className="menu-link">
                  <i className="menu-icon tf-icons bx bx-box"></i>
                  <div className="text" data-i18n="Analytics">Roles</div>
                </li>
              </NavLink>
              <NavLink to="/books/manage" className={({isActive})=>isActive ? "menu-item active" : "menu-item"}>
                <li className="menu-link">
                  <i className="menu-icon tf-icons bx bx-box"></i>
                  <div className="text" data-i18n="Analytics">Books</div>
                </li>
              </NavLink>
              <NavLink to="/author/manage/" className={({isActive})=>isActive ? "menu-item active" : "menu-item"}>
                <li className="menu-link">
                  <i className="menu-icon tf-icons bx bx-box"></i>
                  <div className="text" data-i18n="Analytics">Authors</div>
                </li>
              </NavLink>
              <NavLink to="/member/manage/" className={({isActive})=>isActive ? "menu-item active" : "menu-item"}>
                <li className="menu-link">
                  <i className="menu-icon tf-icons bx bx-box"></i>
                  <div className="text" data-i18n="Analytics">Members</div>
                </li>
              </NavLink>
              <NavLink to="/loan/manage/" className={({isActive})=>isActive ? "menu-item active" : "menu-item"}>
                <li className="menu-link">
                  <i className="menu-icon tf-icons bx bx-box"></i>
                  <div className="text" data-i18n="Analytics">Issue books</div>
                </li>
              </NavLink>
              <NavLink to="/FinesManage" className={({isActive})=>isActive ? "menu-item active" : "menu-item"}>
                <li className="menu-link">
                  <i className="menu-icon tf-icons bx bx-box"></i>
                  <div className="text" data-i18n="Analytics">Fines</div>
                </li>
              </NavLink>
              <NavLink to="/category/Manage/" className={({isActive})=>isActive ? "menu-item active" : "menu-item"}>
                <li className="menu-link">
                  <i className="menu-icon tf-icons bx bx-box"></i>
                  <div className="text" data-i18n="Analytics">Categories</div>
                </li>
              </NavLink>

             
               <li className="menu-header small text-uppercase">
                <span className="menu-header-text">Layout</span>
              </li>
              <li className="menu-item">
                <span onClick={toggle} className="menu-link menu-toggle cursor-pointer">
                  <i className="menu-icon tf-icons bx bx-layout"></i>
                  <div data-i18n="Layouts">Layouts</div>
                </span>
                <ul className={`menu-sub ${isOpen ? 'open' : 'closed'}`}>
                  <li className="menu-item">
                    <a href="layouts-without-menu.html" className="menu-link">
                      <div data-i18n="Without menu">Without menu</div>
                    </a>
                  </li>
                </ul>
              </li>

            </ul>
    </aside>
    </>
  )
}

export default Sidebar