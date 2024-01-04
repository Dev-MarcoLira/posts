import { randomUUID } from 'crypto'

class JobService {

  constructor( JobFactory ) {
    this.queue = JobFactory.createHelloQueue();
  }

  async enqueueHelloJob(data) {
    await this.queue.add('hello-job', {
      id: randomUUID(),
      data
    });
  }
}

export default JobService