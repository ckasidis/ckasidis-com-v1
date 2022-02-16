import { NextPage } from 'next';
import { createElement } from 'react';
import { IconType } from 'react-icons';

interface skill {
	icon: IconType;
	name: string;
}
interface Props {
	skillColumns: [
		{
			title: string;
			skills: skill[];
		},
		{
			title: string;
			skills: skill[];
		},
		{
			title: string;
			skills: skill[];
		}
	];
}

const SkillSection: NextPage<Props> = ({ skillColumns }) => {
	return (
		<section className="grid place-items-center py-10">
			<div className="grid gap-y-8 justify-center w-3/4 max-w-5xl min-h-[24rem] -mt-40 bg-gray-50 py-10 text-center rounded-3xl xl:grid-cols-3">
				{skillColumns.map((skillColumn, index) => (
					<div className="grid gap-4" key={index}>
						<h1 className="text-3xl font-bold">{skillColumn.title}</h1>
						<ul className="grid gap-2">
							{skillColumn.skills.map((skill, index) => (
								<li key={index}>
									<p className="flex items-center justify-center gap-1 text-xl">
										{createElement(skill.icon)}
										{skill.name}
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

export default SkillSection;
