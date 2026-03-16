import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../../services/instagram.service';
import { InstagramPost } from '../../models/instagram-post';

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.css']
})
export class InstagramFeedComponent implements OnInit {
  posts: any[] = [];
  groupedPosts: any[][] = [];
  isLoading: boolean = true;
  currentIndex: number = 0;
  totalGroups: number = 0;

  constructor(private instagramService: InstagramService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.instagramService.getInstagramPosts().subscribe(response => {
      this.posts = response;

      // Agrupar las publicaciones en grupos de 3
      if (this.posts.length > 0) {
        this.groupedPosts = [];
        for (let i = 0; i < this.posts.length; i += 3) {
          this.groupedPosts.push(this.posts.slice(i, i + 3));
        }
        this.totalGroups = this.groupedPosts.length;
      }

      this.isLoading = false;
    }, error => {
      console.error("Error cargando Instagram", error);
      this.isLoading = false;
    });
  }

  nextGroup() {
    this.currentIndex = (this.currentIndex + 1) % this.groupedPosts.length;
  }

  // Navegar al grupo anterior (cíclicamente)
  prevGroup() {
    this.currentIndex = (this.currentIndex - 1 + this.groupedPosts.length) % this.groupedPosts.length;
  }
}