import { Component, OnInit } from '@angular/core';
import { faBell, faEllipsisH, faCheck, faThumbsUp, faThumbsDown, faShare, faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-video-display-details',
  templateUrl: './video-display-details.component.html',
  styleUrls: ['./video-display-details.component.css']
})
export class VideoDisplayDetailsComponent implements OnInit {

  faBell = faBell;
  faCheck = faCheck;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faShare = faShare;
  faDownload = faDownload;
  faEllipsisH = faEllipsisH;

  constructor() { }

  ngOnInit(): void {
  }

}
