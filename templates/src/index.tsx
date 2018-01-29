import * as React from 'react';
import * as ReactDOM from 'react-dom';

const ESIInclude = ({ src }: { src: string }) => React.createElement('esi:include', { src });

const App = () => (
  <html>
    <head>
      <title>Hello World</title>
      <ESIInclude src="/esi-counter/head" />
    </head>
    <body>
      <header>
        <h1>Page Title</h1>
      </header>
      <main id="main">
        <ESIInclude src="/esi-counter/body" />
      </main>
      <footer>Page Footer</footer>
        <ESIInclude src="/esi-counter/footer" />
    </body>
  </html>
);

export { App };
