import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DicasAlimentosPage } from './dicas-alimentos.page';

describe('DicasAlimentosPage', () => {
  let component: DicasAlimentosPage;
  let fixture: ComponentFixture<DicasAlimentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicasAlimentosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DicasAlimentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
