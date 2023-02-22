import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";

const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `http://localhost:4000/api/password-reset`;
			const { data } = await axios.post(url, { email });
			setMsg(data.message);
			setError("");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				setMsg("");
			}
		}
	};

	return (
		<div className={styles.container}>
			<img src="https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-4652.jpg?w=740&t=st=1677054373~exp=1677054973~hmac=1ef97a3425b7eb9b4ad55fec3ae78ddd09e976e43b7d38ebf04544f1c1695d1a" alt="Loading" />
			<form className={styles.form_container} onSubmit={handleSubmit}>
				<h1>Forgot Password</h1>
				<input
					type="email"
					placeholder="Email"
					name="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
					className={styles.input}
				/>
				{error && <div className={styles.error_msg}>{error}</div>}
				{msg && <div className={styles.success_msg}>{msg}</div>}
				<button type="submit" className={styles.submit_btn}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ForgotPassword;
