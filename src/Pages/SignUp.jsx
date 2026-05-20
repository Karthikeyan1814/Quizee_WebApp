import SignupForm from "../Components/SignupForm"
import AuthLayout from "../Components/AuthLayout"
import "../Style/Login.css"
export default function SingUp(){
    return(
        <AuthLayout activate={"true"}  headname={"Sign Up"} imgsrc={"register.svg"}>
            <SignupForm></SignupForm>
        </AuthLayout>
    )
}