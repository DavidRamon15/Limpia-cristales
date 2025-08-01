

import { Component } from '@angular/core';
import Swal from 'sweetalert2';
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
    this.contactoService.enviarFormulario(this.formData).subscribe({
      next: (res) => {
        Swal.fire({
          icon: 'success',
          title: '¡Formulario enviado!',
          text: 'Gracias por contactarnos. Te responderemos lo antes posible.',
        });
      },
      error: (err) => {
        let errorMsg = 'Hubo un error al enviar el formulario. Inténtalo nuevamente.';
        if (err && err.error && err.error.error) {
          errorMsg += '\nMotivo: ' + err.error.error;
        }
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: errorMsg,
        });
        console.error(err);
      }
    });
  }
  redirigirWhatsapp(): void {
    const numero = '604998606';
    const mensaje = encodeURIComponent('Hola, quiero información sobre limpieza de cristales.');
    window.open(`https://wa.me/34${numero}?text=${mensaje}`, '_blank');
  }
}