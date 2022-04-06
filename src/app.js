import bodyParser from 'body-parser';
import express from 'express';
import { body, oneOf, validationResult } from "express-validator";
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { Booking } from './booking';

const bookings = [];

export const initializeApp = () => {
    const app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.get(`/api/bookings/:id`, function (req, res, next) {
        console.log(`received view bookings request`);
        try {
            const id = req.params.id;
            const booking = bookings.find(booking => booking.id == id);
            // other service call (or same service, different functions can go here)
            console.log("found booking....", booking);
            if (booking) {
                res.send(booking);
                console.log(`found booking with id ${id}`);
            } else {
                console.log(`no booking found with id ${id}`);
                res.sendStatus(StatusCodes.NOT_FOUND);
            }
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    });

    app.post('/api/booking', async function (req, res, next) {
        try {
            const validationResults = await _validateRequest(req);

            if (!validationResults.isEmpty()) {
                console.log("validation failed");
                const errorMsg = validationResults.errors;
                res
                    .status(StatusCodes.BAD_REQUEST)
                    .send(`validation done, error(s): ${JSON.stringify(errorMsg)}`);
            } else {
                console.log("there are no validation errors");

                const {
                    id,
                    firstName,
                    lastName,
                    emailAddress,
                    phoneNumber,
                    flightDate,
                    flightDestination
                } = req.body;

                const booking = new Booking(id);
                booking.setPassenger(firstName, lastName, emailAddress, phoneNumber, flightDate, flightDestination);
                bookings.push(booking);

                // other service call (or same service, different functions can go here)
                res.sendStatus(StatusCodes.CREATED);
            }
        } catch (error) {
            console.log(error.message);
            next(error);
        }
    });

    app.get('/', function (req, res) {
        res.send('App is working');
    });

    app.use(function (req, res) {
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

async function _validateRequest(req) {
    await oneOf([
        [
            body("emailAddress", "Email address is mandatory").exists(),
            body("phoneNumber", "Phone number is mandatory").exists(),
        ],
    ]).run(req);
    await body(
        ["firstName", "lastName"],
        "First name and last name should be characters only"
    )
        .isAlpha()
        .run(req);

    const validationResults = validationResult(req);
    console.info(`validation results: ${JSON.stringify(validationResults)}`);
    return validationResults;
};

function _logErrors(err, req, res, next) {
    console.error(`ERROR occurred for request: ${req.originalUrl}`);
    console.error(err.stack);
    next(err);
}

function _errorHandler(err, req, res, next) {
    res.status(err.code ? err.code : StatusCodes.INTERNAL_SERVER_ERROR);
    res.send(err.message);
}