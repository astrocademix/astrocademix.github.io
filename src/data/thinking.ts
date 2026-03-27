export type ThinkingPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tag: string;
};

export const thinkingPosts: ThinkingPost[] = [
  {
    slug: 'why-astrocademix',
    title: 'Why AstroCademiX exists',
    summary: 'A short note about why a club format matters for astronomy and ML.',
    date: '2026-03-27',
    tag: 'Manifesto'
  },
  {
    slug: 'thinking-with-models',
    title: 'Thinking with models, not only with outputs',
    summary: 'A brief note on why interpretable models matter for scientific discovery.',
    date: '2026-03-27',
    tag: 'Methods'
  },
  {
    slug: 'what-we-read',
    title: 'What we read and why we share it',
    summary: 'A placeholder post for reading notes, commentaries, or project ideas.',
    date: '2026-03-27',
    tag: 'Reading'
  }
];
