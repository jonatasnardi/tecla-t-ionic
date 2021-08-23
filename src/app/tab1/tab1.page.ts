import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IUser } from 'src/interfaces/user.interface';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  data: IUser[] = [];
  loading: boolean = false;

  constructor(
    private listService: ListService,
    public alertController: AlertController) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.loading = true;
    this.listService.getUsers()
      .subscribe((response: IUser[]) => {
        this.data = response;
        this.loading = false;
      }, err => {
        this.loading = false;
      });
  }

  showAlert() {
    this.alertController.create({
      header: 'Iniciado',
      subHeader: 'Pedido iniciado',
      message: 'O produto está em rota.',
      buttons: ['OK']
    }).then(res => {
      res.present();
    });
  }
}
