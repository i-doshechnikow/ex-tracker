import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <ul>
        <li>home</li>
        <li>about</li>
        <li>google</li>
        <li>telegram</li>
      </ul>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
