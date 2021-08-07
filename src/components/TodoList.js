import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, handleClearList, handleDelete, handleEdit } = this.props;

    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">tod list</h3>
        {items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              handleDelete={() => handleDelete(item.id)}
              title={item.title}
              handleEdit={() => handleEdit(item.id)}
            ></TodoItem>
          );
        })}
        <div className="d-grid  gap-2">
          <button
            className="btn btn-danger text-uppercase mt-5"
            type="button"
            onClick={handleClearList}
          >Clear list</button>
        </div>
      </ul>
    );
  }
}
