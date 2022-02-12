import { NextPage } from 'next';
import Banner from '../components/Banner';
import Skills from '../components/Skills';

const HomePage: NextPage = () => {
	return (
		<>
			<Banner />
			<Skills />
		</>
	);
};

export default HomePage;
