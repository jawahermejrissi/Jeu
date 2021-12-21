import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QuestionsComponentComponent } from './questions-component/questions-component.component';
import { ResponsesComponentComponent } from './responses-component/responses-component.component';
import { SharedService } from './shared.service';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RouterModule } from '@angular/router';
import { RoomComponentComponent } from './room-component/room-component.component';
import { CanvasComponent } from './canvas/canvas.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponentComponent,
    ResponsesComponentComponent,
    HomeComponentComponent,
    RoomComponentComponent,
    CanvasComponent,
    UserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
