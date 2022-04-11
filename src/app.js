import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes/bookingsRoutes';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import res from 'express/lib/response';
// import { addBooking } from './controllers/bookingsController';

const bookings = [];

export const initializeApp = () => {

    const app = express();
    // app.use(bodyParser.urlencoded({
    //     extended: true
    // }));

    app.use(bodyParser.json());

    app.get('/', (req, res) => res.send(req.headers)

    );

    app.post('/bookings', (req, res) => addBooking(req, res));


    app.get('/bookings/:id', (req, res) => res.send(bookings));


    // app.use((req, res) => {
    //     res.status(StatusCodes.NOT_FOUND).send({
    //         message: ReasonPhrases.NOT_FOUND,
    //         statusCode: StatusCodes.NOT_FOUND,
    //     });
    // });
    // app.use(_logErrors);
    // app.use(_errorHandler);

    console.log('App successfully bootstrapped');

    return app;
}

function addBooking(req, res) {

    const booking = req.body;
    const id = req.body.id;

    if (id) {
        bookings.push(booking);
        res.send(booking);
    } else {
        res.sendStatus(404);
    }

}