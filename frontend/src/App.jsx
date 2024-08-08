import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// Default/Theme CSS
import "./index.css";

// Components CSS
import './components/Header/Header.css';

// Pages CSS
import './pages/Landing/Landing.css';
import './pages/Login/Login.css';
import './pages/SignUp/SignUp.css';

const App = () => {
	return (
		<>
			<Suspense>
				<Outlet />
			</Suspense>
		</>
	);
}

export default App;
