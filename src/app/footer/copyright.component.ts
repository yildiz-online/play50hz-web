import {Component} from '@angular/core';

@Component({
  selector: 'copyright',
  templateUrl: './copyright.component.html',
  styleUrls: ['./copyright.component.css']
})
export class CopyrightComponent {
  anio: number = new Date().getFullYear();
}
