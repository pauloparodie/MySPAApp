import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyUserDetailsComponent } from './empty-user-details.component';

describe('EmptyUserDetailsComponent', () => {
  let component: EmptyUserDetailsComponent;
  let fixture: ComponentFixture<EmptyUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyUserDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
