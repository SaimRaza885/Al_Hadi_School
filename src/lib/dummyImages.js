import schoolLogo from "@/data/asserts/Al Hadi.jpeg";

// Real school imagery hosted on Unsplash (CDN).
// Sizes are picked per use: w=1920 for hero/background, w=1200 for cards,
// w=800 for portraits. crop + auto format keep them lean.

const u = (id, w, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ""}&q=80`;

export const dummyImages = {
  schoolLogo,

  // Hero student / classroom
  heroStudent: u("1509062522246-3755977927d7", 1200, 900),

  // Principal portrait
  principal: u("1507003211169-0a1dd7228f2d", 800, 1000),

  // Staff portraits
  staffPrincipal: u("1500648767791-00dcc994a43e", 400, 400),
  staffAcademics: u("1580489944761-15a19d654956", 400, 400),
  staffStem: u("1560250097-0b93528c311a", 400, 400),
  staffActivities: u("1551836022-d5d88e9218df", 400, 400),

  // Athletics & Sports
  sports: u("1461896836934-ffe607ba8211", 1200, 800),

  // Creative Arts
  arts: u("1513364776144-60967b0f800f", 1200, 800),

  // Leadership & Clubs
  clubs: u("1517048676732-d65bc937f952", 1200, 800),

  // Academic Program: Middle
  middleProgram: u("1523240795612-9a054b0db644", 1200, 800),

  // Academic Program: Secondary
  secondaryProgram: u("1571260899304-425eee4c7efc", 1200, 800),

  // Academic Program: STEM
  stemProgram: u("1581092160562-40aa08e78837", 1200, 800),

  // Gallery: Sports Day
  gallerySports: u("1461896836934-ffe607ba8211", 1200, 900),

  // Gallery: Science Exhibition
  galleryScience: u("1532094349884-543bc11b234d", 1200, 900),

  // Gallery: Qirat & Culture
  galleryQirat: u("1546410531-bb4caa6b424d", 1200, 900),

  // Gallery: Arts & Drama
  galleryArts: u("1513364776144-60967b0f800f", 1200, 900),

  // Gallery: Library
  galleryLibrary: u("1524995997946-a1c2e315a42f", 1200, 900),

  // Gallery: Sports Ground
  gallerySportsGround: u("1461896836934-ffe607ba8211", 1200, 900),

  // Gallery: Campus
  galleryCampus: u("1562774053-701939374585", 1200, 900),

  // Page hero background — campus building
  pageHeroBg: u("1541339907198-e08756dedf3f", 1920),

  // Homepage hero auto-slider backgrounds (full-bleed)
  heroSlides: [
    u("1541339907198-e08756dedf3f", 1920),
    u("1562774053-701939374585", 1920),
    u("1509062522246-3755977927d7", 1920),
    u("1523240795612-9a054b0db644", 1920),
  ],
};