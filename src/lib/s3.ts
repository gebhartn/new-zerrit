import { S3Client } from '@aws-sdk/client-s3';
import config from 'config';

const client = new S3Client({
  region: config.get<string>('aws.region'),
});

export default client;
