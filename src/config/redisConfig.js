// redis-connection.js
import Redis from 'ioredis'

const redisConfig = {
  port: 6379,
  host: '127.0.0.1',
};

const redisConnection = new Redis({
  maxRetriesPerRequest: null,
  ...redisConfig
});

export default redisConnection