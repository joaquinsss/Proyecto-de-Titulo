import { Component, OnInit,VERSION } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Storage,ref,uploadBytes,uploadString,getStorage} from '@angular/fire/storage';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';


pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-cant-explo',
  templateUrl: './cant-explo.component.html',
  styleUrls: ['./cant-explo.component.scss'],
  
  
})



export class CantExploComponent implements OnInit {
  title2= 'storage';
  
  constructor(public authService: AuthService, private storage: Storage,) { 
    
  
  }
 
  ngOnInit(): void {
  }

  subirPdf($event: any) {
   

    const file = $event.target.files[0];
    const pdfRef = ref(this.storage,`pdf/${file.name}`);
    uploadBytes(pdfRef, file).then(x =>{
      console.log(x);


    }).catch (error => console.log(error));

  
    
  }
  

  createee(){

    const densidad = parseFloat((<HTMLInputElement>document.getElementById("densidad")).value);
    const diametro = parseFloat((<HTMLInputElement>document.getElementById("diametro")).value);
    const alturab= parseFloat((<HTMLInputElement>document.getElementById("Altura-b")).value);
    const pasadura= parseFloat((<HTMLInputElement>document.getElementById("pasadura")).value);
    const taco= parseFloat((<HTMLInputElement>document.getElementById("taco")).value);
    const resultado = ((alturab + pasadura) - taco) * ((diametro * diametro) * densidad * 0.507) ;

    if (isNaN(resultado) ) {
      alert("Faltan campos");}

      else { 
        
        const pdfDefinition: any = { 
          content: [
            'Densidad =  ' + densidad + '  [g/cc]',
            'Diametro =  ' + diametro + '  [pulgadas]',
            'Altura banco =  ' + alturab + '  [metros]',
            'Pasadura =  ' + pasadura + '  [metros]',
            'Taco =  ' + taco + '  [metros]',
            'Cantidad de Explosivo necesario =  ' + resultado + '  [kg de explosivos]',
            
          ]

          
            

            
  
            
          
          
  
  
  
        };
  
  
        //const pdf = pdfMake.createPdf(pdfDefinition).open().end();
        
        const pdfDocGenerator = pdfMake.createPdf(pdfDefinition);
        pdfDocGenerator.getDataUrl((dataUrl: any) => {
	      
	      const iframe = document.createElement('iframe');
	      iframe.src = dataUrl;
        
        const storageRef = ref(this.storage,`pdf/${iframe} `+  Date.now() ) ;    
        
        uploadString(storageRef, iframe.src, 'data_url').then((snapshot) => {
          console.log('Uploaded a data_url string!');
        });
        pdfDocGenerator.download();

       
	      
        });
        pdfDocGenerator.end();
        
        
        
        
        
        
         
          
          


          


        
        
        
      }
      
        


        


    
    
    



  }

  
}
