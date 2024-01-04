import { Worker } from 'bullmq'
import redisConfig from '../config/redisConfig.js'

const queueName = 'hello-queue';
const concurrency = 1; // Number of concurrent jobs the worker should process

const worker = new Worker(queueName, async (job) => {
  console.log(`Processing job: ${job.id}, ${job.name}, Data: ${job.data}`);
  // Your job processing logic here
},{
  concurrency,
  connection: redisConfig
});

console.log(`Worker is running for queue: ${queueName}`);