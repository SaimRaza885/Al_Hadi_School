// ================= HERO + GENERAL IMAGES =================

import hero_1 from "@/assets/hero_1.jpg";
import high_school from "@/assets/high_school.jpg";

import logo from "@/assets/logo.jpg";

import about_hero from "@/assets/about.jpg";

import middle_program from "@/assets/middle_program.jpg";
import art from "@/assets/art.jpg";

// ================= FACULTY IMAGES =================
import Principal_Photo from "@/assets/faculty/princple.jpg"
import Amjad_Photo from "@/assets/faculty/amjad.jpg"
import Sajjad_Photo from "@/assets/faculty/sajjad.jpg"
import Yaadgar_Photo from "@/assets/faculty/yaadgar.jpg"
import Kumail_photo from "@/assets/faculty/kumail.jpg"
import Arif_photo from "@/assets/faculty/arif.jpg"
import Naqi_photo from "@/assets/faculty/naqi.jpg"
import Shahid_Photo from "@/assets/faculty/shahid.jpg"
import Sardar_Photo from "@/assets/faculty/sardar.jpg"
import Asif_Photo from "@/assets/faculty/asif.jpg"
import Sajid_Photo from "@/assets/faculty/sajid.jpg"

// ================= GALLERY IMAGES =================

import gallary_1 from "@/assets/gallery/gallary_1.jpg";
import gallary_2 from "@/assets/gallery/gallary_2.jpg";
import gallary_3 from "@/assets/gallery/gallary_3.jpg";
import gallary_5 from "@/assets/gallery/gallary_5.jpg";
import gallary_6 from "@/assets/gallery/gallary_6.jpg";
import gallary_7 from "@/assets/gallery/gallary_7.jpg";
import gallary_12 from "@/assets/gallery/gallary_12.jpg";
import gallary_13 from "@/assets/gallery/gallary_13.jpg";
import gallary_20 from "@/assets/gallery/gallary_20.jpg";
import gallary_22 from "@/assets/gallery/gallary_22.jpg";
import gallery_main from "@/assets/gallery/GALLERY.jpg";
import gallary_23 from "@/assets/gallery/gallary_23.jpg";
import gallary_24 from "@/assets/gallery/gallary_24.jpg";
import gallary_25 from "@/assets/gallery/gallary_25.jpg";
import gallary_26 from "@/assets/gallery/gallary_26.jpg";
import gallery_121 from "@/assets/gallery/gallery_121.jpg";

// ================= ALUMNI IMAGES =================

import alumuni_1 from "@/assets/alumuni/alumuni_1.jpg";
import alumuni_2 from "@/assets/alumuni/alumuni_2.jpg";
import alumuni_3 from "@/assets/alumuni/alumuni_3.jpg";
import alumuni_4 from "@/assets/alumuni/alumuni_4.jpg";
import alumuni_5 from "@/assets/alumuni/alumuni_5.jpg";
import alumuni_6 from "@/assets/alumuni/alumuni_6.jpg";
import alumuni_7 from "@/assets/alumuni/alumuni_7.jpg";
import alumuni_8 from "@/assets/alumuni/alumuni_8.jpg";
import alumuni_9 from "@/assets/alumuni/alumuni_9.jpg";

// ================= EXPORT =================

export const images = {
  // hero
  hero_1,

  // general
  logo,

  // program / activity banners
  middle_program,
  art,

  // gallery
  gallary_1,
  gallary_2,
  gallary_3,
  gallary_5,
  gallary_6,
  gallary_7,
  gallary_12,
  gallary_13,
  gallary_20,
  gallary_22,
  gallery_main,
  gallary_23,
  gallary_24,
  gallary_25,
  gallary_26,

  // site aliases (point any page image to a photo above)
  heroImage: { src: hero_1, width: 4032, height: 3024 },
  pageHeroBg: gallary_24,
  gallery: [
    gallary_1,
    gallary_2,
    gallary_3,
    gallary_5,
    gallary_6,
    gallary_7,
    gallary_12,
    gallary_13,
    gallary_20,
    gallary_22,
    gallary_23,
    gallary_24,
    gallary_25,
    gallary_26,
    gallery_121,
    gallery_main,
  ],
  galleryNames: [
    "Photo 1",
    "Photo 2",
    "Photo 3",
    "Photo 4",
    "Photo 5",
    "Photo 6",
    "Photo 7",
    "Photo 8",
    "Photo 9",
    "Photo 10",
    "Photo 11",
    "Photo 12",
    "Photo 13",
    "Photo 14",
    "Photo 15",
    "Campus Memories",
  ],

  about_hero,

  principal: gallary_1,
  sports: gallary_3,
  arts: art,
  clubs: gallary_7,
  middleProgram: middle_program,
  secondaryProgram: high_school,
  stemProgram: gallary_22,
  galleryScience: gallary_6,
  galleryQirat: gallary_6,

  // alumni portraits
  alumuni_1,
  alumuni_2,
  alumuni_3,
  alumuni_4,
  alumuni_5,
  alumuni_6,
  alumuni_7,
  alumuni_8,
  alumuni_9,

  staffPrincipal: Principal_Photo,
  staffAmjad: Amjad_Photo,
  staffSajjad: Sajjad_Photo,
  staffYaadgar: Yaadgar_Photo,
  staffKumail: Kumail_photo,
  staffArif: Arif_photo,
  staffNaqi: Naqi_photo,
  staffShahid: Shahid_Photo,
  staffSardar: Sardar_Photo,
  staffAsif: Asif_Photo,
  staffSajid: Sajid_Photo,
  // Temporary local portraits until dedicated faculty photos are provided.
  staffAcademics: alumuni_2,
  staffStem: alumuni_3,
  staffActivities: alumuni_4,
};