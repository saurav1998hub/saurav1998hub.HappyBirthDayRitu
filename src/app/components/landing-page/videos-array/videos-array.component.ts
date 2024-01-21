import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-videos-array',
  templateUrl: './videos-array.component.html',
  styleUrls: ['./videos-array.component.scss'],
})
export class VideosArrayComponent {
  videos = [


    { src: './../../assets/videos/3.mov' },
    { src: './../../assets/videos/4.mov' },
    { src: './../../assets/videos/5.mov' },
    { src: './../../assets/videos/6.mov' },
    { src: './../../assets/videos/1.mov' },
    { src: './../../assets/videos/7.mov' },
    { src: './../../assets/videos/8.mov' },
    { src: './../../assets/videos/9.mov' },
    { src: './../../assets/videos/10.mov' },
    { src: './../../assets/videos/11.mov' },
    { src: './../../assets/videos/12.mov' },
  ];

  @ViewChild('videoContainer') 
  videoContainerRef!: ElementRef;
  private scrollInterval: any;
  private isMobile: boolean = false;
  
  ngAfterViewInit() {
    this.setupAutoScroll(); // Call directly for efficiency
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateScrollBehavior(); // Combine logic for clarity
  }

  private updateScrollBehavior() {
    this.isMobile = window.innerWidth <= 768;
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
      this.setupAutoScroll(); // Reinitialize with updated behavior
    }
  }

  private setupAutoScroll() {
    const videoContainer = this.videoContainerRef.nativeElement;
    this.scrollInterval = setInterval(() => {
      const scrollDistance = 550;
      if (!this.isMobile) {
        videoContainer.scrollBy({ top: scrollDistance, behavior: 'smooth' });

        // Optimized boundary check:
        if (videoContainer.scrollTop + videoContainer.clientHeight >= videoContainer.scrollHeight - 2) {
          videoContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        videoContainer.scrollTo({ top: videoContainer.scrollTop + scrollDistance, behavior: 'smooth' });

        // Scroll to top on mobile only when necessary:
        if (videoContainer.scrollTop + videoContainer.clientHeight >= videoContainer.scrollHeight) {
          videoContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }, 4000); // Adjust interval speed as needed
  }

  ngOnDestroy() {
    clearInterval(this.scrollInterval); // Clear interval to prevent memory leaks
  }
}