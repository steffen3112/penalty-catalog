/** This data structure represents an user in our Application,
 *  here we model all data which belongs to a typical footballplayer.
 *  E.G Name, Football Club, Authentication Tokens, Debts & Penalties, ...
 */
export class User {
    
    //~ Instance fields
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string
        }
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string
    };


    //~ Methods
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // just some dummy fake method, not really what we'll do
    isValidUser(user: User): boolean {
        return user.name.length >= 4 ? true : false;
    }
    
}