// import styled from 'styled-components';
import { styled } from '@mui/material';
// import { theme } from '../../themes';

export const HomeWrapper = styled('div')`
	width: 100vw;
	height: 100vh;
	background-color: ${({ theme }) => theme.palette.background.default};
	color: ${({ theme }) => theme.palette.primary.main};

	margin: 0;
	padding: 0;
`;
