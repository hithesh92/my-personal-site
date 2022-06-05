import JobDescription from './JobDescription';
import ReactLogo from '../../assets/logo.svg';
import JavaLogo from '../../assets/java-icon.svg';

const Experience = () => {
	return (
		<>
			<JobDescription
				key='1'
				company='Accenture'
				role='Front End Developer'
				startDate='Feb, 2021'
				endDate='Present'
				location='Hyderbad, India'
				responsibilites={[
					'Developed reusable custom components that are functional and responsive.',
					'Developed user interfaces from the mockups provided using React.js.',
					'Experienced with integrating Headless CMS - ContentStack with the website.',
					'Experienced with Static site generators like Next.Js.',
					'Experienced in working with Git.',
					'Write unit test cases for new and existing features to improve overall test coverage.',
					'Integration with API endpoints and services.',
					'Collaborate with backend developers and designers to ensure front end requirements are met.',
				]}
				logo={ReactLogo}
			/>
			<JobDescription
				key='2'
				company='TATA Consultancy Services'
				role='Front End Developer'
				startDate='July, 2019'
				endDate='Feb, 2021'
				location='Hyderbad, India'
				responsibilites={[
					'Developed various reusable components with customizable options and validations.',
					'Implemented MVVM pattern as architectural model for the project.',
					'Implemented various screens for the front end using React JS.',
					'Upgraded from React v15 to v16 to use hooks.',
					'Integrated Adobe Analytics using Adobe Launch with the portal to analyze data.',
					'Involved in writing application-level code to interact with APIs using JSON.',
					'Wrote Unit test cases & Integration test cases using React Testing Library.',
					'Integrated WebSocket to receive real-time updates.',
					'Configured the projects Webpack build process',
				]}
				alignment='right'
				logo={ReactLogo}
			/>
			<JobDescription
				key='3'
				company='TATA Consultancy Services'
				role='Technical Support Executive'
				startDate='April, 2018'
				endDate='June, 2019'
				location='Liege, Belgium'
				responsibilites={[
					'Troubleshooting, diagnosis of the issues reported from customers.',
					'Performing root cause analysis on application specific faults when required.',
					'Replicating the issues reported by customers and providing analysis about the issue.',
					'Deploying & testing the bug fixes given by the development team.',
					'Managed offshore team of 8 members in Hyderabad, India.',
				]}
				logo={ReactLogo}
			/>
			<JobDescription
				key='4'
				company='TATA Consultancy Services'
				role='Java Developer'
				startDate='April, 2014'
				endDate='March, 2018'
				location='Hyderabad, India'
				responsibilites={[
					'Design, development and testing of Call Service using SIP protocol, JAIN-SLEE.',
					'Development of Test Data Providing framework to generate test data and testing framework to test the services.',
					'Developed the Release Validator module which validates the application settings post deployment for correct behavior.',
					'Developed a module to export, import Profiles of Application Server which saves at least 15 minutes during 2-hour deployment.',
					'Developed JUnit test cases for all the developed modules.',
					'Integrated Maven to build, package and deploy application on Rhino application server.',
					'Involved in the development of logging standards and mechanisms based on Log4J.',
				]}
				logo={JavaLogo}
				alignment='right'
			/>
		</>
	);
};

export default Experience;
