import "..//Style/Login.css"
import { useState, useEffect } from "react";
export default function LoginForm() {
    const [logtype, setLogtype] = useState(0);
    const [logindata, setLogindata] = useState([]);
    const [activebtn, setActivebtn] = useState("std");

    const [userdata, setUserdata] = useState({
        usertype: 0,
        username: "",
        password: "",
        
    })

    useEffect(() => {
        setUserdata((prev) => ({
            ...prev,
            usertype: logtype
        }))
    }, [logtype]);

    const handlechange = (e) => {
        const { name, value } = e.target;
        setUserdata({
            ...userdata,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLogindata([...logindata, userdata]);

           setUserdata({
        usertype: logtype,
        username: "",
        password: "",
    });
    }

    useEffect(() => {
        console.log(logindata);
    }, [logindata])

    return (
        <>
            <form action="" onSubmit={handleSubmit} className="form-layout">
                <section className="type-selection" id="user-type">
                    <button type="button" className={activebtn === "std" ? "active-btn" : " "} onClick={() => {
                        setLogtype(0);
                        setActivebtn("std");
                    }}>Student</button>

                    <button type="button" className={activebtn === "staff" ? "active-btn" : " "} onClick={() => {
                        setLogtype(1);
                        setActivebtn("staff");
                    }}>Staff</button>
                </section>

                <label>User Name / Email</label>
                <input type="text" required name="username" value={userdata.username} onChange={handlechange} />
                <br />
                <section style={{display:"flex" ,justifyContent:"space-between"}}>
                     <label >Password</label> <label style={{ color: "yellow"}}>
                    Forgot Password ?</label>
                </section>
                <input type="password" required name="password" value={userdata.password} onChange={handlechange} />
                <br />
                <button type="submit" id="log-btn">Submit</button>
                <p>New To Login Register Here  : <span style={{color:"yellow"}}> Sign Up</span></p>
            </form>
        </>
    )
}