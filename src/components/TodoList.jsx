import Item from "./TodoItem"
function List(){
    return(
        <div>
            <ul className="list-group">
                <Item task ="Task 1" />
                <Item task ="Task 2" />
                <Item task ="Task 3" />
            </ul>
        </div>
    )
}

export default List