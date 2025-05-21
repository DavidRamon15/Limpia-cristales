import { Component } from '@angular/core';

declare var bootstrap: any;
@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent {
  src: string = '';
  alt: string = '';

  abrirModal(src: string, alt: string = '') {
    this.src = src;
    this.alt = alt;

    const modalElement = document.getElementById('imageModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
