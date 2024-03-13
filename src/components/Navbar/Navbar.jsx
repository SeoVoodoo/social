import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}>
                    <NavLink to="/profile" className={ navData => navData.isActive ? s.activeLink : s.link }>
                        Profile
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/dialogs" className={ navData => navData.isActive ? s.activeLink : s.link }>
                        Messages
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/news" className={ navData => navData.isActive ? s.activeLink : s.link }>
                        News
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/music" className={ navData => navData.isActive ? s.activeLink : s.link }>
                        Music
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/settings" className={ navData => navData.isActive ? s.activeLink : s.link }>
                        Settings
                    </NavLink>
                </li>
            </ul>
      </nav>
    );
};
