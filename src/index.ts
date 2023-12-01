import 'dotenv/config'
import { part1, part2 } from "./challenges/day_01.js";
import { client } from "./utils/client.js";

const input = (await client.getInput()) as string;

part1(input);
