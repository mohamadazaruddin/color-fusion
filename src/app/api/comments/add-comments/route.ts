import { connectionStr } from "@/app/services/db";
import mongoose from "mongoose";
import { Comment } from "@/app/services/model/comment";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const payload = await req.json();
  await mongoose.connect(connectionStr);
  let comment = new Comment(payload);
  const result = await comment.save();
  return NextResponse.json(result);
}
