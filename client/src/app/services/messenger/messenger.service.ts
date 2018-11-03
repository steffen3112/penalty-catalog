import { Message } from './../../models/Message';
import { Injectable } from '@angular/core';

// FAKE DATA!!!!
import { messages } from '../fakeDashboardData.js'

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
 
  //~ Instance fields
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
  //~ Constructor
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
  constructor() { }

  //~ Methods
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
  getLatestMessages(): Message[] {
    return messages;
  }

}
