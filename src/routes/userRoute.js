import route from 'express'
const router = route.Router()

router.get('/users', (req, res)=>{
    res.writeHead(200)
    res.write('Here you should see the users\n')
    res.end()
})

export default router