import { cv } from "@/data/cv";

export const metadata = { title: "CV" };

export default function CVPage() {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="mb-4 text-xl font-semibold">Experience</h2>
        {cv.experience.map((job) => (
          <div key={job.org + job.role} className="mb-6">
            <strong>{job.org}</strong>
            <em> - {job.location}</em>
            <br></br>
            <em>{job.role}</em> | {job.dates}
            <ul className="ml-5 list-disc">
              {job.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Education</h2>
        {cv.education.map((e) => (
          <div key={e.degree} className="mb-3">
            <strong>{e.school}</strong> - <em>{e.location}</em>
            <br></br>
            <em>{e.degree}</em>
            <p className="text-sm text-gray-600">{e.note}</p>
          </div>
        ))}
      </section>
    </div>
  );
}