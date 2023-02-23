import {useState, useContext} from "react";
import FormInput from '../form-input/form-input.component';

import "./sign-in-form.styles.scss";

import {createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword} from "../../util/firebase/firebase.util";
    
import Button from '../button/button.component';
// import { UserContext } from "../../context/user.context";
import {FcGoogle} from "react-icons/fc";


let defaultFormFields = {
    email: '',
    password: '',

}
const sn = '      SIGN IN';
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    // const { setCurrentUser } = useContext(UserContext);
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

        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
            // setCurrentUser(user)
        }catch(error){
            switch(error.code){
            case 'auth/worng-password':
                alert('wrong password')
                break;
            case 'auth/user-not-found':
                alert('user not found')
                break;
            case 'auth/invalid-email':
                alert('invalid email')
                break;
            default:
                alert('error')
                break;
            }


        }

    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }



    return(
        <div className="sign-up-container">
            <h2 className="sign-up-title">Already have an account?</h2>
            <span>Sign-in with your Email and Password</span>
            <form onSubmit={handleSubmit}>
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
                <div className="d-flex justify-content-around">
                <Button type='submit' buttonType='inverted'> Sign In</Button>
                <Button type='button' onClick={signInWithGoogle} buttonType='google'>
                 <div className="d-flex justify-content-around"> <FcGoogle className="align-self-center google-ico"/>SIGN IN</div>
                 </Button>
                </div>
            </form>
        </div>
    );
}
export default SignInForm;