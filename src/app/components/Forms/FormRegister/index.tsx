import { InputFields } from '../InputField'
import styles from './FormRegister.module.css'

export const FormRegister = () => {
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Register</h1>
      <form>
        <InputFields id="name" name="name" type="text" label="Name" required />
        <InputFields id="email" name="email" type="email" label="Email" required />
        <InputFields id="password" name="password" type="password" label="Password" required />
        <InputFields id="confirmPassword" name="confirmPassword" type="password" label="Confirm Password" required />
        <input type="submit" value="Register" className={styles.inputButton} />
      </form >
    </div >
  )
}
