import { NextPage } from 'next';
import { createElement } from 'react';
import { IconType } from 'react-icons';
interface Props {
	icon: IconType;
	title: string;
	description: string;
}

const QuoteSection: NextPage<Props> = ({ icon, title, description }) => {
	return (
		<section className="grid gap-y-4 place-items-center bg-gray-800 min-h-[15rem] pt-20 pb-48 text-gray-50 ">
			<div className="text-8xl">{createElement(icon)}</div>
			<h2 className="text-3xl font-bold sm:text-5xl">{title}</h2>
			<h3 className="w-3/4 max-w-3xl text-lg font-bold">{description}</h3>
		</section>
	);
};

export default QuoteSection;
