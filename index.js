import express from 'express';
import apiRouters from './app/routers/apiRouters'
import swaggerUi from 'swagger-ui-express'
import swaggerDoc from './swagger.json'

const app = express()
const port = 3000

app.use(express.json());

app.use('/api/v1/', apiRouters)
app.use('/doc',swaggerUi.serve,swaggerUi.setup(swaggerDoc));


app.listen(port, () => console.log(`listening on port ${port}...!`));

export default app;