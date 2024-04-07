import {handleAuth} from '@auth0/nextjs-auth0/edge';

export const GET = handleAuth();

export const runtime = 'edge';
export const fetchCache = 'force-no-store';