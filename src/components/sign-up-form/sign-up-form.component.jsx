import {useState, useContext} from "react";
// import {UserContext} from "../../context/user.context";

import FormInput from '../form-input/form-input.component';

import "./sign-up-form.styles.scss";

import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup} from "../../util/firebase/firebase.util";

import Button from '../button/button.component';
import {FcGoogle} from "react-icons/fc";


let defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''

}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    // const { setCurrentUser } = useContext(UserContext)

    // console.log(formFields);

    // reset form fields
    const resetFormFields = () => {
        setFormFields({
            ...defaultFormFields
        })
    } 
    const  signInWithGoogle = async () => {
        // const {user} = 
        await signInWithGooglePopup()
        // setCurrentUser(user)
        // createUserDocumentFromAuth(user)
    }  

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        try{
            const { user } = await createAuthUserWithEmailAndPassword(
                email,
                password);
                
                await createUserDocumentFromAuth(user, {displayName})
                resetFormFields();
                // setCurrentUser(user);
                

        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('email already in use')}
            console.log("USER CREATION",error);
        }

    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }



    return(
        <div className="sign-up-container">
            <h2 className="sign-up-title">Don't have an account?</h2>
            <span>Sign-up with your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                label='Display Name:'
                type='text' required 
                onChange={handleChange} 
                name='displayName' 
                value={displayName} />
                <FormInput 
                label='Email:'
                type='email' required 
                onChange={handleChange} 
                name="email" 
                value={email} />
                <FormInput
                label='Password:' 
                type='password' required 
                onChange={handleChange} 
                name='password' 
                value={password} />
                <FormInput
                label='Confirm Password:' 
                type='password' required 
                onChange={handleChange} name="confirmPassword" 
                value={confirmPassword}/>
                <div className="d-flex justify-content-around">
                    <Button type='submit' buttonType='default'>Sign Up</Button>
                    <Button type='button' onClick={signInWithGoogle} buttonType='google'>
                    <div className="d-flex justify-content-around"> <FcGoogle className="align-self-center google-ico"/>SIGN UP</div>
                    </Button>
                </div>
            </form>
        </div>
    );
}
export default SignUpForm;