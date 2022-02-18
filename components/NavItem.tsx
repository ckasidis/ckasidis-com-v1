import { NextPage } from 'next';
import Link from 'next/link';
import { createElement } from 'react';
import { IconType } from 'react-icons';
import { motion } from 'framer-motion';

interface Props {
	icon: IconType;
	text: string;
	path: string;
}

const NavItem: NextPage<Props> = ({ icon, text, path }) => {
	return (
		<motion.li
			whileHover={{ scale: 1.1 }}
			className="flex items-center justify-center gap-2 hover:text-gray-400 md:text-xl"
		>
			<div className="hidden sm:block">{createElement(icon)}</div>
			<Link href={path}>{text}</Link>
		</motion.li>
	);
};

export default NavItem;
