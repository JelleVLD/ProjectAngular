import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInModule } from './log-in/log-in.module';
import { MatSidenavModule, MatListModule,MatMenuModule, MatIconModule,MatToolbarModule, MatGridListModule, MatBadgeModule, MatCardModule, MatTabsModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from './security/security.interceptor';
import { PollsComponent } from './polls/polls.component';
import { VriendenComponent } from './vrienden/vrienden.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VriendenService } from './services/vrienden.service';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'polls', component: PollsComponent },
  { path: 'vrienden', component: VriendenComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    PollsComponent,
    VriendenComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LogInModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatCardModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true
    },VriendenComponent,VriendenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
