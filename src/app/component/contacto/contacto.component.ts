import { Component } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  formData = {
    nombreEmpresa: '',
    telefono: '',
    email: '',
    tipoLimpieza: '',
    periodicidad: '',
    observaciones: ''
  };

  constructor(private contactoService: ContactoService) { }

  enviarFormulario() {
    console.log("entro");
    this.contactoService.enviarFormulario(this.formData).subscribe({
      next: (res) => {
        alert('Formulario enviado correctamente. Gracias por contactarnos.');
      },
      error: (err) => {
        alert('Hubo un error al enviar el formulario. Inténtalo nuevamente.');
        console.error(err);
      }
    });
  }
}