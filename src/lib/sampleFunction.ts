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
  }

  return {
    summary: `Processed ${entries.length} entries`,
    tagFrequencies,
  };
}

export default processEntries;