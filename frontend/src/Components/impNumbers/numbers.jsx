import React from "react";
import PropTypes from "prop-types";

const cards = [
	{
		count: "432",
		title: "Completed Event",
		detail:
			"Partner removes the hassle and confusion that comes from managing.",
	},
	{
		count: "758",
		title: "Game Completed",
		detail:
			"It’s no secret that the digital. From exciting startups to global brands.",
	},
	{
		count: "31+",
		title: "Completed Fund",
		detail: "Sed ut in perspiciatis unde omnis istema natus error sit tatem.",
	},
	{
		count: "994+",
		title: "Completed Ticket",
		detail:
			"Viverra tellus in hac habitasse platea dictumst tempor id eu nisl.",
	},
];

const CardItem = ({ item }) => (
	<div className="mb-6">
		<h3 className="font-black text-3xl md:text-[45px] mb-4">{item.count}</h3>
		<h5 className="text-xl font-medium mb-2">{item.title}</h5>
		<p className="mb-0">{item.detail}</p>
	</div>
);

CardItem.propTypes = {
	item: PropTypes.object.isRequired,
};

const Cards = () => {
	const divider = Math.ceil(cards.length / 2);

	return (
		<>
			<div className="flex flex-col sm:flex-row gap-6">
				{cards.slice(0, divider).map((item, i) => (
					<CardItem item={item} key={i} />
				))}
			</div>

			<div className="flex flex-col sm:flex-row gap-6">
				{cards.slice(divider).map((item, i) => (
					<CardItem item={item} key={i} />
				))}
			</div>
		</>
	);
};

const Numbers3 = () => {
	return (
		<section className="ezy__numbers3 gray py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
			<div className="container px-4">
				<div className="grid grid-cols-12 justify-between">
					<div className="col-span-12 lg:col-span-6">
						<div>
							<h1 className="text-3xl md:text-[45px] font-bold leading-snug mb-4">
								Some Important Numbers
							</h1>
							<p className="text-lg opacity-80 mb-12">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
								quod perferendis nihil cupiditate aliquid qui exercitationem
								labore veritatis eaque nobis libero earum.
							</p>
						</div>
						<Cards />
					</div>
					<div className="col-span-12 lg:col-span-5 lg:col-start-8">
						<div className="flex justify-center items-end h-full">
							<img
								src="https://cdn.easyfrontend.com/pictures/featured/three.png"
								alt=""
								className="max-w-full h-auto rounded-lg mt-12 md:mt-0"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Numbers3;