import React from 'react';
import { Docs } from '../src/index';

// import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);

// import styles
import '../src/styles/config.css';
import '../src/styles/reset.css';

const App = () => {
	return (
		<Docs />
	)
}

export default App;