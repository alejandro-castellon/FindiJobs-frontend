// import { sql } from '@vercel/postgres';
// import { Resume } from '@/types/types';
// import { unstable_noStore as noStore } from 'next/cache';

// export async function fetchResumeById(id: string) {
//     noStore();
//     try {
//       const data = await sql<Resume>`
//         SELECT
//           resumes.id,
//           resumes.userId,
//           resumes.name,
//           resumes.title
//         FROM resumes
//         WHERE resumes.userId = ${id};
//       `;

//       const resume = data.rows.map(resume)

//       return resume[0];
//     } catch (error) {
//       console.error('Database Error:', error);
//       throw new Error('Failed to fetch invoice.');
//     }
//   }
