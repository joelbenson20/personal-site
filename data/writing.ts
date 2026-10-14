export type ExternalPiece = {
  title: string;
  outlet: string;   // where it was published
  url: string;
  date: string;     // "YYYY-MM-DD" so sorting works
  summary?: string;
};

export const externalWriting: ExternalPiece[] = [
  {
    title: "FebFest Draws a huge Crowd on Lake Ann",
    outlet: "Carver County Local News",
    url: "https://cclocalnews.org/2026/02/23/febfest-draws-a-huge-crowd-on-lake-ann/",
    date: "2026-2-23",
  },
  {
    title: "Local Leaders and Residents Call on Chanhassen City Council to Take Action Regarding ICE",
    outlet: "Carver County Local News",
    url: "https://cclocalnews.org/2026/02/10/local-leaders-and-residents-call-on-chanhassen-city-council-to-take-action-regarding-ice/",
    date: "2026-2-10",
  },
  {
    title: "2026 Expenses Down, Levy Up in Chanhassen",
    outlet: "Carver County Local News",
    url: "https://cclocalnews.org/2026/01/19/2026-expenses-down-levy-up-in-chanhassen/",
    date: "2026-1-19",
  },
  {
    title: "Schram Haus Leaving Chaska After 7 Years",
    outlet: "Carver County Local News",
    url: "https://cclocalnews.org/2025/12/11/schram-haus-leaving-chaska-after-7-years/",
    date: "2025-12-11",
  },
  {
    title: "Chanhassen Requests that DNR Loosen Boating Restrictions on Lake Minnewashta",
    outlet: "Carver County Local News",
    url: "https://cclocalnews.org/2025/12/01/chanhassen-requests-that-dnr-loosen-boating-restrictions-on-lake-minnewashta/",
    date: "2025-12-1",
  },
  {
    title: "Public Survey Will Advise Fate of Historic St. Hubertus Church",
    outlet: "Carver County Local News",
    url: "https://cclocalnews.org/2025/10/25/public-survey-will-advise-fate-of-historic-st-hubertus-church/",
    date: "2025-10-25",
  },
];
