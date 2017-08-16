import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateInterpolationComponent } from './template-interpolation/template-interpolation.component';
import { TemplateRefVarComponent } from './template-ref-var/template-ref-var.component';
import { TestValueBindingComponent } from './test-value-binding/test-value-binding.component';
import { TestEventBindingComponent } from './test-event-binding/test-event-binding.component';
import { TestTwowayBindingComponent } from './test-twoway-binding/test-twoway-binding.component';
import { FontResizerComponent } from './test-twoway-binding/font-resizer/font-resizer.component';
import { TestNgIfComponent } from './test-ng-if/test-ng-if.component';
import { TestNgForComponent } from './test-ng-for/test-ng-for.component';
import { TestNgSwitchComponent } from './test-ng-switch/test-ng-switch.component';
import { TestNgClassComponent } from './test-ng-class/test-ng-class.component';
import { TestNgStyleComponent } from './test-ng-style/test-ng-style.component';
import { TestNgModelComponent } from './test-ng-model/test-ng-model.component';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { TestSaftNavComponent } from './test-saft-nav/test-saft-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateInterpolationComponent,
    TemplateRefVarComponent,
    TestValueBindingComponent,
    TestEventBindingComponent,
    TestTwowayBindingComponent,
    FontResizerComponent,
    TestNgIfComponent,
    TestNgForComponent,
    TestNgSwitchComponent,
    TestNgClassComponent,
    TestNgStyleComponent,
    TestNgModelComponent,
    TestPipeComponent,
    TestSaftNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
