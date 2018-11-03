import { MessengerService } from '../../services/messenger/messenger.service';
import { Message } from './../../models/Message';
import { AssignedPenalty } from '../../models/AssignedPenalty';
import { Component, OnInit } from '@angular/core';
import { PenaltyService } from '../../services/penalties/penalty.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  //~ Instance fields
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  userPenalties: AssignedPenalty[] = [];
  usersDebtsSum: number;
  teamPenalties: AssignedPenalty[] = [];
  messages: Message[] = [];

  //~ Constructors
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  constructor(private penaltyService: PenaltyService, private messengerService: MessengerService) { }

  //~ Lifecycle Hooks
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  ngOnInit() {
    this.getLatestTeamPenalties();
    this.getUsersDebts();
    this.getUserSpecificPenalties();
    this.getLatestMessages();
  }

  //~ Methods
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  /**
   * fetches the latest penalties from the whole team
   */
  getLatestTeamPenalties(): void {
    this.penaltyService.getTeamPenalties().forEach( teamMemberPenalty => this.teamPenalties.push(teamMemberPenalty) );
  }

  /**
   * fetches the user specific penalties
   */
  getUserSpecificPenalties(): void {
    this.penaltyService.getUserPenalties()
      .filter( userPenalty => userPenalty.penalty.payed )
      .forEach( userPenalty => this.userPenalties.push(userPenalty) );
  }

  /**
   * 
   */
  getUsersDebts(): void {
    this.usersDebtsSum = this.penaltyService.getUsersDebts();
  }

  /**
   * fetches the latest messages posted in the team chat
   */
  getLatestMessages(): void {
    this.messengerService.getLatestMessages().forEach( message => this.messages.push(message));
  }

  /**
   * handles the click-Event of the Latest Team Penalties List View
   */
  onSelectLatestTeamPenalty() {

  }

  /**
   * handles the click-Event of the users open remaining penalties
   */
  onSelectRemainingPenalties() {

  }

  /**
   * handles the click-Event of the users open penalties to pay
   */
  onSelectRemainingSumToPay() {

  }

  /**
   * handles the click-Event of the users specifc "penalty-growth-chart"
   */
  onSelectPenaltyChart() {

  }

  /**
   * handles the click-Event of the floating action button (FAB)
   */
  onSelectFabItem() {

  }

}
