import { Routes } from '@angular/router';
import { HomeComponent } from './Dashboard/home/home.component';
import { TableComponent } from './Dashboard/table/table.component';
import { RegisterComponent } from './Dashboard/register/register.component';
import { AccountComponent } from './Dashboard/account/account.component';
import { PageComponent } from './Dashboard/page/page.component';
import { Register2Component } from './Dashboard/register2/register2.component';
import { Register3Component } from './Dashboard/register3/register3.component';
import { Register4Component } from './Dashboard/register4/register4.component';
import { DynamicFormComponent } from './Dashboard/dynamic-form/dynamic-form.component';
import { GetApiComponentComponent } from './Dashboard/get-api.component/get-api.component.component';
import { PipeComponent } from './Dashboard/pipe/pipe.component';
import { WelcomeComponent } from './Animations/welcome/welcome.component';
import { Componnent2Component } from './Segregation/componnent-2/componnent-2.component';
import { Componnent1Component } from './Segregation/componnent-1/componnent-1.component';
import { Componnent3Component } from './Segregation/componnent-3/componnent-3.component';
import { FamilyInfoComponent } from './HashBoard/family-info/family-info.component';
import { JobInfoComponent } from './HashBoard/job-info/job-info.component';


// export const routes: Routes = [
//     {
//         path:'',
//         redirectTo:'app-welcome',
//         pathMatch:'full'
//     },
//     {
//     path: 'page',
//     component: PageComponent,
//     children: [
//       {
//         path: 'register',
//         component: RegisterComponent
//       }
//     ]
//     },
//     {
//         path:'app-get-api.component',
//         component:GetApiComponentComponent
//     },
//     {
//         path:'app-pipe',
//         component:PipeComponent
//     },
//     {
//         path:'register2',
//         component:Register2Component
//     },
//     {
//         path:'register3',
//         component:Register3Component
//     },
//      {
//         path:'register4',
//         component:Register4Component
//     },
//     {
//         path:'table',
//         component:TableComponent
//     },
//     {
//         path:'home',
//         component:HomeComponent
//     },
//     {
//         path:'account',
//         component:AccountComponent
//     },
//      {
//         path:'dynamic-form',
//         component:DynamicFormComponent
//     },
//     {
//         path:'app-welcome',
//         component:WelcomeComponent
//     },
//     {
//         path:'app-componnent-2',
//         component:Componnent2Component,
//     //      children: [
//     //   {
//     //     path: 'app-family-info',
//     //     component: FamilyInfoComponent
//     //   }
//     // ]
//     },
//     {
//         path:'app-family-info',
//         component:FamilyInfoComponent
//     },
//     {
//         path:'app-componnent-1',
//         component:Componnent1Component
//     }
    
// ];
export const routes: Routes = [
    {
        path:'',
        redirectTo:'app-welcome',
        pathMatch:'full'
    },
    {
        path: 'app-welcome',
        component: WelcomeComponent
    },
    {
        path:'app-componnent-1',
        component:Componnent1Component,
        children: [
      {
        path:'',
        redirectTo:'app-pipe',
        pathMatch:'full'
      },     
      {
         path:'app-pipe',
        component:PipeComponent
      },
      {
        path:'table',
        component:TableComponent
      },
      {
          path:'app-get-api.component',
          component:GetApiComponentComponent
      },
      {
          path:'home',
          component:HomeComponent
      },
      {
          path:'account',
          component:AccountComponent
      },
      {
          path: 'page',
          component: PageComponent,
          children: [
            {
              path: 'register',
              component: RegisterComponent
            }
          ]
      },
      {
          path:'register2',
          component:Register2Component
      },
      {
          path:'register3',
          component:Register3Component
      },
       {
          path:'register4',
          component:Register4Component
      },
      {
          path:'dynamic-form',
          component:DynamicFormComponent
      }
      ]
    },
    {
        path:'app-componnent-2',
        component:Componnent2Component,
        children: [
        {
        path:'',
        redirectTo:'app-job-info',
        pathMatch:'full'
        },    
        {
          path:'app-job-info',
          component: JobInfoComponent,
        //   children: [
        //   {
        //     path: 'app-family-info',
        //     component: FamilyInfoComponent
        //   }
        // ]
        },
        {
            path: 'app-family-info',
            component: FamilyInfoComponent
          }
        ]
    },
    {
      path:'app-componnent-3',
      component:Componnent3Component
    }

]