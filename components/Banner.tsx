import { NextPage } from 'next';

const Banner: NextPage = () => {
	return (
		<section className="grid place-items-center min-h-[24rem]">
			<div className="text-center">
				<h1 className="text-gray-50 text-5xl font-bold sm:text-7xl">
					I&apos;m Kasidis
				</h1>
				<h3 className="px-3 py-1 m-5 bg-gray-50 rounded-full text-sm font-bold sm:text-lg">
					Frontend Web Developer
				</h3>
			</div>
		</section>
	);
};

export default Banner;
