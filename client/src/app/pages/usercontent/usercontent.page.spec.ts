import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercontentPage } from './usercontent.page';

describe('UsercontentPage', () => {
  let component: UsercontentPage;
  let fixture: ComponentFixture<UsercontentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercontentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercontentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
