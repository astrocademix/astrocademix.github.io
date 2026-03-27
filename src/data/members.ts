export type Member = {
  name: string;
  role: string;
  focus: string[];
  bio: string;
  link?: string;
};

export const members: Member[] = [
  {
    name: 'Founding Member',
    role: 'Organizer',
    focus: ['Astrophysics', 'Interpretable ML'],
    bio: 'Replace this with a short founder bio and a one-line research interest statement.',
    link: '#'
  },
  {
    name: 'Member Two',
    role: 'Core Member',
    focus: ['Data-driven astronomy', 'Representation learning'],
    bio: 'Use this card for students, collaborators, or club leads.',
    link: '#'
  },
  {
    name: 'Member Three',
    role: 'Core Member',
    focus: ['Scientific computing', 'Simulation'],
    bio: 'A short note works best here. Keep it human and simple.',
    link: '#'
  }
];
