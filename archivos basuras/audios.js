const productos = [
    {
    id: 1,
        nombre: "AUDIFONOS BLUETOOTH MANOS LIBRES M&J",
        precio: $14900,
        categoria: "audio",
        imagen: "", 
        especificaciones: [
{ nombre: "Tipo", valor: "Inalámbrico / Manos libres" },
{ nombre: "Conectividad", valor: "Bluetooth" },
{ nombre: "Cancelación de ruido", valor: "Sí" },
{ nombre: "Autonomía", valor: "6 horas" },
{ nombre: "Microfono" , valor: "Si"}
]
    },

    {
    id: 2,
        nombre: "AUDIFONO INALAMBRICO BT-06A 4.2",
        precio: $14900,
        categoria: "audio",
        imagen: "", 
        especificaciones: [
{ nombre: "Tipo", valor: "Inalámbrico / Manos libres" },
{ nombre: "Conectividad", valor: "Bluetooth" },
{ nombre: "Cancelación de ruido", valor: "Sí" },
{ nombre: "Autonomía", valor: "4 a 6 horas" },
{ nombre: "Microfono" , valor: "Si)"}
]
    }, 

    {
    id: 3,
        nombre: "AUDIFONOS USB OVLENG OV-Q7",
        precio: $14900,
        categoria: "audio",
        imagen: "https://images.openai.com/static-rsc-1/9wGzXCYLNMc_W4i_kVgr1le2I0lufcvW7iw6ErJLDIKC8FLjzJe42UU3MrqxJfdXExzq0PZ7J4U_YWh4KjZghbTlEFJOdGLXs99LdhcjnmgjR5mJf9KjCuiTBw41ww0Req47YmgsTzGojWp6-3MTW9KZpWXBr3LvUJq-r0qytOr0MBx58xTaZDXLEKBr3Z8YA3HW-4DcH4HiQv2PKnQJQXUjA5B_a2kx6zAnig7zQaSSYs284Pd3nozlPYWmTXw2", 
        especificaciones: [
{ nombre: "Tipo", valor: "USB (cableado)" },
{ nombre: "Conectividad", valor: "Cable" },
{ nombre: "Cancelación de ruido", valor: "No" },
{ nombre: "Longitud de cable", valor: "1.8 m – 2.0 m" },
{ nombre: "Microfono" , valor: "Si"}
]
    }, 

    {
    id: 4,
        nombre: "AUDIFONOS IPHONE COLOR BLANCO DE CALIDAD",
        precio: $29000,
        categoria: "audio",
        imagen: "https://images.openai.com/thumbnails/url/51EO3XicDcpJDoIwAADAF7EbDCTGqAmUiiwuqFyItCwNAgVKwU_5H38j55nft2SMDqYkZQ3qP5RlWGBpo4jFwF6MIBG1tTSULaWkKbbdZjFz52HDRmEqjJ1v1za5H-BF94kx9YmDVF7jnLvRKQWhzKcgj-GoVCqYC3XSOXgAXHn4SkvtuNLfBtYqjRRWe0tgoi8_P6MAWz2Poxn2-xi4zqStUeD5zyqGTiO3fzp2PhQ", 
        especificaciones: [
{ nombre: "Tipo", valor: "In-ear" },
{ nombre: "Conectividad", valor: "Cable" },
{ nombre: "Cancelación de ruido", valor: "No" },
{ nombre: "Microfono", valor: "Integrado en el cable" }
]
    }, 

    {
    id: 5,
        nombre: "Audifono Inalambrico 450BT 5.0",
        precio: $12900,
        categoria: "audio",
        imagen: "https://images.openai.com/static-rsc-1/nPs5w70EkfKJoCBMJ0eELzG_QG4vQ1xNkZiCIC-dkCDRQGqibeK2sne0Gx9wlgAm_6kwcAWDqznm_s3llwXuoFjCL2ffsNdtapI7ynpfV3i5pbxEjytTx3ClW9eWJZxRR7sMWIpGMnfZTQ_QIKGlBdYxLOnMBSn859qAG9XTz_OIqidAmrRT3KEWxvZIq0Fx8G2g2hCnUUmXOoewdaZ50KsKYs9zwyS8HJRqHIYFZk6vBWHm79Xk0eJwSOi_DA-jkVXGXyo3CcglCq7CtYeoew", 
        [
{ nombre: "Tipo", valor: "Over-ear" },
{ nombre: "Conectividad", valor: "Bluetooth" },
{ nombre: "Cancelación de ruido", valor: "Sí" },
{ nombre: "Autonomía", valor: "Mas de 30 horas" },
{ nombre: "Microfono" , valor: "Si"}
]
    }, 

    {
    id: 6,
        nombre: "AUDIFONO BLUETOOTH 5.0 MX666",
        precio: $19900,
        categoria: "audio",
        imagen: "https://images.openai.com/static-rsc-1/0p5PtyCpg4UGwQu_bq8nK8fYJ-fVbWqhD6cKgna-OMvbvpgvNYQ2l6x7m8WjgbWPWTGFqDN_PcaGT9pHpslju2o4-qtcQsc7Njumd_DG5XuaDDxm3SVM4E06K0PfiezAvPHkDtlBq20xQAG-uE4k1dBx1ZTeZPpD98hORVgAkdJEdq8k7ewmyZYQsVO7ZfY8So-wZmcpvUJy3TCI1ivrCw", 
        [
{ nombre: "Tipo", valor: "Over-ear" },
{ nombre: "Conectividad", valor: "Bluetooth/Cable" },
{ nombre: "Cancelación de ruido", valor: "No" },
{ nombre: "Autonomía", valor: "8 horas" }
{ nombre: "Microfono" , valor: "Si"}
]
    }, 

    {
    id: 7,
        nombre: "Audifono M29BK inalambrico",
        precio: $9900,
        categoria: "audio",
        imagen: "https://images.openai.com/static-rsc-1/a6u2j2pIfPF9OilchRakjdh_d7euGeW4Q1HXZd1q45LrdbT40PfMyhvS6HSiW-FZ0vLRPC-ctnKuER8KaSRhN6-IOKelBr0zIOAaHPHRFk19au7A5p6IMTvgm7mUFx_LZeKz4jOiqjyuqUKEm95pt7SrYBiVcZLj4HRvmWhJ-TF4uTKwTy1iZWyoKGrTEh6jbb9vhxfRh6wiTRlidFJIUbYJ3ReqsAE7YikhLchvXps-NtlAyalLLfgB_IOqgSeWnOOBEuAJxPS4z15Dsj8TAw", 
        [
{ nombre: "Tipo", valor: "In-ear" },
{ nombre: "Conectividad", valor: "Bluetooth" },
{ nombre: "Cancelación de ruido", valor: "Sí/No" },
{ nombre: "Autonomía", valor: "X horas" }
]
    }, 

    {
    id: 8,
        nombre: "AUDIFONO MANOS LIBRES JBL NEGRO",
        precio: $12900,
        categoria: "audio",
        imagen: "", 
        [
{ nombre: "Tipo", valor: "In-ear/On-ear/Over-ear" },
{ nombre: "Conectividad", valor: "Bluetooth" },
{ nombre: "Cancelación de ruido", valor: "No" },
{ nombre: "Autonomía", valor: "4 horas" }
{ nombre: "Microfono" , valor: "No"}
]
    }, 

    {
    id: 9,
        nombre: "AUDIFONO MANOS LIBRES JBL BLANCO",
        precio: $12900,
        categoria: "audio",
        imagen: "", 
        [
{ nombre: "Tipo", valor: "In-ear" },
{ nombre: "Conectividad", valor: "Bluetooth/Cable" },
{ nombre: "Cancelación de ruido", valor: "Sí/No" },
{ nombre: "Autonomía", valor: "X horas" }
]
    }, 

    {
    id: 10,
        nombre: "AUDIFONO INALAMBRICO BT-06 A 4.2",
        precio: $14900,
        categoria: "audio",
        imagen: "", 
        [
{ nombre: "Tipo", valor: "In-ear/On-ear/Over-ear" },
{ nombre: "Conectividad", valor: "Bluetooth" },
{ nombre: "Cancelación de ruido", valor: "Sí/No" },
{ nombre: "Autonomía", valor: "6 a 8 horas" }
]
    }, 

    {
    id: 11,
        nombre: "AUDIFONO USB OVLENG OV-Q7",
        precio: $14900,
        categoria: "audio",
        imagen: "https://images.openai.com/static-rsc-1/vNYA-L7Qczseyh7ABDkzNicPiRsqGyd063YCLDgMP2XPWvBYAbH-UsNmslQ4SGsjtd2lCjSDQICb_ZJ0nc5WCbTFedtl6EquZvsp4u1W9tBQzUcR4hNKulDUSfMSSlTBXliO6uzfMQtSCH30y0yur-tkzI7LQEETck3i7WtEx_VL-ozVjw2Yjtsciol6xHSCdYBkPMAZeBIe5Ga69-JGwSQBqFGi5O-U7RKhfPbeVk-CVKVXHjUtXyWfD21UTruD3v7A_xg54gYPOPf9qyqF8w", 
        [
{ nombre: "Tipo", valor: "Over-ear" },
{ nombre: "Conectividad", valor: "Cable" },
{ nombre: "Cancelación de ruido", valor: "No" },
{ nombre: "Longitud del cable", valor: "1.8-2.0 m" },
{ nombre: "Microfono" , valor: "No"}
]
    }, 

    {
    id: 12,
        nombre: "AUDIFONO  OVLENG OV-X13",
        precio: $14900,
        categoria: "audio",
        imagen: "https://images.openai.com/static-rsc-1/V2u2DhO4QMH5GzCr2FgXH88dJl3uSbS_BxGDR_E9Cl8qc1ksK6x4l5QtEuHsX5uW0DU5nzRNCj984zow4uAVsFsLxbrw6FzzytwSi8Jm1Ti_i1OP8_Ccpvp3WSycn0sT-mlCzJVGP0J-_oRvzFsXe18XxjzEHl6AIfdUcUy_wsgFIYrOp5_qHIYW2o64iYB7uXFUOQ6cs9R7-GiD0yx4PKFop6FxUOfso--xESwOxSd09bnGGrMFiAF1gXijyKD1PXQBoJBCAIWs2U87MKdmSA", 
        [
{ nombre: "Tipo", valor: "Over-ear" },
{ nombre: "Conectividad", valor: "Cable" },
{ nombre: "Cancelación de ruido", valor: "No" },
{ nombre: "Longitud del cable", valor: "1.2 m" },
{ nombre: "Microfono" , valor: "Integrado en el cable"}
]
    }, 

    {
    id: 13,
        nombre: "AUDIFONO IPHONE LIGHTNING",
        precio: $24900,
        categoria: "audio",
        imagen: "https://images.openai.com/thumbnails/url/YRhSGnicDcnbEkJAAADQL0JWCjNNgym26eYS8rLD2lxyWewMfqr_6W_qvJ7vp2CMjpogkBYPC2Uk41jainw-soSVmMddI4xFR2nZ5vt-9z9Nv2aqhf2b_pCtASYlmJDX52g2FR0bdA7TAIAwquF6aQmtdPCW44NiDtvMQF1w94lrF91spzJccZ4M2VlUSOhMJ6JWTcou6Cj1FY4KaX4hELj1QjdVCZMMKM4zjH8Kkj2r", 
        [
{ nombre: "Tipo", valor: "In-ear" },
{ nombre: "Conectividad", valor: "Cable" },
{ nombre: "Cancelación de ruido", valor: "No" },
{ nombre: "Longitud del cable", valor: "120 a 122 cm" },
{ nombre: "Microfono" , valor: "Integrado en el cable"}
]
    }, 

    {
    id: 14,
        nombre: "AUDIFONO PHILIPS MANOS LIBRES AZUL",
        precio: $7900,
        categoria: "audio",
        imagen: "https://images.openai.com/static-rsc-1/cvI40qVJw_Yei__w_HyHXsQ6nGRp-wzazVHFu-wsOxQcJ7zO4KrQQyEc_Nba6sGSM1Lhq2SmyxdIv4KRCuAZkowf0riuvsEtiU_DpS2LLJk3ZkPgAnyVz8Y_NLxs1sUQN1ORL1uM46cxC8yWRTMoFEcXwzqJHFb4FCsJ8YSUgmVAcLzfW8fTkQwj8WZm-moehMgmTeAUaun6ZJr3Z0gHvl-Yj5E9IQZ7dFqCh7tpzVKNmSyWfZPSZxnktT2xwKSjs9r9FEt-0Dx0Q3NdmhlakA", 
        [
{ nombre: "Tipo", valor: "In-ear" },
{ nombre: "Conectividad", valor: "Bluetooth" },
{ nombre: "Cancelación de ruido", valor: "No" },
{ nombre: "Autonomía", valor: "7 horas" },
{ nombre: "Micrófono", valor: "Integrado para llamadas / manos libres" }
]
    }, 

    {
    id: 15,
        nombre: "Audifono Bluetooth P47M USA TF",
        precio: $9900,
        categoria: "audio",
        imagen: "https://images.openai.com/static-rsc-1/Klx5Vq1ukUZDn72Z2zueQJRNJGbMrePtmr_ad6UacXJbUdPrAkNipkVgVWas2Rn4ObwHcpt0Lb9Je4EDWvRgo9TVMzW9J363sLHGeTJggogPpGK4cP7sOsfhRa1dY63G-rMtIs7JFnaKCMoTYz3m-enTDHWwsy3iViu4qvA_kyVW0NRP4bUMlCTgrs6HIvSuy8lIoFwYYgvh1U7ul6nMCKMMS68fsPk0UhiTWSE7u_D-kRrso7ua2D1WUGyAh-Ge", 
        [
{ nombre: "Tipo", valor: "Over-ear" },
{ nombre: "Conectividad", valor: "Bluetooth" },
{ nombre: "Cancelación de ruido", valor: "No" },
{ nombre: "Autonomía", valor: "5 horas" }
{ nombre: "Micrófono", valor: "Integrado para llamadas / manos libres" }
]
    }, 

    {
    id: 16,
        nombre: "Audifono Bluetooth PXZ-B39 con luz",
        precio: $16900,
        categoria: "audio",
        imagen: "https://images.openai.com/static-rsc-1/4Mb4bHbJUlz-gneuJ9olwLV-w-PGVW6zOGvae4_8V0crjTd6_1OruLYjikFJMRWU6-1ancmlVBtn4VHOdMwojQu2rc7YHh4FiYKNGx8Lgpnec98M00HJe2KJiP_aWUNU6WM-_zzfoZlIpaj2Rfh6g0wrw-6ZD6QdmY2M6g1lG5NW-oFUR6mNBefYdOl3cadfYBRfERrunf9dBV_-pw7klxJproAZvSCpnUVFNWRNmUGgWwSMqjh9n2uzpD92GaN0ovF5s8Erm5yzd18oEDojJg", 
        [
{ nombre: "Tipo", valor: "Over-ear" },
{ nombre: "Conectividad", valor: "Bluetooth" },
{ nombre: "Cancelación de ruido", valor: "No" },
{ nombre: "Autonomía", valor: "6 a 10 horas" },
{ nombre: "Micrófono", valor: "Integrado para llamadas / manos libres" }
]
    }, 

    {
    id: 17,
        nombre: "AUDIFONO INALAMRICO MODEL OV-T12",
        precio: $15900,
        categoria: "audio",
        imagen: "https://images.openai.com/static-rsc-1/NjWbEptM-hwy-6raOpLqq8Of-X92t9SeVCNhVmwmBCiKxSKCFBhF9QPXqFPLq0y13lP_S9_x9-ADzg14BxeWxvFhz3ARnEGGbwTRuYQBP7OHkbPO5OZ4tUpvDElB8DUDoBdZ6_Xx_er1eCq7bPmuBDjrZTYjZJH6hvdZlKEt43LIAOkZ8N2s_MFlyWVKYV23gDKFfW9Dw2am2hnbFKBfny0LdSpZNwLJumhvqGXqvLcY7YuzGPydweUBVaaEjZXxwghyoZKrQp_zfez_q-H_Yg", 
        [
{ nombre: "Tipo", valor: "Over-ear" },
{ nombre: "Conectividad", valor: "Bluetooth" },
{ nombre: "Cancelación de ruido", valor: "No" },
{ nombre: "Autonomía", valor: "6 horas" }
{ nombre: "Micrófono", valor: "Integrado para llamadas / manos libres" }
]
    }, 

    {
    id: 18,
        nombre: "AUDIFONO USB OVLENG OV-Q5",
        precio: $14900,
        categoria: "audio",
        imagen: "", 
        [
{ nombre: "Tipo", valor: "Over-ear" },
{ nombre: "Conectividad", valor: "Cable" },
{ nombre: "Cancelación de ruido", valor: "No" },
{ nombre: "Longitud del cable", valor: "2 m" }
{ nombre: "Micrófono", valor: "Integrado para llamadas / manos libres" }
{ nombre: "Micrófono", valor: "Integrado, tipo condensador
    }
]
    }, 

    {
    id: 19,
        nombre: "AUDIFONOS MSI IMMERSER GH70",
        precio: $10000,
        categoria: "audio",
        imagen: "", 
        [
{ nombre: "Tipo", valor: "In-ear/On-ear/Over-ear" },
{ nombre: "Conectividad", valor: "Bluetooth/Cable" },
{ nombre: "Cancelación de ruido", valor: "Sí/No" },
{ nombre: "Autonomía", valor: "X horas" }
]
    }, 

    {
    id: 20,
        nombre: "AUDIFONO INALAMRICO MODEL OV-T10 ",
        precio: $18900,
        categoria: "audio",
        imagen: "https://m.media-amazon.com/images/I/51bnabBjTxS.jpg",
        [
{ nombre: "Tipo", valor: "In-ear" },
{ nombre: "Conectividad", valor: "Bluetooth" },
{ nombre: "Cancelación de ruido", valor: "No" },
{ nombre: "Autonomía", valor: "5 horas" }
{ nombre: "Micrófono", valor: "Integrado para llamadas / manos libres" }
]
    }

]