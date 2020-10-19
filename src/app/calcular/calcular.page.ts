import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';

//import * as iifym from 'iifym.js';
import * as iifym from 'iifym.js';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.page.html',
  styleUrls: ['./calcular.page.scss'],
})
export class CalcularPage implements OnInit {

  bmrForm: FormGroup;

  constructor(public alertController : AlertController, public fb : FormBuilder) { }

  ngOnInit() {
    this.bmrForm = this.fb.group({
      genero: [''],
      age: [''],
      cm: [''],
      kg: [''],
      exerciseLeve: [''],
      goal: ['']
    })
  }

  calcular(){
    if(!this.bmrForm.valid){
      return false;
    }
    else{
      console.log(this.bmrForm.value);
      this.alertController.create({
        header: 'Resultado',
        message: 'xzz',
        buttons: ['Salvar', 'Fechar']
      }).then(res => {

        res.present();

      }); 
    }


  }

}
