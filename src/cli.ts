#!/usr/bin/env node
import { InstagramExtractor } from "./index";

function printHelp() {
  console.log(`Usage: instagram-data-extractor extract <shortcode>\n\nCommands:\n  extract <shortcode>   Extract Instagram post data for the given shortcode\n  help                 Show this help message\n`);
}

async function main() {
  const [,, command, shortcode] = process.argv;
  if (!command || command === "help" || command === "--help" || command === "-h") {
    printHelp();
    process.exit(0);
  }
  if (command === "extract" && shortcode) {
    try {
      const data = await InstagramExtractor.extractPost(shortcode);
      console.log(JSON.stringify(data, null, 2));
    } catch (err) {
      console.error("Error extracting post:", err);
      process.exit(1);
    }
  } else {
    printHelp();
    process.exit(1);
  }
}

main();