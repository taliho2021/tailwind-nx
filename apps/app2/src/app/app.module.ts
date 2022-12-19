import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Lib1Module } from '@tailwind-nx/lib1';
import { Lib2Module } from '@tailwind-nx/lib2';
import { NgModule } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule, Lib1Module, Lib2Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
