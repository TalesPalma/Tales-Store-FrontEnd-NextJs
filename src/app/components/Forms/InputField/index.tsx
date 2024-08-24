import styles from './Input.module.css'


interface InputFieldsProps {
  id: string,
  name: string,
  type: string
  label: string
  required?: boolean
}


export const InputFields: React.FC<InputFieldsProps> = ({ id, name, type, label, required }: InputFieldsProps) => {
  return (
    <div className={styles.inputGroup} >
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={id} required={required ? true : false} />
    </div>
  )
}

