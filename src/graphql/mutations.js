"use strict";
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
exports.__esModule = true;
exports.deleteTodo = exports.updateTodo = exports.createTodo = void 0;
exports.createTodo = "mutation CreateTodo(\n  $input: CreateTodoInput!\n  $condition: ModelTodoConditionInput\n) {\n  createTodo(input: $input, condition: $condition) {\n    id\n    name\n    description\n    createdAt\n    updatedAt\n    __typename\n  }\n}\n";
exports.updateTodo = "mutation UpdateTodo(\n  $input: UpdateTodoInput!\n  $condition: ModelTodoConditionInput\n) {\n  updateTodo(input: $input, condition: $condition) {\n    id\n    name\n    description\n    createdAt\n    updatedAt\n    __typename\n  }\n}\n";
exports.deleteTodo = "mutation DeleteTodo(\n  $input: DeleteTodoInput!\n  $condition: ModelTodoConditionInput\n) {\n  deleteTodo(input: $input, condition: $condition) {\n    id\n    name\n    description\n    createdAt\n    updatedAt\n    __typename\n  }\n}\n";
