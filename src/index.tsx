import { render } from 'react-dom';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

render(
	<div>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</div>,
	document.getElementById('root'),
);
