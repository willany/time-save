import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TimeSaveComponent } from './time-save/time-save.component';
import { TimeListComponent } from './time-list/time-list.component';
import { RodapeComponent } from './rodape/rodape.component';
import { IdentityService } from './shared/identity.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { BehaviorSubject } from 'rxjs';
describe('AppComponent', () => {
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
      imports: [FormsModule],
      declarations: [
        AppComponent,
        TimeSaveComponent,
        TimeListComponent,
        RodapeComponent
      ],
      providers: [IdentityService, { provide: AngularFireDatabase, useValue: FirestoreStub }]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
