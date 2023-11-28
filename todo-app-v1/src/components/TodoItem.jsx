const TodoItem = () => {
  return (
    <div className="row kg-row">
      <div className="col-6">buy milk</div>
      <div className="col-4">26/10/1995</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger kg-button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
