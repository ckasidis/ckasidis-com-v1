import { NextPage } from 'next';
import { SiHtml5 } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import Banner from '../components/Banner';
import QuoteSection from '../components/QuoteSection';
import SkillSection from '../components/SkillSection';

const HomePage: NextPage = () => {
	return (
		<>
			<Banner />
			<QuoteSection
				icon={CgWebsite}
				title="Web Development"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laborum qui dolorum quibusdam cumque obcaecati iste odit inventore fuga incidunt alias voluptatem rerum numquam ipsa molestiae dignissimos, necessitatibus repudiandae expedita"
			/>
			<SkillSection
				skillColumns={[
					{
						title: 'col1',
						skills: [
							{
								name: 'HTML',
								icon: SiHtml5,
							},
							{
								name: 'HTML',
								icon: SiHtml5,
							},
							{
								name: 'HTML',
								icon: SiHtml5,
							},
							{
								name: 'HTML',
								icon: SiHtml5,
							},
							{
								name: 'HTML',
								icon: SiHtml5,
							},
						],
					},
					{
						title: 'col2',
						skills: [
							{
								name: 'HTML',
								icon: SiHtml5,
							},
							{
								name: 'HTML',
								icon: SiHtml5,
							},
							{
								name: 'HTML',
								icon: SiHtml5,
							},
							{
								name: 'HTML',
								icon: SiHtml5,
							},
							{
								name: 'HTML',
								icon: SiHtml5,
							},
						],
					},
					{
						title: 'col3',
						skills: [
							{
								name: 'HTML',
								icon: SiHtml5,
							},
							{
								name: 'HTML',
								icon: SiHtml5,
							},
							{
								name: 'HTML',
								icon: SiHtml5,
							},
							{
								name: 'HTML',
								icon: SiHtml5,
							},
							{
								name: 'HTML',
								icon: SiHtml5,
							},
						],
					},
				]}
			/>
		</>
	);
};

export default HomePage;
