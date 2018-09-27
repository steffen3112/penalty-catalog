import { UsercontentPage } from './../usercontent/usercontent.page';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/users/user.service';

import { ModalController, Platform, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  //~ Instance fields
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  users: User[] = [];

  //~ Constructors
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  constructor(private userService: UserService, public modalCtrl: ModalController) { }

  //~ Lifecycle Hooks
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  ngOnInit() {
    this.getUsers();
  }

  //~ Methods
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  /** Here in the component happens the data binding to the html template
   *  We just put here the requests to the services and handle the
   *  users interaction
   */
  getUsers(): void {
    this.userService.getUsers()
      .subscribe( users => this.users = users);
  }

  /** simple click handler. see the admin.page.html in <ion-list>-Tag */
  async onSelectUser(user: User) {
    
    const modal = await this.modalCtrl.create({
      component: UsercontentPage,
      componentProps: {user: user}
    });

    return await modal.present()
    
  }
  
}
