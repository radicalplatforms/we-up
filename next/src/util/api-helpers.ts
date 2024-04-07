import {Session} from '@auth0/nextjs-auth0/edge';

export async function getUserAPI(email: string) {
  const res = await fetch(process.env.BACKEND_BASE_URL + '/api/user/' + email)
  let user = undefined
  if (res.ok) {
    user = res.json()
  }
  return user
}