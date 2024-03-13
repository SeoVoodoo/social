import React from 'react';
import s from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}>
                    <a href="/profile">Profile</a>
                </li>
                <li className={s.item}>
                    <a href="/dialogs">Messages</a>
                </li>
                <li className={s.item}>
                    <a href="#">News</a>
                </li>
                <li className={s.item}>
                    <a href="#">Music</a>
                </li>
                <li className={s.item}>
                    <a href="#">Settings</a>
                </li>
            </ul>
      </nav>
    );
};
