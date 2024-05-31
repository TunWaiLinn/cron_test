// app/api/setWordOfTheDay/route.js
import { NextResponse } from "next/server";
import { open } from "sqlite";
import sqlite3 from "sqlite3";

const words = ["hello", "hi"];

export async function GET() {
  const db = await open({
    filename: "./word-of-the-day.db",
    driver: sqlite3.Database,
  });

  const currentDate = new Date().toISOString().split("T")[0];
  const randomWord = words[Math.floor(Math.random() * words.length)];

  await db.run(
    "INSERT OR REPLACE INTO word_of_the_day (date, word) VALUES (?, ?)",
    [currentDate, randomWord]
  );

  return NextResponse.json({
    message: "Word of the day set",
    word: randomWord,
  });
}
