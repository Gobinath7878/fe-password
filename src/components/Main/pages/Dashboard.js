import { useState, useEffect} from 'react';
import axios from 'axios';
import styles from "./styles.module.css";
// import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const URL="https://profile-backend-teal.vercel.app";
  const email = localStorage.getItem("user");
  const [formError, setFormError] = useState("")
  const [data, setData] = useState({
		name: "",
		email: email,
    age:"",
    gender:"",
    // dob:"",
    mobile:"",
		// password: "",
		// confirmPassword: "",
	});
	const [error, setError] = useState("");
	// const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
    
	};

  useEffect(()=>{
     axios.post(`${URL}/api/profile`,{email}).then((res)=>{
      console.log(res.data);
        setData(res.data);
  }).catch((err)=>{
    console.log(err);
  })  
},[email])


  const handleSubmit = async (e) => {
    console.log(data);
		e.preventDefault();
    let isValid = validateForm()
    if (isValid) {
      try {
        setFormError("")
        const url = `${URL}/api/profileEdit`;
        const { data: res } = await axios.put(url, data);
        alert(res.message);
      } catch (error) {
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
     }
		}
	};



const validateForm = () => {
    let err = {}

    
    if (data.password === '' || data.confirmPassword === '') {
      err.password = 'Password and Confirm Password required!'
    } else {
      if (data.password !== data.confirmPassword) {
        err.password = 'Password not matched!'
      } else {
        if (data.password.length < 8) {
          err.password = 'Password should greater than 8 characters!'
        }
      }
    }

    setFormError({ ...err })

    return Object.keys(err).length < 1;
  }

  return (
    <div className="dashboard">
      <form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Edit Profile</h1>
						<input
							type="text"
							placeholder="Name"
							name="name"
							onChange={handleChange}
							value={data.name}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
            <input
							type="number"
							placeholder="Age"
							name="age"
							onChange={handleChange}
							value={data.age}
							required
							className={styles.input}
						/>
            
            <select className={styles.input} name="gender" placeholder="Gender" onChange={handleChange} value={data.gender} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
            <input
							type="date"
							placeholder="Date of Birth"
							name="D.O.B"
							onChange={handleChange}
							value={data.dob}
							required
							className={styles.input}
						/>
            <input
							type="phone"
							placeholder="Mobile Number"
							name="mobile"
              pattern="[789][0-9]{9}" 
							onChange={handleChange}
							value={data.mobile}
							required
							className={styles.input}
						/>
						{/* <input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/> 
						<input
							type="password"
							placeholder="Confirm Password"
							name="confirmPassword"
							onChange={handleChange}
							value={data.confirmPassword}
							required
							className={styles.input}
						/> */}
            {formError && <div className={styles.error_msg}>{formError.password}</div>}
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Update
						</button>
					</form>
      




      {/* <form className={styles.form_container} onSubmit={onSubmitHandler}>
        <div className="form-group">
          <input className={styles.input} name="username" placeholder="Name" onChange={onChangeHandler} value={formData.username} />
          <span className={styles.error_msg}>{formError.username}</span>
        </div>
        <div className="form-group">
          <input className={styles.input} name="email" placeholder="Email" onChange={onChangeHandler} value={formData.email} />
          <span className={styles.error_msg}>{formError.email}</span>
        </div>
        <div className="form-group">
          <input className={styles.input} name="password" placeholder="Password" onChange={onChangeHandler} value={formData.password} />
          <span className={styles.error_msg}>{formError.password}</span>
        </div>
        <div className="form-group">
          <input className={styles.input} name="cpassword" placeholder="Confirm Password" onChange={onChangeHandler} value={formData.cpassword} />
        </div>
        <div className="form-group">
          <select className={styles.input} name="gender" placeholder="Gender" onChange={onChangeHandler} value={formData.gender}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <span className={styles.error_msg}>{formError.gender}</span>
        </div>

        <div className="form-group">
          <button className={styles.green_btn} type="submit" >Submit</button>
        </div>
      </form>





 */}




    </div>
  )
}







// import './App.css';
// import { useState } from 'react';
// import styles from "./styles.module.css";
// function Dashboard() {

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     cpassword: '',
//     occupation: '',
//     gender: '',
//     languages: [],
//   })

//   const [formError, setFormError] = useState({})

//   const onChangeHandler = (event) => {

//     console.log(event)
//     if (event.target.name === 'languages') {

//       let copy = { ...formData }

//       if (event.target.checked) {
//         copy.languages.push(event.target.value)
//       } else {
//         copy.languages = copy.languages.filter(el => el !== event.target.value)
//       }

//       setFormData(copy)

//     } else {
//       setFormData(() => ({
//         ...formData,
//         [event.target.name]: event.target.value
//       }))
//     }
//   }

//   const validateForm = () => {
//     let err = {}

//     if (formData.username === '') {
//       err.username = 'Username required!'
//     }
//     if (formData.email === '') {
//       err.email = 'Email required!'
//     } else {
//       let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//       if (!regex.test(formData.email)) {
//         err.email = 'Email not valid!'
//       }
//     }

//     if (formData.password === '' || formData.cpassword === '') {
//       err.password = 'Password and Confirm Password required!'
//     } else {
//       if (formData.password !== formData.cpassword) {
//         err.password = 'Password not matched!'
//       } else {
//         if (formData.password.length < 6) {
//           err.password = 'Password should greater than 6 characters!'
//         }
//       }
//     }

//     if (formData.occupation === '') {
//       err.occupation = 'Occupation required!'
//     }
//     if (formData.gender === '') {
//       err.gender = 'Gender required!'
//     }
//     if (formData.languages.length < 1) {
//       err.languages = 'Any one language required!'
//     }

//     setFormError({ ...err })

//     return Object.keys(err).length < 1;
//   }

//   const onSubmitHandler = (event) => {
//     event.preventDefault()
//     console.log("Form Data:", formData)
//     let isValid = validateForm()

//     if (isValid) {
//       alert('Submitted')
//       //API call to server
//     } else {
//       alert('In-Valid Form')
//     }
//     console.log(isValid)
//   }
//   return (
//     <div className="App">
//       <form onSubmit={onSubmitHandler}>
//         <div className="form-group">
//           <label htmlFor="username" className="form-label">User Name</label>
//           <input className="form-control" name="username" onChange={onChangeHandler} value={formData.username} />
//           <span className='non-valid'>{formError.username}</span>
//         </div>
//         <div className="form-group">
//           <label htmlFor="email" className="form-label">Email</label>
//           <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email} />
//           <span className='non-valid'>{formError.email}</span>
//         </div>
//         <div className="form-group">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input className="form-control" name="password" onChange={onChangeHandler} value={formData.password} />
//           <span className='non-valid'>{formError.password}</span>
//         </div>
//         <div className="form-group">
//           <label htmlFor="cpassword" className="form-label">Confirm Password</label>
//           <input className="form-control" name="cpassword" onChange={onChangeHandler} value={formData.cpassword} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="occupation" className="form-label">Occupation</label>
//           <select className="form-select" name="occupation" onChange={onChangeHandler} value={formData.occupation}>
//             <option value=""></option>
//             <option value="student">Student</option>
//             <option value="employee">Employee</option>
//             <option value="other">Other</option>
//           </select>
//           <span className='non-valid'>{formError.occupation}</span>
//         </div>
//         <div className="form-group">
//           <label htmlFor="gender" className="form-label">Gender</label>
//           <div>
//             <div>
//               <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
//               <label htmlFor="male">Male</label>
//             </div>
//             <div>
//               <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
//               <label htmlFor="female">Female</label>
//             </div>
//             <div>
//               <input type="radio" name="gender" value="other" onChange={onChangeHandler} checked={formData.gender === 'other'} />
//               <label htmlFor="other">Other</label>
//             </div>
//             <span className='non-valid'>{formError.gender}</span>
//           </div>
//         </div>
//         <div className="form-group">
//           <label htmlFor="gender" className="form-label">Languages</label>
//           <div>
//             <div>
//               <input type="checkbox" name="languages" value="html" onChange={onChangeHandler} checked={formData.languages.indexOf('html') !== -1} />
//               <label htmlFor="html">HTML</label>
//             </div>
//             <div>
//               <input type="checkbox" name="languages" value="css" onChange={onChangeHandler} checked={formData.languages.indexOf('css') !== -1} />
//               <label htmlFor="css">CSS</label>
//             </div>
//             <div>
//               <input type="checkbox" name="languages" value="javascript" onChange={onChangeHandler} checked={formData.languages.indexOf('javascript') !== -1} />
//               <label htmlFor="javascript">Javascript</label>
//             </div>
//           </div>
//           <span className='non-valid'>{formError.languages}</span>
//         </div>
//         <div className="form-group">
//           <button className="btn" type="submit" >Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }










export default Dashboard
