import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@mui/material';
import Skill from './Skill';
import { SkillContainer, SkillsWrapper } from './Skills.styled';

const Skills = () => {
	return (
		<SkillsWrapper>
			<Accordion>
				<AccordionSummary>
					<Typography>Languages</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<SkillContainer>
						<Skill>JavaScript - ES6</Skill>
						<Skill>Java</Skill>
					</SkillContainer>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary>
					<Typography>Front End technologies </Typography>
				</AccordionSummary>
				<AccordionDetails>
					<SkillContainer>
						<Skill>React</Skill>
						<Skill>Redux</Skill>
						<Skill>Typescript</Skill>
						<Skill>Next.js</Skill>
						<Skill>HTML5</Skill>
						<Skill>CSS3</Skill>
						<Skill>SCSS</Skill>
						<Skill>Styled Components</Skill>
						<Skill>Redux-Observable</Skill>
						<Skill>Material-UI</Skill>
						<Skill>Redux-Saga</Skill>
						<Skill>Webpack</Skill>
						<Skill>Webpack</Skill>
					</SkillContainer>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary>
					<Typography>Unit Testing</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<SkillContainer>
						<Skill>React Testing Library</Skill>
						<Skill>RJuniteact</Skill>
					</SkillContainer>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary>
					<Typography>Tools</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<SkillContainer>
						<Skill>NPM</Skill>
						<Skill>Git</Skill>
						<Skill>Maven</Skill>
						<Skill>Jira</Skill>
						<Skill>SVN</Skill>
						<Skill>Invision</Skill>
						<Skill>Zeplin</Skill>
					</SkillContainer>
				</AccordionDetails>
			</Accordion>
			<Accordion>
				<AccordionSummary>
					<Typography>IDE</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<SkillContainer>
						<Skill>IntelliJ</Skill>
						<Skill>VS Code</Skill>
					</SkillContainer>
				</AccordionDetails>
			</Accordion>
		</SkillsWrapper>
	);
};

export default Skills;
