import { Link, Switch, Typography } from '@mui/material';
import React, { useContext } from 'react';

import { ThemePreferenceContext } from '../../App';
import { NavBarWrapper, LinkContainer } from './NavBar.styled';

const NavBar = () => {
	const { currentTheme, setCurrrentTheme } = useContext(ThemePreferenceContext);

	const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const result = e.target.value === 'light' ? 'dark' : 'light';
		console.log(result);
		setCurrrentTheme(result);
	};
	return (
		<NavBarWrapper>
			<LinkContainer>
				<Link href='/about' underline='hover'>
					<Typography>About</Typography>
				</Link>
				<Link href='/experience' underline='hover'>
					<Typography>Experience</Typography>
				</Link>
				<Link href='/skills' underline='hover'>
					<Typography>Skills</Typography>
				</Link>
				<Link href='/education' underline='hover'>
					<Typography>Education</Typography>
				</Link>
				<Link href='/contact' underline='hover'>
					<Typography>Contact</Typography>
				</Link>
			</LinkContainer>
			<Switch
				value={currentTheme}
				checked={currentTheme === 'light'}
				onChange={handleSwitch}
			/>
		</NavBarWrapper>
	);
};

export default NavBar;
