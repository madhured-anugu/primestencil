import { Component,  h} from '@stencil/core';


@Component({
  tag: 'showcase-header',
  shadow: false
})
export class appHeaderComponent {

    render(){
        return  <div id="layout-topbar"></div>
    }
}

