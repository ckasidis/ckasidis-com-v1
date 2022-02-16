import { NextPage } from 'next';
import { createElement } from 'react';
import { IconType } from 'react-icons';
interface Props {
	text: string;
	icon: IconType;
}

const QuoteSection: NextPage<Props> = ({ text, icon }) => {
	return (
		<section className="grid gap-y-8 place-items-center bg-gray-800 min-h-[15rem] pt-20 pb-48 text-gray-50 ">
			<div className="text-7xl">{createElement(icon)}</div>
			<h2 className="text-5xl font-bold">JavaScript</h2>
			<h3 className="w-3/4 max-w-3xl text-lg font-bold">{text}</h3>
		</section>
	);
};

export default QuoteSection;
