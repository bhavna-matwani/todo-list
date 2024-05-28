import React, { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { listTodos } from "./graphql/queries";
import { createTodo, deleteTodo, updateTodo } from "./graphql/mutations";
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);
const client = generateClient();
const initialState = { name: "", description: "" };

function App() {
  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);
  const [apiError, setApiError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchTodos() {
    setIsLoading(true);
    try {
      const todoData = await client.graphql({ query: listTodos });
      const todos = todoData.data.listTodos.items;
      setTodos(todos);
      setApiError(null);
    } catch (error) {
      console.error("Failed fetching todos:", error);
      setApiError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) {
        return;
      }
      const todo = { ...formState };
      setTodos([...todos, todo]);
      setFormState(initialState);
      await client.graphql({ query: createTodo, variables: { input: todo } });
      setApiError(null);
    } catch (error) {
      console.error("Failed creating todo:", error);
      setApiError(error);
    }
  }

  async function removeTodo(id) {
    try {
      await client.graphql({ query: deleteTodo, variables: { input: { id } } });
      setTodos(todos.filter((todo) => todo.id !== id));
      setApiError(null);
    } catch (error) {
      console.error("Failed deleting todo:", error);
      setApiError(error);
    }
  }

  async function onItemUpdate(todo) {
    try {
      await client.graphql({
        query: updateTodo,
        variables: {
          input: {
            id: todo.id,
            name: todo.name,
            description: todo.description,
          },
        },
      });
      setApiError(null);
    } catch (error) {
      console.error("Failed updating todo:", error);
      setApiError(error);
    }
  }

  const errorMessage = apiError && (
    <div style={styles.errorContainer}>
      <p style={styles.errorText}>Error:</p>
      {apiError.errors.map((error) => (
        <p key={error.message} style={styles.errorText}>{error.message}</p>
      ))}
    </div>
  );

  if (isLoading) {
    return <div style={styles.loading}>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Todo List App using React, GraphQL & Amplify</h1>
      {errorMessage}
      <CreateTodo
        description={formState.description}
        name={formState.name}
        onCreate={addTodo}
        onDescriptionChange={(e) => setInput("description", e.target.value)}
        onNameChange={(e) => setInput("name", e.target.value)}
      />
      <TodoList
        todos={todos}
        onRemoveTodo={removeTodo}
        onItemUpdate={onItemUpdate}
      />
    </div>
  );
}

const styles = {
  container: {
    padding: 20,
    maxWidth: 800,
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  errorContainer: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ffe6e6",
  },
  errorText: {
    color: "#cc0000",
    margin: 0,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
  },
  loading: {
    fontSize: 24,
    textAlign: "center",
  },
};

export default App;
