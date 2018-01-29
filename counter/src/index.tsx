import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface Props {}

export interface State {
  count: number;
}

export class Head extends React.Component {
  render() {
    return <link rel="stylesheet" href="/_static/counter/styles.css" />;
  }
}
export class Body extends React.Component<Props, State> {
  state = { count: 0 };
  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div className="counter" onClick={this.onClick}>
        The count is {this.state.count}
      </div>
    );
  }
}
export class Footer extends React.Component {
  init() {
    function callback() {
      var el = document.getElementById('main') as HTMLElement;
      window.hydrateCounter(el);
    }
    //@ts-ignore
    if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }
  render() {
    return (
      <>
        <script src="/_static/counter/bundle.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${this.init})()`
          }}
        />
      </>
    );
  }
}

declare global {
  interface Window {
    hydrateCounter(el: HTMLElement): any;
  }
}
if (typeof window !== 'undefined') {
  window.hydrateCounter = el => {
    ReactDOM.hydrate(<Body />, el);
  };
}
