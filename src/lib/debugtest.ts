import { processEntries } from './sampleFunction'
import { VoiceEntry } from './types'

const mock: VoiceEntry[] = Array.from({ length: 20 }).map((_, i) => {
  const iso = new Date().toISOString()
  return {
    id: String(i),
    user_id: 'mock',
    audio_url: null,
    transcript_raw: '',
    transcript_user: '',
    language_detected: 'en',
    language_rendered: 'en',
    tags_model: [],
    tags_user: ['reflection'],
    category: null,
    created_at: iso,
    updated_at: iso,
    emotion_score_score: null,
    embedding: null,
  }
})

const result = processEntries(mock)
console.log(JSON.stringify(result, null, 2))
