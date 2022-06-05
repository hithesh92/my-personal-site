import {
	IconWrapper,
	JobDescriptionWrapper,
	JobDetailWrapper,
} from './Experience.styled';

interface JobDescriptionProps {
	company: string;
	role: string;
	startDate: string;
	endDate: string;
	location: string;
	responsibilites: string[];
	alignment?: 'left' | 'right';
	logo: string;
}

const JobDescription = ({
	company,
	role,
	startDate,
	endDate,
	location,
	responsibilites,
	alignment = 'left',
	logo,
}: JobDescriptionProps) => {
	return (
		<JobDescriptionWrapper>
			{alignment === 'left' && <IconWrapper src={logo}></IconWrapper>}
			<JobDetailWrapper>
				<h1>{company}</h1>
				<h4>
					{role}
					<p>
						{startDate} - {endDate}
					</p>
				</h4>
				<p>{location}</p>
				<ul>
					{responsibilites.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</JobDetailWrapper>
			{alignment === 'right' && <IconWrapper src={logo}></IconWrapper>}
		</JobDescriptionWrapper>
	);
};

export default JobDescription;
