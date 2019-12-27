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


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'pm',
        component: PmComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'addRoom',
        component: AddRoomComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: 'BookRoom',
        component: BookroomComponent
    },
    {
        path: 'editRoom',
        component: EditRoomComponent
    },
    {
        path: 'editUser',
        component: EditUserComponent
    },
    {
        path: 'adminBookRoom',
        component: AdminBookRoomComponent
    },
    {
        path: 'search',
        component: SearchDeleteComponent
    },
    {
        path: 'showUserRoom',
        component: ShowUserRoomComponent
    },
    {
        path: 'ChangeMail',
        component: ChangeMailComponent
    },
    {
        path: 'auth/login',
        component: LoginComponent
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
