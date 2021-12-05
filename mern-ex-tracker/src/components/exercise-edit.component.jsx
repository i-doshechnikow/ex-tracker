import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditExercise = (props) => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);

  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/exercises/${id}`).then((res) => {
      setUsername(res.data.username);
      setDescription(res.data.description);
      setDuration(res.data.duration);
    });
  }, []);

  let onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  let onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  let onChangeDuration = (e) => {
    setDuration(e.target.value);
  };

  let onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username: username,
      description: description,
      duration: duration,
    };

    axios
      .post(`http://localhost:5000/exercises/update/${id}`, exercise)
      .then((res) => {
        console.log(res);
        window.location = "/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>Edit exercise</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            required
            className="form-control"
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Update Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditExercise;
