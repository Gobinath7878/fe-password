// import { Route, Routes, Navigate } from "react-router-dom";
import styles from "./styles.module.css";
// import Nav from './components/Nav'
import Dashboard from './pages/Dashboard';
// import Profile from './components/profile';



const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		window.location.reload();
	};



	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>User Profile</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<Dashboard />
		</div>
	);
};

export default Main;
