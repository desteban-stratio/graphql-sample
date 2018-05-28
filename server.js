import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import schema from './schemas/schema';
import mongoose from 'mongoose';

const app = express();

app.use(cors());

mongoose.connect('mongodb://localhost/graphqlserver');

const connection = mongoose.connection;

connection.once('once', () => {
    console.log('MongDB database connection established successfully');
});

app.use('/grahpiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({schema}))

app.listen(4000, () => console.log('Express server running on port 4000'));