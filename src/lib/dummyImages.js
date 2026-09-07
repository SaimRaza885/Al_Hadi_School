// Local image registry — fully offline, no internet image URLs.
//
// Every image on the public site comes from src/data/asserts/, auto-loaded
// via localImages (Vite import.meta.glob). Add / replace / delete files there
// and the site picks them up automatically.
//
// Landscape "card" keys cycle through the local photo pool (hero + gallery).
// Portrait keys for staff / alumni stay `undefined` so ProfileCard renders its
// clean icon fallback until real portraits are dropped into the assets folder.

import { localImages } from "@/lib/localImages";

const pool = [...localImages.heroSlides, ...localImages.gallery];
const pick = (i) => (pool.length ? pool[i % pool.length] : "");

export const dummyImages = {
  schoolLogo: localImages.schoolLogo,

  // Live gallery photos auto-loaded from src/data/asserts/website image/gallery/
  gallery: localImages.gallery,
  galleryFileName: localImages.galleryFileName,

  // Homepage hero auto-slider backgrounds (local hero-*.jpg)
  heroSlides: localImages.heroSlides,

  // Inner-page hero background (first local hero photo)
  pageHeroBg: localImages.pageHeroBg || pick(0),

  // Landscape card imagery — real local school photos
  heroStudent: pick(0),
  principal: pick(1),
  sports: pick(2),
  arts: pick(3),
  clubs: pick(4),
  middleProgram: pick(5),
  secondaryProgram: pick(6),
  stemProgram: pick(7),

  // "Gallery" keys kept for editorial / blog fallbacks — local photos
  gallerySports: pick(8),
  galleryScience: pick(9),
  galleryQirat: pick(10),
  galleryArts: pick(11),
  galleryLibrary: pick(12),
  gallerySportsGround: pick(13),
  galleryCampus: pick(14),

  // Portraits — no local files yet; leave undefined so ProfileCard renders
  // its icon fallback instead of a fake internet photo
  staffPrincipal: undefined,
  staffAcademics: undefined,
  staffStem: undefined,
  staffActivities: undefined,
};