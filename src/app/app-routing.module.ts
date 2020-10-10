import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterPageComponent } from './features/counter/ui/counter-page/counter-page.component';
import { HomeComponent } from './features/home/ui/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'counter', component: CounterPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
