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
  //TRANSFORM IMAGE BASE 64
  getBase64ImageFromURL(url) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");
    
      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
    
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
    
        var dataURL = canvas.toDataURL("image/png");
    
        resolve(dataURL);
      };
    
      img.onerror = error => {
        reject(error);
      };
    
      img.src = url;
    });}
  
    // generate and upload PDF
  async createee(){

    const densidad = parseFloat((<HTMLInputElement>document.getElementById("densidad")).value);
    const diametro = parseFloat((<HTMLInputElement>document.getElementById("diametro")).value);
    const alturab= parseFloat((<HTMLInputElement>document.getElementById("Altura-b")).value);
    const pasadura= parseFloat((<HTMLInputElement>document.getElementById("pasadura")).value);
    const taco= parseFloat((<HTMLInputElement>document.getElementById("taco")).value);
    const resultado = ((alturab + pasadura) - taco) * ((diametro * diametro) * densidad * 0.507) ;
    
    if (isNaN(resultado) || (taco >= alturab + pasadura)  ) {
      alert("Faltan campos O la suma de la altura del banco y la pasadura es menor o igual al taco");}
     
      

      else { 
        
        const pdfDefinition: any = { 
          background:  {
            image: await this.getBase64ImageFromURL(
              "./assets/plantilla1.jpg" ,
              
            ),
            width: 600,
            height: 600,
            alignment: 'center'
          } ,
          content: [
           
            '-Diametro =  ' + diametro + '  [in]',
            '-                                                                                                               -------------------------------> Taco = ' + taco + '  [m]',
            '-   Densidad =  ' + densidad + '  [g/cc]',
            '                      ',
            '              ',
            '             ',
            '          ',
            '          ',
            '        ',
            '        ',
            '            ',
            '-                                                                                                                                  Altura banco =  ' + alturab + '  [m]',
            '              ',
            '             ',
            '          ',
            '          ',
            '        ',
            '        ',
            '              ',
            '             ',
            '          ',
            
            '          ',
            '        ',
            '        ',
            '              ',
            '             ',
            '          ',
            '          ',
            '        ',
            '        ','              ',
            '             ',
           
          
            '-                          Pasadura =  ' + pasadura + '  [m] <----------',
            
            '          ',
            '          ',
            '        ',
            '        ',
            'Cantidad de Explosivo =  ' + resultado + '  [kg]',
            
           
            
          ]

          
            

            
  
            
          
          
  
  
  
        };
  
  
        
        //pdf url generate
        const pdfDocGenerator = pdfMake.createPdf(pdfDefinition);
        pdfDocGenerator.getDataUrl((dataUrl: any) => {
	      
	      const iframe = document.createElement('iframe');
	      iframe.src = dataUrl;
        
        const storageRef = ref(this.storage,`pdf/${iframe} `+  Date.now() ) ;    
       //upload PDF 
       uploadString(storageRef, iframe.src, 'data_url').then((snapshot) => {
       console.log('Uploaded a data_url string!');
       });
        pdfDocGenerator.download();

       
	      
        });
        pdfDocGenerator.end();
        
        
        
        
        
        
         
          
          


          


        
        
        
      }
      
        


        


    
    
    



  }

  
}
