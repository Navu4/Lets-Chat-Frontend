import { UserType } from 'types/user'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()
const User = atom<UserType | null>({
  key: 'User',
  default: null,
  effects_UNSTABLE: [persistAtom],
})
export const UserToken = atom<{ refreshToken: string; accessToken: string }>({
  key: 'UserToken',
  default: {
    accessToken: '',
    refreshToken: '',
  },
  effects_UNSTABLE: [persistAtom],
})

export default User
