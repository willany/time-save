import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { environment } from '../../environments/environment';
import { AngularFireModule } from 'angularfire2';

import { TimeListComponent } from './time-list.component';
import { EntryService } from '../shared/entry.service';
import { IdentityService } from '../shared/identity.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { QueryFn } from 'angularfire2/database/interfaces';
import { BehaviorSubject } from 'rxjs';

describe('TimeListComponent', () => {
  let component: TimeListComponent;
  let fixture: ComponentFixture<TimeListComponent>;
  const FirestoreStub = {
    collection: (name: string) => ({
      doc: (_id: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise((resolve, _reject) => resolve()),
      }),
    }),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeListComponent ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase, 'time-save')
      ],
      providers: [ 
        EntryService,
        IdentityService, { provide: AngularFireDatabase }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeListComponent);
    component = fixture.componentInstance;
    // component.entries = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
