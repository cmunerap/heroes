import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent implements OnInit {
	id: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  	this.id = this.route.snapshot.paramMap.get('id');
  }
}
