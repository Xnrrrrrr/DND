import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../components";

const Home = () => {
	return (
		<>
			<Header />
			<div style={{marginTop: "8rem"}}>
				Your Shit Here
			</div>
		</>
	)
}

export default Home;