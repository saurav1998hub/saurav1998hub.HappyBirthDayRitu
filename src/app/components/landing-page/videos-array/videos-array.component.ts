import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-videos-array',
  templateUrl: './videos-array.component.html',
  styleUrls: ['./videos-array.component.scss'],
})
export class VideosArrayComponent {
  videos = [
   
    { src: './../../assets/videos/2.mov' },
    { src: './../../assets/videos/3.mov' },
    { src: './../../assets/videos/4.mov' },
    { src: './../../assets/videos/5.mov' },
    { src: './../../assets/videos/6.mov' },
    { src: './../../assets/videos/1.mov' },
    // ...
  ];

  @ViewChild('videoContainer')
  videoContainerRef!: ElementRef;
  scrollInterval: any;

  ngAfterViewInit() {
    const videoContainer = this.videoContainerRef.nativeElement;
  
    this.scrollInterval = setInterval(() => {
      const scrollDistance = 400;
      videoContainer.scrollBy({ top: scrollDistance, behavior: 'smooth' });
  
      if (videoContainer.scrollTop === videoContainer.scrollHeight - videoContainer.clientHeight) {
        videoContainer.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 3000); // Adjust interval speed for scrolling speed
  }
  
  ngOnDestroy() {
    clearInterval(this.scrollInterval); // Clear interval to prevent memory leaks
  }
}