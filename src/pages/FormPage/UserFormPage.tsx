import React, { useEffect, useCallback } from "react";
import { UserForm } from "../../components/UserForm/UserForm";
import userFormData, { IFormData } from "../../store/userFormStore";
import styles from "./UserFormPage.module.css"
import { observer } from 'mobx-react-lite';
import { UserFormData } from "../../components/UserFormData/UserFormData";

const UserFormPage:React.FC = observer(() => {

    const {email, password, extraInfo} = userFormData.formData;

    const onSendHandler = useCallback((data: IFormData) => {
        userFormData.sendUserData(data);
    }, [])

    useEffect(() => {
        return () => userFormData.clearUserData();
    }, [])

    return (
        <div className={styles.UserFormPage}>
            <b style={{paddingBottom:20}}>User Form</b>
            <UserForm sendData={onSendHandler}/>
            <UserFormData email={email} password={password} extraInfo={extraInfo} />
        </div>
    )
});

export default UserFormPage;