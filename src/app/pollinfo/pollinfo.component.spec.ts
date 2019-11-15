import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollinfoComponent } from './pollinfo.component';

describe('PollinfoComponent', () => {
  let component: PollinfoComponent;
  let fixture: ComponentFixture<PollinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
