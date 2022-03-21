import {
    initializeApp
} from './app';

const app = initializeApp();

const port = process.env.PORT || 4001;
const host = '0.0.0.0';

const server = app.listen(port, host, () => {
    console.log(`App listening on port: ${server.address().port}`);
});