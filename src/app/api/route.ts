import { NextApiResponse } from 'next';
import connectToDB from '../../../config/db';

export async function GET() {
  connectToDB();

  return Response.json({ message: 'all good' }, { status: 200 });
}
