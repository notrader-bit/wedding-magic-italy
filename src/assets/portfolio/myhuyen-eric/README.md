# MyHuyen & Eric — gallery assets

Curated web exports live here. Source mapping: `manifest.json`.

To re-import from a new zip:

1. Extract to `.tmp-photos-extract/` (folders: `COUPLE SHOOT`, `CEREMONY`, etc.)
2. Run `node scripts/import-myhuyen-photos.mjs` (picks evenly across each set, resizes to 1920px JPEG)

Counts per section: couple shoot 5, ceremony 5, cocktail 5, dinner 5, gift exchange 4, plus separate `hero.jpg`.
