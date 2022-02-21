import express from 'express';
import { createCourse } from './routes';

const app = express();
app.get('/', createCourse)

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
})