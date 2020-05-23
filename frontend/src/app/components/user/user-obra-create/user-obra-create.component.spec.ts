import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserObraCreateComponent } from './user-obra-create.component';

describe('UserObraCreateComponent', () => {
  let component: UserObraCreateComponent;
  let fixture: ComponentFixture<UserObraCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserObraCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserObraCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
