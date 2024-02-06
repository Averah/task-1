import React from "react";
import { memo } from 'react';
import YearCalendar from "../../components/YearCalendar/YearCalendar";
import styles from './YearCalendarPage.module.css';

const YearCalendarPage: React.FC = memo(() => {

    return (
        <div className={styles.YearCalendarPage}>
            <b>Calendar Page</b>
            <YearCalendar />
        </div>
    )
});

export default YearCalendarPage;