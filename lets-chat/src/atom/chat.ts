import { atom } from 'recoil'

export const ActiveUser = atom<{
  name: string
  userId: string
  email: string
} | null>({
  key: 'ActiveUser',
  default: null,
  dangerouslyAllowMutability: true,
})
