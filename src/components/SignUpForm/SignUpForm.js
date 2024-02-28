import { useState } from 'react'
import styles from './SignUpForm.module.scss'

export default function SignUpForm (props){
    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value })
    }
    return(
        <>
        <div className={styles.content}>
            <h2 className={styles.heading}>Sign Up For My Dope Blog Below</h2>
            <form
                className={styles.form}
                onSubmit={(e) => {
                e.preventDefault()
                props.signUp(credentials)
            }}>
                <input className={styles.input} type='text' name="name" onChange={handleChange} value={credentials.name} />
                <input className={styles.input} type='email' name="email" onChange={handleChange} value={credentials.email} />
                <input className={styles.input} type='password' name="password" onChange={handleChange} value={credentials.password} />
                <input className={styles.submit} type="submit" value="Submit" />
            </form>
            </div>
        </>
    )
   }
