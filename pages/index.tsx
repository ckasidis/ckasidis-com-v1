import { NextPage } from 'next';
import {
	CgGames,
	CgMusic,
	CgPiano,
	CgSmileMouthOpen,
	CgToolbox,
	CgWebsite,
} from 'react-icons/cg';
import { FaRunning, FaRegStar, FaBook } from 'react-icons/fa';
import {
	SiAdobeillustrator,
	SiAdobephotoshop,
	SiAdobepremierepro,
	SiAmazonaws,
	SiBlazor,
	SiCloudflare,
	SiCsharp,
	SiCss3,
	SiD3Dotjs,
	SiDart,
	SiDocker,
	SiDotnet,
	SiEthereum,
	SiFacebook,
	SiFigma,
	SiFirebase,
	SiFlutter,
	SiFramer,
	SiGit,
	SiGithub,
	SiGoogleanalytics,
	SiGooglecloud,
	SiGooglesearchconsole,
	SiGoogletagmanager,
	SiHtml5,
	SiHubspot,
	SiJava,
	SiJavascript,
	SiMariadb,
	SiMessenger,
	SiMicrosoftazure,
	SiMicrosoftexcel,
	SiMicrosoftteams,
	SiNextdotjs,
	SiNpm,
	SiPhp,
	SiPlesk,
	SiPython,
	SiReact,
	SiRust,
	SiSass,
	SiSolidity,
	SiTailwindcss,
	SiTypescript,
	SiUnity,
	SiVercel,
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
									name: 'CSS3',
									icon: SiCss3,
								},
								{
									name: 'Sass',
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
									name: 'D3.js',
									icon: SiD3Dotjs,
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
									name: 'Flutter',
									icon: SiFlutter,
								},
							],
						},
						{
							title: 'DevOps',
							iconGroups: [
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
				<CallToAction
					title="My Projects"
					description="View source code of my Hackathon and other projects on GitHub"
					button="My GitHub Profile"
					url="https://github.com/ckasidis/"
				/>
			</div>
			<div id="business">
				<QuoteSection
					icon={CgToolbox}
					title="My Business"
					description="Founder/Developer/Marketer of an Online Course Website"
				/>
				<IconsSection
					iconsColumns={[
						{
							title: 'Development',
							iconGroups: [
								{
									name: 'WordPress',
									icon: SiWordpress,
								},
								{
									name: 'MariaDB',
									icon: SiMariadb,
								},
								{
									name: 'PHP',
									icon: SiPhp,
								},
								{
									name: 'Plesk',
									icon: SiPlesk,
								},
								{
									name: 'Azure',
									icon: SiMicrosoftazure,
								},
								{
									name: 'Cloudflare',
									icon: SiCloudflare,
								},
							],
						},
						{
							title: 'Marketing Tools',
							iconGroups: [
								{
									name: 'Google Analytics',
									icon: SiGoogleanalytics,
								},
								{
									name: 'Tag Manager',
									icon: SiGoogletagmanager,
								},
								{
									name: 'Search Console',
									icon: SiGooglesearchconsole,
								},
								{
									name: 'Hubspot',
									icon: SiHubspot,
								},
								{
									name: 'Messenger Plugin',
									icon: SiMessenger,
								},
								{
									name: 'Business Manager',
									icon: SiFacebook,
								},
							],
						},
						{
							title: 'Collaboration',
							iconGroups: [
								{
									name: 'Microsoft Teams',
									icon: SiMicrosoftteams,
								},
								{
									name: 'Microsoft Excel',
									icon: SiMicrosoftexcel,
								},
								{
									name: 'Figma',
									icon: SiFigma,
								},
								{
									name: 'Photoshop',
									icon: SiAdobephotoshop,
								},
								{
									name: 'Illustrator',
									icon: SiAdobeillustrator,
								},
								{
									name: 'Premiere Pro',
									icon: SiAdobepremierepro,
								},
							],
						},
					]}
				/>
				<CallToAction
					title="My Course Website"
					description="idkclass.io is 1-year-old and has over 100 Monthly Active Users!"
					button="Visit idkclass.io"
					url="https://idkclass.io/"
				/>
			</div>
			<div id="interests">
				<QuoteSection
					icon={CgSmileMouthOpen}
					title="Other Interests"
					description="A Developer / A Gamer / A Classical Musician"
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
							title: '.NET and Game Dev',
							iconGroups: [
								{
									name: 'C#',
									icon: SiCsharp,
								},
								{
									name: '.NET6',
									icon: SiDotnet,
								},
								{
									name: 'ASP.NET',
									icon: CgWebsite,
								},
								{
									name: 'Blazor',
									icon: SiBlazor,
								},
								{
									name: 'Unity',
									icon: SiUnity,
								},
							],
						},
						{
							title: 'Crypto and WASM',
							iconGroups: [
								{
									name: 'Web3',
									icon: SiWeb3Dotjs,
								},
								{
									name: 'Blockchain',
									icon: SiEthereum,
								},
								{
									name: 'Solidity',
									icon: SiSolidity,
								},
								{
									name: 'WASM',
									icon: SiWebassembly,
								},
								{
									name: 'Rust',
									icon: SiRust,
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
