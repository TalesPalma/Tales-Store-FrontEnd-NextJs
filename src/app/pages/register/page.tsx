import { FormRegister } from "@/app/components/Forms/FormRegister";
import styles from './register.module.css'
import Link from "next/link";

export default function Register() {
  return (
    <div className={styles.container}>
      <Link href="/pages/user">{"<--Login"}</Link>
      <FormRegister />
    </div>
  )
}
