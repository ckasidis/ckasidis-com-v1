import { NextPage } from 'next';
import { SiJavascript } from 'react-icons/si';
import Banner from '../components/Banner';
import QuoteSection from '../components/QuoteSection';
import SkillSection from '../components/SkillSection';

const HomePage: NextPage = () => {
	return (
		<>
			<Banner />
			<QuoteSection
				icon={SiJavascript}
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laborum qui dolorum quibusdam cumque obcaecati iste odit inventore fuga incidunt alias voluptatem rerum numquam ipsa molestiae dignissimos, necessitatibus repudiandae expedita"
			/>
			<SkillSection />
		</>
	);
};

export default HomePage;
