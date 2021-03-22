import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { InputWithoutIcon } from '../components/InputWithoutIcon';
import styles from '../styles/pages/Login.module.css';

export default function login() {
    return (
        <main className={styles.container}>
            <div className={styles.logo}>
                <img src="/assets/logo.png"/>
            </div>
            <form className={styles.formContainer}>
                <InputWithoutIcon 
                    name="email" 
                    title="E-mail"
                    type="email"
                />
                <InputWithoutIcon 
                    name="password" 
                    title="Senha"
                    type="password"
                />
                <Button name="ENTRAR" color="#263C9E"/>

                <div className={styles.footer}>
                    <a href="#">
                        <span>Esqueci minha senha</span>
                    </a>

                    <a href="">
                        <span>Cadastrar</span>
                    </a>
                    
                </div>
            </form>
            

        </main>
       
    );
}