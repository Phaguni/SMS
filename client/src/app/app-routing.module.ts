// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { ClassEditComponent} from './pages/class-edit/class-edit.component';
import { ClassListComponent} from './pages/class-list/class-list.component';
import { StudentEditComponent} from './pages/student-edit/student-edit.component';
import { StudentListComponent} from './pages/student-list/student-list.component';
import { TeacherEditComponent} from './pages/teacher-edit/teacher-edit.component';
import { TeacherListComponent} from './pages/teacher-list/teacher-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'classes/:id',  loadChildren: './pages/class-edit/class-edit.module#ClassEditModule' , canActivate: [AuthGuard] },
    { path: 'classes',  loadChildren: './pages/class-list/class-list.module#ClassListModule' , canActivate: [AuthGuard] },
    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'students/:id',  loadChildren: './pages/student-edit/student-edit.module#StudentEditModule' , canActivate: [AuthGuard] },
    { path: 'students',  loadChildren: './pages/student-list/student-list.module#StudentListModule' , canActivate: [AuthGuard] },
    { path: 'teachers/:id',  loadChildren: './pages/teacher-edit/teacher-edit.module#TeacherEditModule' , canActivate: [AuthGuard] },
    { path: 'teachers',  loadChildren: './pages/teacher-list/teacher-list.module#TeacherListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
