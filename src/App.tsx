import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { BuyContextProvider } from "./contexts/BuyContext";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<BuyContextProvider>
					<Router />
				</BuyContextProvider>
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>
	);
}
