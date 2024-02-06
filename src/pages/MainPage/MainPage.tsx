import React from "react";
import { memo } from 'react';
import styles from './MainPage.module.css';

export const MainPage: React.FC = memo(() => {

    return (
        <div className={styles.MainPage}>
            <b>Main Page</b>
        </div>
    )
});