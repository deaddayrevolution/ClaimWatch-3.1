// Basic SPA logic for ArcGIS JS SDK and AOI query
const BLM_ACTIVE_URL = "https://gis.blm.gov/nlsdb/rest/services/HUB/BLM_Natl_MLRS_Mining_Claims_Not_Closed/FeatureServer/0";

require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/layers/GraphicsLayer",
  "esri/widgets/Sketch",
  "esri/geometry/geometryEngine"
], function(Map, MapView, FeatureLayer, GraphicsLayer, Sketch, geometryEngine) {
  // Create map and view
  const map = new Map({ basemap: "hybrid" });
  const view = new MapView({
    container: "map-container",
    map,
    center: [-115, 40], zoom: 6
  });

  // Add BLM Claims
  const blmLayer = new FeatureLayer({ url: BLM_ACTIVE_URL, outFields: ["*"], title: "BLM Claims", visible: true });
  map.add(blmLayer);

  // Add AOI graphics
  const aoiLayer = new GraphicsLayer();
  map.add(aoiLayer);

  // Add sketch widget
  const sketch = new Sketch({ layer: aoiLayer, view, creationMode: "single", availableCreateTools: ["polygon", "rectangle"] });
  view.ui.add(sketch, "top-right");

  // AOI and change detection logic (add UI as needed)
  // ... 
});
