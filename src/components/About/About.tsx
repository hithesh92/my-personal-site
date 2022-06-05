import ContactDetails from './ContactDetails';
import {
	AboutWrapper,
	ImageBlock,
	Image,
	ProfileSection,
	AboutMeSection,
} from './About.styled';
import ProfileImage from '../../assets/hithesh.jpg';
import AboutMe from './AboutMe';

const About = () => {
	return (
		<AboutWrapper>
			<ProfileSection>
				<ImageBlock>
					<Image src={ProfileImage} alt='Profile' />
				</ImageBlock>
				<ContactDetails />
			</ProfileSection>
			<AboutMeSection>
				<AboutMe />
			</AboutMeSection>
		</AboutWrapper>
	);
};

export default About;
