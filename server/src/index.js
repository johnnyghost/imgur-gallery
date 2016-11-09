import http from 'http';
import express from 'express';
import { createRoutes } from './routes';
import { createMiddlewares } from './middlewares';
import { DEFAULT_PORT } from './config';

const app = express();
app.server = http.createServer(app);

// create middlewares
createMiddlewares(app);

// create routes
createRoutes(app);

app.server.listen(process.env.PORT || DEFAULT_PORT);

console.log(`Started on port ${app.server.address().port}`);
