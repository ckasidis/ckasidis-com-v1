import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { CgCodeSlash, CgMail, CgServer, CgWebsite } from 'react-icons/cg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavItem from './NavItem';
import { createElement } from 'react';

const navigationItems = [
	{ icon: CgWebsite, text: 'Frontend', path: '/#frontend' },
	{ icon: CgCodeSlash, text: 'Projects', path: '/#projects' },
	{ icon: CgServer, text: 'Backend', path: '/#backend' },
	{ icon: CgMail, text: 'Contact', path: '/#contact' },
];

const socialLinks = [
	{ icon: FaGithub, href: 'https://github.com/ckasidis/' },
	{
		icon: FaLinkedin,
		href: 'https://www.linkedin.com/in/kasidis-chantharojwong-418580205/',
	},
];

const Navigation: NextPage = () => {
	return (
		<div className="sticky top-0 left-0 bg-gray-900 shadow-black shadow-md text-gray-50 lg:h-screen lg:w-[16rem]">
			<div className="py-8 px-6 flex justify-between lg:flex-col lg:items-center lg:justify-center lg:h-full lg:gap-10">
				<motion.label
					htmlFor="mobile-menu"
					className="lg:hidden text-2xl hover:text-gray-400 cursor-pointer"
					whileHover={{ scale: 1.1 }}
				>
					<GiHamburgerMenu />
				</motion.label>
				<div className="flex gap-4">
					{socialLinks.map((item) => (
						<motion.a
							key={item.href}
							className="lg:block text-2xl hover:text-gray-400"
							whileHover={{ scale: 1.1 }}
							href={item.href}
							target="_blank"
							rel="noreferrer"
						>
							{createElement(item.icon)}
						</motion.a>
					))}
				</div>
				<nav className="hidden lg:block items-center justify-evenly">
					<ul className="flex-1 flex flex-col gap-6 items-center justify-evenly font-bold">
						{navigationItems.map((item) => (
							<NavItem
								key={item.text}
								icon={item.icon}
								text={item.text}
								path={item.path}
							/>
						))}
					</ul>
				</nav>
			</div>
			<input id="mobile-menu" type="checkbox" className="peer hidden" />
			<label
				htmlFor="mobile-menu"
				className="hidden peer-checked:block absolute top-0 left-0 h-screen w-screen bg-black/75 lg:peer-checked:hidden"
			>
				<label className="flex flex-col gap-10 items-center justify-center h-full w-2/3 max-w-[16rem] bg-gray-900">
					<div className="flex gap-4">
						{socialLinks.map((item) => (
							<motion.a
								key={item.href}
								className="lg:block text-2xl hover:text-gray-400"
								whileHover={{ scale: 1.1 }}
								href={item.href}
								target="_blank"
								rel="noreferrer"
							>
								{createElement(item.icon)}
							</motion.a>
						))}
					</div>
					<nav className="items-center justify-evenly">
						<ul className="flex-1 flex flex-col gap-6 items-center justify-evenly font-bold">
							{navigationItems.map((item) => (
								<NavItem
									key={item.text}
									icon={item.icon}
									text={item.text}
									path={item.path}
								/>
							))}
						</ul>
					</nav>
				</label>
			</label>
		</div>
	);
};

export default Navigation;
