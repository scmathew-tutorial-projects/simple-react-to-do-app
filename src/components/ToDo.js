import './ToDo.css';

function ToDo(props) {
    return (
        <p className="todo" onClick={props.onClick}>
            {props.value}
        </p>
    )
}

export default ToDo;