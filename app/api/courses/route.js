import { NextResponse } from "next/server";
import courses from "./data.json";
import crypto from "crypto";

export async function GET(request) {
  return NextResponse.json(courses);
}

export async function POST(request) {
  const { title, description, level, link } = await request.json();

  const newCourse = {
    id: crypto.randomUUID(),
    title,
    description,
    level,
    link,
  };
  courses.push(newCourse);

  return NextResponse.json({ message: "Course created!" });
}
