import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/HomeSection/HomePage';
import Application from '../components/Application/Application';

function App() {
	return (
		<Routes location={location} key={location.pathname}>
			<Route path='/' element={<HomePage />} />
			<Route path='/app' element={<Application />} />
		</Routes>
	);
}

export default App;
