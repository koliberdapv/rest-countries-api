import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Country, Error, AllCountries } from './pages';
import { SharedLayout } from './components/';

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
						path="/name/:id"
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
