import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashBoardComponent from './components/dashboardComponent/DashBoardComponent';
import TestComponent from './components/testComponent/TestComponent';
import AdminComponent from './components/adminComponent/adminComponent';

function App() {
  return (
    <Router>

      <div className="App">
        <Switch>
          <Route exact path="/" component={AdminComponent} />
          <Route exact path="/Dashboard" component={DashBoardComponent} />
          <Route exact path="/Test" component={TestComponent} />
          <Route path="/*" component={() => {
            return (
              <div>404</div>
            )
          }} />
        </Switch>
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
