import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import Nav from './components/HomeSection/Nav.tsx';
import App from './routes/AppRoutes.tsx';
import './index.scss';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router>
			<Nav />
			<App />
		</Router>
	</StrictMode>
);
