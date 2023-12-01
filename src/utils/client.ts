// src/utils/client.ts
import { AocClient } from 'advent-of-code-client';

export const client = new AocClient({
  year: 2023,
  day: 1,
  token: process.env.AOC_TOKEN!
});
