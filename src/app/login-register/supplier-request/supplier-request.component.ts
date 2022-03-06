import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-supplier-request',
  templateUrl: './supplier-request.component.html',
  styleUrls: ['./supplier-request.component.scss']
})
export class SupplierRequestComponent implements OnInit {

  constructor(

    private router:Router

  ) { }

  ngOnInit(): void {
  }

  cancel(){
    this.router.navigate(['/loginRegister']);
  }

}
