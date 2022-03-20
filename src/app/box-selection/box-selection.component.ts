import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-selection',
  templateUrl: './box-selection.component.html',
  styleUrls: ['./box-selection.component.css']
})
export class BoxSelectionComponent{

  boxes = ["Box 1", "Box 2", "Box 3", "Box 4", "Box 5", "Box 6"];
  box = this.boxes[0];

}
