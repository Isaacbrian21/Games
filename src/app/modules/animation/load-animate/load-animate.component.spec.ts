import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadAnimateComponent } from './load-animate.component';

describe('LoadAnimateComponent', () => {
  let component: LoadAnimateComponent;
  let fixture: ComponentFixture<LoadAnimateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadAnimateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadAnimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
