import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ToeComponent } from './toe/toe.component';
import { ChildComponent } from './child/child.component';
import { TimeComponent } from './time/time.component';
import { CounterComponent } from './counter/counter.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

import { SharedService } from './shared.service';


@NgModule({
  declarations: [
    AppComponent,
    ToeComponent,
    ChildComponent,
    TimeComponent,
    CounterComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ SharedService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
