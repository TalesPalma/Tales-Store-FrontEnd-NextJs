import styles from "./user.module.css"
import { FormLogin } from "@/app/components/Forms/FormLogin"
export default function User() {


  const userIsLogin = () => {
    return false
  }

  return (
    <div className={styles.container}>
      {userIsLogin() ? <h1 className={styles.title}>User</h1> :
        <FormLogin />
      }

    </div>
  )
}

