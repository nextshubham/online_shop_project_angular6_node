import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../component/table/table.component';
import { RegisterComponent } from '../../component/register/register.component';
import { MaterialModule } from '../material/material.module';
@NgModule({
  imports: [CommonModule, MaterialModule, FormsModule],
  declarations: [TableComponent, RegisterComponent],
  exports: [TableComponent, RegisterComponent]
})
export class SharedmoduleModule {}
