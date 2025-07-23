# ClaimWatch – BLM Mining Claims Monitor

## Deployment

1. **SPA only**:  
   - Deploy to Vercel, Netlify, or GitHub Pages.  
   - Edit `index.html` config for BLM endpoints.
2. **With backend API**:  
   - Deploy `server.js` on Vercel serverless, AWS Lambda, or a VPS.
   - Point frontend queries to your `/api/extractChanges` endpoint.

## Usage
- Draw AOI, run claim query, export results.  
- For robust incremental sync, set up backend API for true `extractChanges` support.

## Docs
- [ArcGIS JS SDK](https://developers.arcgis.com/javascript/latest/)
- [ArcGIS REST API extractChanges](https://developers.arcgis.com/rest/services-reference/extract-changes-feature-service-.htm)
