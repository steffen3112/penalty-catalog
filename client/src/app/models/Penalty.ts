/** This data structure represents a penalty in our application,
 *  here we model all data which belongs to a typical soccer penalty.
 *  E.G penaltyname, cost penalty...
 */
export class Penalty {
    
    //~ Instance fields
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    id: number;
    name: string;
    cost: number;
   


    //~ Methods
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // just some dummy fake method, not really what we'll do
    isValidPenalty(penalty: Penalty): boolean {
        return penalty.name.length >= 1 ? true : false;
    }


}