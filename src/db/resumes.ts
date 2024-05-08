import { sql } from "@vercel/postgres";
import { Resume, User } from "@/types/types";
import { unstable_noStore as noStore } from "next/cache";

export async function fetchResumeById(userId: string) {
  noStore();
  try {
    const data = await sql<Resume>`
        SELECT
          resumes.id,
          resumes.user_id,
          resumes.name,
          resumes.title
        FROM resumes
        WHERE resumes.user_id = ${userId};
      `;

    if (data.rows.length === 0) {
      return null;
    }

    const resume = data.rows.map((row) => ({
      id: row.id,
      user_id: row.user_id,
      name: row.name,
      title: row.title,
    }));

    return resume[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoice.");
  }
}

export async function getUser(email: string) {
  noStore();
  try {
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    return user.rows[0] as User;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
