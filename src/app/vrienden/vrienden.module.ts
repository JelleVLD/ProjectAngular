import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VriendenService } from '../services/vrienden.service';
import { VriendenComponent } from './vrienden.component';

 

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
     VriendenService
  ],
  exports:[VriendenComponent]
})
export class VriendenModule { }
