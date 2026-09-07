// Local image pipeline (zero-hardcode).
//
// Everything here is driven by Vite's `import.meta.glob`: it picks up every
// matching file at dev/build time. To change site images, just add / replace /
// delete files in src/data/asserts/ — no code edits needed.

const galleryGlob = import.meta.glob(
  "../data/asserts/website image/gallery/*.jpg",
  { eager: true, query: "?url", import: "default" }
);

const heroGlob = import.meta.glob(
  "../data/asserts/website image/hero-*.jpg",
  { eager: true, query: "?url", import: "default" }
);

// Any image sitting in the asserts root becomes the school logo
// (first match wins, so the file can be renamed freely).
const logoGlob = import.meta.glob(
  "../data/asserts/*.{jpeg,jpg,png,webp}",
  { eager: true, query: "?url", import: "default" }
);

const heroSlides = Object.values(heroGlob).sort();
const gallery = Object.values(galleryGlob).sort();
const schoolLogo = Object.values(logoGlob).sort()[0] || "/al-hadi-logo.jpeg";

const fileName = (url) => {
  const parts = url.split(/[\\/]/);
  return parts[parts.length - 1].replace(/\.(jpe?g|png|webp)$/i, "");
};

export const localImages = {
  schoolLogo,
  heroSlides,
  pageHeroBg: heroSlides[0] || "",
  gallery,
  galleryFileName: fileName,
};

export default localImages;