import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './home/first/first.component';
import { AboutComponent } from './home/about/about.component';
import { IdoComponent } from './home/ido/ido.component';
import { KnowledgeComponent } from './home/knowledge/knowledge.component';
import { CurriculumComponent } from './home/curriculum/curriculum.component';
import { ApresentacaoComponent } from './home/apresentacao/apresentacao.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ApresentacaoComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'ido',
        component: IdoComponent,
      },
      {
        path: 'knowledge',
        component: KnowledgeComponent,
      },
      {
        path: 'curriculum',
        component: CurriculumComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
