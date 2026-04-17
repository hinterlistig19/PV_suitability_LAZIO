// =============================================
// Solar PV Site Suitability - Lazio
// 

// 1. Study area
var italy = ee.FeatureCollection("FAO/GAUL/2015/level1")
  .filter(ee.Filter.eq('ADM1_NAME', 'Lazio'));

Map.centerObject(italy, 8);

// 2. Slope from SRTM
var dem = ee.Image("USGS/SRTMGL1_003");
var slope = ee.Terrain.slope(dem);
var slopeMask = slope.lt(5);

// 3. ESA WorldCover
var worldcover = ee.Image("ESA/WorldCover/v200/2021");
var lcMask = worldcover.neq(50)
  .and(worldcover.neq(10))
  .and(worldcover.neq(80))
  .and(worldcover.neq(90));

// 4. Protected Areas (WDPA)
var wdpa = ee.FeatureCollection("WCMC/WDPA/current/polygons")
  .filterBounds(italy);
var wdpaMask = ee.Image(1).paint(wdpa, 0).unmask(1);

// 5. Combine all
var suitable = slopeMask.and(lcMask).and(wdpaMask).clip(italy);

// 6. Visualize
Map.addLayer(slope.clip(italy), {min:0, max:30, palette:['green','yellow','red']}, 'Slope');
Map.addLayer(worldcover.clip(italy), {}, 'Land Cover');
Map.addLayer(wdpa, {color: 'blue'}, 'Protected Areas');
Map.addLayer(suitable.selfMask(), {palette: ['#00AA00']}, 'Suitable Areas');
