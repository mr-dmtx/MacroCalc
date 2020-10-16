import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.page.html',
  styleUrls: ['./calcular.page.scss'],
})
export class CalcularPage implements OnInit {

  constructor(public alertController : AlertController) { }

  ngOnInit() {
  }

  calcular(){

  	this.alertController.create({
			header: 'Resultado',
			message: 'TMB',
			buttons: ['Salvar', 'Fechar']
		}).then(res => {

			res.present();

		});


  }

}
