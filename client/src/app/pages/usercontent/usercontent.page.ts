import { User } from './../../models/User';
import { Component, OnInit, Input } from '@angular/core';
import { NavController, ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-usercontent',
  templateUrl: './usercontent.page.html',
  styleUrls: ['./usercontent.page.scss'],
})
export class UsercontentPage implements OnInit {

  @Input() user: User;

  constructor(private nav: NavController, public modalCtrl: ModalController, private params: NavParams) {
  }

  ngOnInit() {
    console.log(this.user);
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
