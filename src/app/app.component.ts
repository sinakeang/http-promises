import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*
- CORS.
    Cross Origin Resource Sharing.
    Feature by browser to prevent api from sharing.
    Can use Allow-Control-Allow-Origin chrome plugin to bypass for development.
- Create an intermediate service.
- Provide our service.
- Convert responses to a domain model.
- Handle async work by using promises.
*/
export class AppComponent {
  private loading: boolean = false;
  constructor(private itunes:SearchService) { }

  doSearch(term: string) {
    this.loading = true;
    this.itunes.search(term).then( () => this.loading = false);
  }
}
