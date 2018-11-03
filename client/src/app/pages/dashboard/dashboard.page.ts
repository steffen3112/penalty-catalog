import { TeamPenalty } from './../../models/TeamPenalty';
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

  teamPenalties: TeamPenalty[] = [];

  //~ Constructors
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  constructor(private penaltyService: PenaltyService) { }

  //~ Lifecycle Hooks
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  ngOnInit() {
    this.getLatestTeamPenalties();
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

  }

  /**
   * fetches the latest messages posted in the team chat
   */
  getLatestMessages(): void {

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
