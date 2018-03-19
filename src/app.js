import React from 'react';
import {render} from 'react-dom';


class App extends React.Component {
  render () {
    return <div><img width="100%" src="assets/oj.jpg"></img><section className="container"><section>
      </section></section></div>
    ;
  }
}

render(<App/>, document.getElementById('app'));
