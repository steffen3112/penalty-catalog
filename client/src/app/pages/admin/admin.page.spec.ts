import { User } from './../../models/User';
import { UserService } from './../../services/users/user.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPage } from './admin.page';
import { ModalController } from '@ionic/angular';
import { of } from 'rxjs';
import { NamePipe } from '../../pipes/user/name.pipe';

describe('AdminPage', () => {
/*
  let component: AdminPage;
  let fixture: ComponentFixture<AdminPage>;
  let userService: UserService;
  let adminPage: AdminPage;
  let modalController: ModalController;
  let user: User;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPage, NamePipe ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = jasmine.createSpyObj('userService', ['getUsers']);
    modalController = jasmine.createSpyObj('modalController', null);
    adminPage = new AdminPage(userService, modalController);
    user = new User();
    user.name = 'Steffen';
    spyOn(userService, 'getUsers').and.returnValue(of(user))

  });
  
  it('calls userService', () => {
    
    adminPage.getUsers();
    expect(userService.getUsers()).toHaveBeenCalledTimes(1);

  })
*/
});
