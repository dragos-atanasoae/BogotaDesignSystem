import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InputTemplateComponent } from './input-template.component';



@NgModule({
  declarations: [InputTemplateComponent],
  exports: [InputTemplateComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InputTemplateModule { }
