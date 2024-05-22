import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "@/app/services/db";
import { Comment } from "@/app/services/model/comment";
export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionStr);
    data = await Comment.find();
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({
    data,
  });
}
