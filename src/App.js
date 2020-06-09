import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavHomeComponent from './components/navHomeComponent/NavHomeComponent';
import HomeBannerComponent from './components/homeBannerComponent/HomeBannerComponent';
import CartComponent from './components/cartComponent/CartComponent';
import FooterComponent from './components/footerComponent/FooterComponent';

function App() {
  return (
    <Router>

      <div className="App">
        <NavHomeComponent />
        <HomeBannerComponent />
        <CartComponent />
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;


// <Router>
// <div className="App">
//   <div className="container">
//     <Header />
//     <Route
//       exact
//       path="/"
//       render={props => (
//         <React.Fragment>
//           <AddTodo addTodo={this.addTodo} />
//           <Todos
//             todos={this.state.todos}
//             markComplete={this.markComplete}
//             delTodo={this.delTodo}
//           />
//         </React.Fragment>
//       )}
//     />
//     <Route path="/about" component={About} />
//   </div>
// </div>
// </Router>
