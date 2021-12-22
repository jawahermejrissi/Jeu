import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RoomComponentComponent } from './room-component/room-component.component';
import { CreateRoomComponent } from './room-component/create-room/create-room.component';

const routes: Routes = [
  { path: '',  redirectTo: 'game/Login', pathMatch: 'full'},
  {
  path: 'game', component: AppComponent,
 // this is the component with the <router-outlet> in the template
  children: [
    {
      path: 'Login', // child route path
      component: HomeComponentComponent, // child route component that the router renders
    },
    {
      path: 'Room',
      component: RoomComponentComponent, // another child route component that the router renders
    },
    {
      path: 'CreateRoom',
      component: CreateRoomComponent, // another child route component that the router renders
    },
  
  ]
}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
