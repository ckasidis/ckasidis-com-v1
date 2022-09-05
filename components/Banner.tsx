import { NextPage } from 'next';
import { motion } from 'framer-motion';

const Banner: NextPage = () => {
	const svgVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
	};
	return (
		<section className="grid place-items-center py-20">
			<motion.svg
				className="fill-gray-50 stroke-gray-50 w-28"
				id="Capa_1"
				viewBox="0 0 512 512"
				xmlns="http://www.w3.org/2000/svg"
			>
				<motion.g variants={svgVariants} initial="hidden" animate="visible">
					<motion.path
						variants={svgVariants}
						transition={{ duration: 0.5 }}
						d="m226 151c-8.284 0-15 6.716-15 15v45h-30v-45c0-8.284-6.716-15-15-15s-15 6.716-15 15v120c0 8.284 6.716 15 15 15s15-6.716 15-15v-45h30v45c0 8.284 6.716 15 15 15s15-6.716 15-15v-120c0-8.284-6.716-15-15-15z"
					/>
					<motion.path
						variants={svgVariants}
						transition={{ delay: 0.5, duration: 0.5 }}
						d="m286 151c-8.284 0-15 6.716-15 15v120c0 8.284 6.716 15 15 15s15-6.716 15-15v-120c0-8.284-6.716-15-15-15z"
					/>
					<motion.path
						variants={svgVariants}
						transition={{ delay: 1, duration: 0.5 }}
						d="m346 151c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15s15-6.716 15-15v-60c0-8.284-6.716-15-15-15z"
					/>
					<motion.circle
						variants={svgVariants}
						transition={{ delay: 1.5, duration: 0.5 }}
						cx="346"
						cy="286"
						r="15"
					/>
					<motion.path
						variants={svgVariants}
						transition={{ delay: 2, duration: 0.5 }}
						d="m376 91h-240c-74.991 0-136 60.561-136 135 0 69.41 53.038 126.752 121 134.185v45.815c0 5.532 3.045 10.615 7.922 13.225 4.867 2.604 10.784 2.331 15.398-.744l86.222-57.481h145.458c74.99 0 136-60.561 136-135s-61.01-135-136-135zm0 240h-150c-2.961 0-5.856.877-8.32 2.519l-66.68 44.453v-31.972c0-8.284-6.716-15-15-15-58.449 0-106-47.103-106-105s47.551-105 106-105h240c58.448 0 106 47.103 106 105s-47.552 105-106 105z"
					/>
				</motion.g>
			</motion.svg>

			<div className="grid text-center gap-2">
				<h1 className="text-gray-50 text-5xl font-bold sm:text-7xl">
					I&apos;m Kasidis
				</h1>
				<h3 className="text-gray-50 text-xl font-bold sm:text-3xl">
					A Full Stack Developer
				</h3>
			</div>
		</section>
	);
};

export default Banner;
