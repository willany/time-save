import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { TimeSaveComponent } from '../time-save/time-save.component';
import { TimeListComponent } from '../time-list/time-list.component';
import { RodapeComponent } from '../rodape/rodape.component';
import { IdentityService } from '../shared/identity.service';
import { EntryService } from '../shared/entry.service';

import { AngularFireDatabase } from 'angularfire2/database';
import { BehaviorSubject } from 'rxjs';

describe('TimeSaveComponent', () => {
  let component: TimeSaveComponent;
  let fixture: ComponentFixture<TimeSaveComponent>;
  // const FirestoreStub = {
  //   collection: (name: string) => ({
  //     doc: (_id: string) => ({
  //       valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
  //       set: (_d: any) => new Promise((resolve, _reject) => resolve()),
  //     }),
  //   }),
  // };


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(environment.firebase, 'time-save'),
        FormsModule
       ],
      declarations: [
        AppComponent,
        TimeSaveComponent,
        TimeListComponent,
        RodapeComponent
      ],
      providers: [
        EntryService,
        IdentityService, { provide: AngularFireDatabase }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSaveComponent);
    component = fixture.componentInstance;
    component.userId = 1234 //
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
