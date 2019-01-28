import React from 'react';
import styles from './Header.css';
import logo from './logo-proto-white.png';

const Header = () => {
	return (
		<div>
			<div className={styles.Header}>
				<div className={styles.logo}>
					<img src={logo} />
				</div>
			</div>
		</div>
	)
}

export default Header;