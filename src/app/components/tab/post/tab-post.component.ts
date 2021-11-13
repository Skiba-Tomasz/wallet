import { Component, Input, OnInit } from '@angular/core';
import { PostDto } from 'src/app/dto/PostDto';

@Component({
  selector: 'app-tab-post',
  templateUrl: './tab-post.component.html',
  styleUrls: ['./tab-post.component.css']
})
export class TabPostComponent implements OnInit {

  @Input() post!: PostDto;

  constructor() { }

  ngOnInit(): void {
  }

}
