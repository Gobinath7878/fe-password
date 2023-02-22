import axios from "axios";
import React, { useEffect, useState } from "react";

const Profile = () => {
//   const URL="https://quizapp-mern.herokuapp.com";
//   const [datas,setDatas]= useState([]);
//   const [selected,setSelected]= useState('');
//   const [counter,setCounter]= useState(0);
//   const [question, setQuestion] = useState({
//     question: "",
//     option1: "",
//     option2: "",
//     option3: "",
//     answer: "",
//   });
//   const handleChange = (e) => { 
//     const name = e.target.name;
//     const value = e.target.value;
//     setQuestion((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleUpdate = async(id) => {
//    await axios.put(`${URL}/updateQuestion/${id}`,question).then((res)=>{
//          setCounter(counter + 1);
//          if(res){
//             alert("Updated..!!");
//             setQuestion({
//               question : "",
//               option1 : "",
//               option2 : "",
//               option3 : "",
//               answer : ""
//             });
//         }
//     }).catch((err)=>{
//         console.log(err);
//       })
    
// }
// const handleDelete = async(id) => {
//     await axios.delete(`${URL}/deleteQuestion/${id}`).then((res)=>{
//           setCounter(counter + 1);
//           if(res){
//              alert("Deleted...!")
//          }
//      }).catch((err)=>{
//          console.log(err);
//        })
     
//  }

//   const handleSelected = async(item)=>{
//     await axios.get(`${URL}/getQuestion/${item}`).then((res)=>{
//         setQuestion({
//           question: res.data.question,
//           option1: res.data.option1,
//           option2: res.data.option2,
//           option3: res.data.option3,
//           answer: res.data.answer,
//         });
//         setSelected(item);
//     }).catch((err)=>{
//         console.log(err);
//       })  
//   }
//   useEffect(()=>{
//         axios.get(`${URL}/getQuestions`).then((res)=>{
//             setDatas(res.data);
//       }).catch((err)=>{
//         console.log(err);
//       })  
//       // console.log("Getting Data....");
//   },[counter])
  return (
    <>
      <div className="container d-flex mt-5">hlo
        {/* <div className="col-md-6">
            <ul className="list-group">
            {
                datas?.map((item)=>{
                    return(
                        <>
                        <li className="list-group-item" >{item.question}
                        <a className="btn btn-outline-warning" style={{marginLeft:'5%'}}  onClick={()=>handleSelected(item._id)}>Edit</a>
                        <a className="btn btn-outline-danger" style={{marginLeft:'5%'}}  onClick={()=>handleDelete(item._id)}>Delete</a>
                        </li>
                        </>
                    )
                  })
            }
          </ul>
        </div>
        <div className="col-md-6">
          <div className="container mx-auto">
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" id="question" name="question" value={question.question} onChange={handleChange} placeholder="Enter Question"/>
              </div>
              <div className="mb-3">
                <input type="text"  className="form-control" id="option1" name="option1" value={question.option1} onChange={handleChange} placeholder="Enter Option 1"/>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="option2" name="option2" value={question.option2} onChange={handleChange} placeholder="Enter Option 2"/>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="option3" name="option3" value={question.option3} onChange={handleChange} placeholder="Enter Option 3"/>
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" id="answer" name="answer" value={question.answer} onChange={handleChange} placeholder="Enter Answer" />
              </div>
              <button type="button" className="btn btn-info" onClick={() => handleUpdate(selected)}>Update</button>
            </form>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Profile;