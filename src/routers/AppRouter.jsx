import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import { login } from '../actions/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch()

    const [checking, setChecking] = useState(true)
    const [isLoggeIn, setIsLoggeIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setIsLoggeIn(true)
                dispatch(startLoadingNotes(user.uid))
            } else {
                setIsLoggeIn(false)
            }
            setChecking(false)
        })
    }, [dispatch, setChecking, setIsLoggeIn])


    if (checking) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (

        <Router>
            <div>
                <Switch>
                    <PublicRoute isAuthenticated={isLoggeIn} path="/auth" component={AuthRouter} />
                    <PrivateRoute isAuthenticated={isLoggeIn} exact path="/" component={JournalScreen} />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>

    )
}
