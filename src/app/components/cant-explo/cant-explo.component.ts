import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-cant-explo',
  templateUrl: './cant-explo.component.html',
  styleUrls: ['./cant-explo.component.scss'],
  
})

export class CantExploComponent implements OnInit {
  
  constructor(public authService: AuthService) { 
    
  
  
  }
 


  
  ngOnInit(): void {
  }

  createee(){

    var densidad = parseFloat((<HTMLInputElement>document.getElementById("densidad")).value);
    var diametro = parseFloat((<HTMLInputElement>document.getElementById("diametro")).value);
    var alturab= parseFloat((<HTMLInputElement>document.getElementById("Altura-b")).value);
    var pasadura= parseFloat((<HTMLInputElement>document.getElementById("pasadura")).value);
    var taco= parseFloat((<HTMLInputElement>document.getElementById("taco")).value);
    const resultado = ((alturab + pasadura) - taco) * ((diametro * diametro) * densidad * 0.507) ;

    const pdfDefinition: any = { 

      content:[
        {

          table:{
            body: [
              [
                'Cantidad de explosivo =', resultado
              ]
            ]
          }
        }


        
      ]



    }


    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();



  }

}
