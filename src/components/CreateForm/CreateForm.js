import {useState} from 'react'
import  { useNavigate } from 'react-router-dom'
import styles from './CreateForm.module.scss'

export default function CreateForm(props) {
    const [ formData, setFormData ] = useState({
        title: '',
        body: ''
    })

    const navigateTo = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await props.createBlog(formData, props.token)
            // cool thing to do once there is a showpage done
            navigateTo(`/blog/${data._id}`)
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    return(
        <form className={styles.createForm}onSubmit={handleSubmit}>
            <h2>Create A New BlogPost, {props.user.name}! </h2>
            <input className={styles.input} placeholder='Title' type="text" name="title" value={formData.title} onChange={handleChange}/>
            <input className={styles.input} placeholder='BODY' type="text" name="body" value={formData.body} onChange={handleChange}/>
            <input className={styles.submit} type="submit" value="Create Blog"/>
        </form>
    )


}
