import React from "react";
import PropTypes from "prop-types";

const teamMembers = [
	{
		picture: "https://cdn.easyfrontend.com/pictures/team/team_square_1.jpeg",
		fullName: "Akshay Kumar",
		designation: "Founder / CEO",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/team/team_square_2.jpeg",
		fullName: "Raima Ray",
		designation: "Business Head",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/team/team_square_3.jpeg",
		fullName: "Arjun Kapur",
		designation: "UI Design",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
	},
	{
		picture: "https://cdn.easyfrontend.com/pictures/team/team_square_4.jpeg",
		fullName: "Alia Bhatt",
		designation: "Marketing Head",
		bio: "Subscribe Easy Tutorials Youtube Channel watch more videos",
	},
];

const TeamMemberItem = ({ member }) => (
	<div className="bg-white shadow-xl dark:bg-slate-800 rounded-2xl h-full">
		<img
			src={member.picture}
			alt={member.fullName}
			className="h-auto w-full rounded-2xl"
		/>
		<div className="px-4 py-6 xl:px-6">
			<h4 className="text-2xl font-medium mb-2">{member.fullName}</h4>
			<h6 className="font-medium mb-2">{member.designation}</h6>
			<p className="opacity-50">{member.bio}</p>
			<button className="py-2 px-7 border border-blue-600 hover:bg-blue-600 hover:text-white duration-300 rounded-md mt-6">
				View Details
			</button>
		</div>
	</div>
);

TeamMemberItem.propTypes = {
	member: PropTypes.object.isRequired,
};

const TeamMember1 = () => {
	return (
		<section className="ezy__team1 light py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4 mx-auto">
				<div className="flex justify-center mb-6 md:mb-12">
					<div className="max-w-lg text-center">
						<h2 className="text-3xl leading-none font-bold md:text-[45px] mb-4">
							Our Experts Team
						</h2>
						<p className="">
							Assumenda non repellendus distinctio nihil dicta sapiente,
							quibusdam maiores, illum at qui.
						</p>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-6 text-center">
					{teamMembers.map((member, i) => (
						<div className="col-span-12 sm:col-span-6 lg:col-span-3" key={i}>
							<TeamMemberItem member={member} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default TeamMember1;