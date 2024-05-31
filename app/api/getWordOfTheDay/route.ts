// app/api/getWordOfTheDay/route.js
import { NextResponse } from "next/server";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

export async function GET() {
  const db = await open({
    filename: "./word-of-the-day.db",
    driver: sqlite3.Database,
  });

  const currentDate = new Date().toISOString().split("T")[0];
  const result = await db.get(
    "SELECT word FROM word_of_the_day WHERE date = ?",
    [currentDate]
  );

  return NextResponse.json({ word: result ? result.word : null });
}
