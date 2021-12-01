import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import ExerciseList from "./components/exercise-list.component";
import EditExercise from "./components/exercise-edit.component";
import CreateExercise from "./components/exercise-create.component";
import CreateUser from "./components/user-create.component";
import Navbar from "./components/navbar.component";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<ExerciseList />} />
        <Route path="/edit/:id" exact element={<EditExercise />} />
        <Route path="/create" exact element={<CreateExercise />} />
        <Route path="/user" exact element={<CreateUser />} />
      </Routes>
    </div>
  );
}

export default App;
