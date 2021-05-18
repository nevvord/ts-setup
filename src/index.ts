import * as express from 'express'

import { mami } from '@/routes'

console.log(mami)


const app = express()
const port = 5000
app.get('/', (request, response) => {
  response.send('Hello world! Sho')
})
app.listen(port, () => console.log(`Running on port ${port}`))