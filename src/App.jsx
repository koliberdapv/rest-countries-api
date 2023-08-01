import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Country, Error, SharedLayout, AllCountries } from './pages';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<SharedLayout />}
				>
					<Route
						index
						element={<AllCountries />}
					/>
					<Route
						path="country/:id"
						element={<Country />}
					/>
				</Route>
				<Route
					path="*"
					element={<Error />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
