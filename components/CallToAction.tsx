import { NextPage } from 'next';
import { motion } from 'framer-motion';

interface Props {
	title: string;
	description: string;
	button: string;
	url: string;
}

const CallToAction: NextPage<Props> = ({ title, description, button, url }) => {
	return (
		<section className="grid gap-y-4 place-items-center min-h-[15rem] py-20">
			<h2 className="text-3xl font-bold sm:text-5xl text-gray-50 ">{title}</h2>
			<h3 className="w-3/4 max-w-3xl text-lg text-center font-bold text-gray-50 ">
				{description}
			</h3>
			<motion.a
				whileHover={{ scale: 1.1 }}
				className="bg-gray-50 hover:bg-gray-600 w-1/2 max-w-md p-3 my-5 rounded-full hover:text-gray-50 text-lg text-center font-bold"
				href={url}
				target="_blank"
			>
				{button}
			</motion.a>
		</section>
	);
};

export default CallToAction;
