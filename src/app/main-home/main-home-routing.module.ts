import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainHomeComponent } from './main-home.component';
import { ProvidersComponent } from './providers/providers.component';

/* const routes: Routes = [
  {
    path: 'main', 
    component: MainHomeComponent,
    children: [
      { path: 'provider', component: ProvidersComponent },
      { path: 'groups', component: GroupsComponent, },
      {
        path: 'see-groups',
        loadChildren: () => import('./groups/see-groups/see-groups.module').then(m => m.SeeGroupsModule)
      },
      {
        path: 'related-groups',
        loadChildren: () => import('./groups/related-groups/related-groups.module').then(m => m.RelatedGroupsModule)
      },
      {
        path: 'your-groups',
        loadChildren: () => import('./groups/your-groups/your-groups.module').then(m => m.YourGroupsModule)
      },

      // {path: 'related-groups/:id',component: RelatedGroupsDetailsComponent },
      // {path: 'see-groups/show/:id',component: SeeGroupDetailComponent,},
      // {path: 'your-groups/groups/:id',component: YourGroupsDetailsComponent,},


    ]

  }
] */

const routes: Routes = [
  {
    path: '', // /main
    component: MainHomeComponent ,
    children: [
      {
        path: 'provider', component: ProvidersComponent,
        loadChildren: () => import('./providers/providers-routing.module').then(m => m.ProvidersRoutingModule),
      },
      {
        path: 'groups',
        loadChildren: () => import('./groups/groups-routing.module').then(m => m.GroupsRoutingModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings-routing.module').then(m => m.SettingsRoutingModule),
      },
      {
        path: 'events',
        loadChildren: () => import('./events/events-routing.module').then(m => m.EventsRoutingModule),
      },
      {
        path: '**',
        redirectTo: 'groups',
      }
    ],
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainHomeRoutingModule { }
