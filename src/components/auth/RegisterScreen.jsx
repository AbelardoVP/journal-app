import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/ui'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'


export const RegisterScreen = () => {


    const dispatch = useDispatch()
    const { msgError } = useSelector(state => state.ui)


    const [formValues, handleInputChange] = useForm({
        name: 'lalo',
        email: 'lalo@gmail.com',
        password: '123456',
        password2: '123456'

    })

    const { name, email, password, password2 } = formValues

    const handleRegister = (e) => {
        e.preventDefault()
        console.log(name, email, password, password2)

        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }

    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError("name is required"))
            return false
        }
        else if (!validator.isEmail(email)) {
            dispatch(setError("the email is not valid"))
            return false
        }
        else if (password !== password2 || password2.length < 5) {
            dispatch(setError("password not valid"))
            return false
        }
        dispatch(removeError())
        return true
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form className="animate__animated animate__fadeIn" onSubmit={handleRegister} >

                {
                    msgError &&
                    (<div className="auth__alert-error">
                        {msgError}
                    </div>)
                }
                <input className="auth__input" autoComplete="off" type="text" placeholder="Name" name="name" value={name} onChange={handleInputChange} />
                <input className="auth__input" autoComplete="off" type="text" placeholder="Email" name="email" value={email} onChange={handleInputChange} />
                <input className="auth__input" type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange} />
                <input className="auth__input" type="password" placeholder="Confirm password" name="password2" value={password2} onChange={handleInputChange} />
                <button className="btn btn-primary btn-block mb-5" type="submit">Login</button>


                <Link className="link" to="/auth/login">Already registerd?</Link>
            </form>
        </>
    )
}
