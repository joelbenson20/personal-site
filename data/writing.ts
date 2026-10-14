export type ExternalPiece = {
  title: string;
  outlet: string;   // where it was published
  url: string;
  date: string;     // "YYYY-MM-DD" so sorting works
  summary?: string;
};

export const externalWriting: ExternalPiece[] = [
  {
    title: "Title of an article",
    outlet: "Carver County Local News",
    url: "https://example.com/your-article",
    date: "2025-11-03",
  },
];
