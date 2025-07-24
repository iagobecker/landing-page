import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type PortfolioItem = {
  id: number;
  slug: string;
  clientName: string;
  category: string;
  date: string;
  coverImage?: { 
    src: string;
    width: number;
    height: number;
  };
  alt: string;
  description: string;
  galleryImages: {
    id: number;
    src: string;
    width: number;
    height: number;
    alt: string;
  }[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    slug: 'Helen', 
    clientName: "Helen",
    category: "Marca Pessoal",
    date: "28 Abril 2025",
    coverImage: {        
      src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718087/fotografias_por_ph.brunapaula-18_1_ilvitl.jpg",
      width: 1200,
      height: 1600,
    },
    alt: "Foto de casamento de Sarah e Luke",
    description: "Um dia mágico capturado em detalhes. A celebração de Sarah e Luke foi um conto de fadas moderno, cheio de amor, risadas e momentos inesquecíveis.",
    galleryImages: [
      { id: 1, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718089/fotografias_por_ph.brunapaula-6_1_ec7olc.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 2, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718089/fotografias_por_ph.brunapaula-47_1_iccyxk.jpg", width: 1080, height: 1350, alt: "A noiva sorrindo" },
      { id: 3, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718089/fotografias_por_ph.brunapaula-59_1_vjjyyd.jpg", width: 1080, height: 1350, alt: "A noiva sorrindo" },
      { id: 4, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718089/fotografias_por_ph.brunapaula-36_1_mje9ht.jpg", width: 1080, height: 1350, alt: "A noiva sorrindo" },
      { id: 5, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718089/fotografias_por_ph.brunapaula-34_1_ntvjff.jpg", width: 1080, height: 1350, alt: "A noiva sorrindo" },
      { id: 6, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718089/fotografias_por_ph.brunapaula-32_1_mxutjy.jpg", width: 1080, height: 1350, alt: "A noiva sorrindo" },
      { id: 7, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718089/fotografias_por_ph.brunapaula-31_1_tt5evv.jpg", width: 1080, height: 1350, alt: "A noiva sorrindo" },
      { id: 8, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718088/fotografias_por_ph.brunapaula-30_1_gcq9ct.jpg", width: 1080, height: 1350, alt: "A noiva sorrindo" },
      { id: 9, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718088/fotografias_por_ph.brunapaula-26_1_awxueb.jpg", width: 1080, height: 1350, alt: "A noiva sorrindo" },
      { id: 10, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718088/fotografias_por_ph.brunapaula-22_1_ygi8pc.jpg", width: 1080, height: 1350, alt: "A noiva sorrindo" },
      { id: 11, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718087/fotografias_por_ph.brunapaula-18_1_ilvitl.jpg", width: 1080, height: 1350, alt: "A noiva sorrindo" },
      { id: 12, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718086/fotografias_por_ph.brunapaula--47_1_n6yudc.jpg", width: 1080, height: 1350, alt: "A noiva sorrindo" },
      { id: 13, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718086/fotografias_por_ph.brunapaula-----47_1_cte4gq.jpg", width: 1080, height: 1350, alt: "A noiva sorrindo" },
      { id: 14, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718086/fotografias_por_ph.brunapaula-13-2_1_elhftk.jpg", width: 1080, height: 1350, alt: "A noiva sorrindo" },
      { id: 15, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750719701/fotografias_por_ph.brunapaula-7-2_ldlbbt.jpg", width: 1080, height: 1350, alt: "A noiva sorrindo" },
      
    ],
  },
  {
    id: 2,
    slug: 'Eliane', 
    clientName: "Eliane Wilk",
    category: "Marca Pessoal",
    date: "15 Maio 2025",
    coverImage: {        
      src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718086/fotografias_por_ph.brunapaula-6_1_w3rfdt.jpg",
      width: 1200,
      height: 1600,
    },
    alt: "Foto de casamento de Richard e Jane",
    description: "A união de Richard e Jane foi uma festa vibrante e cheia de energia, refletindo a personalidade contagiante do casal.",
    galleryImages: [
      { id: 1, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718086/fotografias_por_ph.brunapaula-6_1_w3rfdt.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 2, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718086/fotografias_por_ph.brunapaula-5_qvgpie.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 3, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718086/fotografias_por_ph.brunapaula-37_1_pi0scf.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 4, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718086/fotografias_por_ph.brunapaula-36_1_vmzebc.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 5, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718083/fotografias_por_ph.brunapaula-30_1_ajkdyb.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 6, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718086/fotografias_por_ph.brunapaula-34_1_zt3nvf.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 7, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718083/fotografias_por_ph.brunapaula-28_1_s7wd4h.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 8, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718083/fotografias_por_ph.brunapaula-25_1_xzyktm.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 9, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718083/fotografias_por_ph.brunapaula-21_1_ywmyh1.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 10, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718083/fotografias_por_ph.brunapaula-16_1_ninkio.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 11, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718083/fotografias_por_ph.brunapaula-15_1_ps4k7b.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 12, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718082/fotografias_por_ph.brunapaula-13_1_f3eheu.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
    ],
  },

    {
        id: 3,
        slug: 'Cris', 
        clientName: "Cris",
        category: "Marca Pessoal",
        date: "10 May 2025",
        coverImage: {        
      src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718078/Cris_maravilhosa-4_1_smgyaj.jpg",
      width: 1200,
      height: 1600,
    },
        alt: "Retrato de John Doe",
        description: "Um retrato que captura a essência e a personalidade de John Doe, com foco em detalhes e emoções.",
        galleryImages: [
      { id: 1, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718078/Cris_maravilhosa-4_1_smgyaj.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 2, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718080/Cris_maravilhosa-8-3_1_bny4xh.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 3, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718079/Cris_maravilhosa-6-3_1_hyqwjf.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 4, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718079/Cris_maravilhosa-6_1_ibgisp.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 5, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718079/Cris_Maravilhosa-5-2_1_spqlzj.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 6, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718079/Cris_maravilhosa-5_1_epvtn1.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 7, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718078/Cris_maravilhosa-4-5-2_1_izlfrg.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 8, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718078/Cris_maravilhosa-3-5_1_h5wuhs.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 9, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718078/Cris_maravilhosa-3-3_1_kmf8wa.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 10, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718078/Cris_maravilhosa-2-3_1_er8rvg.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 11, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718078/Cris_Maravilhosa-13-2_1_gyemrz.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 12, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718076/Cris_maravilhosa-1-5_q9juyx.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
    ],
    },

    {
        id: 4,
        slug: 'Iago',
        clientName: "Iago Becker",
        category: "Marca Pessoal",
        date: "2 April 2025",
       coverImage: {        
      src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718059/fotografias_por_ph.brunapaula-11_1_cvkbu0.jpg",
      width: 1200,
      height: 1600,
    },
        alt: "Sessão de fotos na praia de Emma e Will",
        description: "Emma e Will aproveitaram o pôr do sol para uma sessão descontraída à beira-mar, cheia de espontaneidade e alegria.",
        galleryImages: [
      { id: 1, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718061/fotografias_por_ph.brunapaula-9-_1_lqqxvl.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 2, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718060/fotografias_por_ph.brunapaula-8_1_i3k30o.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 3, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718060/fotografias_por_ph.brunapaula-9_1_moac2u.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 4, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718060/fotografias_por_ph.brunapaula-3_1_op532o.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 5, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718060/fotografias_por_ph.brunapaula-22_1_sj88k5.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 6, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718060/fotografias_por_ph.brunapaula-19_1_l4hbab.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 7, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718059/fotografias_por_ph.brunapaula-7_1_umzsgh.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 8, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718059/fotografias_por_ph.brunapaula-1-2_xiilrn.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 9, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718059/fotografias_por_ph.brunapaula-11_1_cvkbu0.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 10, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718059/fotografias_por_ph.brunapaula-15_1_j0aazf.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 11, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718059/fotografias_por_ph.brunapaula-16_1_ejosai.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 12, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718059/fotografias_por_ph.brunapaula-6_1_wtutnz.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
    ],
    },
    {
        id: 5,
        slug: 'Jemina',
        clientName: "Jemina",
        category: "Marca Pessoal",
        date: "18 March 2025",
        coverImage: {        
      src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718062/Jemima_maravilhosa-79-56_1_zxvbrn.jpg",
      width: 1200,
      height: 1600,
    },
        alt: "Sessão em família com a Família Lucas",
        description: "Momentos de carinho e diversão em família, capturando a essência do lar e do amor entre gerações.",
        galleryImages: [
      { id: 1, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718062/Jemima_maravilhosa-79-85_1_tvwfdz.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 2, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718062/Jemima_maravilhosa-79-14_1_n8kmmg.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 3, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718062/Jemima_maravilhosa-79-56_1_zxvbrn.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 4, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718062/Jemima_maravilhosa-56_1_p17zv5.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 5, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718062/Jemima_maravilhosa-79-48_1_tavmvv.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 6, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718062/Jemima_maravilhosa-79-1_1_tqkicf.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 7, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718061/Jemima_maravilhosa-60_1_zlaxea.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 8, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718061/Jemima_maravilhosa-15_1_cjjfea.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 9, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718061/Jemima_maravilhosa-35_1_xnffc9.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 10, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718061/Jemima_maravilhosa-46_1_loig46.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 11, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718061/Jemima_maravilhosa-34_1_c8a4wt.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 12, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718061/Jemima_maravilhosa-1_ahisgl.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
    ],
    },
    {
        id: 6,
        slug: 'Rafaela',
        clientName: "Rafaela",
        category: "Marca Pessoal",
        date: "5 February 2025",
        coverImage: {        
      src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718076/Rafa_-_fotos_prontas-43_1_kcd5xv.jpg",
      width: 1200,
      height: 1600,
    },
        alt: "Headshot corporativo de Carol Silva",
        description: "Retrato profissional de Carol Silva, transmitindo confiança e profissionalismo para uso em redes corporativas.",
        galleryImages: [
      { id: 1, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718076/Rafa_-_fotos_prontas-43_1_kcd5xv.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 2, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718076/Rafa_-_fotos_prontas-8_1_ysezh3.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 3, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718076/Rafa_-_fotos_prontas-40_1_zexck2.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 4, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718075/Rafa_-_fotos_prontas-38_1_gt4qra.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 5, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718075/Rafa_-_fotos_prontas-34_1_kpkqfk.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 6, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718075/Rafa_-_fotos_prontas-30_1_e4nvc0.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 7, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718075/Rafa_-_fotos_prontas-3_1_uzreuc.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 8, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718075/Rafa_-_fotos_prontas-18_1_xvqazm.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 9, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718075/Rafa_-_fotos_prontas-23_1_d3ckwm.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 10, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718075/Rafa_-_fotos_prontas-17_1_brwhjn.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 11, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718066/Rafa_-_fotos_prontas-16_1_nbw8ru.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
      { id: 12, src: "https://res.cloudinary.com/dwucy4ffg/image/upload/v1750718064/Rafa_-_fotos_prontas-1_vb3eea.jpg", width: 1080, height: 1350, alt: "Detalhe do casal" },
    ],
    },
];