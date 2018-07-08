import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app.routing.module';
import { CanActivateAuthGuard } from './can-activate-auth-guard';

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
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'time-save'),
    AngularFireDatabaseModule
  ],
  providers: [
    AngularFireAuth,
    CanActivateAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
