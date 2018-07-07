import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSaveComponent } from './time-save.component';

describe('TimeSaveComponent', () => {
  let component: TimeSaveComponent;
  let fixture: ComponentFixture<TimeSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
