import React, { useState, useEffect, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import calendarStore from '../../store/calendarStore';
import Button from '../../ui/Button/Button';
import styles from './YearCalendar.module.css';

const YearCalendar: React.FC = observer((props) => {
    const year = calendarStore.year;
    const [calendar, setCalendar] = useState([]);

    const getDaysInMonth = (month: number, year: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const setPrevYear = useCallback(() => calendarStore.setPrevYear(), []);
    const setNextYear = useCallback(() => calendarStore.setNextYear(), []);

    useEffect(() => {

        const newCalendar = [];
        for (let month = 0; month < 12; month++) {
            const daysInMonth = getDaysInMonth(month, year);
            const days = [];
            for (let day = 1; day <= daysInMonth; day++) {
                days.push(<li key={day} className={styles.day}>{day}</li>);
            }
            newCalendar.push(
                <div key={month} className={styles.month}>
                    <div className={styles.monthTitle}>{new Date(year, month).toLocaleString('default', { month: 'long' })}</div>
                    <ul className={styles.daysList}>{days}</ul>
                </div>
            );
        }
        //@ts-ignore
        setCalendar(newCalendar);
    }, [year]);

    return (
        <div className={styles.YearCalendar}>
            <div className={styles.yearTitle}>
                <Button onClick={setPrevYear}>Предыдущий год</Button>
                Календарь на год: <b>{year}</b>
                <Button onClick={setNextYear}>Следующий год</Button>
            </div>

            <div className={styles.calendar}>{calendar}</div>
        </div>
    );
});

export default YearCalendar;