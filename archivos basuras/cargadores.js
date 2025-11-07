const productos = [
    {
        id: 1,
        nombre: "CARGADOR IPHONE LDNIO 5V 1A",
        precio: $4900,
        categoria: "cargadores",
        imagen: "https://www.bgelectronics.eu/image/ChargerForPhone/14371.jpg",
        especificaciones: [
{ nombre: "Tipo de conector", valor: "Tipo A" },
{ nombre: "Entrada", valor: "100–240V AC, 50/60Hz" },
{ nombre: "Salida", valor: "DC 5V, 1A (5W)" }
]
    }

    {
        id: 2,
        nombre: "CARGADOR IPHONE C816 KINGLEEN",
        precio: $3900,
        categoria: "cargadores",
        imagen: "https://kingleen.en.made-in-china.com/product/djKEysmDwhkX/China-5V-1-5A-Lightning-USB-Charger-with-Lightning-Cable-Direct-Charger-with-LED-Light-Portable-for-Apple-Devices.html",
        especificaciones: [
{ nombre: "Tipo de conector", valor: "Tipo A" },
{ nombre: "Entrada", valor: "100–240V AC, 50/60Hz" },
{ nombre: "Salida", valor: "5V DC, 1.5A (7.5W)" }
]
    },

    {
        id: 3,
        nombre: "CARGADOR ANDROID 3.0 FAST CHARGER Z06",
        precio: $4900,
        categoria: "cargadores",
        imagen: "https://www.imextec.cl/wp-content/uploads/2020/09/2.jpg",
        especificaciones: [
{ nombre: "Tipo de conector", valor: "Tipo A" },
{ nombre: "Entrada", valor: "100–240V AC, 50/60Hz" },
{ nombre: "Salida" , valor: "5V/3A, 9V/2A, 12V/1.5A (hasta 18W)"}
]
    },

    {
        id: 4,
        nombre: "CARGADOR MOTOROL FMP5189B ORIGINAL",
        precio: $5900,
        categoria: "cargadores",
        imagen: "https://chatgpt.com/c/69000f3b-e378-8326-95b0-f70e7d12b12f",
        especificaciones: [
{ nombre: "Tipo de conector", valor: "Mini USB" },
{ nombre: "Entrada", valor: "100–240V AC, 50/60Hz" },
{ nombre: "Salida" , valor: "5V DC, 550mA"}
]
    },

    {
        id: 5,
        nombre: "CARGADORES ACER 19V 2.1A",
        precio: $15900,
        categoria: "cargadores",
        imagen: "https://images.openai.com/static-rsc-1/mNjoR9-RWPF2OG43cop06G7Qa9ukEaBcbIznr4tp50Ql7AhmZ_LnlX71EdjW2rAxkuFtiMhfaNWiKzA5qOth7yvHPODK1BCqBr1hlvraMDzUOEUVHlTC0wvlQn20RFf6IU8y8zaAEqxU_gm0aFdo-XSS5t2CLSQQZF66n3kbDSxj7noUvZJOmKeLhqw7rBJ9kJpte_4tdR-5Gyf3n-3On9WFNuK1OhhjKfiSX7zsCrissC2W14uU_6WhM-1EOqTe",
        especificaciones: [
{ nombre: "Tipo de conector", valor: "5.5 mm × 1.7 mm" },
{ nombre: "Entrada", valor: "100-240 V AC, 50/60 Hz" },
{ nombre: "Salida" , valor: "19 V DC a 2.1 A (≈ 40 W)"}
]
    },

    {
        id: 6,
        nombre: "CARGADORES ASUS 19V 3.42A",
        precio: $15900,
        categoria: "cargadores",
        imagen: "https://images.openai.com/static-rsc-1/0uuexpVJlBqivsdcibDBsVujQAOdGQnXATVFT5VqGfyLNQBBvf5SogI43zt483KjRz8tfFF-YmkXmtnJYctAFJZ9PETrsQxPxCtzApyD6ZR9GIL3SOlpxX1Usr8G1vbqFD6P9bLZHmQ4l2C5mFJ-jI52RsXVLKrLlsalkSAiF70sH0z5TeJeBTlYD2ACosWq7xmCQ-2BwOnm7zWtMCAxf--8ZZo69NAq8AI4jT2IVD4OD1GDh8JRyq475EYsgYZDdWLYkeUxMtxWPhfEO0kTbQ",
        especificaciones: [
{ nombre: "Tipo de conector", valor: "5.5 mm × 2.5 mm" },
{ nombre: "Entrada", valor: "100-240 V AC, 50/60 Hz" },
{ nombre: "Salida" , valor: "19 V DC, 3.42 A"}
]
    },

    {
        id: 7,
        nombre: "CARGADORES SAMSUNG 19V 2.1A",
        precio: $15900,
        categoria: "cargadores",
        imagen: "https://images.openai.com/thumbnails/url/dKbBJXicDcnbDoIgAADQLzIzLUZba-bKazRDs_niihDUUkTW7av6nf6mzuv5frhSYpjrOm2JfAlFL5o6t5MRG9RJVWREups-8E6IqmXLfvG_uY0u0CUY7XCRB_C9Z4YTEjtzqgO815PkmklLjE3WWuks8nxmIxA7mwR1WskDP6zBfmuujBzAMximHmziCNpP4o6joqAGVx5xFcbbqFn3R5CgvrQokvKeyjCuU0c-fgSIPPI",
        especificaciones: [
{ nombre: "Tipo de conector", valor: "5.5 mm x 3.0 mm" },
{ nombre: "Entrada", valor: "100-240 V AC, 50/60 Hz" },
{ nombre: "Salida" , valor: "9 V DC, 2.1 A (≈ 40 W)"}
]
    },

    {
        id: 8,
        nombre: "CARGADORES PARA TOSHIBA 19V 3.95A",
        precio: $15900,
        categoria: "cargadores",
        imagen: "https://images.openai.com/thumbnails/url/jUWvcHicDcnxDoFAHADgJ6rIkmsz04roSqkN94_laiFdV_crzkN5H2_D9-_3_VwBuLA0rWC0kxyKXIEL09VSQAY3qtKm1sS14fzGykU7_5-1DHO0psmIRK-guvtP_G776aofDxGDBnVydoyTZH82mHT8IHjALiNFFRa4G0Ro2CSiyLVTp-Tp1mG9R8Y-RjFW7pMyddGs2uomc4WBsNyYCfOqQx2NTpC18uiStP8BVUs-EQ",
        especificaciones: [
{ nombre: "Tipo de conector", valor: "5.5 mm × 2.5 mm" },
{ nombre: "Entrada", valor: "100-240 V AC, 50/60Hz" },
{ nombre: "Salida" , valor: "19 V DC, 3.95 A (~75 W)"}
]
    },

    {
        id: 9,
        nombre: "CARGADOR APPLE MACBOOK AIR L45W",
        precio: $,
        categoria: "cargadores",
        imagen: "https://images.openai.com/static-rsc-1/iGc2RUTOByOJqYYjze1hp6RHmWBhjLTafXObA41cQmNhOm94kQPJf9UZZfWGXQay6Np09QirJvYZhmcY_C44ZF_BEC-3z_CE_vapdNvzQyv9-tLXx9qivWzGxgUgtluMiZehPE-1v89lzQ-B8IlHvy1nD1uTkCK8msNqTKZBCxc4OZJ8ydGmcJ08MKF5FX8vtQ5urgq1QqqqCDxcJOLmMbhCK0lixTLEfhvkH7GaMTMnk7vCKa0vtLgb9C5ivl-Va0W08xJCzeSSfjzBcBgk8g",
        especificaciones: [
{ nombre: "Tipo de conector", valor: "MagSafe 2 magnético" },
{ nombre: "Entrada", valor: "100-240 V AC, 50/60 Hz" },
{ nombre: "Salida" , valor: "45 W"}
]
    },

    {
        id: 10,
        nombre: "CARGADOR TOSHIBA 19V 6.3A",
        precio: $15900,
        categoria: "cargadores",
        imagen: "https://electroday.com.ar/wp-content/uploads/2020/10/D_840265-MLA32867101769_112019-O.jpg",
        especificaciones: [
{ nombre: "Tipo de conector", valor: "Barrel (cilíndrico)" },
{ nombre: "Entrada", valor: "100–240 V, 50/60 Hz" },
{ nombre: "Salida" , valor: "9 V, 6.3 A (120 W)"}
]
    },

    {
        id: 11,
        nombre: "CARGADOR LENOVO TIPO C",
        precio: $19900,
        categoria: "cargadores",
        imagen: "https://m.media-amazon.com/images/I/51JNTap5fiL._AC_UF894%2C1000_QL80_.jpg",
        especificaciones: [
{ nombre: "Tipo de conector", valor: "USB Type-C reversible" },
{ nombre: "Entrada", valor: "100–240 V ~ 1.5 A, 50/60 Hz" },
{ nombre: "Salida" , valor: "5V/2A, 9V/2A, 15V/3A, 20V/3.25A (hasta 65W)"}
]
    },

    {
        id: 12,
        nombre: "CARGADORES LENOVO 20V 3.25A PUNTA CUADRADA",
        precio: $15900,
        categoria: "cargadores",
        imagen: "https://shop.nikotron.us/images/grafics/KA11006LO.jpg",
        especificaciones: [
{ nombre: "Tipo de conector", valor: "Punta cuadrada amarilla (5.5mm x 2.5mm)" },
{ nombre: "Entrada", valor: "100–240V ~ 50/60Hz" },
{ nombre: "Salida" , valor: "20V DC, 3.25A, 65W"}
]
    }

    {
        id: 13,
        nombre: "CARGADORES LENOVO 20V 4.5A",
        precio: $15900,
        categoria: "cargadores",
        imagen: "https://m.media-amazon.com/images/I/61S7QDd-sjL.jpg",
        especificaciones: [
{ nombre: "Tipo de conector", valor: "Punta cuadrada de 7.9 mm x 5.5 mm con pin central amarillo" },
{ nombre: "Entrada", valor: "AC 100–240V ~ 50/60Hz" },
{ nombre: "Salida" , valor: "DC 20V, 4.5A, 90W"}
]
    },

    {
        id: 14,
        nombre: "CARGADOR DELL 19.5V 2.31A",
        precio: $15900,
        categoria: "cargadores",
        imagen: "https://i5.walmartimages.com/asr/88554864-ea3b-489b-8a7b-6dec1b20a5e6.cef70beb896c6b9a907467407348afc4.jpeg?odnBg=FFFFFF&odnHeight=768&odnWidth=768",
        especificaciones: [
{ nombre: "Tipo de conector", valor: "Punta cilíndrica de 4.5 mm x 3.0 mm" },
{ nombre: "Entrada", valor: "AC 100–240V ~ 50/60Hz" },
{ nombre: "Salida" , valor: "DC 19.5V, 2.31A, 45W"}
]
    },

    {
        id: 15,
        nombre: "CARGADORES DELL 19.5V 3.34A PUNTA FINA",
        precio: $15900,
        categoria: "cargadores",
        imagen: "https://www.laptopcentercr.com/cdn/shop/products/ACOD62-2_d8872350-4b0b-420c-add4-9fc63ffb1e83_1024x1024.jpg?v=1684360986",
        especificaciones: [
{ nombre: "Tipo de conector", valor: "Punta fina de 4.5 mm x 3.0 mm con pin central (tipo "aguja")" },
{ nombre: "Entrada", valor: "AC 100–240V ~ 50/60Hz" },
{ nombre: "Salida" , valor: "DC 19.5V, 3.34A, 65W"}
]
    },

    {
        id: 16,
        nombre: "CARGADORES DELL 19.5V 4.62A",
        precio: $15900,
        categoria: "cargadores",
        imagen: "https://i.ebayimg.com/images/g/IQkAAOSwpKZjDa~Q/s-l400.jpg",
        especificaciones: [
{ nombre: "Tipo de conector", valor: "7.4mm x 5.0mm con pin central (punto grueso)" },
{ nombre: "Entrada", valor: "100-240V ~ 1.5A, 50-60Hz" },
{ nombre: "Salida" , valor: "DC 19.5V"}
]
    },

    {
        id: 17,
        nombre: "CARGADOR ASUS 19V 2.37A",
        precio: $15900,
        categoria: "cargadores",
        imagen: "https://i.ebayimg.com/images/g/~wAAAOSwTSlju8Tw/s-l1200.jpg",
        especificaciones: [
{ nombre: "Tipo de conector", valor: "Varía según el modelo; comúnmente 4.0mm × 1.35mm, 4.5mm × 3.0mm o 5.5mm × 2.5mm" },
{ nombre: "Entrada", valor: "AC 100–240V ~ 50/60Hz" },
{ nombre: "Salida" , valor: "DC 19V, 2.37A"}
]

    },
    id: 18,
        nombre: "CARGADORES ASUS 19V 2.1A",
        precio: $15900,
        categoria: "cargadores",
        imagen: "https://compumundostore.com/wp-content/uploads/2024/06/CARGADOR-ASUS-19V-2.1A-40W-2.3-0.7MM.jpg",
        especificaciones: [
{ nombre: "Tipo de conector", valor: "Varía según el modelo; comúnmente 2.5mm × 0.7mm, 4.0mm × 1.35mm o 5.5mm × 2.5mm" },
{ nombre: "Entrada", valor: "AC 100–240V ~ 50/60Hz" },
{ nombre: "Salida" , valor: "DC 19V, 2.1A"}
]

id: 19,
        nombre: "CARGADOR PARA HP 18.5V 3.5A PUNTA AGUJA",
        precio: $15900,
        categoria: "cargadores",
        imagen: "https://images.openai.com/static-rsc-1/mNIBTNgL2m9sqp8HQwZOY97q4ec-WVJroXu3V1GbPYd-uBFmT5gq5927Adf2YR6LFd71n-gh3pjTxPZyBBD1CLcxlWZmb_u7pe54_KUY5Kj4P-GLeIWJ2A38VMLUMg-tHD7Q2xcuxbmIQGSkfjmskcC7rOgxC4UW1K5YTh7dOJVvBMZ8uKNug_I-zKSLGj7UfTZEY30NEH44mOKUiw_rOT9lWtibYD6LCObjM_zfR2aEs2gpUXQMjp2bOMGlv04OSzYejpUtwrH0lnbNtsfVdw",
        especificaciones: [
{ nombre: "Tipo de conector", valor: "7.4 mm × 5.0 mm" },
{ nombre: "Entrada", valor: "AC 100-240 V ~ 50-60 Hz" },
{ nombre: "Salida" , valor: "DC 18.5 V, 3.5 A"}
]

id: 20,
        nombre: "CARGADORES HP 19.5V 3.33A",
        precio: $15900,
        categoria: "cargadores",
        imagen: "https://images.openai.com/static-rsc-1/mNIBTNgL2m9sqp8HQwZOY97q4ec-WVJroXu3V1GbPYd-uBFmT5gq5927Adf2YR6LFd71n-gh3pjTxPZyBBD1CLcxlWZmb_u7pe54_KUY5Kj4P-GLeIWJ2A38VMLUMg-tHD7Q2xcuxbmIQGSkfjmskcC7rOgxC4UW1K5YTh7dOJVvBMZ8uKNug_I-zKSLGj7UfTZEY30NEH44mOKUiw_rOT9lWtibYD6LCObjM_zfR2aEs2gpUXQMjp2bOMGlv04OSzYejpUtwrH0lnbNtsfVdw",
        especificaciones: [
{ nombre: "Tipo de conector", valor: "4.5 mm externo × 3.0 mm interno" },
{ nombre: "Entrada", valor: "AC 100-240 V ~ 50/60 Hz" },
{ nombre: "Salida" , valor: "DC 19.5V, 3.33A"}
]

]