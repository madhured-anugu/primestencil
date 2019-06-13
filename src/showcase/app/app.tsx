import { Component,  h} from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'showcase-app',
   shadow: false
})
export class appComponent {

    render(){
        return   <div class="layout-wrapper">
   
        <showcase-header></showcase-header>
    
        <showcase-sidebar></showcase-sidebar>
    
    
       <showcase-layout></showcase-layout>
      
    
    </div>
    }
}

