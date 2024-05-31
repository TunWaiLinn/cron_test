// app/api/getWordOfTheDay/route.js
import { db } from "@/db";
import { NextResponse } from "next/server";

export async function GET() {
  const currentDate = new Date().toISOString().split("T")[0];
  const result = await db.wordOfTheDay.findFirst({
    where: {
      date: currentDate,
    },
  });

  return NextResponse.json({ word: result ? result.word : null });
}
