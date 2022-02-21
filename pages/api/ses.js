import { sesClient } from '../../lib/sesClient';
import { SendEmailCommand } from '@aws-sdk/client-ses';

// AWS.config.update({ region: process.env.AWS_REGION });

// const creds = new AWS.Credentials({
// 	accessKeyId: process.env.SES_ACCESS_KEY_ID,
// 	secretAccessKey: process.env.SES_SECRET_ACCESS_KEY,
// });

// const ses = new AWS.SES({
// 	credentials: creds,
// });

const sendEmail = async (req, res) => {
	var params = {
		Destination: {
			/* required */
			CcAddresses: [
				'test001@ckasidis.com',
				/* more items */
			],
			ToAddresses: [
				'me@ckasidis.com',
				/* more items */
			],
		},
		Message: {
			/* required */
			Body: {
				/* required */
				Html: {
					Charset: 'UTF-8',
					Data: 'HTML_FORMAT_BODY',
				},
				Text: {
					Charset: 'UTF-8',
					Data: 'TEXT_FORMAT_BODY',
				},
			},
			Subject: {
				Charset: 'UTF-8',
				Data: 'Test email',
			},
		},
		Source: 'no-reply@ckasidis.com' /* required */,
		ReplyToAddresses: [
			'info@ckasidis.com',
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

	// ses.sendEmail(params, function (err, data) {
	// 	if (err) {
	// 		console.log(err, err.stack);
	// 		res.status(err.statusCode || 500).json({ error: err.message });
	// 	}
	// 	// an error occurred
	// 	else {
	// 		console.log(data);
	// 		res.status(200).json({ error: '' });
	// 	} // successful response
	// });
};

export default sendEmail;
