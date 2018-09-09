import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltiesPage } from './penalties.page';

describe('PenaltiesPage', () => {
  let component: PenaltiesPage;
  let fixture: ComponentFixture<PenaltiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
