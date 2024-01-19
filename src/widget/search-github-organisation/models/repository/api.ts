import { BASE_URL, AUTH_TOKEN } from 'shered/api/config';
import { GitHubRepository, GetRepositoryRequest } from './interfaces';
const getRepositories = async (
  payload: GetRepositoryRequest
): Promise<{ response?: GitHubRepository; error?: string }> => {
  const {
    signal,
    request: { repo = '', name, perPage, page }
  } = payload;
  const response = await fetch(
    `${BASE_URL}/search/repositories?q=${repo}+org:${name}+fork:true&per_page=${perPage}&page=${page}&sort=stars`,
    {
      method: 'GET',
      headers: {
        'x-github-api-version': '2022-11-28',
        Authorization: `token ${AUTH_TOKEN}`
      },
      signal
    }
  );

  const res = await response.json();

  if (!response.ok) {
    const error = res?.errors?.[0]?.message || res?.message || 'something went wrong';
    return { error };
  }

  return { response: res };
};

export { getRepositories };
