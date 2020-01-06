import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PmComponent } from './pm/pm.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { BookroomComponent } from './bookroom/bookroom.component';
import { AdminBookRoomComponent } from './admin-book-room/admin-book-room.component';
import { ShowUserRoomComponent } from './show-user-room/show-user-room.component';
import { ChangeMailComponent } from './change-mail/change-mail.component';
import { BookRoomDateWiseComponent } from './book-room-date-wise/book-room-date-wise.component';
import { AuthGuardGuard } from './authguard.guard';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'pm',
        component: PmComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'addRoom',
        component: AddRoomComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'BookRoom',
        component: BookroomComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'editRoom',
        component: EditRoomComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'editUser',
        component: EditUserComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'adminBookRoom',
        component: AdminBookRoomComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'search',
        component: SearchDeleteComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'showUserRoom',
        component: ShowUserRoomComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'ChangeMail',
        component: ChangeMailComponent,
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'DateWise',
        component: BookRoomDateWiseComponent,
        canActivate: [AuthGuardGuard]
    },
    
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent,
    },
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
