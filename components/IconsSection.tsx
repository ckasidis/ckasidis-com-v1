import { NextPage } from 'next';
import { createElement } from 'react';
import { IconType } from 'react-icons';

interface iconGroup {
	icon: IconType;
	name: string;
}
interface Props {
	iconsColumns: [
		{
			title: string;
			iconGroups: iconGroup[];
		},
		{
			title: string;
			iconGroups: iconGroup[];
		},
		{
			title: string;
			iconGroups: iconGroup[];
		}
	];
}

const IconsSection: NextPage<Props> = ({ iconsColumns }) => {
	return (
		<section className="grid place-items-center bg-gray-800 pb-28">
			<div className="grid gap-8 justify-center w-3/4 max-w-5xl min-h-[24rem] bg-gray-50 p-10 text-center rounded-3xl xl:grid-cols-3">
				{iconsColumns.map((iconsColumn, index) => (
					<div className="grid gap-4" key={index}>
						<h1 className="text-2xl font-bold sm:text-3xl">
							{iconsColumn.title}
						</h1>
						<ul className="grid gap-2">
							{iconsColumn.iconGroups.map((iconGroup, index) => (
								<li key={index}>
									<p className="flex items-center justify-center gap-1 text-xl">
										{createElement(iconGroup.icon)}
										{iconGroup.name}
									</p>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
};

export default IconsSection;
