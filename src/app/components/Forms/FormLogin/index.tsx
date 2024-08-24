import Link from 'next/link'
import { InputFields } from '../InputField'
import styles from './FormLogin.module.css'

export const FormLogin = () => {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Login</h1>
      <form>
        <div className={styles.inputGroup}>
          <InputFields id="email" name="email" type="email" label="Email" required />
          <InputFields id="password" name="password" type="password" label="Password" required />
        </div>
        <input type="submit" value="Login" className={styles.inputButton} />
      </form>
      <div className={styles.register}>
        <p>Don't have an account?</p>
        <Link href="/pages/register">Register</Link>
      </div>
    </div>
  )
}
