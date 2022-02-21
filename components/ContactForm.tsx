import { motion } from 'framer-motion';
import { NextPage } from 'next';
import { SyntheticEvent } from 'react';

const ContactForm: NextPage = () => {
	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		const res = await fetch('/api/ses', {
			body: JSON.stringify({
				email: 'ckasidis@icloud.com',
				fullname: 'Kasidis Chantharojwong',
				subject: 'Hello',
				message: 'Just a test mail',
			}),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});

		const { error } = await res.json();
		if (error) {
			console.log(error);
			return;
		}
	};

	return (
		<form className="grid w-3/4 max-w-3xl" onSubmit={handleSubmit}>
			<label htmlFor="fullname" className="text-gray-500 mt-5 mb-2">
				Full name<span className="text-red-500">*</span>
			</label>
			<input
				className="bg-gray-800 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-50 text-gray-50"
				type="text"
				name="fullname"
			/>

			<label htmlFor="email" className="text-gray-500 mt-5 mb-2">
				E-mail<span className="text-red-500">*</span>
			</label>
			<input
				className="bg-gray-800 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-50 text-gray-50"
				type="email"
				name="email"
			/>

			<label htmlFor="subject" className="text-gray-500 mt-5 mb-2">
				Subject<span className="text-red-500">*</span>
			</label>
			<input
				className="bg-gray-800 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-50 text-gray-50"
				type="text"
				name="subject"
			/>

			<label htmlFor="message" className="text-gray-500 mt-5 mb-2">
				Message<span className="text-red-500">*</span>
			</label>
			<textarea
				className="bg-gray-800 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-50 text-gray-50"
				name="message"
			></textarea>
			<motion.button
				type="submit"
				className="bg-gray-50 hover:bg-gray-600 w-40 px-10 py-3 mt-10 rounded-full hover:text-gray-50 text-lg text-center font-bold"
				whileHover={{ scale: 1.1 }}
			>
				Send
			</motion.button>
		</form>
	);
};

export default ContactForm;
