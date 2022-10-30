import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-rec',
  templateUrl: './video-rec.component.html',
  styleUrls: ['./video-rec.component.css']
})
export class VideoRecComponent implements OnInit {

  @Input() videoInfo?: any;

  constructor() { }

  ngOnInit(): void {
  }

}
