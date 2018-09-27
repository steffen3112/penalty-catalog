import { PenaltycontentPage } from './../penaltycontent/penaltycontent.page';
import { Component, OnInit } from '@angular/core';
import { Penalty } from '../../models/Penalty';
import { PenaltyService } from '../../services/penalties/penalty.service';
import { ModalController, Platform, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-penalties',
  templateUrl: './penalties.page.html',
  styleUrls: ['./penalties.page.scss'],
})
export class PenaltiesPage implements OnInit {

 //~ Instance fields
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  penalties: Penalty[] = [];

  //~ Constructors
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  constructor(private penaltyService: PenaltyService, public modalCtrl: ModalController) { }

    //~ Lifecycle Hooks
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  ngOnInit() {
    this.getPenalties();
  }
  //~ Methods
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  /** Here in the component happens the data binding to the html template
   *  We just put here the requests to the services and handle the
   *  penalty interaction
   */
  getPenalties(): void {
    this.penaltyService.getPenalties()
      .subscribe( penalties => this.penalties = penalties);
  }

  /** simple click handler. see the admin.page.html in <ion-list>-Tag */
  async onSelectPenalty(penalty: Penalty) {
    
    const modal = await this.modalCtrl.create({
      component: PenaltycontentPage,
      componentProps: {penalty: penalty}
    });

    return await modal.present();
    
  }



}