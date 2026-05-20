export default function Step3({
    handleChange,
    previous,
    handleSubmit,
    formData,

}){
    return(
        <>
        <label>
            New Password
        </label>
        <input type="text" 
        onChange={handleChange}
        value={formData.password}
        placeholder="0-9 a-z A-Z"
        name="password" required/>
        

        <label >
            Confirm Password
        </label>
        <input type="password" name="confirm_password" 
        onChange={handleChange}
        value={formData.confirm_password} required />

        
        
        <section className="under-btn">
            <button onClick={previous}>
            &lt; Previous
        </button>
        <button onClick={handleSubmit} style={{backgroundColor:"gold",color:"black"}}>
            SignUp
        </button>
        </section>
        </>
    )
}