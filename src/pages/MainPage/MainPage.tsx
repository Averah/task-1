import React from "react";
import styles from './MainPage.module.css';
import { memo } from 'react';

export const MainPage: React.FC = memo(() => {
    return (
        <div className={styles.MainPage}>
            Main Page
        </div>
    )
});