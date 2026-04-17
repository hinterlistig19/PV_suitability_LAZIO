# PV_suitability_LAZIO
Multi-criteria spatial analysis ti identify suitable areas for utility scale solar PV installationsin the Lazio region (Central Italy), developed using GEE and open geospatial datasets.
workflow replicates and automates the environmental screening process typically performed during renewable energy project origination and envirinmental permititng in Italy

Methodology

Dataset -> Source -> Resolution -> Purpose

GAUL Level -> FAO -> vector -> administrative boudaries

ESA WorldCover 2021 -> ESA/Copernicus -> 10 m -> land cover

WDPA -> WCMC/UNEP -> vector -> protected areas

Suitability criteria

Criterion -> thereshold -> legal/tecnical basis

slope-> < 5­° -> tecnical standart

forest -> excluded -> environmental constraints

urban areas -> excluded -> habitat protection

water bodies -> excluded -> tecnical and safety constraints

wetlands-> excluded -> habitat protection

protection areas -> excluded -> Natura 2000, national/region parks, Ramsar

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
