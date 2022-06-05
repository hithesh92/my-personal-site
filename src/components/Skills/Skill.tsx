import { SkillWrapper } from './Skills.styled';

const Skill = ({ children }: { children: React.ReactNode }) => {
	return <SkillWrapper>{children}</SkillWrapper>;
};

export default Skill;
