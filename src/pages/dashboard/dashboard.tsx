import React from 'react';
import { AppLayout } from 'shered/UI-kit';
import { SearchGithubOrganisation } from 'widget/search-github-organisation';

export const Dashboard = () => (
  <AppLayout>
    <SearchGithubOrganisation />
  </AppLayout>
);
