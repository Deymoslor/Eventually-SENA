import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss']
})
export class TopHeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(["/loginRegister"]);
    // this.router.navigateByUrl("http://localhost:4200/loginRegister");
  }

}
