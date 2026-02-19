'use server'

import { MongoClient, WithId } from 'mongodb';
import { ItemProperties } from './types';

const client = new MongoClient(process.env.MONGODB_URI ?? '', {
  serverSelectionTimeoutMS: 120000,
  connectTimeoutMS: 120000
});

export async function getAll<T extends ItemProperties>(type: string): Promise<T[]> {
  const projects = await client.db('database').collection(type).find().toArray();
  return projects.map(project => project as unknown as T);
}
