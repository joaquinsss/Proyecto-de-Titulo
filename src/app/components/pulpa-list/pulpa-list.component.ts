import { Component, OnInit } from '@angular/core';
import { Formulario } from 'src/app/shared/services/formulario';
import { FormulariosService } from 'src/app/shared/services/formularios.service';

@Component({
  selector: 'app-pulpa-list',
  templateUrl: './pulpa-list.component.html',
  styleUrls: ['./pulpa-list.component.scss']
})
export class PulpaListComponent implements OnInit {

  formularios: Formulario[];

  constructor(
    private formulariosService: FormulariosService
  ) {
    this.formularios = [];
  }

  ngOnInit(): void {
    this.formulariosService.getFormulario().subscribe(formularios => {
      this.formularios= formularios;
    })
  }

  async onClickDelete(formulario: Formulario) {
    const response = await this.formulariosService.deleteFormulario(formulario);
    console.log(response);
  }
  async calcular(formulario: Formulario) {
    const response = await this.formulariosService.deleteFormulario(formulario);
    console.log(response);
  }

}
