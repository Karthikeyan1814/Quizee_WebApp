import Header from "../Components/Header"
import Message from "../Components/Message"
export default function HodDahboard(){
    return(
        <>
        <Header panel={"Head of the department"} dept={"Information Technology"}
                    box1={"No of Student "} box2={"No of Staffs"}
                    box1_value={10} box2_value={30}
                    main_btn1={"View Records"}  main_btn2={"Allocate Metting"}/>

        <Message />
        </>
    )
}