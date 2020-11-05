import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-player-bar',
  templateUrl: './player-bar.component.html',
  styleUrls: ['./player-bar.component.css']
})
export class PlayerBarComponent implements OnInit {

  audioSource: HTMLAudioElement;
  isPlaying = false;
  isLoading = false;
  stats: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getStats();
    this.initiateAutoUpdate();
  }

  getStats() {
    this.http.get('https://listen.saturdayskankout.co.uk/status-json')
        .subscribe((res: any) => {
          if (res.icestats.source) {
            this.stats = this.checkStatSources(res.icestats.source);
          }
        });
  }

  checkStatSources(source: any[]) {
    if (source.length) {
      if (source.length > 1) {
        if (source[1].server_name === 'Live') {
          return source[1];
        } else {
          return source[0];
        }
      }
    } else {
      return source;
    }
  }

  initiateAutoUpdate() {
    setInterval(() => {
      this.getStats();
    }, (60 * 2.5) * 1000);
  }

  playStream() {
    this.isLoading = true;

    const url = 'https://listen.saturdayskankout.co.uk/';
    this.audioSource = new Audio();
    this.audioSource.src = url;
    this.audioSource.load();
    this.audioSource.play().then(() => {
      this.isLoading = false;
      this.toggleIsPlaying();
    });
  }

  stopStream() {
    this.toggleIsPlaying();
    this.audioSource.pause();
    this.audioSource.src = '';
  }

  toggleIsPlaying() {
    this.isPlaying = !this.isPlaying;
  }

}
