import styled from 'styled-components';

export const AboutWrapper = styled.div`
	width: 100%;
	height: 80%;

	display: flex;
	flex-direction: row;
`;

export const ImageBlock = styled.div`
	flex-grow: 2;
`;

export const Image = styled.img`
	height: 310px;
	width: 250px;
	border-radius: 50%;
	position: relative;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
`;

export const ProfileSection = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	align-items: center;
`;

export const AboutMeSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
`;

export const ContentDetailsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;
