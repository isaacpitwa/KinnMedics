import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhamarcyComponent } from './phamarcy.component';

describe('PhamarcyComponent', () => {
  let component: PhamarcyComponent;
  let fixture: ComponentFixture<PhamarcyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhamarcyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhamarcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
