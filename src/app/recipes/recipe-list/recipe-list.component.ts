import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../domain/Recipe.domain';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://imagesvc.timeincapp.com/v3/mm/' +
    'image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_' +
    'horizontal_inbody_900x506%2Fpublic%2F1502824044%2Froyal-farms-best-gas-station-food-FT-SS0817' +
    '.jpg%3Fitok%3Dig79fdSU&w=700&q=85')
  ];

  constructor() { }

  ngOnInit() {
  }

}
