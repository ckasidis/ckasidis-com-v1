import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { CgMail, CgSmileMouthOpen, CgToolbox, CgWebsite } from 'react-icons/cg';
import { FaGithub } from 'react-icons/fa';
import NavItem from './NavItem';

const Navigation: NextPage = () => {
	return (
		<div className="sticky top-0 left-0 bg-gray-900 shadow-black shadow-lg text-gray-50 lg:h-screen lg:w-[16rem]">
			<div className="py-10 lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-full lg:gap-10">
				<motion.a
					className="hidden lg:block text-4xl hover:text-gray-400"
					whileHover={{ scale: 1.1 }}
					href="https://github.com/ckasidis/"
					target="_blank"
					rel="noreferrer"
				>
					<FaGithub />
				</motion.a>
				<nav className="flex items-center justify-evenly">
					<ul className="flex-1 flex items-center justify-evenly font-bold lg:flex-col lg:gap-6">
						<NavItem icon={CgWebsite} text="Developer" path="/#developer" />
						<NavItem icon={CgToolbox} text="My Business" path="/#my-business" />
						<NavItem icon={CgSmileMouthOpen} text="Roadmap" path="/#roadmap" />
						<NavItem icon={CgMail} text="Contact" path="/#contact" />
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navigation;
