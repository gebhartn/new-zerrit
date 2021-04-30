import { fromEnv } from "@aws-sdk/credential-provider-env";
import { S3Client, ListBucketsCommand, ListBucketsOutput } from "@aws-sdk/client-s3";
import config from "config";

export const client = new S3Client({
  region: config.get<string>("aws.region"),
  credentials: fromEnv()
});

export const listBucket = async (): Promise<ListBucketsOutput> => {
  const result = await client.send(new ListBucketsCommand({}));

  return result;
};
