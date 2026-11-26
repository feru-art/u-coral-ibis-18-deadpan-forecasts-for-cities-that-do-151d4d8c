import { mkdirSync, writeFileSync } from "node:fs";

const setup = "In Lower Brindle, rain clears by 6:40 p.m.,";
const consequence = "leaving the river to run uphill past the bus depot until midnight.";
const line = `${setup} ${consequence}`;
const outputPath = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(outputPath, line, "utf8");
