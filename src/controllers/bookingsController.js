import {
    createBooking,
    readBooking
} from "../services/bookingsServices";

import {
    body,
    oneOf,
    validationResult
} from "express-validator";
import {StatusCodes} from 'http-status-codes';

/*
 * call other imported services, or same service but different functions here if you need to
 */
export const addBooking = async (req, res, next) => {
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
            await createBooking(req.body);
            // other service call (or same service, different functions can go here)
            res.sendStatus(StatusCodes.CREATED);
        }
    } catch (error) {
        console.log(error.message);
        next(error);
    }
};

export const viewBooking = async (req, res, next) => {
    console.log(`received view bookings request`);
    try {
        const id = req.params.id;
        const booking = await readBooking(id);
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
};

const _validateRequest = async (req) => {
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