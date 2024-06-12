import React, { useState } from "react";
import NavBar from "../../Components/NavBar/navBar";
import Header from "../../Components/topHeader/Header";
import Footer from "../../Components/Footer/Footer";
const ContactForm = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};

	return (
		<form className="" noValidate validated={validated} onSubmit={handleSubmit}>
			<div className="mb-4">
				<input
					type="text"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Name"
				/>
			</div>
			<div className="mb-4">
				<input
					type="email"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Email"
				/>
			</div>
			<div className="mb-4">
				<textarea
					name="message"
					className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
					placeholder="Enter Message"
					rows="4"
				></textarea>
			</div>
			<div className="text-start">
				<button
					type="submit"
					className="bg-blue-600 hover:bg-opacity-90 text-white px-8 py-3 rounded mb-4"
				>
					Submit
				</button>
			</div>
		</form>
	);
};

const ContactFormCard = () => (
	<div className="bg-white dark:bg-[#162231] rounded-2xl border-[25px] dark:border-[#1C293A] border-[#F4F7FD] p-6 md:p-12">
		<h2 className="text-2xl md:text-[45px] leading-none font-bold mb-4">
			Contact Us
		</h2>
		<p className="text-lg mb-12">
			We list your menu online, help you process orders.
		</p>

		<ContactForm />
	</div>
);

const ContactUs11 = () => {
	return (
        <>
        <Header/>
        <NavBar />
		<section className="ezy__contact11 light bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
			<div
				className="bg-no-repeat bg-left-bottom bg-cover py-14"
				style={{
					backgroundImage:
						"url(https://cdn.easyfrontend.com/pictures/contact/contact_11.png)",
				}}
			>
				<div className="container px-4">
					<div className="grid grid-cols-12 py-6">
						<div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
							<h2 className="text-2xl leading-none font-bold md:text-[40px] mb-6 text-white">
								Get in Touch
							</h2>
							<p className="text-lg text-white">
								It’s easier to reach your savings goals when you have the right
								savings account. Take a look and find the right one for you!
							</p>
						</div>
						<div className="col-span-12 lg:col-span-5 lg:col-start-8">
							<ContactFormCard />
						</div>
					</div>
				</div>
			</div>
			<div className="ezy__contact11-blank-card"></div>
		</section>
        <Footer/>
        </>
	);
};

export default ContactUs11;