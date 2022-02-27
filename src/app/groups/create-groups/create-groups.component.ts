import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-groups',
  templateUrl: './create-groups.component.html',
  styleUrls: ['./create-groups.component.scss']
})
export class CreateGroupsComponent implements OnInit {

  share() {
    window.alert('The product has been shared!');
  }

  // swal("Oops!", "Something went wrong on the page!", "error");

  constructor() { }

  ngOnInit(): void {
  }

}
