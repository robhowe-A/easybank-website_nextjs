"use client";
import styles from '@/styles/Header.module.css'
import PageNav from './PageNav'
import { useState } from "react";

export default function Header() {
    const [display, setDisplay] = useState(false);
    return (
        <header className={styles.topNavigation + " " + 'md:hidden'}>
            <img src={"/images/logo.svg"} alt={"Easybank logo"} width="150px" height="auto"/>
            <div onClick={() => setDisplay((prevDisplay) => !prevDisplay)} id={styles.collapseMenuButton}>
            {
                display ? 
                <svg  id={styles.SVGone} xmlns="http://www.w3.org/2000/svg" width="35" height="35"><g fill="#2D314D" fillRule="evenodd"><path d="M.868.661l16.97 16.97-.706.708L.162 1.369z"/><path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z"/></g></svg>
                :
                <svg className="w-50 h-50 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
            }
            </div>
            <div className={`${styles.NavShadow} ${display ? styles.open : styles.closed}`}>
                <PageNav />
            </div>
            <button className={styles.invite}>Request Invite</button>
        </header>
    )
}