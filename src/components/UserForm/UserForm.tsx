import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as EyeIcon } from '../../assets/eyeIcon.svg';
import styles from './UserForm.module.css'
import { Input } from '../../ui/Input/Input';

interface SubmitType {
    email: string
    password: string
    extraInfo: string
}

interface FormProps {
    sendData: (data: SubmitType) => void
}

export const UserForm: React.FC<FormProps> = memo(({ sendData }) => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown((prev) => !prev);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SubmitType>({ mode: 'onBlur' });

    const onSubmit = (data: SubmitType) => {
        sendData(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
            <div className={styles.formInputs}>
                <Input
                    placeholder="Введите e-mail"
                    type="email"
                    {...register('email', {
                        required: 'E-mail обязателен',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Некорректный e-mail',
                        },
                    })}
                />
                <div className={styles.emailError}>
                    {errors?.email && (`${errors.email?.message}` || 'Ошибка')}
                </div>
                <div className={styles.passwordContainer}>
                    <Input
                        placeholder="Введите пароль"
                        className={styles.passwordInput}
                        type={passwordShown ? 'text' : 'password'}
                        {...register('password', { required: 'Пароль обязателен' })}
                    />
                    <EyeIcon className={styles.passwordIcon} onClick={togglePasswordVisibility} />
                </div>
                <div className={styles.passwordError}>
                    {errors?.password && (`${errors.password?.message}` || 'Ошибка')}
                </div>
            </div>
            <textarea maxLength={300} placeholder="Введите доп. информацию"  {...register('extraInfo')} />
            <button type="submit" className={styles.submitBtn}>
                Отправить
            </button>

        </form>
    );
});
