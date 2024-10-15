import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaytimeComponent } from './playtime.component';

describe('PlaytimeComponent', () => {
  let component: PlaytimeComponent;
  let fixture: ComponentFixture<PlaytimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaytimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaytimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
