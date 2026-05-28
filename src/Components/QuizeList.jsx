
import listdata from"../Data/QuizeeList"
import categories from "../Data/categories"
import "../Style/QuizeList.css"
export default function QuizeList(cut){
    //    {
    //     quize_number: 1,
    //     cat_number: 0,
    //     img_src: "./quizee/tech2.png",
    //     quize_title: "Computer Hardware Quiz",
    //     quize_about: "Learn about CPU, RAM and devices.",
    //     difficulty: "Medium",
    //     questions: 20
    // },
   

    return(
        <div className="quize_list">
          <table>
            <tbody className="list-tbl">
               
                  {
                    listdata.map((list,index)=>{

                        const catdata = categories.find(
                            item => item.cat_number === list.cat_number
                        );
                        return(
                            <tr key={index} className="list-row">
                                <td><img  className="list-img" src={list.img_src} alt="" /></td>
                                <td><h3>{list.quize_title}</h3>
                                    <p>{list.quize_about}</p>
                                     </td>
                                     <td>
                                        {catdata.cat_name}
                                     </td>
                                     <td>
                                        <p className={list.difficulty}>{list.difficulty}</p>
                                     </td>
                                <td>
                                    <button className="explore">
                                        Start Quizee !!!
                                    </button>
                                </td>
                            </tr>
                        );
                    })
                
                  }
            </tbody>
          </table>
        </div>
    )

    
}