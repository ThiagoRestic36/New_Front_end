import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultado-pesquisa',
  templateUrl: './resultado-pesquisa.component.html',
  styleUrls: ['./resultado-pesquisa.component.css'],
})
export class ResultadoPesquisaComponent {
  @Input() resultados: any[] = [];
}
