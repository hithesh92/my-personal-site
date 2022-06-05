import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const NavBarWrapper = styled('div')`
	height: 100px;
	background: ${({ theme }) => theme.palette.background.default};

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LinkContainer = styled('div')`
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-grow: 1;
`;
