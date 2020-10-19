import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

//import { iifym } from 'iifym.js';

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
  	//let tdg: any = tdeeGoal ( 2408 ,  1,05 );
  	this.alertController.create({
			header: 'Resultado',
			message: 'asdasdad',
			buttons: ['Salvar', 'Fechar']
		}).then(res => {

			res.present();

		});


  }

}
