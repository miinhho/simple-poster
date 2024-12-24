import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { ApiError } from "@/types/error.types";

export function handleError(error: unknown) {
  console.error(error);

  if (error instanceof ZodError) {
    return NextResponse.json(
      { error: error.errors[0].message },
      { status: 400 }
    );
  }

  if (error instanceof ApiError) {
    return NextResponse.json(
      { error: error.message },
      { status: error.statusCode }
    );
  }

  if (error instanceof Error) {
    return NextResponse.json(
      { error: error.message },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { error: 'Internal server error' },
    { status: 500 }
  );
}