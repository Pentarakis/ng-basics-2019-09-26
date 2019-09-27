import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './basic-layout/dashboard/dashboard.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookComponent } from './book/book/book.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'book', component: BookListComponent},
  { path: 'book/:id', component: BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
