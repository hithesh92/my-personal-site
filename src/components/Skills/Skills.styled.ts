import { styled } from '@mui/material';

export const SkillsWrapper = styled('div')`
	margin: 40px auto;

	width: 80%;
`;

export const SkillWrapper = styled('div')`
	padding: 10px;
	margin: 5px;
	background: grey;
	height: 18px;
	width: fit-content;
	border-radius: 12px;

	color: ${({ theme }) => theme.palette.primary.main};
`;

export const SkillContainer = styled('div')`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;
