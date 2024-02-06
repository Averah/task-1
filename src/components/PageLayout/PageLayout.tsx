import { ReactNode } from 'react';
import styles from './PageLayout.module.css';

interface PageLayoutProps {
    children: ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
    return (
        <div className={styles.PageLayout}>
            {children}
        </div>
    )
};