/* Create a small HTTP server using Express */
import express from 'express';
import route from './routes/index';

const app = express();

app.use(route);

export default app.listen(1245, 'localhost');
