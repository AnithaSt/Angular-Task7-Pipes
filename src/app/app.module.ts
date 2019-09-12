import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';

import { RouterModule } from '@angular/router';

import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { CustompipeComponent } from './custompipe/custompipe.component';


@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    ExponentialStrengthPipe,
    CustompipeComponent
    
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',pathMatch:'full',redirectTo:'pipes'},
      {path:'pipes',component:PipesComponent},
      {path:'custompipe',component:CustompipeComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
