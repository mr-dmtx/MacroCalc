import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
//import * as iifym from 'iifym.js';
import * as iifym from 'iifym.js';

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
  	let t: string = iifym.tdeeGoal( 2408, 1.05);
    console.log(t);
  	this.alertController.create({
			header: 'Resultado',
			message: t,
			buttons: ['Salvar', 'Fechar']
		}).then(res => {

			res.present();

		});


  }

}
