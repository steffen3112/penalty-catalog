import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../../services/admin/admin-service.service';
import { Todo } from '../../models/todos';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private adminService: AdminServiceService) { }

  ngOnInit() {
    this.getTodos();
  }

  developerName = "Berger";
  todos: Todo[] = [];

  getTodos(): void {
    this.todos = this.adminService.getTodos();
    console.log(this.todos);
  }


}
