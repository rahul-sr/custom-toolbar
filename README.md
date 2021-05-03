# Custom Toolbar Demo

Check the demo on link: https://custom-toolbar.vercel.app/ 

# CustomToolbar Component

<custom-toolbar (onUserAction)="handleAction($event)" defaultLayout="true" toolbarClass="mgr-10" iconClass="glyphicon glyphicon-print" title="Print">
  <!-- Child Elements -->
</custom-toolbar>

- Custom toolbar accepts a list of Input attributes or properties.
- defaultLayout : If its send as true, then the default toolbar will be generated with a button and icon.
- toolbarClass : Its the custom class that will be applied to toolbar button
- iconClass: Its the custom class for the button icon
- title: Its the title which will be shown on hover over toolbar
- onUserAction: This is an event which is emitted on click of toolbar. It will executed the handleAction callback.
- Child Elements: Custom Child Elements passed inside the component, will be rendered with the component.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
