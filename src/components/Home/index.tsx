import * as React from "react";
import { Link } from 'react-router-dom'

class Home extends React.Component<{}, {}> {
  render() {
    return <div>
      <h1>Hello, World!</h1>
      <ul>
        <li><Link to='/g/Chess'>Chess</Link></li>
      </ul>
    </div>;
  }
}

export default Home;
