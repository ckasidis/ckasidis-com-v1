import { NextPage } from 'next';
import { CgGames, CgMusic, CgPiano, CgSmileMouthOpen } from 'react-icons/cg';
import { FaRunning, FaRegStar, FaBook } from 'react-icons/fa';
import {
	SiAmazonaws,
	SiCloudflare,
	SiCsharp,
	SiCss3,
	SiDart,
	SiDocker,
	SiDotnet,
	SiExpress,
	SiFigma,
	SiFirebase,
	SiFlutter,
	SiGit,
	SiGithub,
	SiGoogleanalytics,
	SiGooglecloud,
	SiGooglesearchconsole,
	SiHtml5,
	SiJava,
	SiJavascript,
	SiMicrosoftazure,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiPandas,
	SiPython,
	SiReact,
	SiRust,
	SiSolidity,
	SiTailwindcss,
	SiTypescript,
	SiUnity,
	SiWeb3Dotjs,
	SiWebassembly,
	SiWordpress,
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
			<div id="skills">
				<QuoteSection
					icon={FaRegStar}
					title="My Skills"
					description="Developer with Experience in React.js, Next.js, TypeScript, and Flutter"
				/>
				<IconsSection
					iconsColumns={[
						{
							title: 'Languages',
							iconGroups: [
								{
									name: 'JavaScript',
									icon: SiJavascript,
								},
								{
									name: 'TypeScript',
									icon: SiTypescript,
								},
								{
									name: 'HTML5',
									icon: SiHtml5,
								},
								{
									name: 'CSS3',
									icon: SiCss3,
								},
								{
									name: 'Python',
									icon: SiPython,
								},
								{
									name: 'C#',
									icon: SiCsharp,
								},
								{
									name: 'Java',
									icon: SiJava,
								},
								{
									name: 'Dart',
									icon: SiDart,
								},
							],
						},
						{
							title: 'Tools and Libraries',
							iconGroups: [
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
									name: 'node.js',
									icon: SiNodedotjs,
								},
								{
									name: 'express.js',
									icon: SiExpress,
								},
								{
									name: 'MongoDB',
									icon: SiMongodb,
								},
								{
									name: '.NET6',
									icon: SiDotnet,
								},
								{
									name: 'Flutter',
									icon: SiFlutter,
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
									name: 'Azure',
									icon: SiMicrosoftazure,
								},
								{
									name: 'GCP',
									icon: SiGooglecloud,
								},
								{
									name: 'Firebase',
									icon: SiFirebase,
								},
								{
									name: 'Cloudflare',
									icon: SiCloudflare,
								},
							],
						},
					]}
				/>
				<CallToAction
					title="My Projects"
					description="View source code of my Hackathon and other projects on GitHub"
					button="My GitHub Profile"
					url="https://github.com/ckasidis/"
				/>
			</div>
			<div id="interests">
				<QuoteSection
					icon={CgSmileMouthOpen}
					title="Hobbies and Interests"
					description="Know more about me!"
				/>
				<IconsSection
					iconsColumns={[
						{
							title: 'Hobbies',
							iconGroups: [
								{
									name: 'Music',
									icon: CgMusic,
								},
								{
									name: 'Piano',
									icon: CgPiano,
								},
								{
									name: 'Gaming',
									icon: CgGames,
								},
								{
									name: 'Sports',
									icon: FaRunning,
								},
								{
									name: 'Reading',
									icon: FaBook,
								},
							],
						},
						{
							title: 'Other Skills',
							iconGroups: [
								{
									name: 'WordPress',
									icon: SiWordpress,
								},
								{
									name: 'Data Science',
									icon: SiPandas,
								},
								{
									name: 'UX/UI Design',
									icon: SiFigma,
								},
								{
									name: 'Analytics',
									icon: SiGoogleanalytics,
								},
								{
									name: 'SEO',
									icon: SiGooglesearchconsole,
								},
							],
						},
						{
							title: 'Interests',
							iconGroups: [
								{
									name: 'Web Assembly',
									icon: SiWebassembly,
								},
								{
									name: 'Rust',
									icon: SiRust,
								},
								{
									name: 'Web3',
									icon: SiWeb3Dotjs,
								},
								{
									name: 'Solidity',
									icon: SiSolidity,
								},
								{
									name: 'Unity',
									icon: SiUnity,
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
