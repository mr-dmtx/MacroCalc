import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
	selector: 'app-historico',
	templateUrl: './historico.page.html',
	styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit{

	constructor(public alertController : AlertController) { }

	ngOnInit() {
		this.presentAlert();
	}


	presentAlert() {
		this.alertController.create({
			header: 'Alert',
			subHeader: 'Subtitle for alert',
			message: 'This is an alert message.',
			buttons: ['OK']
		}).then(res => {

			res.present();

		});
	}
}