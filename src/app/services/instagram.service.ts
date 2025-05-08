
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { InstagramPost } from '../models/instagram-post';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {
  private accessToken = 'IGAAG33QYaZCGpBZAE5BLTJseEI1UGFWR3IwR0c5ZATVfQkZAwaWpvanBQSmo5UXpzYWQ2bzdMMFg5UmR6WmZAyOC1uVDZAkNGYtVktDZAjd2bmM0aFFiYWNnUzRJdUtObkJRX2RqWGlsb1RaMTlDTnJOYzI4dTZAHWHJxLVdHNHBLdy1aawZDZD';
  private apiUrl: string = 'https://graph.instagram.com/me/media';

  constructor(private http: HttpClient) { }

  // Método para obtener las publicaciones
  getInstagramPosts(): Observable<any> {
    // Llamada a la API de Instagram Graph con el access token
    return this.http.get<any>(`${this.apiUrl}?fields=id,media_type,media_url,thumbnail_url,caption,children&access_token=${this.accessToken}`)
      .pipe(
        map(response => this.filterPosts(response.data))  // Filtramos las publicaciones
      );
  }

  // Método para obtener las imágenes de los carruseles
  private getCarouselImages(carouselIds: string[]): Observable<any[]> {
    // Realizamos una solicitud para cada ID de la publicación del carrusel
    const requests = carouselIds.map(id =>
      this.http.get<any>(`https://graph.instagram.com/${id}?fields=media_url&access_token=${this.accessToken}`)
    );
    return forkJoin(requests);  // Hacemos todas las solicitudes en paralelo
  }

  // Método para filtrar las publicaciones
  private filterPosts(posts: any[]): any[] {
    const allPosts: any[] = [];
    const carouselIds: string[] = [];

    posts.forEach(post => {
      // Si es un carrusel, tomamos los IDs de las imágenes
      if (post.media_type === 'CAROUSEL_ALBUM') {
        if (post.children && post.children.data.length > 0) {
          carouselIds.push(...post.children.data.map((child: { id: any; }) => child.id));  // Añadimos los IDs del carrusel
        }
      } else {
        // Si es una imagen o video, lo añadimos directamente
        allPosts.push(post);
      }
    });

    return allPosts;
  }
}
