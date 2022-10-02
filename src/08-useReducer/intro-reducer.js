const initialValue = [{
    id: 1,
    todo: "Hacer la introducción",
    done: false,
}];

//reducer es solo una función que va a tener 2 argumentos, el estado inicial y las acciones
//una característica es que sea una función pura, es decir que no lancé efectos secundarios
//solo debe afectar al estado 
const todoReducer = (state = initialValue, action = {}) => {

    if (action.type === "[TODO] add todo") {
        return [...state, action.payload];
    }
    return state;
}



let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: "Hacer el problema y sus objetivos",
    done: false
}

const actionAddTodo = {
    type: "[TODO] add todo",
    payload: newTodo,
}


todos = todoReducer(todos, actionAddTodo);

console.log({ state: todos })