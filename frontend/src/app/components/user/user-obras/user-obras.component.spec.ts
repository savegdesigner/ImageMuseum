import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserObrasComponent } from './user-obras.component';

describe('UserObrasComponent', () => {
  let component: UserObrasComponent;
  let fixture: ComponentFixture<UserObrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserObrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserObrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
