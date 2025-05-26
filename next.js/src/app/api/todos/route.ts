import { TodoItem } from "@/interface/TodoItem";
import { NextRequest, NextResponse } from "next/server";

const API_URL = "http://localhost:3001";

// GET all todos
export async function GET() {
  try {
    const res = await fetch(`${API_URL}/todos`);
    const todos: TodoItem[] = await res.json();
    console.log("Fetched Todos on API:", todos);
    return NextResponse.json(todos);
  } catch (error: unknown) {
    console.error("Error fetching todos:", error);
    return NextResponse.json(
      { message: "Error fetching todos" },
      { status: 500 }
    );
  }
}

// POST new todo
export async function POST(request: NextRequest) {
  try {
    const todo: TodoItem = await request.json();

    // Ensure the todo has required fields
    if (!todo.description) {
      return NextResponse.json(
        { message: "Description is required" },
        { status: 400 }
      );
    }

    // Set defaults if not provided
    const newTodo = {
      id: todo.id || Date.now(),
      description: todo.description,
      completed: todo.completed || false,
    };

    const res = await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });

    const createdTodo = await res.json();
    return NextResponse.json(createdTodo, { status: 201 });
  } catch (error: unknown) {
    console.error("Error creating todo:", error);
    return NextResponse.json(
      { message: "Error creating todo" },
      { status: 500 }
    );
  }
}

// PUT update todo
export async function PUT(request: NextRequest) {
  try {
    const todo: TodoItem = await request.json();

    if (!todo.id) {
      return NextResponse.json(
        { message: "Todo ID is required" },
        { status: 400 }
      );
    }

    const res = await fetch(`${API_URL}/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    if (res.status === 404) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }

    const updatedTodo = await res.json();
    return NextResponse.json(updatedTodo);
  } catch (error: unknown) {
    console.error("Error updating todo:", error);
    return NextResponse.json(
      { message: "Error updating todo" },
      { status: 500 }
    );
  }
}
