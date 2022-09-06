import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Storage, ref, listAll, getDownloadURL } from '@angular/fire/storage';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-archivos',
  templateUrl: './archivos.component.html',
  styleUrls: ['./archivos.component.scss']
})

export class ArchivosComponent implements OnInit {
  pdf: SafeUrl[];
  
  
  

  constructor(public authService: AuthService, private storage: Storage,private domSanitizer: DomSanitizer) {
    this.pdf= [];
    
    
    
   }

  ngOnInit(): void {
    this.getpdf();
  }
  //LIST PDF
  getpdf() {
    const pdfRef = ref(this.storage, 'pdf');

    listAll(pdfRef)
    .then(async response => {
      this.pdf = [];
      for(let item of response.items) {
        
        const url = await getDownloadURL(item);
        
        
        console.log(url);
        //BYPASS URL FIREBATE TO ANGULAR
        this.pdf.push(this.domSanitizer.bypassSecurityTrustResourceUrl(url));
      }

    }).catch(error => console.log(error));
  }


}


