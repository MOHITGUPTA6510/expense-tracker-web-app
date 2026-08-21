import "./Sidebar.css";
import hero from "../../assets/hero.png";
import { useState } from "react";

export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
  <nav className="topnav">
    <div className="topnav__inner">
      <div className="topnav__row">
        <div className="topnav__left">
          <button data-drawer-target="top-bar-sidebar" data-drawer-toggle="top-bar-sidebar" aria-controls="top-bar-sidebar" type="button" className="sidebar-toggle-btn">
            <span className="sr-only">Open sidebar</span>
            <svg className="icon icon--lg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/>
            </svg>
          </button>
          <a href="#" className="brand">
            <img src="https://flowbite.com/docs/images/logo.svg" className="brand__logo" alt="FlowBite Logo" />
            <span className="brand__name">Expense Tracker</span>
          </a>
        </div>
        <div className="topnav__right">
          <div className="user-menu">
            <button type="button" className="user-menu__avatar-btn" aria-expanded="false" data-dropdown-toggle="dropdown-user" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <span className="sr-only">Open user menu</span>
               <img className="user-menu__avatar" src={hero} alt="user photo" /> 
            </button>
              {isSidebarOpen && (
                <div className="user-menu__dropdown">
                    <div className="user-menu__header">
                      <p className="user-menu__name">
                        Mohit Gupta
                      </p>

                      <p className="user-menu__email">
                        mohit@example.com
                      </p>
                    </div>

                    <ul className="user-menu__list">
                      <li>
                        <a href="#" className="user-menu__link">
                          Dashboard
                        </a>
                      </li>

                      <li>
                        <a href="#" className="user-menu__link">
                          Settings
                        </a>
                      </li>

                      <li>
                        <a href="#" className="user-menu__link">
                          Profile
                        </a>
                      </li>

                      <li>
                        <a href="#" className="user-menu__link">
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
              )}
          </div>
        </div>
      </div>
    </div>
  </nav>

  <aside id="top-bar-sidebar" className="sidebar" aria-label="Sidebar">
    <div className="sidebar__inner">
      <a href="https://flowbite.com/" className="sidebar__brand">
        <img src="https://flowbite.com/docs/images/logo.svg" className="brand__logo" alt="Flowbite Logo" />
        <span className="sidebar__brand-name">Flowbite</span>
      </a>
      <ul className="sidebar__nav">
        <li>
          <a href="#" className="sidebar__link">
            <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"/></svg>
            <span className="sidebar__link-text">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#" className="sidebar__link">
            <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"/></svg>
            <span className="sidebar__link-text">Expenses</span>
          </a>
        </li>
        <li>
          <a href="#" className="sidebar__link">
            <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"/></svg>
            <span className="sidebar__link-text">Income</span>
          </a>
        </li>
        <li>
          <a href="#" className="sidebar__link">
            <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"/></svg>
            <span className="sidebar__link-text">Budgets</span>
          </a>
        </li>
        <li>
          <a href="#" className="sidebar__link">
            <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"/></svg>
            <span className="sidebar__link-text">Analytics</span>
          </a>
        </li>
        <li>
          <a href="#" className="sidebar__link">
            <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"/></svg>
            <span className="sidebar__link-text">Categories</span>
          </a>
        </li>
        <li>
          <a href="#" className="sidebar__link">
            <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"/></svg>
            <span className="sidebar__link-text">Settings</span>
          </a>
        </li>
        
      </ul>
      <div className="sidebar__bottom">
        <div className="sidebar__profile">
          <img
            src={hero}
            alt="Mohit Gupta"
            className="sidebar__profile-img"
          />

          <div className="sidebar__profile-info">
            <p className="sidebar__profile-name">Mohit Gupta</p>
          </div>
        </div>

        <a href="#" className="sidebar__bottom-link">
          Profile
        </a>

        <a href="#" className="sidebar__bottom-link">
          Logout
        </a>
      </div>
    </div>
  </aside>
  </>
  );

}