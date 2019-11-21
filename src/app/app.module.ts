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
import { MatListModule,MatMenuModule, MatIconModule,MatToolbarModule, MatGridListModule, MatBadgeModule, MatCardModule, MatTabsModule, MatStepperModule, MatCheckboxModule, MatSelectModule, MatExpansionModule, MatSnackBarModule } from '@angular/material';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from './security/security.interceptor';
import { PollsComponent } from './polls/polls.component';
import { VriendenComponent } from './vrienden/vrienden.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VriendenService } from './services/vrienden.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NieuwepollComponent } from './nieuwepoll/nieuwepoll.component';
import { PollinfoComponent } from './pollinfo/pollinfo.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'polls', component: PollsComponent },
  { path: 'vrienden', component: VriendenComponent },
  { path: 'nieuwePoll', component: NieuwepollComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PollsComponent,
    VriendenComponent,
    NavbarComponent,
    NieuwepollComponent,
    PollinfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LogInModule,
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
    MatCardModule,
    MatStepperModule,
    MatSelectModule,
    MatExpansionModule,
    MatSnackBarModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true
    },VriendenComponent,VriendenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
