import { Penalty } from './../../models/Penalty';
import { Component, OnInit, Input } from '@angular/core';
import { NavController, ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-penaltycontent',
  templateUrl: './penaltycontent.page.html',
  styleUrls: ['./penaltycontent.page.scss'],
})
export class PenaltycontentPage implements OnInit {
  @Input() penalty: Penalty;

  constructor(private nav: NavController, public modalCtrl: ModalController, private params: NavParams) {
  }

  ngOnInit() {
    console.log(this.penalty);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}

