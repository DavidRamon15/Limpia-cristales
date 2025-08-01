import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-limpieza-casa',
  templateUrl: './limpieza-casa.component.html',
  styleUrls: ['./limpieza-casa.component.css']
})
export class LimpiezaCasaComponent {

  @ViewChild('videoPlayer') video!: ElementRef<HTMLVideoElement>;

  @ViewChild('videoPlayer2') video2!: ElementRef<HTMLVideoElement>;

  @ViewChild('videoPlayer3') video3!: ElementRef<HTMLVideoElement>;

  @ViewChild('videoPlayer4') video4!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    this.video.nativeElement.muted = true;
    this.video2.nativeElement.muted = true;
    this.video3.nativeElement.muted = true;
    this.video4.nativeElement.muted = true;

  }

}
