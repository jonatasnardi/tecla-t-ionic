import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/interfaces/user.interface';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  data: IUser[] = [];

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.listService.getUsers()
      .subscribe((response: IUser[]) => {
        this.data = response;
      }, err => console.log(err));
  }

}
