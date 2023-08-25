import meetBelen from "../assets/meetBelen.png";
import meetNicole from "../assets/meetNicole.png";
import meetNicolas from "../assets/meetNicolas.png";
import meetBelenLarge from "../assets/meetBelenLarge.png";
import meetNicoleLarge from "../assets/meetNicoleLarge.png";
import meetNicolasLarge from "../assets/meetNicolasLarge.png";
import celebration from "../assets/celebration.png";

let pages = [
  //Seccion inicial
  {
    number: 0,
    title: "Social Media Lab",
    video: true,
    meet: false,
    resume: false,
    document: false,
    videoSource:
      "https://drive.google.com/file/d/1ZsMNYKzOjWENfHiz5dgRMfmqLKFtJ6kc/preview",
    meetName: "Belén",
    documentArray: "",
  },

  //Seccion 1/////////////////////////////////////////////////////////////
  {
    number: 1,
    title: "Cimientos de marca",
    video: false,
    meet: true,
    resume: false,
    document: false,
    videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetBelen,
    meetImageLarge: meetBelenLarge,
    meetName: "Belén",
    documentArray: [{name: "REFERENTES Y FUENTES DE CONTENIDO", link: "https://docs.google.com/document/d/1o2ENdGWN6YsiZUQg3KquCYe9qgL9PlftQadAoFc6sso/edit"}, {name: "CONSTRUCCIÓN DE LA MARCA PERSONAL", link: "https://docs.google.com/document/d/1W41U0RWkuHdqFlHU7tyxSNVu8tbJdXqJFUbG7gKcd1I/edit"}, {name: "CIMIENTOS MARCA PERSONAL ", link: "https://docs.google.com/document/d/1KDm8xLpfCvyNrCqVdvnxByLXpg1iTlR0SXRCVB-VMz4/edit"}],
  },
  //----------------- 4 videos
  //video2
  {
    number: 2,
    title: "Cimientos de marca",
    video: true,
    meet: false,
    resume: false,
    document: false,
    videoSource:
      "https://drive.google.com/file/d/1Q74ksr2nsby53BU6nR-P-6tHM0YteWQ2/preview",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetBelen,
    meetImageLarge: meetBelenLarge,
    meetName: "Belén",
    documentArray: "",
  },
  //video3
  {
    number: 3,
    title: "Referentes",
    video: true,
    meet: false,
    resume: false,
    document: false,
    videoSource:
      "https://drive.google.com/file/d/14FytcgOc9mqQM-qCXftYjAQlKFyCSoYZ/preview",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetBelen,
    meetImageLarge: meetBelenLarge,
    meetName: "Belén",
    documentArray: "",
  },
  //video4
  {
    number: 4,
    title: "Mi marca personal",
    video: true,
    meet: false,
    resume: false,
    document: false,
    videoSource:
      "https://drive.google.com/file/d/18ciQfSi8oqdUSRcgPDk51c8i2mkjQXEU/preview",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetBelen,
    meetImageLarge: meetBelenLarge,
    meetName: "Belén",
    documentArray: "",
  },
  //video5
  {
    number: 5,
    title: "Cimientos de marca",
    video: true,
    meet: false,
    resume: false,
    document: false,
    videoSource:
      "https://drive.google.com/file/d/1voKfCgfCyCkNdT_Zv9XnKCdscIdFGXzh/preview",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetBelen,
    meetImageLarge: meetBelenLarge,
    meetName: "Belén",
    documentArray: "",
  },
  //video6
  {
    number: 6,
    title: "Cimientos de marca",
    video: true,
    meet: false,
    resume: false,
    document: false,
    videoSource:
      "https://drive.google.com/file/d/1Uye_Mjq-csh7CPrku4E8-atAFNcsX1su/preview",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetBelen,
    meetImageLarge: meetBelenLarge,
    meetName: "Belén",
    documentArray: "",
  },
  //video7
  {
    number: 7,
    title: "Cimientos de marca",
    video: true,
    meet: false,
    resume: false,
    document: false,
    videoSource:
      "https://drive.google.com/file/d/1vIn73ii822OV3qBrWdtM7QvcsMECXAKX/preview",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetBelen,
    meetImageLarge: meetBelenLarge,
    meetName: "Belén",
    documentArray: "",
  },
  //video8
  {
    number: 8,
    title: "Cimientos de marca",
    video: true,
    meet: false,
    resume: false,
    document: false,
    videoSource:
      "https://drive.google.com/file/d/123RPHQyB440kXP47mWKE-wAcehmr3r1X/preview",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetBelen,
    meetImageLarge: meetBelenLarge,
    meetName: "Belén",
    documentArray: "",
  },
  //fin videos---------

  {
    number: 9,
    title: "Cimientos de marca",
    video: false,
    resume: true,
    meet: false,
    document: true,
    videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetBelen,
    meetImageLarge: meetBelenLarge,
    meetName: "Belén",
    documentArray: [{name: "REFERENTES Y FUENTES DE CONTENIDO", link: "https://docs.google.com/document/d/1o2ENdGWN6YsiZUQg3KquCYe9qgL9PlftQadAoFc6sso/edit"}, {name: "CONSTRUCCIÓN DE LA MARCA PERSONAL", link: "https://docs.google.com/document/d/1W41U0RWkuHdqFlHU7tyxSNVu8tbJdXqJFUbG7gKcd1I/edit"}, {name: "CIMIENTOS MARCA PERSONAL ", link: "https://docs.google.com/document/d/1KDm8xLpfCvyNrCqVdvnxByLXpg1iTlR0SXRCVB-VMz4/edit"}],
  },
  {
    number: 10,
    title: "Cimientos de marca",
    video: false,
    resume: false,
    meet: true,
    document: false,
    videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetBelen,
    meetImageLarge: meetBelenLarge,
    meetName: "Belén",
    documentArray: "",
  },

  //Seccion 2
  {
    number: 11,
    title: "Guiones",
    video: true,
    resume: false,
    meet: false,
    document: false,
    videoSource: "https://drive.google.com/file/d/1czycg2HhCkG1M_A04adOea0eab506eJX/preview",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetNicole,
    meetImageLarge: meetNicoleLarge,
    meetName: "Nicole",
    documentArray: "",
  },
  {
    number: 12,
    title: "Guiones",
    video: false,
    resume: true,
    meet: false,
    document: true,
    videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetNicole,
    meetImageLarge: meetNicoleLarge,
    meetName: "Nicole",
    documentArray: [{name: "100 ideas virales", link: "https://docs.google.com/document/d/1yTcWNdRNe6_HXU03y-dpjX7sXq3dEV53PciK-V-RXE4/edit"}],
  },
  {
    number: 13,
    title: "Guiones",
    video: false,
    resume: false,
    meet: true,
    document: false,
    videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetNicole,
    meetImageLarge: meetNicoleLarge,
    meetName: "Nicole",
    documentArray: "",
  },
  {
    number: 14,
    title: "Guiones",
    video: false,
    resume: true,
    meet: false,
    document: true,
    videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetNicole,
    meetImageLarge: meetNicoleLarge,
    meetName: "Nicole",
    documentArray: [{name: "100 guiones virales", link: "https://docs.google.com/document/d/1uq_aXhObQyW2xGmHtfoHvmG0NhQSTeJyRla5b6RyIvo/edit"}, {name: "Estructura de guión viral", link: "https://docs.google.com/document/d/1L5U3l7U-KOiRefmDKDRnbgmUsu8nKW3Jcu25gup3krk/edit"}],
  },
  //----------------- 4 videos
  //video9
  {
    number: 15,
    title: "Guiones",
    video: true,
    resume: false,
    meet: false,
    document: false,
    videoSource:
      "https://drive.google.com/file/d/1czycg2HhCkG1M_A04adOea0eab506eJX/preview",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetNicole,
    meetImageLarge: meetNicoleLarge,
    meetName: "Nicole",
    documentArray: "",
  },
  //video10
  {
    number: 16,
    title: "Guiones",
    video: true,
    resume: false,
    meet: false,
    document: false,
    videoSource:
      "https://drive.google.com/file/d/1XMW-Tf1mb8mQIV1LhINe-WQxhVjXwvkv/preview",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetNicole,
    meetImageLarge: meetNicoleLarge,
    meetName: "Nicole",
    documentArray: "",
  },
  //video11
  {
    number: 17,
    title: "Guiones",
    video: true,
    resume: false,
    meet: false,
    document: false,
    videoSource:
      "https://drive.google.com/file/d/1IKwBTy1l2seVYv6mBbDvYvkyxb_kiY0p/preview",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetNicole,
    meetImageLarge: meetNicoleLarge,
    meetName: "Nicole",
    documentArray: "",
  },
  //video12
  {
    number: 18,
    title: "Guiones",
    video: true,
    resume: false,
    meet: false,
    document: false,
    videoSource:
      "https://drive.google.com/file/d/19-wIR3FGW82SmGP8_4-b_DvhH2z9RzMZ/preview",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetNicole,
    meetImageLarge: meetNicoleLarge,
    meetName: "Nicole",
    documentArray: "",
  },
  //----------------- fin
  {
    number: 19,
    title: "Guiones",
    video: false,
    resume: true,
    meet: false,
    document: true,
    videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
    resumeText:
      "Escribir de 7 a 15 guiones",
    meetImage: meetNicole,
    meetImageLarge: meetNicoleLarge,
    meetName: "Nicole",
    documentArray: [],
  },
  {
    number: 20,
    title: "Guiones",
    video: false,
    resume: false,
    meet: true,
    document: false,
    videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetNicole,
    meetImageLarge: meetNicoleLarge,
    meetName: "Nicole",
    documentArray: "",
  },

  //Seccion 3
  {
    number: 21,
    title: "Grabación de videos",
    video: false,
    resume: false,
    meet: true,
    document: false,
    videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetNicolas,
    meetImageLarge: meetNicolasLarge,
    meetName: "Nicolás",
    documentArray: "",
  },
  //----------------- 3 videos
  //video13
  {
    number: 22,
    title: "Grabación de videos",
    video: true,
    resume: false,
    meet: false,
    document: false,
    videoSource:
      "https://drive.google.com/file/d/1ksI9Pninqdbqp-UCX1aU419bNJ45p3Lj/preview",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetNicolas,
    meetImageLarge: meetNicolasLarge,
    meetName: "Nicolás",
    documentArray: "",
  },
  //video14
  {
    number: 23,
    title: "Grabación de videos",
    video: true,
    resume: false,
    meet: false,
    document: false,
    videoSource:
      "https://drive.google.com/file/d/1UDNJ-A1Ja2L1cSl_lhhjrFDruzGzoeW3/preview",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetNicolas,
    meetImageLarge: meetNicolasLarge,
    meetName: "Nicolás",
    documentArray: "",
  },
  //video15
  {
    number: 24,
    title: "Grabación de videos",
    video: true,
    resume: false,
    meet: false,
    document: false,
    videoSource:
      "https://drive.google.com/file/d/1FPCmFaef7Q8xvjPMIZ12XS5t5nJ6qepq/preview",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetNicolas,
    meetImageLarge: meetNicolasLarge,
    meetName: "Nicolás",
    documentArray: "",
  },
  //----------------- fin
  {
    number: 25,
    title: "Grabación de videos",
    video: false,
    resume: true,
    meet: false,
    document: true,
    videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
    resumeText:
      "Grabar video de prueba!",
    meetImage: meetNicolas,
    meetImageLarge: meetNicolasLarge,
    meetName: "Nicolás",
    documentArray: [],
  },
  {
    number: 26,
    title: "Grabación de videos",
    video: false,
    resume: false,
    meet: true,
    document: false,
    videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetNicolas,
    meetImageLarge: meetNicolasLarge,
    meetName: "Nicolás",
    documentArray: "",
  },
  {
    number: 27,
    title: "Grabación de videos",
    video: false,
    resume: true,
    meet: false,
    document: true,
    videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
    resumeText:
      "Grabar de 7 a 15 videos!",
    meetImage: meetNicolas,
    meetImageLarge: meetNicolasLarge,
    meetName: "Nicolás",
    documentArray: [],
  },

  //Seccion 4
  {
    number: 28,
    title: "Edición",
    video: false,
    resume: true,
    meet: false,
    document: true,
    videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
    resumeText:
      "Edición de 7 a 15 videos",
    meetImage: meetNicolas,
    meetImageLarge: meetNicolasLarge,
    meetName: "Nicolás",
    documentArray: [],
  },

  //Seccion 5
  {
    number: 29,
    title: "Pre - Publicación",
    video: true,
    resume: false,
    meet: false,
    document: false,
    videoSource: "https://drive.google.com/file/d/1vIn73ii822OV3qBrWdtM7QvcsMECXAKX/preview",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetNicolas,
    meetImageLarge: meetNicolasLarge,
    meetName: "Nicolás",
    documentArray: "",
  },
  {
    number: 30,
    title: "Pre - Publicación",
    video: false,
    resume: true,
    meet: false,
    document: true,
    videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetNicolas,
    meetName: "Nicolás",
    documentArray: [{name: "HOJA DE ARRANQUE", link: "https://docs.google.com/document/d/1p7aPGGuJJ1rBdZoXS6mRlqW_M9m9rpFwKZcFhky8W6I/edit"}],
  },
  {
    number: 31,
    title: "Pre - Publicación",
    video: false,
    resume: false,
    meet: true,
    document: false,
    videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetNicole,
    meetName: "Nicole",
    documentArray: "",
  },
  {
    number: 32,
    title: "Pre - Publicación",
    video: false,
    resume: true,
    meet: false,
    document: true,
    videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetNicolas,
    meetName: "Nicolás",
    documentArray: [{name: " CALENDARIO de Contenidos", link: "https://docs.google.com/spreadsheets/d/1MqY1PnkDwTRa7G6sOnzy4U1JxRX5XByMfq01jbXVkp4/edit#gid=0"}],
  },
  {
    number: 33,
    title: "Pre - Publicación",
    video: false,
    resume: false,
    meet: true,
    document: false,
    videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetBelen,
    meetName: "Belén",
    documentArray: "",
  },

  //seccion 6
  {
    number: 34,
    title: "Publicación",
    video: false,
    resume: true,
    meet: false,
    document: true,
    videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
    resumeText:
      "Publicar de 7 a 15 videos!",
    meetImage: meetBelen,
    meetImageLarge: meetBelenLarge,
    meetName: "Belén",
    documentArray: [],
  },

  //Seccion 7
  {
    number: 35,
    title: "Análisis y optimización",
    video: true,
    resume: false,
    meet: false,
    document: false,
    videoSource: "https://drive.google.com/file/d/1hHMA-5frzgnP9sSnYdBbMJhUA5Ym-Baq/preview",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetBelen,
    meetName: "Belén",
    documentArray: "",
  },
  {
    number: 36,
    title: "Análisis y optimización",
    video: false,
    resume: true,
    meet: false,
    document: true,
    videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetBelen,
    meetImageLarge: meetBelenLarge,
    meetName: "Belén",
    documentArray: [{name: "Métricas", link: "https://docs.google.com/spreadsheets/d/1wLlOSaxHmfdVZXKw9iCZfC78n-AIBCUf/edit#gid=1560284217"}],
  },
  {
    number: 37,
    title: "Análisis y optimización",
    video: false,
    resume: false,
    meet: true,
    document: false,
    videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: meetBelen,
    meetName: "Belén",
    documentArray: "",
  },
  //Seccion 8
  {
    number: 38,
    title: "¡Terminaste tu recorrido!",
    video: false,
    resume: false,
    meet: false,
    document: false,
    videoSource: "https://www.youtube.com/embed/GUf81ofAZV0",
    resumeText:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempora dolorum dignissimos quasi explicabo error asperiores eum nesciunt ducimus quo molestiae totam sunt illum, accusantium quibusdam incidunt temporibus aperiam recusandae illo voluptatibus. Modi, soluta ullam molestias non cumque odio molestiae quia dignissimos fugit magnam eaque officiis, amet suscipit commodi, pariatur dolor! Debitis molestias dolor laboriosam itaque dolore ea autem perferendis voluptatibus libero at!",
    meetImage: celebration,
    meetName: "Belén",
    documentArray: "",
  },
];

export default pages;
