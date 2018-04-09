import OlMap from 'ol/map'
import OlView from 'ol/view'
import OlLayerTile from 'ol/layer/tile'
import OlSourceOSM from 'ol/source/osm'




var ol = {
  Map: OlMap,
  View: OlView,
  layer: {
    Tile: OlLayerTile
  },
  source:{
    OSM: OlSourceOSM
  }
}

export default ol;