import { Link } from 'react-router-dom';
import styles from './nav.module.scss';

function Nav() {
	return (
		<nav>
			<div className={styles.appBtn}>
				<Link className={styles.browserLink} to='/app'>
					<p>Strefa</p>
				</Link>
			</div>
		</nav>
	);
}

export default Nav;
