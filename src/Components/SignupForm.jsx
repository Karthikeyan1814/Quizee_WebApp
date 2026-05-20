import { useState } from "react"
import Step1 from "./SignUp/Step1"
import Step2 from "./SignUp/Step2"
import Step3 from "./SignUp/Step3"
import StepIndicator from "./StepIndicator";
export default function SignupForm(){

    const [step,setStep]=useState(1);

    const [formData,setFormdata]=useState(
        {
            name:"",
            dob:"",
            email:"",
            role:"",
            about:"",
            mobile:0,
            password:"",
            confirm_password:""
        }
    )

    const handleChange=(e)=>{
        const {name , value}=e.target;
        setFormdata((prev)=>({
            ...prev,[name]:value
        }))
    }

    const handleSubmit=()=>{
        console.log(formData);

        //api calling

        setFormdata( {
            username:"",
            dob:"",
            email:"",
            role:"",
            about:"",
            mobile:0,
            password:"",
            confirm_password:""
        })

    }

    const next=()=>{
        setStep((prev)=>(prev+1))
    }
    const previous =()=>{
        setStep((prev)=>(prev-1))
    }

    return(
        <div className="form-layout">
            <StepIndicator step={step} />
              {step === 1 && (
                <Step1
                    formData={formData}
                    handleChange={handleChange}
                    next={next}
                />
            )}

            {step === 2 && (
                <Step2
                    formData={formData}
                    handleChange={handleChange}
                    next={next}
                    previous={previous}
                />
            )}

            {step === 3 && (
                <Step3
                    formData={formData}
                    handleChange={handleChange}
                    previous={previous}
                    handleSubmit={handleSubmit}
                />
            )}
        </div>
    )
}