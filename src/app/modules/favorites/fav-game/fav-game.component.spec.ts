import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavGameComponent } from './fav-game.component';

describe('FavGameComponent', () => {
  let component: FavGameComponent;
  let fixture: ComponentFixture<FavGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
