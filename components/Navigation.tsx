import { NextPage } from 'next';

const Navigation: NextPage = () => {
	return (
		<div className="bg-gray-800 sticky top-0 left-0 h-screen w-40">
			<nav className="flex items-center justify-center p-10">
				<ul className="flex flex-col gap-2 text-gray-50">
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
