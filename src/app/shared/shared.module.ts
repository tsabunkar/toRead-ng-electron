import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [FlexLayoutModule],
  exports: [
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class SharedModule {}
