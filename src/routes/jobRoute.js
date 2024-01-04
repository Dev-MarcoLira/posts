import route from 'express'
const router = route.Router()

import jobService from '../service/jobService.js'
import jobFactory from '../factory/jobFactory.js'

router.get('/enqueue', async (req, res) => {
    
    const job = new jobService(new jobFactory('hello-queue'))
    job.enqueueHelloJob({ text: 'Hello World' })

    res.writeHead(200)
    res.end('Job enqueued!');
})

export default router