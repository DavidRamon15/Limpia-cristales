import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-carousel',
  template: `
    <div id="videoCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div *ngFor="let video of safeVideos; let i = index" class="carousel-item" [class.active]="i === 0">
          <div class="ratio ratio-16x9">
            <iframe [src]="video" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#videoCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#videoCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  `,
  styles: []
})
export class VideoCarouselComponent {
  videos = [
    'https://www.instagram.com/p/DF0fAC0IrK3/',
    'https://www.youtube.com/embed/sBws8MSXN7A',
    'https://www.youtube.com/embed/ScMzIvxBSi4'
  ];

  safeVideos: SafeResourceUrl[] = [];

  constructor(private sanitizer: DomSanitizer) {
    this.safeVideos = this.videos.map(video => this.sanitizer.bypassSecurityTrustResourceUrl(video));
  }
}
