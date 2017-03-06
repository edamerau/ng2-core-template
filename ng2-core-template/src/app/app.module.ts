import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { BarchartComponent } from './components/chartcomponents/barchart/barchart.component';
import { LinechartComponent } from './components/chartcomponents/linechart/linechart.component';

@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    LinechartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
