import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../component/table/table.component';
import { LogoutComponent } from '../../component/logout/logout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TableComponent, LogoutComponent],
  exports: [TableComponent]
})
export class SharedmoduleModule {}
