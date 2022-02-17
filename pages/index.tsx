import { NextPage } from 'next';
import {
	SiAmazonaws,
	SiBootstrap,
	SiContentful,
	SiCss3,
	SiDocker,
	SiFirebase,
	SiFlutter,
	SiFramer,
	SiGit,
	SiGithub,
	SiGooglecloud,
	SiHtml5,
	SiJava,
	SiJavascript,
	SiMicrosoftazure,
	SiNextdotjs,
	SiNodedotjs,
	SiNpm,
	SiPython,
	SiReact,
	SiSass,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
	SiWordpress,
} from 'react-icons/si';
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
				description="Frontend Web Developer with Experience in React.js, Next.js, and TypeScript"
			/>
			<SkillSection
				skillColumns={[
					{
						title: 'Languages',
						skills: [
							{
								name: 'JavaScript',
								icon: SiJavascript,
							},
							{
								name: 'TypeScript',
								icon: SiTypescript,
							},
							{
								name: 'Node.js',
								icon: SiNodedotjs,
							},
							{
								name: 'CSS3',
								icon: SiCss3,
							},
							{
								name: 'SASS',
								icon: SiSass,
							},
							{
								name: 'HTML5',
								icon: SiHtml5,
							},
							{
								name: 'Python',
								icon: SiPython,
							},
							{
								name: 'Java',
								icon: SiJava,
							},
						],
					},
					{
						title: 'Tools and Libraries',
						skills: [
							{
								name: 'React.js',
								icon: SiReact,
							},
							{
								name: 'Next.js',
								icon: SiNextdotjs,
							},
							{
								name: 'TailwindCSS',
								icon: SiTailwindcss,
							},
							{
								name: 'BootStrap',
								icon: SiBootstrap,
							},
							{
								name: 'Framer Motion',
								icon: SiFramer,
							},
							{
								name: 'NPM',
								icon: SiNpm,
							},
							{
								name: 'WordPress',
								icon: SiWordpress,
							},
							{
								name: 'Contentful',
								icon: SiContentful,
							},
						],
					},
					{
						title: 'DevOps and Cloud',
						skills: [
							{
								name: 'AWS',
								icon: SiAmazonaws,
							},
							{
								name: 'Azure',
								icon: SiMicrosoftazure,
							},
							{
								name: 'GCP',
								icon: SiGooglecloud,
							},
							{
								name: 'Docker',
								icon: SiDocker,
							},
							{
								name: 'Git',
								icon: SiGit,
							},
							{
								name: 'GitHub',
								icon: SiGithub,
							},
							{
								name: 'Vercel',
								icon: SiVercel,
							},
							{
								name: 'Firebase',
								icon: SiFirebase,
							},
						],
					},
				]}
			/>
		</>
	);
};

export default HomePage;
