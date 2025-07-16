import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  @ViewChild('videoBanner') videoRef!: ElementRef<HTMLVideoElement>;

  videoVolume = 0;


  items = [
    {
      text: 'Limpieza de ',
      highlight: 'Viviendas Particulares',
      description: `<h2>Limpieza Profesional de Cristales para Viviendas Particulares</h2>
        <p>En <strong>[Nombre de tu empresa]</strong> sabemos lo importante que es tener un hogar limpio y luminoso. La limpieza de cristales no solo mejora la estética de tu vivienda, sino que también maximiza la entrada de luz natural, creando un ambiente más cálido y acogedor.</p>
        <p>Nuestros expertos en limpieza de cristales se encargan de eliminar la suciedad, manchas de agua, huellas dactilares y restos de polvo que pueden acumularse con el tiempo. Utilizamos productos y herramientas de alta calidad, así como técnicas especializadas que garantizan una limpieza profunda y segura de tus ventanas, balcones y fachadas, sin dejar marcas ni daños.</p>
        <h3>¿Por qué elegirnos?</h3>
        <ul>
          <li><strong>Resultados impecables:</strong> Nuestros profesionales dejan tus cristales brillantes y transparentes, realzando la belleza de tu hogar.</li>
          <li><strong>Seguridad:</strong> Evitamos los riesgos que implican el uso de escaleras o herramientas no especializadas, asegurando un trabajo sin contratiempos.</li>
          <li><strong>Comodidad:</strong> Nos encargamos de todo el proceso, para que no tengas que preocuparte por nada.</li>
          <li><strong>Ahorro de tiempo:</strong> Nos ocupamos de la limpieza, para que puedas disfrutar de tu tiempo libre.</li>
        </ul>
        <h3>¡Contáctanos hoy!</h3>`,
      image: '../assets/imagenes/logo_600.webp'
    },
    {
      text: 'Limpieza de ',
      highlight: 'Edificios, Comunidades',
      description: ` <h2>Limpieza Profesional de Cristales en Edificios y Comunidades</h2>
                    <p>En <strong>[Nombre de tu empresa]</strong>, ofrecemos un servicio de limpieza de cristales especializado para edificios y comunidades. Sabemos que las ventanas y fachadas limpias son fundamentales para la imagen de un edificio y el bienestar de quienes lo habitan. Por ello, nuestro equipo de profesionales está capacitado para brindar un servicio eficiente y seguro, tanto en interiores como en exteriores.</p>

                    <h3>Nuestros servicios incluyen:</h3>
                    <ul>
                        <li><strong>Limpieza de ventanas en altura:</strong> Utilizamos equipos y técnicas avanzadas para limpiar cristales en zonas de difícil acceso, garantizando una limpieza completa y sin riesgos.</li>
                        <li><strong>Fachadas y balcones:</strong> Eliminamos la suciedad acumulada en las fachadas y balcones, mejorando la estética del edificio y protegiéndolo de la contaminación ambiental.</li>
                        <li><strong>Mantenimiento continuo:</strong> Ofrecemos planes de mantenimiento adaptados a las necesidades de tu comunidad o edificio, asegurando que las ventanas y cristales se mantengan siempre en perfectas condiciones.</li>
                    </ul>

                    <h3>¿Por qué confiar en nosotros?</h3>
                    <ul>
                        <li><strong>Seguridad garantizada:</strong> Contamos con las herramientas y técnicas adecuadas para trabajar en alturas con total seguridad.</li>
                        <li><strong>Equipo profesional:</strong> Nuestros especialistas están altamente entrenados y cuentan con la experiencia necesaria para realizar un trabajo impecable.</li>
                        <li><strong>Resultados excepcionales:</strong> Dejamos tus cristales impecables, sin marcas ni residuos, mejorando la luminosidad y la apariencia de tu edificio.</li>
                    </ul>

                    <h3>¡Pide tu presupuesto personalizado!</h3>
                    <p>Si necesitas una limpieza de cristales profesional para tu edificio o comunidad, no dudes en <a href="mailto:contacto@tudominio.com">contactarnos</a>. Estaremos encantados de ofrecerte un servicio a la medida de tus necesidades.</p>`,
      image: '../assets/imagenes/logo_600.webp'
    },
    {
      text: 'Limpieza de ',
      highlight: 'Oficinas, Comercios y Escaparates',
      description: `<h2>Limpieza Profesional de Cristales en Oficinas, Comercios y Escaparates</h2>
                    <p>En <strong>[Nombre de tu empresa]</strong>, ofrecemos un servicio especializado en la limpieza de cristales para oficinas, comercios y escaparates. Sabemos que la primera impresión es crucial para cualquier negocio, y unos cristales limpios y brillantes son fundamentales para transmitir profesionalismo y confianza a tus clientes.</p>

                    <h3>Nuestros servicios incluyen:</h3>
                    <ul>
                        <li><strong>Limpieza de escaparates:</strong> Mantenemos tus escaparates impecables, asegurando que tus productos se vean siempre en su mejor versión.</li>
                        <li><strong>Ventanas y cristales de oficinas:</strong> Proporcionamos una limpieza profunda y detallada de las ventanas de oficinas, garantizando un ambiente de trabajo más luminoso y agradable.</li>
                        <li><strong>Acceso a espacios difíciles:</strong> Usamos técnicas y herramientas adecuadas para limpiar cristales en alturas o en lugares de difícil acceso de manera segura.</li>
                    </ul>

                    <h3>¿Por qué elegirnos?</h3>
                    <ul>
                        <li><strong>Imagen profesional:</strong> Unos cristales perfectamente limpios mejoran la apariencia de tu negocio y crean un ambiente más acogedor.</li>
                        <li><strong>Servicio flexible:</strong> Nos adaptamos a las necesidades específicas de tu oficina o comercio, ofreciendo servicios periódicos o puntuales.</li>
                        <li><strong>Sin interrupciones:</strong> Trabajamos con rapidez y discreción, minimizando cualquier interrupción en el funcionamiento de tu negocio.</li>
                    </ul>

                    <h3>¡Solicita tu presupuesto hoy mismo!</h3>
                    <p>Si necesitas un servicio profesional de limpieza de cristales para tu oficina, comercio o escaparate, no dudes en <a href="mailto:contacto@tudominio.com">contactarnos</a>. Estaremos encantados de ofrecerte una solución adaptada a tus necesidades.</p>`,
      image: '../assets/imagenes/logo_600.webp'
    }
  ];

  activeIndex = 0;

  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
  }

  // Establece el div activo
  setActive(index: number) {
    this.activeIndex = index;
  }

  // Limpia la clase 'active'
  clearActive() {
    this.activeIndex = -1;
  }

  // Verifica si un div debe estar activo
  isActive(index: number): boolean {
    return this.activeIndex === index;
  }


  ngAfterViewInit(): void {
    // ✅ Esto se ejecuta cuando videoRef ya está disponible
    const video = this.videoRef?.nativeElement;
    if (video) {
      video.volume = this.videoVolume;
    }
  }


}
