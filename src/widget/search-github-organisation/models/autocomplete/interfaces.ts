import { types } from './types';
import { IGeneralAction } from 'shered/types';

export interface OrganizationItem {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  score: number;
}

export interface SearchOrganizationsState {
  total_count: number;
  incomplete_results: boolean;
  items: OrganizationItem[];
}

export type GetOrganisationsAction = IGeneralAction<types.GET_ORGANISATIONS, string>;
