import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
//import { FormBuilder, Validators } from '@angular/forms'; 
//import * as iifym from 'iifym.js';
import * as iifym from 'iifym.js';

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

  constructor(public alertController : AlertController) { }

  calcular(form){

    var protein: number = 0;
    var fat: number = 0;
    var goal: number = 0;
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
    console.log(iifym.calculate(dados));

    var result: any = iifym.calculate(dados);

    var relatorio: string = "Taxa Metabolica Basal: " + result.bmr + "\n"
                          + "Gasto de calorias (atual): " + result.initialTdee + "\n"
                          + "Meta de calorias: " + result.tdee + "\n"
                          + "Consumo de proteinas: " + result.protein + "\n"
                          + "Consumo de gorduras: " + result.fat + "\n"
                          + "Consumo de carboidratos: " + result.carbs;

      this.alertController.create({
        header: 'Resultado!',
        message: relatorio,
        buttons: ['Salvar', 'Fechar']
      }).then(res => {

        res.present();

      }); 

  }

}
