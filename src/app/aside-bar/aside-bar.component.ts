import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.css']
})
export class AsideBarComponent implements OnInit {

  videoInfo = [
    {
      url: 'https://i.ytimg.com/vi/gbeN-2ErxBw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC7prt4W9kywtNVQC-xHhTIWzeEYA',
      alt: 'thumbnail',
      title: 'This is the Greatest Bank Heist in Japanese History',
      author: 'Kento Bento',
      views: '10M',
      time: '4 years ago'
    },
    {
      url: 'https://i.ytimg.com/vi/gbeN-2ErxBw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC7prt4W9kywtNVQC-xHhTIWzeEYA',
      alt: 'thumbnail',
      title: 'This is the Greatest Bank Heist in Japanese History',
      author: 'Kento Bento',
      views: '10M',
      time: '4 years ago'
    },
    {
      url: 'https://i.ytimg.com/vi/gbeN-2ErxBw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC7prt4W9kywtNVQC-xHhTIWzeEYA',
      alt: 'thumbnail',
      title: 'This is the Greatest Bank Heist in Japanese History',
      author: 'Kento Bento',
      views: '10M',
      time: '4 years ago'
    },
    {
      url: 'https://i.ytimg.com/vi/gbeN-2ErxBw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC7prt4W9kywtNVQC-xHhTIWzeEYA',
      alt: 'thumbnail',
      title: 'This is the Greatest Bank Heist in Japanese History',
      author: 'Kento Bento',
      views: '10M',
      time: '4 years ago'
    },
    {
      url: 'https://i.ytimg.com/vi/gbeN-2ErxBw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC7prt4W9kywtNVQC-xHhTIWzeEYA',
      alt: 'thumbnail',
      title: 'This is the Greatest Bank Heist in Japanese History',
      author: 'Kento Bento',
      views: '10M',
      time: '4 years ago'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
