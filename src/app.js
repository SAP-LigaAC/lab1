import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes/bookingsRoutes';
import {StatusCodes, ReasonPhrases} from 'http-status-codes';


export const initializeApp = () => {

    const app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.get('/', (req, res) => res.send('App is working'));

    app.use('/api', routes);

    app.use((req, res) => {
        res.status(StatusCodes.NOT_FOUND).send({
            message: ReasonPhrases.NOT_FOUND,
            statusCode: StatusCodes.NOT_FOUND,
        });
    });

    app.use(_logErrors);
    app.use(_errorHandler);

    console.log('App successfully bootstrapped');

    return app;
}


function _logErrors(err, req, res, next) {
    console.error(`ERROR occurred for request: ${req.originalUrl}`);
    console.error(err.stack);
    next(err);
}

function _errorHandler(err, req, res, next) {
    res.status(err.code? err.code : StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(err.message);
}