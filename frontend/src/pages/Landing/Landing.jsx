import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components";

const Landing = () => {
	const [userData, setUserData] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		if (document.cookie.includes("uname")) {
			setUserData(
				document.cookie.split(`uname=`).pop().split(";").shift()
			);
		}
	}, []);

	return (
		<>
			<Header />
			<div className="landing-container">
				<section className="hero-section">
					<div className="hero-content">
						{userData ? (
							<h1>Welcome to DND, {userData}</h1>
						) : (
							<h1>Welcome to DND</h1>
						)}
						<p>
							Embark on an epic journey filled with magic,
							mystery, and endless possibilities.
						</p>
						{userData ? (
							<button
								className="cta-button"
								onClick={() => navigate("/party")}
							>
								Create/Join a Adventure
							</button>
						) : (
							<button
								className="cta-button"
								onClick={() => navigate("/sign-up")}
							>
								Start Your Adventure
							</button>
						)}
					</div>
				</section>
				<section className="features-section">
					<h2>Features</h2>
					<div className="feature-grid">
						<div className="feature-item">
							<h3>Create Your Character</h3>
							<p>
								Build your unique character with various races,
								classes, and abilities.
							</p>
						</div>
						<div className="feature-item">
							<h3>Explore the World</h3>
							<p>
								Discover new lands, face formidable foes, and
								uncover hidden treasures.
							</p>
						</div>
						<div className="feature-item">
							<h3>Join a Campaign</h3>
							<p>
								Play with friends or join a new party to embark
								on thrilling campaigns.
							</p>
						</div>
					</div>
				</section>
				<section className="about-section">
					<h2>About Us</h2>
					<p>
						We are passionate about bringing the best DND experience
						to players all around the world. Join us to dive into
						the world of adventure.
					</p>
				</section>
			</div>
		</>
	);
};

export default Landing;
