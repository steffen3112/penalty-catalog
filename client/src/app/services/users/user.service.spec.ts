import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClient } from 'selenium-webdriver/http';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

});
