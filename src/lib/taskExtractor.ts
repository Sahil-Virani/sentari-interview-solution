import { VoiceEntry } from './types'

export interface Task {
  id: string;
  task_text: string;
  category: 'meaningful' | 'funny' | 'calming';
  status: 'completed';
}

/**
 * extractTasks
 * ------------
 * Extracts structured tasks from transcript entries.
 * PURE function — no IO, no side effects.
 */
export function extractTasks(entries: VoiceEntry[]): Task[] {
  const results: Task[] = [];

  for (const entry of entries) {
    const content = entry.transcript_user?.toLowerCase?.() ?? '';

    // Use transcript as task text
    const task_text = entry.transcript_user || 'No data';

    // Rule-based classification
    let category: Task['category'] = 'meaningful';

    if (
      content.includes('laugh') ||
      content.includes('funny') ||
      content.includes('joke') ||
      content.includes('hilarious')
    ) {
      category = 'funny';
    } else if (
      content.includes('relax') ||
      content.includes('calm') ||
      content.includes('peaceful') ||
      content.includes('breathe') ||
      content.includes('walk')
    ) {
      category = 'calming';
    }

    results.push({
      id: entry.id,
      task_text,
      category,
      status: 'completed',
    });
  }

  return results;
}
