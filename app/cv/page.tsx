import { cv } from "@/data/cv";

export const metadata = { title: "CV" };

export default function CVPage() {
  return (
    <div className="space-y-10">
        <h1 className="text-3xl font-bold">CV</h1>

        <a
          href="/public/cv.pdf"
          download="Joel_Benson_Resume.pdf"
          className="text-blue-600 underline"
        >
          Download PDF
        </a>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Experience</h2>
        {cv.experience.map((job) => (
          <div key={job.org + job.role} className="mb-6">
            <div className="flex justify-between">
              <strong>{job.role}, {job.org}</strong>
              <span className="text-sm text-gray-500">{job.dates}</span>
            </div>
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
            <strong>{e.degree}</strong>, {e.school}
            {e.note && <p className="text-sm text-gray-600">{e.note}</p>}
          </div>
        ))}
      </section>
    </div>
  );
}