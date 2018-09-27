import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltycontentPage } from './penaltycontent.page';

describe('PenaltycontentPage', () => {
  let component: PenaltycontentPage;
  let fixture: ComponentFixture<PenaltycontentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltycontentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltycontentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
