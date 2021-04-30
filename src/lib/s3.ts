import { fromEnv } from '@aws-sdk/credential-provider-env';
import {
    S3Client,
    HeadObjectOutput,
    GetObjectOutput,
    PutObjectOutput,
    DeleteObjectOutput,
    HeadObjectCommand,
    DeleteObjectCommand,
    GetObjectCommand,
    PutObjectCommand,
} from '@aws-sdk/client-s3';
import config from 'config';

export const client = new S3Client({
    region: config.get<string>('aws.region'),
    credentials: fromEnv(),
});

const makeHeadObject = (Bucket: string) => async (Key: string): Promise<HeadObjectOutput> => {
    return client.send(
        new HeadObjectCommand({
            Key,
            Bucket,
        })
    );
};
const makeGetObject = (Bucket: string) => async (Key: string): Promise<GetObjectOutput> => {
    return client.send(
        new GetObjectCommand({
            Key,
            Bucket,
        })
    );
};
const makePutObject = (Bucket: string) => async (Key: string): Promise<PutObjectOutput> => {
    return client.send(
        new PutObjectCommand({
            Key,
            Bucket,
        })
    );
};
const makeDeleteObject = (Bucket: string) => async (Key: string): Promise<DeleteObjectOutput> => {
    return client.send(
        new DeleteObjectCommand({
            Key,
            Bucket,
        })
    );
};

export const headObject = makeHeadObject(config.get<string>('aws.bucketName'));
export const getObject = makeGetObject(config.get<string>('aws.bucketName'));
export const putObject = makePutObject(config.get<string>('aws.bucketName'));
export const deleteObject = makeDeleteObject(config.get<string>('aws.bucketName'));

// Bucket Partition
//
