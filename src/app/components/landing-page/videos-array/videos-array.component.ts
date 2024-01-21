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
    //{ src: './../../assets/videos/2.mov' },
    // ...
  ];

  @ViewChild('videoContainer')
  videoContainerRef!: ElementRef;
  scrollInterval: any;
  isMobile: boolean = false;

  ngAfterViewInit() {
    this.checkIfMobile(); // Check if the initial load is on a mobile device
    this.setupAutoScroll();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkIfMobile();
  }

  private checkIfMobile() {
    this.isMobile = window.innerWidth <= 768; // Adjust the threshold as needed
  }

  private setupAutoScroll() {
    const videoContainer = this.videoContainerRef.nativeElement;
    setTimeout(() => {
      // Code to execute after the delay
      this.scrollInterval = setInterval(() => {
        const scrollDistance = 600;
        if (!this.isMobile) {
          videoContainer.scrollBy({ top: scrollDistance, behavior: 'smooth' });
          let difference = videoContainer.scrollTop - videoContainer.scrollHeight + videoContainer.clientHeight;
          if (difference >= -2 && difference <= 2) {
            videoContainer.scrollTo({ top: 0, behavior: 'smooth' });
          }
        } else {
          videoContainer.scrollTo({ top: videoContainer.scrollTop + scrollDistance, behavior: 'smooth' });
          
          // Check if reached the bottom on mobile and scroll to top
          if (videoContainer.scrollTop + videoContainer.clientHeight >= videoContainer.scrollHeight) {
            videoContainer.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      
      }, 4000);
    }, 2000);
    // Adjust interval speed for scrolling speed
  }

  ngOnDestroy() {
    clearInterval(this.scrollInterval); // Clear interval to prevent memory leaks
  }
}