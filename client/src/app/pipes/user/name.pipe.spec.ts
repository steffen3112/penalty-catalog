import { NamePipe } from './name.pipe';
import { User } from '../../models/User';

fdescribe('NamePipe', () => {

  let pipe: NamePipe;
  let testUser: User;

  beforeEach(() => {
    pipe = new NamePipe();
    testUser = new User();
    testUser.name = 'Steffen';
    testUser.address = {
      street: "foo",
      suite: "foo",
      city: 'Regensburg',
      zipcode: "foo",
      geo: {
          lat: "foo",
          lng: "foo",
      }
    };
  });

  fit('exists', () => {
    const pipe = new NamePipe();
    expect(pipe).toBeTruthy();
  });

  fit('formats a User properly', () => {
    expect(pipe.transform(testUser)).toEqual('Steffen, Regensburg');
  });

  fit('handels empty address object', () => {
    delete testUser.address;
    expect(pipe.transform(testUser)).toEqual('Steffen');
  });

});
