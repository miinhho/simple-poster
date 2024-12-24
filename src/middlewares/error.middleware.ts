import { handleError } from "@/lib/error";
import { NextRequest } from "next/server";

export function withErrorHandling(handler: Function) {
  return async (request: NextRequest, ...args: any[]) => {
    try {
      return await handler(request, ...args);
    } catch (error) {
      return handleError(error);
    }
  }
}