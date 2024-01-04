import { Worker, Queue } from 'bullmq'
import redisConfig from '../config/redisConfig.js'

class JobFactory {
  constructor(queueName) {
    this.queueName = queueName;
  }

  createHelloQueue() {
    return new Queue(this.queueName, {
      connection: redisConfig
    })
  }

  createHelloJobWorker(data){
    return new Worker(this.queueName, async()=>{
      console.log(data)
    })
  }

}

export default JobFactory