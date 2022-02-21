import { sesClient } from '../../lib/sesClient';
import { SendEmailCommand } from '@aws-sdk/client-ses';

const sendEmail = async (req, res) => {
	var params = {
		Destination: {
			/* required */
			CcAddresses: [
				/* more items */
			],
			ToAddresses: [
				'info@ckasidis.com',
				/* more items */
			],
		},
		Message: {
			/* required */
			Body: {
				/* required */
				Html: {
					Charset: 'UTF-8',
					Data: `
					<h3>Full Name: ${req.body.fullname}</h3>
					<h3>Email: ${req.body.email}</h3>
					<p>${req.body.message}</p>`,
				},
				Text: {
					Charset: 'UTF-8',
					Data: `Full Name: ${req.body.fullname}\n
					Email: ${req.body.email}\n
					Message: ${req.body.message}`,
				},
			},
			Subject: {
				Charset: 'UTF-8',
				Data: `Contact from Website: ${req.body.subject}`,
			},
		},
		Source: 'no-reply@ckasidis.com' /* required */,
		ReplyToAddresses: [
			/* more items */
		],
	};

	try {
		const data = await sesClient.send(new SendEmailCommand(params));
		console.log('Success', data);
	} catch (err) {
		console.log('Error', err);
		return res.status(err.statusCode || 500).json({ error: err.message });
	}

	return res.status(200).json({ error: '' });
};

export default sendEmail;
