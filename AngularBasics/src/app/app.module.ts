import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { HeaderComponent } from './forms/header/header.component';
import { FooterComponent } from './forms/footer/footer.component';
import { NavbarComponent } from './forms/navbar/navbar.component';
import { FormbodyComponent } from './forms/formbody/formbody.component';
import { SpreadOperatorComponent } from './spread-operator/spread-operator.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './routing/home/home.component';
import { LoginComponent } from './routing/login/login.component';
import { ProductsComponent } from './routing/products/products.component';
import { ContactUsComponent } from './routing/contact-us/contact-us.component';
import { Routes, RouterModule} from '@angular/router';
import { NotfoundComponent } from './routing/notfound/notfound.component';
import { not } from '@angular/compiler/src/output/output_ast';
import { LaptopComponent } from './routing/products/laptop/laptop.component';
import { MobileComponent } from './routing/products/mobile/mobile.component';
import { TvComponent } from './routing/products/tv/tv.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SrTestingComponent } from './sr-testing/sr-testing.component';
import { DesignutilityService } from './appServices/designutility.service';
import { FetchdataComponent } from './fetchdata/fetchdata.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubjectsComponent } from './subjects/subjects.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { QuestionTypeDragDropComponent } from './question-type-drag-drop/question-type-drag-drop.component';

const appRoutes:Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'products', children:[
    {path:'', component:ProductsComponent},
    {path:'laptop', component:LaptopComponent},
    {path:'mobile', component:MobileComponent},
    {path:'tv', component:TvComponent}
  ]},
  {path:'contactUs', component:ContactUsComponent},
  {path:'**', component:NotfoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    FormbodyComponent,
    SpreadOperatorComponent,
    PropertyBindingComponent,
    DirectivesComponent,
    RoutingComponent,
    HomeComponent,
    LoginComponent,
    ProductsComponent,
    ContactUsComponent,
    NotfoundComponent,
    LaptopComponent,
    MobileComponent,
    TvComponent,
    ParentComponent,
    ChildComponent,
    SrTestingComponent,
    FetchdataComponent,
    SubjectsComponent,
    ReactiveformComponent,
    DragdropComponent,
    QuestionTypeDragDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [DesignutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
