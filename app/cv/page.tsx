import { cv } from "@/data/cv";

export const metadata = { title: "CV" };

export default function CVPage() {
  return (
    <div className="space-y-10">
      <section>
        <h2 className="mb-4 text-2xl font-semibold border-b border-gray-300 pb-1">Experience</h2>
        {cv.experience.map((job) => (
          <div key={job.org + job.role} className="mb-6">
            <strong className="text-accent">
              {job.org}
              <em> - {job.location}</em>
            </strong>
            <br></br>
            <em>{job.role}</em> | {job.dates}
            <ul className="text-sm ml-5 list-disc">
              {job.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold border-b border-gray-300 pb-1">Education</h2>
        {cv.education.map((e) => (
          <div key={e.degree} className="mb-6">
            <strong className="text-accent">{e.school} - <em>{e.location}</em></strong>
            <br></br>
            <em>{e.degree}</em>
            <p className="text-sm text-gray-600">{e.honors}</p>
            {e.thesis ? <p className="text-sm text-gray-600">{e.thesis}</p> : null}
            <p className="text-sm text-gray-600">Relevant Coursework: {e.coursework}</p>
            <p></p>
          </div>
        ))}
      </section>

            <section>
        <h2 className="mb-4 text-2xl font-semibold border-b border-gray-300 pb-1">Certifications</h2>
        {cv.certifications.map((c) => (
          <div key={c.title} className="mb-3">
            <strong className="text-accent">
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="underline">
                {c.title}
              </a>{" "}
              | {c.date}
            </strong>
            <p className="text-sm">{c.note}</p>
          </div>
        ))}
      </section>
    </div>
  );
}