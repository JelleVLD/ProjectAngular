import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { LogInComponent } from './log-in.component';



@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule
  ],exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class LogInModule { }
