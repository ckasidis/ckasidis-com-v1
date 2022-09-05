import { NextPage } from 'next';
import { CgServer, CgWebsite } from 'react-icons/cg';
import {
	SiAmazonaws,
	SiChakraui,
	SiCsharp,
	SiCss3,
	SiCypress,
	SiDocker,
	SiFirebase,
	SiFlutter,
	SiFramer,
	SiGit,
	SiGithub,
	SiGo,
	SiGooglecloud,
	SiGraphql,
	SiJava,
	SiMaterialui,
	SiMicrosoftazure,
	SiMongodb,
	SiMysql,
	SiNextdotjs,
	SiPostgresql,
	SiPrisma,
	SiPython,
	SiReact,
	SiRust,
	SiSass,
	SiSqlite,
	SiStorybook,
	SiSvelte,
	SiTailwindcss,
	SiThreedotjs,
	SiTypescript,
	SiVite,
	SiWebpack,
} from 'react-icons/si';
import Banner from '../components/Banner';
import QuoteSection from '../components/QuoteSection';
import IconsSection from '../components/IconsSection';
import CallToAction from '../components/CallToAction';
import ContactForm from '../components/ContactForm';

const HomePage: NextPage = () => {
	return (
		<>
			<div id="banner">
				<Banner />
			</div>
			<div id="frontend">
				<QuoteSection
					icon={CgWebsite}
					title="Frontend Skills"
					description="A TypeScript Developer experienced in React.js, Next.js, and React Native"
				/>
				<IconsSection
					iconsColumns={[
						{
							title: 'Frameworks',
							iconGroups: [
								{
									name: 'React.js',
									icon: SiReact,
								},
								{
									name: 'Svelte',
									icon: SiSvelte,
								},
								{
									name: 'Next.js',
									icon: SiNextdotjs,
								},
								{
									name: 'SvelteKit',
									icon: SiSvelte,
								},
								{
									name: 'React Native',
									icon: SiReact,
								},
								{
									name: 'Flutter',
									icon: SiFlutter,
								},
							],
						},
						{
							title: 'Design',
							iconGroups: [
								{
									name: 'CSS',
									icon: SiCss3,
								},
								{
									name: 'Sass',
									icon: SiSass,
								},
								{
									name: 'Tailwind',
									icon: SiTailwindcss,
								},
								{
									name: 'Chakra UI',
									icon: SiChakraui,
								},
								{
									name: 'Material UI',
									icon: SiMaterialui,
								},
								{
									name: 'Framer Motion',
									icon: SiFramer,
								},
							],
						},
						{
							title: 'Other Tools',
							iconGroups: [
								{
									name: 'GraphQL',
									icon: SiGraphql,
								},
								{
									name: 'Storybook',
									icon: SiStorybook,
								},
								{
									name: 'Cypress',
									icon: SiCypress,
								},
								{
									name: 'Vite',
									icon: SiVite,
								},
								{
									name: 'Webpack',
									icon: SiWebpack,
								},
								{
									name: 'Three.js',
									icon: SiThreedotjs,
								},
							],
						},
					]}
				/>
			</div>
			<div id="projects">
				<CallToAction
					title="My Projects"
					description="View source code of my Hackathon and other Side Projects on GitHub"
					button="My GitHub Profile"
					url="https://github.com/ckasidis/"
				/>
			</div>
			<div id="backend">
				<QuoteSection
					icon={CgServer}
					title="Backend Skills"
					description="A Backend Developer experienced in Node.js (TypeScript) and Go"
				/>
				<IconsSection
					iconsColumns={[
						{
							title: 'Languages',
							iconGroups: [
								{
									name: 'TS/JS',
									icon: SiTypescript,
								},
								{
									name: 'Go',
									icon: SiGo,
								},
								{
									name: 'Python',
									icon: SiPython,
								},
								{
									name: 'Rust',
									icon: SiRust,
								},
								{
									name: 'C#',
									icon: SiCsharp,
								},
								{
									name: 'Java',
									icon: SiJava,
								},
							],
						},
						{
							title: 'Database',
							iconGroups: [
								{
									name: 'PostgreSQL',
									icon: SiPostgresql,
								},
								{
									name: 'MySQL',
									icon: SiMysql,
								},
								{
									name: 'MongoDB',
									icon: SiMongodb,
								},
								{
									name: 'Firebase',
									icon: SiFirebase,
								},
								{
									name: 'sqlite',
									icon: SiSqlite,
								},
								{
									name: 'Prisma',
									icon: SiPrisma,
								},
							],
						},
						{
							title: 'DevOps',
							iconGroups: [
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
									name: 'AWS',
									icon: SiAmazonaws,
								},
								{
									name: 'GCP',
									icon: SiGooglecloud,
								},
								{
									name: 'Azure',
									icon: SiMicrosoftazure,
								},
							],
						},
					]}
				/>
			</div>
			<div id="contact">
				<CallToAction title="Contact" description="Send me a message">
					<ContactForm />
				</CallToAction>
			</div>
		</>
	);
};

export default HomePage;
