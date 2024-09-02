import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

import store from "./store.js";
import { Provider } from "react-redux";

import {
	Landing,
	Login,
	SignUp,
	PrivateRoute,
	Home,
	CharacterSheet,
	Party,
	PartyCreate,
	PartyDetail,
} from "./pages";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index={true} path="/" element={<Landing />} />
			<Route path="/login" element={<Login />} />
			<Route path="/sign-up" element={<SignUp />} />
			{/* Private Routes */}
			<Route path="" element={<PrivateRoute />}>
				<Route path="/home" element={<Home />} />
				<Route path="/character-sheet" element={<CharacterSheet />} />
				<Route path="/party" element={<Party />}>
					<Route path="create" element={<PartyCreate />} />
					<Route path=":partyId" element={<PartyDetail />} />
				</Route>
			</Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
