import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TimeSaveComponent } from './time-save/time-save.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TopoComponent,
    RodapeComponent,
    TimeSaveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
