import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { VisualizeComponent } from './visualize/visualize.component';
import { TbDemoComponent } from './tb-demo/tb-demo.component';


const routes: Routes = [
  { path:'aboutus', component: AboutUsComponent },
  { path:'home', component: HomeComponent },
  { path:'demo', component: DemoComponent },
  { path:'visualize', component: VisualizeComponent },
  { path:'tb', component: TbDemoComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
