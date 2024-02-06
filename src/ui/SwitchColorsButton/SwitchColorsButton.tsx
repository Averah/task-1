import React, { CSSProperties, memo, useCallback, useMemo, useState } from 'react';
import Button, { ButtonProps } from '../Button/Button';

export interface ColorStyle {
    background: string;
    textColor: string;
}

interface SwitchColorsButtonProps extends ButtonProps {
    switchColors: ColorStyle[];
}

export const SwitchColorsButton: React.FC<SwitchColorsButtonProps> = memo(({ className, children, switchColors, ...otherProps }) => {
    const [currentColorIdx, setCurrentColorIdx] = useState(0);

    const btnStyle = useMemo<CSSProperties>(() => ({
        color: switchColors[currentColorIdx]?.textColor,
        background: switchColors[currentColorIdx]?.background,
    }), [currentColorIdx, switchColors]);


    const handleClick = useCallback(() => {
        setCurrentColorIdx(prevIdx => prevIdx === switchColors.length - 1 ? 0 : prevIdx + 1);
    }, [switchColors.length]);

    return (
        <Button onClick={handleClick} style={btnStyle} className={className} {...otherProps}>
            {children}
        </Button>
    );
});
