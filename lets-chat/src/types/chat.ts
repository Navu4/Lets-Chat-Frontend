export type RecentUsers = {
  uuid: string
  fullName: string
  emailId: string
  profileUrl: string
}

export interface ChatMessageType {
  from: {
    userId: string
    name: string
  }
  text: string
  createdAt: string
  isSent: boolean
}
