import { atom, selector } from "recoil";

export const createTodoAtom = atom({
    key: "createTodoAtom",
    default: {
        id_todo: 0,
        title: "",
        description: "",
    },
});

export const todoAtom = atom({
    key: "todoAtom",
    default: [],
});

export const filterTodoAtom = atom({
    key: "filterTodoAtom",
    default: "",
});

export const filterTodoSelector = selector({
    key: "filterTodoSelector",
    get: ({ get }) => {
        const todos = get(todoAtom);
        const filter = get(filterTodoAtom);
        const filterTodos = todos.filter((todo) => {
            if (
                todo.title.includes(filter) ||
                todo.description.includes(filter) ||
                todo.id_todo.includes(filter)
            ) {
                return true;
            }
        });
        return filterTodos;
    },
});
