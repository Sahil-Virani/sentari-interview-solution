import { processEntries } from './sampleFunction'
import { VoiceEntry } from './types'

/**
 * debugTest
 * ---------
 * Manually tests processEntries on sample VoiceEntry data.
 */

const now = new Date().toISOString()

const mock: VoiceEntry[] = [
  {
    id: '1',
    user_id: 'mock',
    audio_url: null,
    transcript_raw: '',
    transcript_user: 'i need to email my professor about the assignment',
    language_detected: 'en',
    language_rendered: 'en',
    tags_model: [],
    tags_user: [],
    category: null,
    created_at: now,
    updated_at: now,
    emotion_score_score: null,
    embedding: null,
  },
  {
    id: '2',
    user_id: 'mock',
    audio_url: null,
    transcript_raw: '',
    transcript_user: 'i couldn’t stop laughing at dinner with my friends',
    language_detected: 'en',
    language_rendered: 'en',
    tags_model: [],
    tags_user: [],
    category: null,
    created_at: now,
    updated_at: now,
    emotion_score_score: null,
    embedding: null,
  },
  {
    id: '3',
    user_id: 'mock',
    audio_url: null,
    transcript_raw: '',
    transcript_user: 'i took a peaceful walk and felt really calm',
    language_detected: 'en',
    language_rendered: 'en',
    tags_model: [],
    tags_user: [],
    category: null,
    created_at: now,
    updated_at: now,
    emotion_score_score: null,
    embedding: null,
  },
]

const result = processEntries(mock)
console.log(JSON.stringify(result, null, 2))
