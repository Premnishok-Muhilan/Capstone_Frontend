import { configureStore } from "@reduxjs/toolkit";

// UNCOMMENTED BEFORE - - - - - - - - - - - - - - - - 
// import todoReducer from "../features/todos/todoSlice";
import registerReducer from "../features/users/registerSlice";
import loginReducer from "../features/users/loginSlice";

const store = configureStore({
    reducer: {
        // todos: todoReducer,
        register: registerReducer,
        login: loginReducer
    }
});

export default store;