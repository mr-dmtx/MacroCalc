import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
//import { FormBuilder, Validators } from '@angular/forms'; 
//import * as iifym from 'iifym.js';
import * as iifym from 'iifym.js';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.page.html',
  styleUrls: ['./calcular.page.scss'],

})

export class CalcularPage{

  //public calcularForm: any;
  bmr: any = {
    gender: null,
    age: null,
    cm: null,
    kg: null,
    exlevel: null,
    goal: null
  };

  constructor(public alertController : AlertController, private storage : Storage) { }

  calcular(form){

    var protein: number = 0;
    var fat: number = 0;
    var goal: number = this.bmr.goal;

    if(goal == 1){
      var goal = 1;
      var protein = 0.8;
      var fat = 0.35;
    }
    else if(goal == 2){
      var goal = 0.85;
      var protein = 0.7;
      var fat = 0.3; 
    }
    else{
      var goal = 1.05;
      var protein = 0.9;
      var fat = 0.4;
    }

    var dados: any = {
      'gender': this.bmr.gender,
      'age': this.bmr.age,
      'isMetric': true,
      'ft': null,
      'in': null,
      'cm': this.bmr.cm,
      'lbs': null,
      'kg': this.bmr.kg,
      'mifflinStJeor': true,
      'bodyFatPercentage': null,
      'exerciseLevel': this.bmr.exlevel,
      'goal': goal,
      'protein': protein,
      'fat' : fat
    };
    console.log(dados);
    console.log(iifym.calculate(dados));

    var result: any = iifym.calculate(dados);

    var relatorio: string = "Taxa Metabolica Basal: " + result.bmr + "<br>"
                          + "Gasto de calorias (atual): " + result.initialTdee + "<br>"
                          + "Meta de calorias: " + result.tdee + "<br>"
                          + "Você deve consumir: <br><b>"
                          + "Carboidratos: " + result.carbs + "g por dia<br>"
                          + "Proteinas: " + result.protein + "g por dia<br>"
                          + "Gorduras: " + result.fat + "g por dia</b>";

      this.alertController.create({
        header: 'Resultado!',
        message: relatorio,
        buttons: [{
            text: 'Salvar Resultado',
            role: 'Salvar',
            cssClass: 'secondary',
            handler: () => {
              console.log('Salvar Resultado');
              salvarResultado(relatorio);
            }
          }, {
            text: 'Fechar'
          }]
      }).then(res => {

        res.present();

      }); 

  }

  salvarResultado(resultado){

    console.log(resultado);

  }

}
