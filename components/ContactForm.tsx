import { NextPage } from 'next';
import { SyntheticEvent, useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm: NextPage = () => {
	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const [showInvalid, setShowInvalid] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const [showFail, setShowFail] = useState(false);

	const [buttonText, setButtonText] = useState('Send');

	const handleValidation = () => {
		let isValid = true;

		if (fullname.length <= 0) {
			isValid = false;
		}
		if (email.length <= 0) {
			isValid = false;
		}
		if (subject.length <= 0) {
			isValid = false;
		}
		if (message.length <= 0) {
			isValid = false;
		}

		// console.log('errors', errors);
		return isValid;
	};
	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();

		let isValidForm = handleValidation();

		if (!isValidForm) {
			setShowInvalid(true);
			setShowSuccess(false);
			setShowFail(false);
		} else {
			setShowInvalid(false);
			setShowSuccess(false);
			setShowFail(false);
			setButtonText('Sending...');
			const res = await fetch('/api/ses', {
				body: JSON.stringify({
					email: email,
					fullname: fullname,
					subject: subject,
					message: message,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
			});
			const { error } = await res.json();
			if (error) {
				// console.log(error);
				setShowInvalid(false);
				setShowSuccess(false);
				setShowFail(true);
				setButtonText('Send');
				return;
			}

			setShowInvalid(false);
			setShowSuccess(true);
			setShowFail(false);
			setButtonText('Send');

			setFullname('');
			setEmail('');
			setSubject('');
			setMessage('');
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
				value={fullname}
				onChange={(e) => {
					setFullname(e.target.value);
				}}
			/>

			<label htmlFor="email" className="text-gray-500 mt-5 mb-2">
				E-mail<span className="text-red-500">*</span>
			</label>
			<input
				className="bg-gray-800 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-50 text-gray-50"
				type="email"
				name="email"
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>

			<label htmlFor="subject" className="text-gray-500 mt-5 mb-2">
				Subject<span className="text-red-500">*</span>
			</label>
			<input
				className="bg-gray-800 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-50 text-gray-50"
				type="text"
				name="subject"
				value={subject}
				onChange={(e) => {
					setSubject(e.target.value);
				}}
			/>

			<label htmlFor="message" className="text-gray-500 mt-5 mb-2">
				Message<span className="text-red-500">*</span>
			</label>
			<textarea
				className="bg-gray-800 py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-gray-50 text-gray-50"
				name="message"
				value={message}
				onChange={(e) => {
					setMessage(e.target.value);
				}}
			></textarea>
			{showInvalid && (
				<p className="pt-5 text-red-500 text-lg font-bold">
					Please fill all fields before sending
				</p>
			)}
			{showSuccess && (
				<p className="pt-5 text-green-500 text-lg font-bold">
					Message Sent Successfully!
				</p>
			)}
			{showFail && (
				<p className="pt-5 text-red-500 text-lg font-bold">
					Sending Failed, please contact info@ckasidis.com
				</p>
			)}
			<motion.button
				type="submit"
				className="bg-gray-50 hover:bg-gray-600 w-40 px-10 py-3 mt-10 rounded-full hover:text-gray-50 text-lg text-center font-bold"
				whileHover={{ scale: 1.1 }}
			>
				{buttonText}
			</motion.button>
		</form>
	);
};

export default ContactForm;
