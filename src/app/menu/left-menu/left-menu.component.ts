import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth.service';
import { IleftNavMenu } from 'src/app/core/ui/ILeftNavMenu.interface';
import { ROLES_ENUM } from '../../constants/roles.enum';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  @Input() data!: IleftNavMenu;

  constructor(

    private authService: AuthService

  ) { }

  hasPermission(r: ROLES_ENUM[] | undefined): boolean {
    if (r) {
      return this.authService.hasAccessToModule(r);
    }
    return true;
  }

  ngOnInit(): void {
  }

}
