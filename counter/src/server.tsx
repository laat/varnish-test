import * as React from 'react';
import * as express from 'express';
import * as morgan from 'morgan';
import * as ReactDOMServer from 'react-dom/server';
import {Footer, Body, Head} from './index';

const app = express();
app.use(morgan('combined'));
app.get('/esi-counter/head', (req, res) => {
    const stream = ReactDOMServer.renderToNodeStream(<Head />);
    stream.pipe(res);
})
app.get('/esi-counter/body', (req, res) => {
    const stream = ReactDOMServer.renderToNodeStream(<Body />);
    stream.pipe(res);
});
app.get('/esi-counter/footer', (req, res) => {
    const stream = ReactDOMServer.renderToStaticNodeStream(<Footer />);
    stream.pipe(res)
})
app.use('/_static/counter', express.static('static'));
app.listen(80, () => console.log('Counter app listening on port 80!'));
