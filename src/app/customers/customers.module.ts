import { NgModule } from "@angular/core";
import { CustomersComponent } from "./components/customers/customers.component";
import { RouterModule, Routes } from "@angular/router";
import { CustomersService } from "./customers.service";

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [CustomersComponent],
  providers: [CustomersService],
  exports: [CustomersComponent],
})

export class CustomersModule {}
