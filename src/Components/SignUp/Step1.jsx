export default function Step1({
    handleChange,
    next,
    formData,

}) {
    return (
        <>
            <label>
                Enter Your Name
            </label>
            <input type="text"
                onChange={handleChange}
                value={formData.username}
                placeholder="Eg : Karthi K"
                name="name" required />

            <br />
            <label >
                Select Your DOB
            </label>
            <input type="date" name="dob"
                onChange={handleChange}
                value={formData.dob} required />
            <br />
            <label>
                Enter Your Email
            </label>
            <input type="email" name="email"
                onChange={handleChange}
                value={formData.email} required id="" />
            <br />
            <button onClick={next} id="first-next" >
                Next &gt;
            </button>
        </>
    )
}