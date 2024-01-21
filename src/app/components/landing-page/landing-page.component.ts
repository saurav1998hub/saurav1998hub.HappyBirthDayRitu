import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  animations: [
    trigger('myAnimation', [
      state('void', style({ opacity: 0 })), // Initial state
      state('*', style({ opacity: 1 })), // Final state
      transition(':enter', [
        animate('5s ease-in') // Animation for entering elements
      ]),
      transition(':leave', [
        animate('0.3s ease-out') // Animation for leaving elements
      ])
    ])
  ],
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent{
  title = 'Happy Birthday Ritu';
  @ViewChild('audioElement') audioElement!: ElementRef;

  buttonClicked:boolean = false;

  start(e:Event){
    this.buttonClicked  = true;
    console.log("start");
    const audio = this.audioElement.nativeElement as HTMLAudioElement;
    audio.load();
    audio.play();
  }
}
