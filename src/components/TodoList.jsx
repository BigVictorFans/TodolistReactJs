import Item from "./TodoItem"
function List(props){
    const {todos} = props;
    return(
        <div>
            <ul className="list-group">
                {todos.map((item, index) => {
                    const {id, text, isCompleted } = item;
                    return <Item key={id} text={text} isCompleted={isCompleted} />;
                })}
            </ul>
        </div>
    )
}

export default List