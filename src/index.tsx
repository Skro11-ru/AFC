import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@src/1.app/providers/ThemeProvider';
import { App } from '@src/1.app/App';
import '@src/7.shared/config/i18n/i18n';




render(
	<div>
		<BrowserRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</div>,
	document.getElementById('root'),
);
