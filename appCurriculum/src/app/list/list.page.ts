import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  habilidades = [
    {'nombre':'✓	C++'},
    {'nombre':'✓	PHYTON'},
    {'nombre':'✓	JAVA'},
    {'nombre':'✓	JAVASCRIPT'},
    {'nombre':'✓	PHP'},
    {'nombre':'✓	ANGULAR '},
    {'nombre':'✓	ASP.NET'},
    {'nombre':'✓	C#'},
    {'nombre':'✓	MANEJO BASE DE DATOS'},
    {'nombre':'✓	GIT'}
  ];
 /* private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];*/
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
   /* for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
