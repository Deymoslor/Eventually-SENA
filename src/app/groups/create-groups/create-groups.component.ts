import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-groups',
  templateUrl: './create-groups.component.html',
  styleUrls: ['./create-groups.component.scss']
})
export class CreateGroupsComponent implements OnInit {

  share() {
    window.alert('El grupo ha sido creado!');
  }

  // swal("Oops!", "Something went wrong on the page!", "error");

  constructor() { }

  ngOnInit(): void {
  }

}
