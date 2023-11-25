import { Route } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./../').then((c) => c.LayoutProfileComponent),
    children: [
      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile.component').then((c) => c.ProfileComponent),
      },
      {
        path: 'badges',
        loadComponent: () =>
          import('./badges/badges.component').then((c) => c.BadgesComponent),
      },
      {
        path: 'groups',
        loadComponent: () =>
          import('./groups/groups.component').then((c) => c.GroupsComponent),
      },
      {
        path: 'events',
        loadComponent: () =>
          import('./events/events.component').then((c) => c.EventsComponent),
      },
      {
        path: 'communities',
        loadComponent: () =>
          import('./communities/communities.component').then(
            (c) => c.CommunitiesComponent
          ),
      },
    ],
  },
] as Route[];
