import express from "express";

import { addTodo, fetchTodos, toggleTodoDone } from "../controller/controller.js";

const route = express.Router();

route.post("/todos", addTodo);

route.get("/todos", fetchTodos);

route.get("/todos/:id", toggleTodoDone);


export default route;
