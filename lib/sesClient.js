import AWS from 'aws-sdk';
import { SESClient } from '@aws-sdk/client-ses';

const creds = new AWS.Credentials({
	accessKeyId: process.env.SES_ACCESS_KEY_ID,
	secretAccessKey: process.env.SES_SECRET_ACCESS_KEY,
});

const sesClient = new SESClient({
	credentials: creds,
	region: process.env.AWS_REGION,
});

export { sesClient };
