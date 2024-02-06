import React, { useEffect, useCallback } from "react";
import { UserForm } from "../../components/UserForm/UserForm";
import userFormData, { IFormData } from "../../store/userFormStore";
import { observer } from 'mobx-react-lite';
import { UserFormData } from "../../components/UserFormData/UserFormData";
import { PageLayout } from "../../components/PageLayout/PageLayout";

const UserFormPage: React.FC = observer(() => {

    const { email, password, extraInfo } = userFormData.formData;

    const onSendHandler = useCallback((data: IFormData) => {
        userFormData.sendUserData(data);
    }, [])

    useEffect(() => {
        return () => userFormData.clearUserData();
    }, [])

    return (
        <PageLayout>
            <b style={{ paddingBottom: 20 }}>User Form</b>
            <UserForm sendData={onSendHandler} />
            <UserFormData email={email} password={password} extraInfo={extraInfo} />
        </PageLayout>

    )
});

export default UserFormPage;