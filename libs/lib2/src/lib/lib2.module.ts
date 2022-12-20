import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { Lib3Module } from '@tailwind-nx/lib3';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule, Lib3Module],
  declarations: [CardComponent],
  exports: [CardComponent],
})
export class Lib2Module {}
