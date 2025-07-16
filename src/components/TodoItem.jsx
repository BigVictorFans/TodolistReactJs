function Item(props) {
  const { task, isCompleted } = props;
  return (
        <div>
            <li
                className="list-group-item d-flex justify-content-between align-items-center"
            >
                <div>

                    { isCompleted? (
                        <button className="btn btn-sm btn-success">
                            <i className="bi bi-check-square"></i>
                        </button>
                    ) : (
                        <button className="btn btn-sm ">
                            <i className="bi bi-square"></i>
                        </button>
                    )}

                    <span className="ms-2">{task}</span>
                </div>
                <div>
                    <button className="btn btn-sm btn-danger">
                    <i className="bi bi-trash"></i>
                    </button>
                </div>
            </li>
        </div>
  );
}

export default Item 