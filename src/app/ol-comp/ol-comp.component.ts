import { Component, OnInit } from '@angular/core';
import 'ol/ol.css'

import ol from './oldef'

@Component({
  selector: 'app-ol-comp',
  templateUrl: './ol-comp.component.html',
  styleUrls: ['./ol-comp.component.css']
})
export class OlCompComponent implements OnInit {

  constructor() { }

  ngOnInit() 
  {
    

    let map = new ol.Map({
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      target: 'map',
      view: new ol.View({
        center: [0, 0],
        zoom: 2
      })
    });

  }

}
