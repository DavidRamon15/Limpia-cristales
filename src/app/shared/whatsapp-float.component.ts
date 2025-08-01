import { Component } from '@angular/core';

@Component({
    selector: 'app-whatsapp-float',
    templateUrl: './whatsapp-float.component.html',
    styleUrls: ['./whatsapp-float.component.css']
})
export class WhatsappFloatComponent {
    whatsappNumber: string = '604998606';
    message: string = 'Hola, quiero información sobre limpieza de cristales.';

    get whatsappLink(): string {
        return `https://wa.me/34${this.whatsappNumber}?text=${encodeURIComponent(this.message)}`;
    }
}
