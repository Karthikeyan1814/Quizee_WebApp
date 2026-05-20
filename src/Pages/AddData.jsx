import { useState } from "react"
export default function AddData(){

    const [Number,setNumber]=useState(0);

    const update=(e)=>{
        setNumber(e.target.value);
    }


    return(
        <div>
            <form action="">
                <label htmlFor="\"> Enter the Initial Box Based Upon Your Need</label>
                <input type="number" onChange={update} value={Number}/>

                <button>Submit</button>

                <h1>{Number===0? 'NO Box Selected Yet':`The Created BoXes Are ${Number}`}</h1>
            </form>
        </div>
    )
}