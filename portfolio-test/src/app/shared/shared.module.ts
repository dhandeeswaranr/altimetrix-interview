import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ConverterPipe } from './pipes/converter.pipe';

const widgets = [
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
]


@NgModule({
  declarations: [
    ConverterPipe
  ],
  imports: [
    CommonModule,
    widgets
  ],
  exports:[
    widgets,
    ConverterPipe
  ]
})
export class SharedModule { }
