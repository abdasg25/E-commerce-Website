import React from "react";
import Header from "../../Components/topHeader/Header";
import NavBar from "../../Components/NavBar/navBar";
import Footer from "../../Components/Footer/Footer";
import Number from "../../Components/impNumbers/numbers";
import TeamMember from "../../Components/TeamMembers/team";
const AboutUs14 = () => {
	return (
        <>
        <Header />
        <NavBar />
		<section className="ezy__about14 light py-24 md:py-32 bg-[url('https://cdn.easyfrontend.com/pictures/about/about14_bg.jpg')] bg-cover bg-no-repeat bg-center text-white relative z-[1]">
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 -z-[1]" />
			<div className="container px-4">
				<div className="grid grid-cols-12 gap-5 justify-between items-center">
					<div className="col-span-12 lg:col-span-5">
						<div className="border-[10px] border-blue-600 p-6 lg:p-12">
							<h1 className="uppercase text-4xl md:text-6xl leading-tight font-medium mb-6">
								ABOUT US
							</h1>
							<p className="text-lg leading-normal opacity-75">
								Completely network collaborative web services via user-centric
								initiatives. Quickly promote sticky testing procedures
								collaborator before unique process improvements. Since our
								inception set out in 2012, TalEx has set out to disrupt
								inception the HR & Talent/Staffing Management industry.
								Purposefully designed by our founders (Amrita Grewal and Julie
								Dacar) to connect great companies and great talent.
							</p>
							<div className="mt-6">
								<button className="bg-blue-600 text-white py-3 px-6 transition hover:bg-opacity-90">
									Explore More
								</button>
							</div>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-7">
						<div className="lg:ml-12">
							<p className="text-lg leading-normal opacity-75 mb-4">
								Completely network collaborative web services via user-centric
								initiatives. Quickly promote sticky testing procedures
								collaborator before unique process improvements. Since our
								inception set out in 2012, TalEx has set out to disrupt
								inception the HR & Talent/Staffing Management industry.
								Purposefully designed by our founders (Amrita Grewal and Julie
								Dacar) to connect great companies and great talent.
							</p>
							<p className="text-lg leading-normal opacity-75">
								Web services via user-centric initiatives. Quickly promote
								sticky testing procedures before unique process improvements.
								Distinctively engineer innovative information whereas
								revolutionary process improvements. Lorem ipsum dolor sit amet,
								consectetur adipisicing elit. Quia enim omnis saepe dolor
								voluptatum. Natus soluta maxime ipsum nam sapiente dignissimos
								voluptatum totam. Quickly promote sticky testing procedures
								before unique process improvements.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
        <Number />
		<TeamMember />
        <Footer />
        </>
	);
};
export default  AboutUs14;
