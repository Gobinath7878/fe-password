import { useState } from "react";
import axios from "axios";
import { Link,useNavigate} from "react-router-dom";
import styles from "./styles.module.css";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://be-password.onrender.com/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			localStorage.setItem("user", data.email);
			navigate("/home");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<img src="https://img.freepik.com/free-vector/login-concept-illustration_114360-4525.jpg?w=740&t=st=1677053970~exp=1677054570~hmac=2509596a64ae07b0cd691825fa8964a413dfb7b07e66fd6fcbb54a0ee6d8f67f" alt="loading" />
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email (user1@gmail.com)"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password (User1@123)"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						<Link to="/forgot-password" style={{ alignSelf: "flex-start" }}>
							<p style={{ padding: "0 15px" }}>Forgot Password ?</p>
						</Link>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.login_btn}>
							Login
						</button>
					</form>
					<Link to="/signup">
						<button type="button" className={styles.register_btn}>
							Register
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
