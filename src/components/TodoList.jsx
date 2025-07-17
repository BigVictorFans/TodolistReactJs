import Item from "./TodoItem"
function List(props){
    const {todos, setTodos} = props;
    return(
        <div>
            <ul className="list-group">
                {todos.map((task) => {
                    const {id, text, isCompleted } = task;
                    return <Item key={id} id={id} text={text} isCompleted={isCompleted} todos={todos} setTodos={setTodos} />;
                })}
            </ul>
        </div>
    )
}

export default List