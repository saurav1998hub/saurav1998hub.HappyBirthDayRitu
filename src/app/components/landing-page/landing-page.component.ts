import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
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
