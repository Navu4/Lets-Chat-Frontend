import axois from './axiosInstance'

export const GetChat = async ({
  roomId,
  token,
}: {
  roomId: string
  token: string
}) => {
  const res = await axois.get(`/getchat/${roomId}`, {
    headers: {
      AUTH_TOKEN: token,
    },
  })
  return res.data
}
