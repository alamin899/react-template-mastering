import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
      
          <div className="menu-inner-shadow"></div>

          <ul className="menu-inner py-1">
         
            <li className="menu-item active">
              <Link to="dashboard" className="menu-link">
                <i className="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Dashboard</div>
              </Link>
            </li>

          
            <li className="menu-item">
              <Link to="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-layout"></i>
                <div>Layouts</div>
              </Link>
            </li>

            <li className="menu-header small text-uppercase">
              <span className="menu-header-text">Pages</span>
            </li>
            <li className="menu-item">
              <Link to="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-dock-top"></i>
                <div data-i18n="Account Settings">Account Settings</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
                <div data-i18n="Authentications">Authentications</div>
              </Link>
            </li>

            <li className="menu-item">
              <Link to="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-cube-alt"></i>
                <div data-i18n="Misc">Misc</div>
              </Link>
            </li>
            
            <li className="menu-header small text-uppercase"><span className="menu-header-text">Components</span></li>
            
            <li className="menu-item">
              <Link to="/card" className="menu-link">
                <i className="menu-icon tf-icons bx bx-collection"></i>
                <div data-i18n="Basic">Cards</div>
              </Link>
            </li>
            
            <li className="menu-item">
              <Link to="javascript:void(0)" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-box"></i>
                <div data-i18n="User interface">User interface</div>
              </Link>
            </li>

            
            <li className="menu-item">
              <Link to="javascript:void(0)" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-copy"></i>
                <div data-i18n="Extended UI">Extended UI</div>
              </Link>
            </li>

            <li className="menu-item">
              <Link to="icons-boxicons.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-crown"></i>
                <div data-i18n="Boxicons">Boxicons</div>
              </Link>
            </li>

           
            <li className="menu-header small text-uppercase"><span className="menu-header-text">Forms &amp; Tables</span></li>
            
            <li className="menu-item">
              <Link to="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-detail"></i>
                <div data-i18n="Form Elements">Form Elements</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="" className="menu-link menu-toggle">
                <i className="menu-icon tf-icons bx bx-detail"></i>
                <div data-i18n="Form Layouts">Form Layouts</div>
              </Link>
            </li>
            
            <li className="menu-item">
              <Link to="tables-basic.html" className="menu-link">
                <i className="menu-icon tf-icons bx bx-table"></i>
                <div data-i18n="Tables">Tables</div>
              </Link>
            </li>
           
            <li className="menu-header small text-uppercase"><span className="menu-header-text">Misc</span></li>
            <li className="menu-item">
              <Link
                to="https://github.com/themeselection/sneat-html-admin-template-free/issues"
                target="_blank"
                className="menu-link"
              >
                <i className="menu-icon tf-icons bx bx-support"></i>
                <div data-i18n="Support">Support</div>
              </Link>
            </li>
            <li className="menu-item">
              <Link
                to="https://themeselection.com/demo/sneat-bootstrap-html-admin-template/documentation/"
                target="_blank"
                className="menu-link"
              >
                <i className="menu-icon tf-icons bx bx-file"></i>
                <div data-i18n="Documentation">Documentation</div>
              </Link>
            </li>
          </ul>
        </aside>
  )
}

export default Sidebar