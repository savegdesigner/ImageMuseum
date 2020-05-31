import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserObraUpdateComponent } from './user-obra-update.component';

describe('UserObraUpdateComponent', () => {
  let component: UserObraUpdateComponent;
  let fixture: ComponentFixture<UserObraUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserObraUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserObraUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
