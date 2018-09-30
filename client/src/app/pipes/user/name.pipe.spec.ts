import { NamePipe } from './name.pipe';
import { User } from '../../models/User';

describe('NamePipe', () => {

  let pipe: NamePipe;
  let testUser: User;

  beforeEach(() => {
    pipe = new NamePipe();
    testUser = new User();
    testUser.name = 'Steffen';
    testUser.address = {
      street: 'foo',
      suite: 'foo',
      city: 'Regensburg',
      zipcode: 'foo',
      geo: {
          lat: 'foo',
          lng: 'foo',
      }
    };
  });

  it('exists', () => {
    expect(pipe).toBeTruthy();
  });

  it('formats a User properly', () => {
    expect(pipe.transform(testUser)).toEqual('Steffen, Regensburg');
  });

  it('handels empty address object', () => {
    delete testUser.address;
    expect(pipe.transform(testUser)).toEqual('Steffen');
  });

});
