import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todoDate: [
      {
        id: 1,
        name: "Shuhrat",
        surName: "Sharipov",
        age: 25,
      },
      {
        id: 2,
        name: "Shuhrat",
        surName: "Sharipov",
        age: 22,
      },
      {
        id: 3,
        name: "Shuhrat",
        surName: "Sharipov",
        age: 24,
      },
      {
        id: 4,
        name: "Shuhrat",
        surName: "Sharipov",
        age: 25,
      },
      {
        id: 5,
        name: "Shuhrat",
        surName: "Sharipov",
        age: 26,
      },
      {
        id: 6,
        name: "Shuhrat",
        surName: "Sharipov",
        age: 27,
      },
      {
        id: 7,
        name: "Shuhrat",
        surName: "Sharipov",
        age: 28,
      },
      {
        id: 8,
        name: "Shuhrat",
        surName: "Sharipov",
        age: 29,
      },
      {
        id: 9,
        name: "Shuhrat",
        surName: "Sharipov",
        age: 30,
      },
      {
        id: 10,
        name: "Shuhrat",
        surName: "Sharipov",
        age: 21,
      },
    ],
    searchValue: "",
  },
  reducers: {
    deleteFunction: (state, action) => {
      state.todoDate = state.todoDate.filter(
        (todo) => todo.id !== action.payload
      );
    },
    addFunction: (state, action) => {
      state.todoDate = [...state.todoDate, action.payload];
    },
    eddFunc: (state, action) => {
      state.todoDate = state.todoDate.map((user) => {
        return user.id === action.payload.id
          ? { ...user, ...action.payload }
          : user;
      });
    },
    searchFunc: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { deleteFunction, addFunction, eddFunc, searchFunc } =
  todoSlice.actions;
export default todoSlice.reducer;
