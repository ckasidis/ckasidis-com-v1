import { NextPage } from 'next';
import {
	SiAdobeillustrator,
	SiAdobephotoshop,
	SiAdobepremierepro,
	SiAmazonaws,
	SiCloudflare,
	SiContentful,
	SiCss3,
	SiD3Dotjs,
	SiDart,
	SiDocker,
	SiDotnet,
	SiExpress,
	SiFacebook,
	SiFigma,
	SiFirebase,
	SiFlutter,
	SiFramer,
	SiGit,
	SiGithub,
	SiGithubactions,
	SiGoogleanalytics,
	SiGooglecloud,
	SiGooglesearchconsole,
	SiGoogletagmanager,
	SiGraphql,
	SiHtml5,
	SiHubspot,
	SiJava,
	SiJavascript,
	SiJest,
	SiMariadb,
	SiMessenger,
	SiMicrosoftazure,
	SiMicrosoftexcel,
	SiMicrosoftteams,
	SiMongodb,
	SiNextdotjs,
	SiNpm,
	SiPandas,
	SiPhp,
	SiPlesk,
	SiPostgresql,
	SiPython,
	SiPytorch,
	SiReact,
	SiRust,
	SiSass,
	SiSocketdotio,
	SiSolidity,
	SiStripe,
	SiSvelte,
	SiTailwindcss,
	SiTensorflow,
	SiThreedotjs,
	SiTypescript,
	SiUnity,
	SiVercel,
	SiWeb3Dotjs,
	SiWebassembly,
	SiWordpress,
} from 'react-icons/si';
import { CgSmileMouthOpen, CgToolbox, CgWebsite } from 'react-icons/cg';
import Banner from '../components/Banner';
import QuoteSection from '../components/QuoteSection';
import SkillSection from '../components/SkillSection';
import CallToAction from '../components/CallToAction';

const HomePage: NextPage = () => {
	return (
		<>
			<Banner />
			<QuoteSection
				icon={CgWebsite}
				title="Frontend Developer"
				description="Developer with Experience in React.js, Next.js, TypeScript, and Flutter"
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
							{
								name: 'Flutter',
								icon: SiFlutter,
							},
						],
					},
					{
						title: 'DevOps',
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
			<CallToAction
				title="My Projects"
				description="View Source code of this Website and my other Projects on GitHub"
				button="GitHub Profile"
				url="https://github.com/ckasidis/"
			/>
			<QuoteSection
				icon={CgToolbox}
				title="Business Founder"
				description="Founder/Developer/Marketer of an LMS Website Built with WordPress"
			/>
			<SkillSection
				skillColumns={[
					{
						title: 'Development',
						skills: [
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
						skills: [
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
						skills: [
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
				title="My LMS Website"
				description="idkclass.io is 1-year-old and has over 100 Monthly Active Users!"
				button="Visit idkclass.io"
				url="https://idkclass.io/"
			/>
			<QuoteSection
				icon={CgSmileMouthOpen}
				title="A Learner"
				description="The 2 Best Skills I possess are 'Eagerness to Learn' and 'Adaptability'"
			/>
			<SkillSection
				skillColumns={[
					{
						title: 'Learning',
						skills: [
							{
								name: 'Svelte',
								icon: SiSvelte,
							},
							{
								name: 'MongoDB',
								icon: SiMongodb,
							},
							{
								name: 'Express.js',
								icon: SiExpress,
							},
							{
								name: 'GraphQL',
								icon: SiGraphql,
							},

							{
								name: 'Testing',
								icon: SiJest,
							},
							{
								name: 'CI/CD',
								icon: SiGithubactions,
							},
						],
					},
					{
						title: 'Planning to Learn',
						skills: [
							{
								name: 'Stripe.js',
								icon: SiStripe,
							},
							{
								name: 'D3.js',
								icon: SiD3Dotjs,
							},
							{
								name: 'socket.io',
								icon: SiSocketdotio,
							},
							{
								name: 'Three.js',
								icon: SiThreedotjs,
							},
							{
								name: '.NET6',
								icon: SiDotnet,
							},
							{
								name: 'Unity',
								icon: SiUnity,
							},
						],
					},
					{
						title: 'Other Interests',
						skills: [
							{
								name: 'Web3',
								icon: SiWeb3Dotjs,
							},
							{
								name: 'Smart Contracts',
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
							{
								name: 'Data Science',
								icon: SiPandas,
							},
							{
								name: 'Machine Learning',
								icon: SiTensorflow,
							},
						],
					},
				]}
			/>
			<CallToAction
				title="Contact Me"
				description="Contact me by email: me@ckasidis.com"
				button="Send Email"
				url="mailto:me@ckasidis.com"
			/>
		</>
	);
};

export default HomePage;
