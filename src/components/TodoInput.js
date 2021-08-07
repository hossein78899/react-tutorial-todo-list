import React, { Component } from "react";

export default class todoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-text bg-primary text-white">
              <i className="fas fa-book"></i>
            </div>
            <input
              type="text"
              placeholder="add todo item"
              value={item}
              onChange={handleChange}
              className="form-control text-capitalize"
            />
          </div>
          <div className="d-grid gap-2">
            <button
              disabled={item ? false : true}
              className={
                editItem
                  ? "btn btn-success mt-3"
                  : "btn btn-primary mt-3 text-uppercase"
              }
              type="submit"
            >
              {editItem ? "edite item" : "add item"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
