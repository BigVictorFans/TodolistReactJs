function Item(props) {
  const { id, text, isCompleted, todos, setTodos } = props;
  const handleUpdate = () => {
    const updatedTodos = todos.map((item) => {
        if (item.id === id){
            if (item.isCompleted === true){
                item.isCompleted = false
            }
            else{
                item.isCompleted = true
            } 
        }
        return item
    })
    setTodos(updatedTodos)
  };
  const handleRemove = () => {
    const confirmRemove = window.confirm(
      "are you sure you want to execute this item?"
    );
    //confirm then remove item
    if (confirmRemove){
      //removes item from todos
      //use filter to keep everything except the item you are executing
      const updatedTodos = todos.filter(item => {
        //return true is keep; return false is dump
        if (item.id !== id){
          return true; //keep
        }
        else{
          return false;
        }
      });
      //update todos state
      setTodos(updatedTodos)
    }
  };
  const handleEdit = () => {
    const newTask = prompt("please enter the new task")
    //make sure it's not null
    if (newTask) {
      //long method
      //clone existing todos
      const updatedTodos = [...todos];
          // short short method
      setTodos(
        todos.map((item) => {
          if (item.id === id) {
            item.text = newTask; // update the value
          }
          return item;
        })
      );

    }
  };
  return (
        <div>
            <li
                className="list-group-item d-flex justify-content-between align-items-center"
            >
                <div>

                    { isCompleted? (
                        <button className="btn btn-sm btn-success" onClick={handleUpdate}>
                            <i className="bi bi-check-square"></i>
                        </button>
                    ) : (
                        <button className="btn btn-sm " onClick={handleUpdate}>
                            <i className="bi bi-square"></i>
                        </button>
                    )}

                    <span className="ms-2">{text}</span>
                </div>
                <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-warning " onClick={handleEdit}>
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button className="btn btn-sm btn-danger " onClick={handleRemove}>
                      <i className="bi bi-trash"></i>
                    </button>
                </div>
            </li>
        </div>
  );
}

export default Item 