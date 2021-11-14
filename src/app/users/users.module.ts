import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';

@NgModule({
  declarations: [UsersComponent],
  providers: [UsersService],
  imports: [CommonModule],
  exports: [UsersComponent],
})
export class UsersModule {}
