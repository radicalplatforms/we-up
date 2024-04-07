export type GroupType = {
  userId: string
  rules: string
}

export type CloudflareResponse = {
  result: {
    id: string
    filename: string
    uploaded: string
    requireSignedURLs: boolean
    variants: string[]
  }
  success: boolean
  errors: string[]
  messages: string[]
}

export interface Post {
  id: string
  userId: string
  photoUrl?: string
  timestamp: Date
}

export type User = {
  name: string
  email: string
  wakeTime: Date
  photoUrl: string | null
}
