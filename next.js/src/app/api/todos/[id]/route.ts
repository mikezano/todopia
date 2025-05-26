import { NextRequest, NextResponse } from "next/server";

const API_URL = "http://localhost:3001";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log("Delete request received with ID:", params.id);
  try {
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json({ message: "Invalid todo ID" }, { status: 400 });
    }

    const res = await fetch(`${API_URL}/todos/${id}`, {
      method: "DELETE",
    });

    if (res.status === 404) {
      return NextResponse.json({ message: "Todo not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Todo deleted successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Error deleting todo:", error);
    return NextResponse.json(
      { message: "Error deleting todo" },
      { status: 500 }
    );
  }
}
