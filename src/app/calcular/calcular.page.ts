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

  public calcularForm: any;

  constructor(public alertController : AlertController, formBuilder: FormBuilder) {
    this.calcularForm = formBuilder.group({
     gender: [''],
     age: [''],
     cm: [''],
     kg: [''],
     exercise: [''],
     goal: ['']
     }); 

  }

  calcular(){
      let { gender, age, cm, kg, exercise, goal} = this.calcularForm.controls;
      console.log(gender);
      this.alertController.create({
        header: 'Resultado!',
        message: 'asd',
        buttons: ['Salvar', 'Fechar']
      }).then(res => {

        res.present();

      }); 

  }

}
