import Item from "./TodoItem"
function List(){
    return(
        <div>
            <ul className="list-group">
                <Item task ="Task 1" isCompleted={true} />
                <Item task ="Task 2" isCompleted={false} />
                <Item task ="Task 3" isCompleted={true} />
            </ul>
        </div>
    )
}

export default List