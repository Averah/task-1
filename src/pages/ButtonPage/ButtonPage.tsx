import React, { useMemo } from "react";
import { memo } from 'react';
import { ColorStyle, SwitchColorsButton } from "../../ui/SwitchColorsButton/SwitchColorsButton";
import styles from './ButtonPage.module.css';

const ButtonPage: React.FC = memo(() => {

    const switchColors = useMemo<ColorStyle[]>(() =>
        [
            { background: '#fff', textColor: '#000' },
            { background: '#000', textColor: '#fff' },
            { background: 'red', textColor: 'blue' },
        ], [])

    return (
        <div className={styles.ButtonPage}>
            <b>Button Page</b>
            <SwitchColorsButton switchColors={switchColors}>Кнопка</SwitchColorsButton>
        </div>
    )
});

export default ButtonPage;