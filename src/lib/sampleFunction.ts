import { VoiceEntry, ProcessedResult } from './types'

/**
 * processEntries
 * --------------
 * PURE function — no IO, no mutation, deterministic.
 *
 * Returns a summary and a tag frequency count from the given entries.
 */
export function processEntries(entries: VoiceEntry[]): ProcessedResult {
  const tagFrequencies: Record<string, number> = {};

  for (const entry of entries) {
    for (const tag of entry.tags_user) {
      tagFrequencies[tag] = (tagFrequencies[tag] || 0) + 1;
    }

    // Optional: Add keyword category check if entries should be classified too
    const content = entry.transcript_user.toLowerCase();

    if (
      content.includes("laugh") ||
      content.includes("funny") ||
      content.includes("joke") ||
      content.includes("hilarious")
    ) {
      tagFrequencies["funny"] = (tagFrequencies["funny"] || 0) + 1;
    } else if (
      content.includes("relax") ||
      content.includes("calm") ||
      content.includes("peaceful") ||
      content.includes("breathe")
    ) {
      tagFrequencies["calming"] = (tagFrequencies["calming"] || 0) + 1;
    } else {
      tagFrequencies["meaningful"] = (tagFrequencies["meaningful"] || 0) + 1;
    }
  }

  return {
    summary: `Processed ${entries.length} entries`,
    tagFrequencies,
  };
}

export default processEntries;
