import { NextPage } from 'next';

const Navigation: NextPage = () => {
	return (
		<div className="sticky top-0 left-0 bg-gray-800 shadow-2xl sm:h-screen sm:w-1/4 sm:max-w-[16rem]">
			<nav className="flex items-center justify-center py-10">
				<ul className="flex-1 flex items-center justify-evenly text-gray-50 font-bold sm:flex-col sm:gap-5">
					<li>item1</li>
					<li>item2</li>
					<li>item3</li>
					<li>item4</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
