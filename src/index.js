// import {createContext} from "react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {AuthProvider} from "./hoc";

// export const MyContext = createContext(null);
// const value = {name:"max", age:24};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <MyContext.Provider value={value}>
    <AuthProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AuthProvider>

    /*</MyContext.Provider>*/
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
