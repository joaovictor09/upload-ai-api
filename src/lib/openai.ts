import { OpenAI } from 'openai'
import 'dotenv'

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
})