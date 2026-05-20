export default function Step2({
    handleChange,
    next,
    previous,
    formData,

}){
    return(
        <>
        <label>
            Enter Mobile No 
        </label>
        <input type="text" 
        onChange={handleChange}
        value={formData.username}
        name="mobile" required/>
        <br />

        <label >
            Select Your Role
        </label>
       <select name="role" 
       onChange={handleChange}
       value={formData.role}
       id="" required>
        <option value="student">Student</option>
        <option value="staff">Staff</option>
       </select>
        <br />

        <label>
            Mention College / Organization / School
      </label>

      <input type="text" name="about"
      onChange={handleChange}
      value={formData.about}
      placeholder="If Personal Use Enter : Personal" required id="" />
       <br />
       
       <section className="under-btn">
             <button onClick={previous}>
            &lt;  Previous
            </button>
            <button onClick={next}>
            Next &gt;
            </button>
       </section>
        </>
    )
}