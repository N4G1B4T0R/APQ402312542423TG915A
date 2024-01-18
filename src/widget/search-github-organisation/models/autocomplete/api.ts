import { SearchOrganizationsState } from './interfaces';
import { BASE_URL, AUTH_TOKEN } from 'shered/api/config';
const searchOrganisation = async (
  search: string
): Promise<{ response?: SearchOrganizationsState; error?: string }> => {
  const response = await fetch(`${BASE_URL}/search/users?q=${search}+type:org+in:login`, {
    method: 'GET',
    headers: {
      'x-github-api-version': '2022-11-28',
      Authorization: `token ${AUTH_TOKEN}`
    }
  });

  const res = await response.json();

  if (!response.ok) {
    const error = res?.errors?.[0]?.message || res?.message || 'something went wrong';
    return { error };
  }

  return { response: res };
};

export { searchOrganisation };
