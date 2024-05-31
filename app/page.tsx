// app/page.js
import React from "react";

// async function getWordOfTheDay() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getWordOfTheDay`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch the word of the day");
//   }
//   const data = await res.json();
//   return data.word;
// }

export default async function Home() {
  // const wordOfTheDay = await getWordOfTheDay();
  const wordOfTheDay = "Hello";

  return (
    <div>
      <h1>Word of the Day</h1>
      <p className="text-white">{wordOfTheDay}</p>
    </div>
  );
}
