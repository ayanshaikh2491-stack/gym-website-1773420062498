import type { NextApiRequest, NextApiResponse } from 'next';

const classes = [
  {
    id: 1,
    name: 'Cardio',
    description: 'Get your heart rate up with our high-intensity cardio classes.',
  },
  {
    id: 2,
    name: 'Weightlifting',
    description: 'Build strength and muscle with our weightlifting classes.',
  },
  {
    id: 3,
    name: 'Yoga',
    description: 'Improve flexibility and balance with our yoga classes.',
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(classes);
      break;
    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}