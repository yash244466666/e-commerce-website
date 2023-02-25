/* eslint-disable */
import React from "react";

import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../util/firebase/firebase.util"
// import {SignUpForm} from "../../components/sign-up-form/sign-up-form.component"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
const Authentication = () => {
    // const  logGoogleUser = async () => {
    //     const {user} = await signInWithGooglePopup()
    //     const userDocref = await createUserDocumentFromAuth(user)
    // }

    return(
        <div className="auth-margin">
            {/* <h1>Sign-in Page</h1>
            <button className="btn btn-success" onClick={logGoogleUser}>
                Sign in with Google Popup
            </button> */}
            <SignInForm/>
            <SignUpForm/>
        </div>
    );
}

export default Authentication;