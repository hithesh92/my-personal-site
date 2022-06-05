import { Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Experience from '../Experience/Experience';
import NavBar from '../NavBar/NavBar';
import Skills from '../Skills/Skills';
import { HomeWrapper } from './Home.styled';

const Home = () => {
	return (
		<HomeWrapper>
			<NavBar />
			<Routes>
				<Route path='/about' element={<About />}></Route>
				<Route path='/experience' element={<Experience />}></Route>
				<Route path='/skills' element={<Skills />}></Route>
				<Route path='/education' element={<>Education</>}></Route>
				<Route path='/contact' element={<>Contact</>}></Route>
			</Routes>
		</HomeWrapper>
	);
};

export default Home;
