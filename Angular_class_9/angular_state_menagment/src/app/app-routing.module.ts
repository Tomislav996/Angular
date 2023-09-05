import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './compoennts/counter/counter.component';
import { TaskComponent } from './compoennts/task/task.component';
import { ProductsComponent } from './compoennts/products/products.component';

const routes: Routes = [
  {path: "counter", component: CounterComponent},
  {path: "task", component: TaskComponent},
  {path: "products", component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
