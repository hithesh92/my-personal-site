import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { createContext } from 'react';
import { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import { light, dark } from './themes';
import { Container, PaletteMode } from '@mui/material';

type ContexType = {
	currentTheme: string;
	setCurrrentTheme: React.Dispatch<React.SetStateAction<PaletteMode>>;
};

export const ThemePreferenceContext = createContext<ContexType>(
	{} as ContexType
);

const App = () => {
	const [currentTheme, setCurrrentTheme] = useState<PaletteMode>('light');

	const theme = createTheme({
		palette: {
			mode: currentTheme,
		},
	});

	return (
		<ThemePreferenceContext.Provider value={{ currentTheme, setCurrrentTheme }}>
			<ThemeProvider theme={theme}>
				<Container>
					<Home />
				</Container>
			</ThemeProvider>
		</ThemePreferenceContext.Provider>
	);
};

export default App;
