import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DashBoardComponent from './components/dashboardComponent/DashBoardComponent';
import TestComponent from './components/testComponent/TestComponent';

function App() {
  return (
    <Router>

      <div className="App">
        <Route exact path="/" component={DashBoardComponent} />
        <Route exact path="/Test" component={TestComponent} />
      </div>
    </Router>
  );
}

export default App;


// <Route
//   exact
//   path="/"
//   render={props => (
//     <React.Fragment>
//       <AddTodo addTodo={this.addTodo} />
//       <Todos
//         todos={this.state.todos}
//         markComplete={this.markComplete}
//         delTodo={this.delTodo}
//       />
//     </React.Fragment>
//   )}
// />
//   <Route path="/about" component={About} />
//   </div >
// </div >
// </Router >
