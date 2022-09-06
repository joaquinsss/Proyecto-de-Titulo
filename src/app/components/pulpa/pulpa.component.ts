import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { FormulariosService } from 'src/app/shared/services/formularios.service';

@Component({
  selector: 'app-pulpa',
  templateUrl: './pulpa.component.html',
  styleUrls: ['./pulpa.component.scss']
})
export class PulpaComponent implements OnInit {
  formulario: FormGroup;

  constructor(public authService: AuthService,private formulariosService: FormulariosService) { 
    this.formulario = new FormGroup({

      muestra: new FormControl,
      porcentaje: new FormControl(Validators.required),
      hora: new FormControl(Validators.required),
      

    })


  }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.formulariosService.addFormulario(this.formulario.value);
    console.log(response);
  }

}
