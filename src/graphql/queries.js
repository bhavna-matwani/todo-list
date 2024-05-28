"use strict";
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
exports.__esModule = true;
exports.listTodos = exports.getTodo = void 0;
exports.getTodo = "query GetTodo($id: ID!) {\n  getTodo(id: $id) {\n    id\n    name\n    description\n    createdAt\n    updatedAt\n    __typename\n  }\n}\n";
exports.listTodos = "query ListTodos(\n  $filter: ModelTodoFilterInput\n  $limit: Int\n  $nextToken: String\n) {\n  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {\n    items {\n      id\n      name\n      description\n      createdAt\n      updatedAt\n      __typename\n    }\n    nextToken\n    __typename\n  }\n}\n";
