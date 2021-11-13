import { Component, Input, OnInit } from '@angular/core';
import { PostDto } from 'src/app/dto/PostDto';

@Component({
  selector: 'app-tab-post',
  templateUrl: './tab-post.component.html',
  styleUrls: ['./tab-post.component.css']
})
export class TabPostComponent implements OnInit {

  @Input() post : PostDto = {
    id: 0,
    name: '',
    value: 0,
    date: new Date(),
    note: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
