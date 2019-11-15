import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NieuwepollComponent } from './nieuwepoll.component';

describe('NieuwepollComponent', () => {
  let component: NieuwepollComponent;
  let fixture: ComponentFixture<NieuwepollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NieuwepollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NieuwepollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
