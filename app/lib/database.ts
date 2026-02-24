'use server'

import { MongoClient } from 'mongodb';
import { CardItem } from './types';

const client = new MongoClient(process.env.MONGODB_URI ?? '', {
  serverSelectionTimeoutMS: 120000,
  connectTimeoutMS: 120000
});

export default async function getAll<T extends CardItem>(type: string): Promise<T[]> {
  const projects = await client.db('database').collection(type).find().toArray();
  return projects.map(project => project as unknown as T);
}
