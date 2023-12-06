/* eslint-disable react/prop-types */
const TodoItem = ({ todoItems }) => {
  console.log("todos----", todoItems);
  return (
    <>
      {todoItems.map((item) => {
        return (
          <div className="row kg-row" key={item.id}>
            <div className="col-6">{item.name}</div>
            <div className="col-4">{item.date}</div>
            <div className="col-2">
              <button type="button" className="btn btn-danger kg-button">
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TodoItem;
