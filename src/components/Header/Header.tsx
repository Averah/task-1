
import React, { memo, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

export const Header: React.FC = memo(() => {
    const navlinkClassname = useCallback(({ isActive }: { isActive: boolean }) => isActive ? styles.active : "", []);

    return (
        <div className={styles.Header}>
            <NavLink to='' className={navlinkClassname}>Main Page</NavLink>
            <NavLink to='button' className={navlinkClassname}>Button</NavLink>
            <NavLink to='calendar' className={navlinkClassname}>Calendar</NavLink>
            <NavLink to='form' className={navlinkClassname}>Form</NavLink>
        </div>
    )
});