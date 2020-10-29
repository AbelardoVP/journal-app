import React from 'react'
import './styles/styles.scss'
import { AppRouter } from './routers/AppRouter'
import { Provider } from "react-redux";
import { store } from './store/store';


export const JournalApp = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
