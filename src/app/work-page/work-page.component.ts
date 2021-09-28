import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Thumbnail } from '../shared/models/project';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'benoldi-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss']
})
export class WorkPageComponent implements OnInit {

  thumbnails$: Observable<Thumbnail[]>;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.thumbnails$ = this.dataService.fetchThumbnailsWorkPage().pipe(
      map(arryOfThumbnails => {
        let currentIndex = arryOfThumbnails.length, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [arryOfThumbnails[currentIndex], arryOfThumbnails[randomIndex]] = [
            arryOfThumbnails[randomIndex], arryOfThumbnails[currentIndex]];
        }

        return arryOfThumbnails;
      })
    );
  }
}
