import { HttpClient, HttpBackend } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing'
import { UserService } from './user.service';
import { User } from '../../models/User';

describe('UserService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let userService: UserService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    userService = new UserService(httpClient);


  });

  it('exists', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  describe('users', () => {

    it('gets the users from JSON Placeholder API', () => {
      userService.getUsers().subscribe( user => {
        expect(user).toEqual([new User()]);
      });

      const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');

      expect(req.request.method).toEqual('GET');
      req.flush([
        new User()
      ]);

      httpTestingController.verify();

    })

  })

});
