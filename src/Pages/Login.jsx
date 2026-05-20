import LoginForm from "../Components/LoginForm";
import AuthLayout from "../Components/AuthLayout";
export default function Login (){
 
    return(
        <AuthLayout headname={"Login Page"} imgsrc={"login_door.svg"}> 
            <LoginForm />
        </AuthLayout>
    )
}