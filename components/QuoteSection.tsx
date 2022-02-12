import { NextPage } from 'next';

interface Props {
	text: string;
}

const QuoteSection: NextPage<Props> = ({ text }) => {
	return (
		<section className="grid place-items-center bg-gray-800 min-h-[15rem] py-4 text-gray-50">
			<div className="w-4/5">{text}</div>
		</section>
	);
};

export default QuoteSection;
