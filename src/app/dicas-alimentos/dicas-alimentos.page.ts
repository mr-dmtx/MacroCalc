import { Component, OnInit } from '@angular/core';

interface Alimentos{
	id: Number;
	name: String;
	qt: String;
	calories: String;
	carbs: String;
	protein: String;
	fat: String;
}

@Component({
  selector: 'app-dicas-alimentos',
  templateUrl: './dicas-alimentos.page.html',
  styleUrls: ['./dicas-alimentos.page.scss'],
})


export class DicasAlimentosPage implements OnInit {

  constructor() { }

  alimentos: Alimentos[] = [
    {
      id: 1,
      name: "Arroz branco, cozido",
      qt: "100g",
      calories: "129",
      carbs: "28.18g",
      protein: "2.5g",
      fat: "0.23g"
    },
    {
      id: 2,
      name: "Feijão Carioca cozido",
      qt: "100g",
      calories: "76",
      carbs: "13.61g",
      protein: "5.04g",
      fat: "0.85g"
    },
    {
      id: 3,
      name: "Peito de frango",
      qt: "100g",
      calories: "195",
      carbs: "0g",
      protein: "29.55g",
      fat: "7.72g"
    },
    {
      id: 4,
      name: "Abacate",
      qt: "100g",
      calories: "160",
      carbs: "8.53g",
      protein: "2g",
      fat: "14.66g"
    },
    {
      id: 5,
      name: "Queijo Mozzarella",
      qt: "1 fatia",
      calories: "86",
      carbs: "1.09g",
      protein: "7.36g",
      fat: "5.68g"
    },
    {
      id: 6,
      name: "Letilha cozida",
      qt: "100g",
      calories: "165",
      carbs: "18.73g",
      protein: "8.39g",
      fat: "6.79g"
    },
    {
      id: 7,
      name: "Leite integral",
      qt: "100ml",
      calories: "62",
      carbs: "4.66g",
      protein: "3.32g",
      fat: "3.35g"
    },
    {
      id: 8,
      name: "Pão francês",
      qt: "1 unidade",
      calories: "137",
      carbs: "25.95g",
      protein: "4.4g",
      fat: "1.5g"
    },
    {
      id: 9,
      name: "Bife de figado",
      qt: "100g",
      calories: "175",
      carbs: "5.16g",
      protein: "26.52g",
      fat: "4.68g"
    },
    {
      id: 10,
      name: "Macarrão Alho e Oleo",
      qt: "100g",
      calories: "220",
      carbs: "31.27g",
      protein: "5.82g",
      fat: "7.83g"
    },
  ]


  ngOnInit() {
  }

}
/*
<tr *ngFor="let student of students">
        <td>{{ student.id }}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.email }}</td>
        <td>{{ student.gender }}</td>
      </tr>
*/