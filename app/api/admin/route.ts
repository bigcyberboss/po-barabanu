import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const ALLOWED_FILES = ["prices.json", "teachers.json", "reviews.json", "site.json"];

function checkAuth(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization");
  if (!authHeader) return false;
  const password = authHeader.replace("Bearer ", "");
  return password === process.env.ADMIN_PASSWORD;
}

// GET — получить данные
export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const file = searchParams.get("file");

  if (!file || !ALLOWED_FILES.includes(file)) {
    return NextResponse.json({ error: "Invalid file" }, { status: 400 });
  }

  try {
    const filePath = path.join(DATA_DIR, file);
    const content = await fs.readFile(filePath, "utf-8");
    return NextResponse.json(JSON.parse(content));
  } catch {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }
}

// PUT — обновить данные
export async function PUT(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { file, data } = body;

    if (!file || !ALLOWED_FILES.includes(file)) {
      return NextResponse.json({ error: "Invalid file" }, { status: 400 });
    }

    if (data === undefined) {
      return NextResponse.json({ error: "No data provided" }, { status: 400 });
    }

    const filePath = path.join(DATA_DIR, file);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
