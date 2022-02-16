import { NextPage } from 'next';

const Banner: NextPage = () => {
	return (
		<section className="grid place-items-center min-h-[24rem]">
			<div className="grid text-center gap-2">
				<h1 className="text-gray-50 text-5xl font-bold sm:text-7xl">
					I&apos;m Kasidis
				</h1>
				<h3 className="text-gray-50 text-xl font-bold sm:text-3xl">
					A Frontend Developer
				</h3>
			</div>
		</section>
	);
};

export default Banner;
