function AddItem(props){
    const { todos, setTodos } = props;
    return (
        <div>
            <div className="mt-4">
                <form>
                    <div className="mt-4 d-flex justify-content-between align-items-center">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Add new task..."
                        id="taskname"
                        required
                        />
                        <button
                        className="btn btn-primary btn-sm rounded ms-2"
                        onClick={(event) => {
                            // disable the default button behaviour
                            event.preventDefault();

                            // check if the input field is empty or not
                            if (taskname.value === "") {
                            alert("Please fill in the name");
                            } else {
                            setTodos([
                                ...todos,
                                {
                                id: Math.random(),
                                text: taskname.value,
                                },
                            ]);
                            // clear the input
                            taskname.value = "";
                            }
                        }}
                        >
                        Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddItem;