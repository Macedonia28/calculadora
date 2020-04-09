import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';

  public botoneslargos :string[]=['AC','CE'];
  public  botones:string[]=['7','8','9','/','4','5','6','*','1','2','3','-','','.','0','=','+'];
}
