import express from 'express';
import { createCourse } from './routes';

const port = 3000

const app = express();
app.get('/', createCourse)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})