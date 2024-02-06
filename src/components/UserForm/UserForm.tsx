import { memo, useState } from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as EyeIcon } from '../../assets/eyeIcon.svg';
import styles from './UserForm.module.css'
import { Input } from '../../ui/Input/Input';
import Button from "../../ui/Button/Button";
import { IFormData } from "../../store/userFormStore";

interface FormProps {
    sendData: (data: IFormData) => void
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
        reset,
    } = useForm<IFormData>({ mode: 'onBlur' });

    const onSubmit = (data: IFormData) => {
        sendData(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.Form}>
            <div className={styles.formInputs}>
                <div>
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
                </div>
                <div>
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
            </div>
            <textarea maxLength={300} placeholder="Введите доп. информацию"  {...register('extraInfo')} />
            <Button type="submit" className={styles.submitBtn}>
                Отправить
            </Button>

        </form>
    );
});
