import "../Style/Message.css"
import { useState } from "react"
export default function Message(){
    const [messages,setMessage]=useState([{
        name:"karthikeyan",
        from:"km3974808@gmail.com",
        message:"snjvianjdcijnahweifncjwienfijcawecnjnasjckanknlkacnjacnjlecniowenuwefcbiwcenwjiqncnijnwecninwcnnwoincJNNOUWWNCOIUEDNCQUioowenionqjc ioqwc oiqwjeciowedno ioqn cn oqdnx iondiqjnwd oqwd ijnqwndojnqidyufe fefb befuow fwueffbiuebfbijwd dbwibfq buibefcndsc "
        ,seen:"no"
    },{
        name:"karthikeyan",
        from:"km3974808@gmail.com",
        message:"snjvianjdcijnahweifncjwienfijcawecnjnasjckanknlkacnjacnjlecniowenuwefcbiwcenwjiqncnijnwecninwcnnwoincJNNOUWWNCOIUEDNCQUioowenionqjc ioqwc oiqwjeciowedno ioqn cn oqdnx iondiqjnwd oqwd ijnqwndojnqidyufe fefb befuow fwueffbiuebfbijwd dbwibfq buibefcndsc "
        ,seen:"yes"
    }]);

    return(
        <>
        <div className="message-container">
            <h1 className="messages_head">
                Messages    
            </h1>
            <hr />
            {messages.length===0 && <>
            <p className="No_record">No Records Found</p>
            </>}

            {messages.length > 0 && <>
            <table className="message-tbl" border={0}>
                
                    {messages.map((i,index)=>(
                        <tr key={index}>
                            {console.log(i.name)}
                            {console.log(i.from)}
                            <td>{i.name} <br /> {i.from} {i.seen==="no" && <span className="green-dot">.</span>} </td>

                        </tr>
                    ))}
                
            </table>
            
            </>}

            <button className="new_message">
                + Create New Message
            </button>
        </div>
        </>
    )
}