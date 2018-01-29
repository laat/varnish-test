import * as React from 'react';
import * as express from 'express';
import * as morgan from 'morgan';
import * as ReactDOMServer from 'react-dom/server';
import {App} from './index';

const app = express();
app.use(morgan("combined"))
app.get('/', (req, res) => {
    const stream = ReactDOMServer.renderToStaticNodeStream(<App />);
    stream.pipe(res)
})
app.listen(80, () => console.log('Example app listening on port 80!'))
