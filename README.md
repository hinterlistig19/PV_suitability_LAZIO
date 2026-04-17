# PV_suitability_LAZIO
Multi-criteria spatial analysis ti identify suitable areas for utility scale solar PV installationsin the Lazio region (Central Italy), developed using GEE and open geospatial datasets.
workflow replicates and automates the environmental screening process typically performed during renewable energy project origination and envirinmental permititng in Italy


### Datasets
| Dataset | Source | Resolution | Purpose |
|---------|--------|-----------|---------|
| SRTM DEM | USGS | 30m | Slope calculation |
| ESA WorldCover 2021 | ESA/Copernicus | 10m | Land cover classification |
| WDPA | WCMC/UNEP | vector | Protected areas exclusion |
| GAUL Level 1 | FAO | vector | Administrative boundary |


### Suitability Criteria
| Criterion | Threshold | Legal/Technical Basis |
|-----------|-----------|----------------------|
| Slope | < 5° | Technical standard for ground-mounted PV |
| Forest | Excluded | Environmental constraints, D.Lgs 34/2018 |
| Urban areas | Excluded | Land use planning constraints |
| Water bodies | Excluded | Technical and safety constraints |
| Wetlands | Excluded | Habitat protection |
| Protected areas | Excluded | Natura 2000, National/Regional Parks, Ramsar |

Protection areas coverage (WDPA)
The WDPA layer used in this analysis covers all IUCN-classified 
protected areas, including in the Italian context:
- national and regional parks
- natural states and regional reserves
- Natura 2000 network: SACs and SPAs

Results
Green areas on the map represent locations meeteng all criteria simultaneously

Context: 
this analysis mirrors the preliminary environmental screening carried out during renewable energy project origination in Italy

Tools& libraries
- Google earth engine (Javascript API)
- ESA worldcover v200
- USGS SRTM GL1
- WCMC/WDPA global dataset
