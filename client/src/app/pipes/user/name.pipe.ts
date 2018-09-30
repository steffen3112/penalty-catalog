import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../models/User';

@Pipe({
  name: 'namePipe'
})
export class NamePipe implements PipeTransform {

  transform(user: User, args?: any): string {

    const formattedUser = `${user.name}${user.address !== undefined ? ', ' + user.address.city : ''}`;

    return formattedUser;
  }

}
