import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatGridListModule, MatGridTile } from '@angular/material';
import { VriendenService } from '../services/vrienden.service';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatGridTile
  ],providers: [
    VriendenService
 ],exports: [
    MatGridListModule,
    MatGridTile
  ]
})
export class HomeModule { }
