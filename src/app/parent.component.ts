import {
  AfterViewInit,
  Component,
  Injector,
  NgModule,
  Type,
  ViewChild,
  ViewContainerRef,
  createNgModule
} from '@angular/core';

@Component({
  selector: 'app-parent',
  template: '<div #container></div>'
})
export class ParentComponent implements AfterViewInit {
  @ViewChild('container', {read: ViewContainerRef, static: false}) container: ViewContainerRef;

  constructor(private injector: Injector) {
  }

  ngAfterViewInit() {
    // Must clear cache. //TODO: is this still necessary in some way?
    //this.compiler.clearCache();

    // Define the component using Component decorator.
    const component = Component({
      template: '<div>This is the dynamic template. Test value: {{test}}</div>',
      styles: [':host {color: red}']
    })(class {
      test = 'some value';
    });

    // Define the module using NgModule decorator.
    const module = NgModule({
      declarations: [component]
    })(class {
    });

    const moduleRef = createNgModule(module, this.injector);        
    this.container.createComponent(component, { ngModuleRef: moduleRef });

  //   // Asynchronously (recommended) compile the module and the component.
  //   this.compiler.compileModuleAndAllComponentsAsync(module)
  //     .then(factories => {
  //       // Get the component factory.
  //       const componentFactory = factories.componentFactories[0];
  //       // Create the component and add to the view.
  //       const componentRef = this.container.createComponent(componentFactory);
  //       // Modifying the property and triggering change detection.
  //       setTimeout(() => componentRef.instance.test = 'some other value', 2000);
  //     });
  }
}
