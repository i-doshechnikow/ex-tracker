import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exercise = (props) => {
  const { username, description, duration, _id } = props.exercise;
  return (
    <tr>
      <td>{username}</td>
      <td>{description}</td>
      <td>{duration}</td>
      <td>
        <Link to={`/edit/${_id}`}>
          <span>edit</span>
        </Link>{" "}
        |{" "}
        <a
          href="#"
          onClick={() => {
            props.deleteExercise(_id);
          }}
        >
          <span>delete</span>
        </a>
      </td>
    </tr>
  );
};
export default class ExerciseList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {
      exercises: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/exercises/")
      .then((res) => {
        this.setState({ exercises: res.data });
        console.log(this.state);
      })
      .catch((err) => console.log(err));
  }

  deleteExercise(id) {
    axios
      .delete(`http://localhost:5000/exercises/${id}`)
      .then((res) => {
        this.setState({
          exercises: this.state.exercises.filter(
            (exercise) => exercise._id !== id
          ),
        });
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  exerciseList() {
    return this.state.exercises.map((exercise) => {
      return (
        <Exercise
          exercise={exercise}
          deleteExercise={this.deleteExercise}
          key={exercise._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Exercise</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.exerciseList()}</tbody>
        </table>
      </div>
    );
  }
}
