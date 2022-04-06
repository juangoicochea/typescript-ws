import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, {Request, Response, NextFunction, Application} from 'express';
import morgan from 'morgan';
import config from './lib/config';
import router from './routes';

const app: Application = express();
app.use(express.urlencoded({extended: true, limit: '50mb'})); //middleware
app.use(express.json({limit: '50mb'}));
app.use(cookieParser());
app.use(morgan('dev'));

app.use(
	cors({
		origin: config.cors,
		credentials: true,
		methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
		allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
	})
);

app.use('/user', router);

app.get('/', (req: Request, res: Response) => {
	res.send('hola typescript!');
});

interface error {
	status: number;
	message: string;
}
app.use((err: error, req: Request, res: Response, next: NextFunction) => {
	// eslint-disable-line no-unused-vars
	const status = err.status || 500;
	const message = err.message || err;
	console.error(err);
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.status(status).send(message);
});

export default app;