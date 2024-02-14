import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'envioCorreos';

  form:FormGroup;

  constructor(private httpClient:HttpClient){
    this.form = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.email]),
      asunto: new FormControl('', Validators.required),
      mensaje: new FormControl('', Validators.required)
    })
  }

  enviarCorreo(){
    let params = {
      email:this.form.value.correo,
      asunto:this.form.value.asunto,
      mensaje:this.form.value.mensaje
    }

    this.httpClient.post('http://localhost:3000/envio',params).subscribe(res => {
      console.log(res);
      alert("Correo enviado");
    })
  }

}


