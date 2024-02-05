
import React from 'react';
import { observer } from 'mobx-react-lite';
import userFormData from "../../store/userFormStore";
import styles from './UserFormData.module.css';
import { memo } from 'react';

interface UserFormDataProps {
    email: string
    password: string
    extraInfo: string
}

export const UserFormData: React.FC<UserFormDataProps> = memo(({email, password, extraInfo}) => {

    return (
        <div className={styles.UserFormData}>
            <div>Введённый email: {email}</div>
            <div>Введённый пароль: {password}</div>
            <div>Введённая доп. информация: {extraInfo}</div>
        </div>
    )
});