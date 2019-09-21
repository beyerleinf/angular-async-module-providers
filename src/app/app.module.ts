import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppLoadModule } from './app-load.module';
import { AppComponent } from './components';
import { ConfigModule } from './config.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppLoadModule,
    BrowserModule,
    HttpClientModule,
    ConfigModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
