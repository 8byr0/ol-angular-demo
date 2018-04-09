
# ol-angular-demo

This demo empty application includes a wrapper to use ol library in an angular application.

  

# Origins

Regarding openlayers documentation, here's the procedure to use their library in any angular application :

  ` ...
    import OlMap from 'ol/map'
    import OlView from 'ol/view'
  ` ...

That's a bit heavy when you're referring to online documentation and you've got to manually declare all the modules/classes you wish to use.

# Solution
I've been trying to make things as simple as possible to reach the result below :

`    // In your component using openlayers
    import ol from './oldef' 
    
    ...
    
    let  map  =  new  ol.Map({
	layers: [
		new  ol.layer.Tile({
			source:  new  ol.source.OSM()
		})],
		target:  'map',
		view:  new  ol.View({
		center: [0, 0],
		zoom:  2})
	});`

Using this simple trick, you can now use ol api as-is without manually importing all the stuffs.


# Requirements
The following packages are required :

 - ol (from https://www.npmjs.com/package/ol ) : OpenLayers version matching ES2015 standards
 - @types/ol (from https://www.npmjs.com/package/@types/ol) : @types definition allowing autocompletion

# Installation
If you wish to use this project as a template for your own project:

`git clone https://github.com/hugrvr/ol-angular-demo.git # clone repo`

`npm install --save # install required dependencies locally`

`ng serve # run demo on http://localhost: 4200`
