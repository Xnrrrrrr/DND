import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// Default/Theme CSS
import "./index.css";

// Components CSS
import './components/Header/Header.css';
import './components/SliderSwitch/SliderSwitch.css';
import './components/InfoTable/InfoTable.css';
import './components/Tooltip/Tooltip.css';
import './components/ChatBox/ChatBox.css';
import './components/ContextMenu/ChatBox/ChatBoxContextMenu.css';

// Pages CSS
import './pages/Landing/Landing.css';
import './pages/Login/Login.css';
import './pages/SignUp/SignUp.css';
import './pages/CharacterSheet/CharacterSheet.css'
import './pages/Home/Home.css'
import './pages/Party/Party.css';

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
