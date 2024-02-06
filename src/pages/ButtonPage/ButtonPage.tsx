import React, { useMemo } from "react";
import { memo } from 'react';
import { PageLayout } from "../../components/PageLayout/PageLayout";
import { ColorStyle, SwitchColorsButton } from "../../ui/SwitchColorsButton/SwitchColorsButton";

const ButtonPage: React.FC = memo(() => {

    const switchColors = useMemo<ColorStyle[]>(() =>
        [
            { background: '#fff', textColor: '#000' },
            { background: '#000', textColor: '#fff' },
            { background: 'red', textColor: 'blue' },
        ], [])

    return (
        <PageLayout>
                <b>Button Page</b>
                <SwitchColorsButton switchColors={switchColors}>Кнопка</SwitchColorsButton>
        </PageLayout>

    )
});

export default ButtonPage;