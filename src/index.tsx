import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@src/1.app/providers/ThemeProvider';
import { App } from '@src/1.app/App';
import '@src/7.shared/config/i18n/i18n';
import {ErrorBoundary} from "@src/1.app/providers/ErrorBoundary/components/ErrorBoundary";

render(
	<div>
		<BrowserRouter>
			<ErrorBoundary>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</ErrorBoundary>
		</BrowserRouter>
	</div>,
	document.querySelector('#root'),
);
