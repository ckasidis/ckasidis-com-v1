import { NextPage } from 'next';

interface Props {
	text: string;
}

const QuoteSection: NextPage<Props> = ({ text }) => {
	return (
		<section className="grid place-items-center bg-gray-800 min-h-[15rem] py-10 text-gray-50 ">
			<h3 className="w-4/5 max-w-3xl text-lg font-bold">{text}</h3>
		</section>
	);
};

export default QuoteSection;
