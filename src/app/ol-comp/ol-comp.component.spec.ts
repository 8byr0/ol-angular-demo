import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlCompComponent } from './ol-comp.component';

describe('OlCompComponent', () => {
  let component: OlCompComponent;
  let fixture: ComponentFixture<OlCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
