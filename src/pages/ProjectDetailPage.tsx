import React, { useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, MapPin, Calendar, Layers, ExternalLink, X, ZoomIn, ChevronLeft, ChevronRight, LayoutGrid, Maximize2 } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import CircularGallery from '../components/CircularGallery';
import { cn } from '../lib/utils';

const CORPORATE_HUB_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1lT_rM9G9pB9t4vHywDCfQy7h5OHwJM41', text: 'Corporate Hub 01' },
  { image: 'https://lh3.googleusercontent.com/d/1Eqvv_Ja3NOyxumvWayVBr7tSOr-IWOfp', text: 'Corporate Hub 02' },
  { image: 'https://lh3.googleusercontent.com/d/1Jm0ZUy_oREO0t6ttfPWcnmf5jSZuWpvF', text: 'Corporate Hub 03' },
  { image: 'https://lh3.googleusercontent.com/d/1UZf7kEu_LgU7H725aGhIs2oD3r7dxsaL', text: 'Corporate Hub 04' },
  { image: 'https://lh3.googleusercontent.com/d/1Y3QaodVTdx_ksxe5y-mfymZj7Wvi7S5A', text: 'Corporate Hub 05' },
  { image: 'https://lh3.googleusercontent.com/d/17OkF3i4Ktbnkjw21ieEtiueXdcppqQhA', text: 'Corporate Hub 06' },
  { image: 'https://lh3.googleusercontent.com/d/1o4AABMh5Ic8IFyfppdwKzNWguVJnMw9U', text: 'Corporate Hub 07' },
  { image: 'https://lh3.googleusercontent.com/d/1u1DkDx7zmYAYkT-AcmXjNwfO2t9oTB0G', text: 'Corporate Hub 08' },
  { image: 'https://lh3.googleusercontent.com/d/1v0PzZVJ-f1rEYK4hCyYot3N8KYUN1Q6y', text: 'Corporate Hub 09' },
  { image: 'https://lh3.googleusercontent.com/d/1vvr64lVDD2ffQrI-TCAB2SEE77dWXXw6', text: 'Corporate Hub 10' },
];

const COMMON_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1zaZHAGa2m57NF8IZXKgQfkCN6--SVy3I', text: 'Celestial Void' },
  { image: 'https://lh3.googleusercontent.com/d/151kmI4LQypjKjzhQatTQCO-aAXyGuBhE', text: 'Primal Form' },
  { image: 'https://lh3.googleusercontent.com/d/1GHRlkdpuKtOVQ9p2t35-pMhmfu9m8KRM', text: 'Tectonic Light' },
  { image: 'https://lh3.googleusercontent.com/d/1H6q1qNWQHacRX-hMgou8B1FiWhRQChA9', text: 'Minimalist Core' },
  { image: 'https://lh3.googleusercontent.com/d/1QLoxtToMtlmg-ipEwkZmSlumXOUQN8xl', text: 'Spatial Flux' },
  { image: 'https://lh3.googleusercontent.com/d/1RAbB85Awvx_M7HDpeLTHFHe_hVhD5Ei', text: 'Organic Void' },
  { image: 'https://lh3.googleusercontent.com/d/1RN58UzcqRVb7YOuGg3ZnHoEAIeCcMHZq', text: 'Architectural Pulse' },
  { image: 'https://lh3.googleusercontent.com/d/1VizU1uLT7de9piaTNGn2dJ3PFC1Bqc9h', text: 'Luminous Boundary' },
  { image: 'https://lh3.googleusercontent.com/d/1iQmVJffURWt36pHSEUDtBVea6DohwNui', text: 'Pure Harmony' },
  { image: 'https://lh3.googleusercontent.com/d/1ougaUOsunQBGofdyvOBG9Khbgdk0vqUv', text: 'Inner Sanctum' },
];

const MATERIAL_DIALOGUE_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1_BEEwFeRswSl-qmhg6cGM3CSVZBNxitc', text: 'Material Dialogue 01' },
  { image: 'https://lh3.googleusercontent.com/d/12tqE2lUkckZfNKtOcibIy0UisiJcfyT1', text: 'Material Dialogue 02' },
  { image: 'https://lh3.googleusercontent.com/d/1BFzYFW7w2D_fSzHxGGXC0jP_9NLJ1k0O', text: 'Material Dialogue 03' },
  { image: 'https://lh3.googleusercontent.com/d/1CkRmnq0K-ewBzy-uuVEjirTl0h6cE7BW', text: 'Material Dialogue 04' },
  { image: 'https://lh3.googleusercontent.com/d/1O52HcsPN87XM4fbK7Geh4MXe4Gd49je-', text: 'Material Dialogue 05' },
  { image: 'https://lh3.googleusercontent.com/d/1Y7u30gzvsxNrgdhMvs6XhsqzlEjpHY2i', text: 'Material Dialogue 06' },
  { image: 'https://lh3.googleusercontent.com/d/1kMnsmwDnmA2vzMPlAAbgOr9qj2cimKGI', text: 'Material Dialogue 07' },
  { image: 'https://lh3.googleusercontent.com/d/1kVIA1rr2w9edYSVfXK5zbkjj_flhmByK', text: 'Material Dialogue 08' },
];

const BUSINESS_CENTER_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1n1BRt7ypqRy_2DlVe1vLwKxtfrSIOAor', text: 'Business Center 01' },
  { image: 'https://lh3.googleusercontent.com/d/14xLpEu59w4M4VNtvc7GaQid9pBAwQfd-', text: 'Business Center 02' },
  { image: 'https://lh3.googleusercontent.com/d/16UwjT1SSzMIS4bVDiB8ZcntJuJcSwtrQ', text: 'Business Center 03' },
  { image: 'https://lh3.googleusercontent.com/d/1HSEFBOKUnegGjnvvY9xXcSnL7GAKoDXe', text: 'Business Center 04' },
  { image: 'https://lh3.googleusercontent.com/d/1Hz8q7vk9cTql7XREXBHLQG1tjQ1E-VOc', text: 'Business Center 05' },
  { image: 'https://lh3.googleusercontent.com/d/1JHPhEFvokMViai2JRY2C97I_wcZ5Ap', text: 'Business Center 06' },
  { image: 'https://lh3.googleusercontent.com/d/1MHk72anDHYgYGtCAuWJx2GWJ02Ts97UC', text: 'Business Center 07' },
  { image: 'https://lh3.googleusercontent.com/d/1NPceFslGWT3fUyWn6AGSqGJPxh0a4j1A', text: 'Business Center 08' },
  { image: 'https://lh3.googleusercontent.com/d/1O5txCTxKc9EoSV62XE9b09ds8eZtQ61r', text: 'Business Center 09' },
  { image: 'https://lh3.googleusercontent.com/d/1QD35D6_0pT2a_j9vYk2IO5-BhrRbXrwc', text: 'Business Center 10' },
  { image: 'https://lh3.googleusercontent.com/d/1Rg-tzflx4mY1yefb608u77YANq5xeFUk', text: 'Business Center 11' },
  { image: 'https://lh3.googleusercontent.com/d/1fsRJBocZlFhIge-FrFCk09hJwHK3Vqpt', text: 'Business Center 12' },
  { image: 'https://lh3.googleusercontent.com/d/1gtqBoeZxA4aXSYVrnm_ldNO2G0aOFjhJ', text: 'Business Center 13' },
  { image: 'https://lh3.googleusercontent.com/d/1z1nVJt04BqT5iYcHD8cbRbvFmKg_flY_', text: 'Business Center 14' },
];

const ICONIC_SHYAMAL_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/11TbTFOKmmDw5GgkEcUPklEkQgWW9u06Z', text: 'Iconic Shyamal 01' },
  { image: 'https://lh3.googleusercontent.com/d/16eaYwux7n_VlwXTQR_fu8tskpw3jWwnD', text: 'Iconic Shyamal 02' },
  { image: 'https://lh3.googleusercontent.com/d/1N8Rh46dRnicb2zSSXZwqrSumYsCm-up9', text: 'Iconic Shyamal 03' },
  { image: 'https://lh3.googleusercontent.com/d/1Wi0ySgvW2nXAkjt9VZO_142AScdkhoe5', text: 'Iconic Shyamal 04' },
  { image: 'https://lh3.googleusercontent.com/d/1ZfjIAL296LD5uhCuifOGUUhAAFEkFWoB', text: 'Iconic Shyamal 05' },
  { image: 'https://lh3.googleusercontent.com/d/1cCkNNGVuquVa7qJsIwU3DaB3HmLywvn5', text: 'Iconic Shyamal 06' },
  { image: 'https://lh3.googleusercontent.com/d/1gXdKVuetnhfsT5fQPrjJU8ZAC1Alpq8k', text: 'Iconic Shyamal 07' },
  { image: 'https://lh3.googleusercontent.com/d/1iOJPcTZWDkzZBs0jb1jNwOrGRley_zeQ', text: 'Iconic Shyamal 08' },
  { image: 'https://lh3.googleusercontent.com/d/1w2v0x_u3_eykFh4KxJHv9UdmK4AL_PrY', text: 'Iconic Shyamal 09' },
];

const SAFAL_COMMERCIAL_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1GqZsuB4FzUy9H9QA2Cnm0_ZPTsVWxnhs', text: 'Safal Commercial 01' },
  { image: 'https://lh3.googleusercontent.com/d/1RtXXuGl-Y2yJ1L9mskY3IU5xL-e07l1I', text: 'Safal Commercial 02' },
  { image: 'https://lh3.googleusercontent.com/d/1bQaYUlnqM_dPlHGV4XSVuWHgsiwWkvKJ', text: 'Safal Commercial 03' },
  { image: 'https://lh3.googleusercontent.com/d/1eCEPROlLE1VhRxUILd0_nU5a6H64Dafv', text: 'Safal Commercial 04' },
  { image: 'https://lh3.googleusercontent.com/d/1i2Yqp-lSj_-Jjv7UUTPNFJDn0OhmvOr2', text: 'Safal Commercial 05' },
  { image: 'https://lh3.googleusercontent.com/d/1jx9ikwitul59OHtWCKjXauAn8yuHGl9D', text: 'Safal Commercial 06' },
  { image: 'https://lh3.googleusercontent.com/d/1lD3u17YibjQIBIiRWVuiSFOPZIB58mCa', text: 'Safal Commercial 07' },
  { image: 'https://lh3.googleusercontent.com/d/1n1BRt7ypqRy_2DlVe1vLwKxtfrSIOAor', text: 'Safal Commercial 08' },
  { image: 'https://lh3.googleusercontent.com/d/1vwNtGPDkZXVNEBl7TLENW0tehdrUN8ht', text: 'Safal Commercial 09' },
  { image: 'https://lh3.googleusercontent.com/d/1x4dXgc6hRFY3orI353oZn6N5aqjmkWRt', text: 'Safal Commercial 10' },
];

const MINIMALIST_HOME_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1GqZsuB4FzUy9H9QA2Cnm0_ZPTsVWxnhs', text: 'Minimalist Home 01' },
  { image: 'https://lh3.googleusercontent.com/d/1RtXXuGl-Y2yJ1L9mskY3IU5xL-e07l1I', text: 'Minimalist Home 02' },
  { image: 'https://lh3.googleusercontent.com/d/1bQaYUlnqM_dPlHGV4XSVuWHgsiwWkvKJ', text: 'Minimalist Home 03' },
  { image: 'https://lh3.googleusercontent.com/d/1eCEPROlLE1VhRxUILd0_nU5a6H64Dafv', text: 'Minimalist Home 04' },
  { image: 'https://lh3.googleusercontent.com/d/1i2Yqp-lSj_-Jjv7UUTPNFJDn0OhmvOr2', text: 'Minimalist Home 05' },
  { image: 'https://lh3.googleusercontent.com/d/1jx9ikwitul59OHtWCKjXauAn8yuHGl9D', text: 'Minimalist Home 06' },
  { image: 'https://lh3.googleusercontent.com/d/1lD3u17YibjQIBIiRWVuiSFOPZIB58mCa', text: 'Minimalist Home 07' },
  { image: 'https://lh3.googleusercontent.com/d/1n1BRt7ypqRy_2DlVe1vLwKxtfrSIOAor', text: 'Minimalist Home 08' },
  { image: 'https://lh3.googleusercontent.com/d/1vwNtGPDkZXVNEBl7TLENW0tehdrUN8ht', text: 'Minimalist Home 09' },
  { image: 'https://lh3.googleusercontent.com/d/1x4dXgc6hRFY3orI353oZn6N5aqjmkWRt', text: 'Minimalist Home 10' },
];

const LAKESIDE_PAVILION_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1IvJZ2tMlDc86dsptcjWoTjVBbn2GLJXe', text: 'Lakeside Pavilion 01' },
  { image: 'https://lh3.googleusercontent.com/d/1BARiFPF1WqG6Gn9NG_aY6jQQ3LLCGsNV', text: 'Lakeside Pavilion 02' },
  { image: 'https://lh3.googleusercontent.com/d/1BNBKIOSfwDEegRlGUvlblYBZr-DZIuWB', text: 'Lakeside Pavilion 03' },
  { image: 'https://lh3.googleusercontent.com/d/1-xZFO72fjLUBvo95ycdGYB5uHwjiJO9H', text: 'Lakeside Pavilion 04' },
  { image: 'https://lh3.googleusercontent.com/d/1JvdV2Oq0F3D9CZThPXoueFh-5jyeB0_P', text: 'Lakeside Pavilion 05' },
  { image: 'https://lh3.googleusercontent.com/d/1QO4RG4r3lLjHg8LSxlGJgsL27ndNJQDR', text: 'Lakeside Pavilion 06' },
  { image: 'https://lh3.googleusercontent.com/d/1VjfTyEtMHhfE8ISVmigmsRXnT6hq5Kys', text: 'Lakeside Pavilion 07' },
  { image: 'https://lh3.googleusercontent.com/d/1WC-BXDJSfS3GKFozaBavmZkHfrGeWE8k', text: 'Lakeside Pavilion 08' },
  { image: 'https://lh3.googleusercontent.com/d/1WOJGEjV36yNHc436ycOM8yQoqZZA_KrT', text: 'Lakeside Pavilion 09' },
  { image: 'https://lh3.googleusercontent.com/d/1cb-sHqV2zBhZm-q_xzutywoL5Mk38mOx', text: 'Lakeside Pavilion 10' },
  { image: 'https://lh3.googleusercontent.com/d/1wi9c6F4T_xObhVU0B-h9zlnGFRir8ZfQ', text: 'Lakeside Pavilion 11' },
  { image: 'https://lh3.googleusercontent.com/d/1xLanKg58lXAAA328ZnD6yl8yvAyOALJH', text: 'Lakeside Pavilion 12' },
];

const MODERNIST_VILLA_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1zaZHAGa2m57NF8IZXKgQfkCN6--SVy3I', text: 'Modernist Villa 01' },
  { image: 'https://lh3.googleusercontent.com/d/151kmI4LQypjKjzhQatTQCO-aAXyGuBhE', text: 'Modernist Villa 02' },
  { image: 'https://lh3.googleusercontent.com/d/18ZAqVZ_dUvWc_Ty2yITX2JVYMpQl0C96', text: 'Modernist Villa 03' },
  { image: 'https://lh3.googleusercontent.com/d/18_7CMiYHoSYBhdpz3wpWKfoQkGwhUvof', text: 'Modernist Villa 04' },
  { image: 'https://lh3.googleusercontent.com/d/19slMjCDOJX7utwGRjYTzXNSoClLzkPx_', text: 'Modernist Villa 05' },
  { image: 'https://lh3.googleusercontent.com/d/1DGldHecHJLmt7AkjiUlSn60qWGwIfH87', text: 'Modernist Villa 06' },
  { image: 'https://lh3.googleusercontent.com/d/1EsMLe08jkprzx3ZDo1GAcmzZH3N-Frpp', text: 'Modernist Villa 07' },
  { image: 'https://lh3.googleusercontent.com/d/1GHRlkdpuKtOVQ9p2t35-pMhmfu9m8KRM', text: 'Modernist Villa 08' },
  { image: 'https://lh3.googleusercontent.com/d/1H6q1qNWQHacRX-hMgou8B1FiWhRQChA9', text: 'Modernist Villa 09' },
  { image: 'https://lh3.googleusercontent.com/d/1QLoxtToMtlmg-ipEwkZmSlumXOUQN8xl', text: 'Modernist Villa 10' },
  { image: 'https://lh3.googleusercontent.com/d/1RAbB85Awvx_M7HDwpeLTHFHe_hVhD5Ei', text: 'Modernist Villa 11' },
  { image: 'https://lh3.googleusercontent.com/d/1RN58UzcqRVb7YOuGg3ZnHoEAIeCcMHZq', text: 'Modernist Villa 12' },
  { image: 'https://lh3.googleusercontent.com/d/1U7YxzdLn1xQcth_3bK9aNjKxS9XHEMJ9', text: 'Modernist Villa 13' },
  { image: 'https://lh3.googleusercontent.com/d/1VizU1uLT7de9piaTNGn2dJ3PFC1Bqc9h', text: 'Modernist Villa 14' },
  { image: 'https://lh3.googleusercontent.com/d/1Vr36TSJPInbGPkPCG5a42anV8U1T2vBD', text: 'Modernist Villa 15' },
  { image: 'https://lh3.googleusercontent.com/d/1XibxVzxzjgvmI85XDUywtUpJTUus7bzM', text: 'Modernist Villa 16' },
  { image: 'https://lh3.googleusercontent.com/d/1YyyJgCvAd-Q9_dcwhd7A7YLY_MGaTjuF', text: 'Modernist Villa 17' },
  { image: 'https://lh3.googleusercontent.com/d/1iQmVJffURWt36pHSEUDtBVea6DohwNui', text: 'Modernist Villa 18' },
  { image: 'https://lh3.googleusercontent.com/d/1ougaUOsunQBGofdyvOBG9Khbgdk0vqUv', text: 'Modernist Villa 19' },
  { image: 'https://lh3.googleusercontent.com/d/1-muYkqhKVHIFcPnOTRMuHckfveopxo9M', text: 'Modernist Villa 20' },
];

const SARANSH_RESIDENTIAL_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1ATpVoCZUuKvgssfy4TcClIPCA6v8K3yz', text: 'Living Space 01' },
  { image: 'https://lh3.googleusercontent.com/d/10sHG9fUvsCcHyVbG2_bwNBtsMT9LXrnE', text: 'Living Space 02' },
  { image: 'https://lh3.googleusercontent.com/d/13Q7hqay2vgWNX89s3LREPa6-6xR39cXr', text: 'Living Space 03' },
  { image: 'https://lh3.googleusercontent.com/d/1A-GMMiT7zVSVme_9ANjVRoJpd6cbuNjY', text: 'Living Space 04' },
  { image: 'https://lh3.googleusercontent.com/d/10BiKxkWetqJZyJ6PSZ2caGL-ZfxNBFqR', text: 'Living Space 05' },
  { image: 'https://lh3.googleusercontent.com/d/1FBMPFeIONXF8zUrOAYtiScj7zijY5uVA', text: 'Living Space 06' },
  { image: 'https://lh3.googleusercontent.com/d/1Jtygz6yRypusDtlq7NM9vOmUaqaC3T4e', text: 'Living Space 07' },
  { image: 'https://lh3.googleusercontent.com/d/1SG-kw5nJPKxC0r-Bi5fySQQQTPXJ0DaX', text: 'Living Space 08' },
  { image: 'https://lh3.googleusercontent.com/d/1WTeS-ivEHtUgCizv4QWCr-0OMg4-h8gT', text: 'Living Space 09' },
  { image: 'https://lh3.googleusercontent.com/d/1WabygFuGy0R-tch71dg8WPoVUGGp8w9e', text: 'Living Space 10' },
  { image: 'https://lh3.googleusercontent.com/d/1YdIQs-ELSXFpj8ZScb6cQejOWT92J_uQ', text: 'Living Space 11' },
  { image: 'https://lh3.googleusercontent.com/d/1aCHCMZzRq3yWKp1t2lsYUQoB8VAD9uTf', text: 'Living Space 12' },
  { image: 'https://lh3.googleusercontent.com/d/1kBeDniq8YscJ_Y9hrfeT9AmRP1-FFg5b', text: 'Living Space 13' },
  { image: 'https://lh3.googleusercontent.com/d/1mWy1CeWH5709dOqETSpugRmcbvZPMn84', text: 'Living Space 14' },
  { image: 'https://lh3.googleusercontent.com/d/1qyYGAq-QLx_c7RdlVOSRNkC5VI3Tg_xr', text: 'Living Space 15' },
  { image: 'https://lh3.googleusercontent.com/d/1wht317e2oDjZE7kMtDjXx7hKkKNwPA4r', text: 'Living Space 16' },
  { image: 'https://lh3.googleusercontent.com/d/1yUu6Whfhr-OjuMJynxd196gfFjQVjF1P', text: 'Living Space 17' },
];

const INTERIOR_DETAIL_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1UlOsOlkAnM_Z-ohufO0QsFR1gQ7NzcnK', text: 'Interior Detail 01' },
  { image: 'https://lh3.googleusercontent.com/d/1GTD1Ig-eWLW41JgPIFW94QHH3sBOX6gb', text: 'Interior Detail 02' },
  { image: 'https://lh3.googleusercontent.com/d/1OIqQK1dHsNWH90MLsNi_TgL24y-qD-67', text: 'Interior Detail 03' },
  { image: 'https://lh3.googleusercontent.com/d/1QtyrH4BL03_19HDNi4U5L8jdjWxbGmqG', text: 'Interior Detail 04' },
  { image: 'https://lh3.googleusercontent.com/d/17DcOSeL0NDn-RTmQu1UJs7FuquZ1hGkl', text: 'Interior Detail 05' },
  { image: 'https://lh3.googleusercontent.com/d/1_WQe69FYXc7h9LienyBKK-gT7t7RPEiT', text: 'Interior Detail 06' },
  { image: 'https://lh3.googleusercontent.com/d/1baQRdM8j6H-uSZvmW8ERAHHU5_FqhMOL', text: 'Interior Detail 07' },
  { image: 'https://lh3.googleusercontent.com/d/1msgYwl4mraO6MAv113fFXBHP0jgEkW7n', text: 'Interior Detail 08' },
  { image: 'https://lh3.googleusercontent.com/d/1vDMbD7KuncbmdvOvunK56jqw2CQw8akU', text: 'Interior Detail 09' },
  { image: 'https://lh3.googleusercontent.com/d/1zLZcMS7ehDmOXqZ3xftn68HSZIpPf-eG', text: 'Interior Detail 10' },
  { image: 'https://lh3.googleusercontent.com/d/1zNL7CP90IA229Yj6BeTWvK_Su_mRzrRj', text: 'Interior Detail 11' },
];

const MASTER_BEDROOM_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/18wghnSqoU4DceWGwb3OrGqMIb-bCrx_4', text: 'Master Bedroom 01' },
  { image: 'https://lh3.googleusercontent.com/d/14h7b7pMXC-VBaqBlaluV84FMPmJtgsv-', text: 'Master Bedroom 02' },
  { image: 'https://lh3.googleusercontent.com/d/1-o6huBAqCozx-bFOjuEzIhXETffgXmpO', text: 'Master Bedroom 03' },
  { image: 'https://lh3.googleusercontent.com/d/1N84kFIXt8RgGocPWEwGaF7Ei2E6TcQCl', text: 'Master Bedroom 04' },
  { image: 'https://lh3.googleusercontent.com/d/1Tp97KZA5hxYBen4rOyf1nICCS9DHi12m', text: 'Master Bedroom 05' },
  { image: 'https://lh3.googleusercontent.com/d/1XPMjgJV5cm01cNRibpYxvZbUmkUY6NV4', text: 'Master Bedroom 06' },
  { image: 'https://lh3.googleusercontent.com/d/1YKi3G5pqqWpgkGck8vVD5lvCX6foAyHp', text: 'Master Bedroom 07' },
  { image: 'https://lh3.googleusercontent.com/d/1bVVYnAZbYa0_9IOXRNHIvFMm6VlS8zXj', text: 'Master Bedroom 08' },
  { image: 'https://lh3.googleusercontent.com/d/1eJdYsvsf6gtdxLiPJ_qoQUuTPDlAcHCu', text: 'Master Bedroom 09' },
  { image: 'https://lh3.googleusercontent.com/d/1g-gFVfcAh7GKfJKGu8Ho_mxnW_KBXBRq', text: 'Master Bedroom 10' },
  { image: 'https://lh3.googleusercontent.com/d/1hQ3vkl0UAq3weXWq3YSLXtC7RgIfmhLh', text: 'Master Bedroom 11' },
  { image: 'https://lh3.googleusercontent.com/d/1mIw6i3D6_sdoSUAqZwnQvc1P5M_R8t35', text: 'Master Bedroom 12' },
  { image: 'https://lh3.googleusercontent.com/d/1oEXKw7H8EYCLaSppcS6RwI3cPr16_cPi', text: 'Master Bedroom 13' },
  { image: 'https://lh3.googleusercontent.com/d/1qlBFCwSljLD0BHKzzcQLvhTz6CMEQ6vK', text: 'Master Bedroom 14' },
  { image: 'https://lh3.googleusercontent.com/d/1xkHElGhMv4jn-CIUb44MF-EULoI7tVN9', text: 'Master Bedroom 15' },
  { image: 'https://lh3.googleusercontent.com/d/1xx9p6jmi5997vpWR9EBJmH1VS_ab2r6S', text: 'Master Bedroom 16' },
  { image: 'https://lh3.googleusercontent.com/d/1yNLwkb9nnoYMjPtrXItN4TGaK4CrfCSi', text: 'Master Bedroom 17' },
];

const NANDINI_RESIDENTIAL_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1Tzq0ooCQnYLh-F6ns11Wfy1QK7K3W0jh', text: 'Nandini Residential 01' },
  { image: 'https://lh3.googleusercontent.com/d/1-XK2PeqEicXTRsxfKrIE-5xmBX_MXFvt', text: 'Nandini Residential 02' },
  { image: 'https://lh3.googleusercontent.com/d/11XftRsAgmFH5D7qMo63aC_DJqsgxkg8W', text: 'Nandini Residential 03' },
  { image: 'https://lh3.googleusercontent.com/d/13T307RnsS1YhLREczMaA3LxGwzKPGd99', text: 'Nandini Residential 04' },
  { image: 'https://lh3.googleusercontent.com/d/13dT40m1keBawrXj_LTFiqHf5L68DurIW', text: 'Nandini Residential 05' },
  { image: 'https://lh3.googleusercontent.com/d/14gq8RjKzOQX5GoDxZOu1LYdaitbyFaqT', text: 'Nandini Residential 06' },
  { image: 'https://lh3.googleusercontent.com/d/1L7tYlf_OOkys-2kNAs6c6BDGdyxthjgS', text: 'Nandini Residential 07' },
  { image: 'https://lh3.googleusercontent.com/d/1LIvIFzb6MjxslW3Cn78ocU-0FcZqJflW', text: 'Nandini Residential 08' },
  { image: 'https://lh3.googleusercontent.com/d/1M7c0BZg5Nbhje6pCXcx6ArpwXfzrfpW8', text: 'Nandini Residential 09' },
  { image: 'https://lh3.googleusercontent.com/d/1OlTdX7oAFnvHokByvAo7CDRtG3Ev0jKh', text: 'Nandini Residential 10' },
  { image: 'https://lh3.googleusercontent.com/d/1Ru7DZbc773GZXuWnQv2_v5USMbOhiagQ', text: 'Nandini Residential 11' },
  { image: 'https://lh3.googleusercontent.com/d/1-KS2-GzBFXfm83kIsUHP0MnbRxuKSLEg', text: 'Nandini Residential 12' },
  { image: 'https://lh3.googleusercontent.com/d/1WcsfUWRrmZ3_KCXMIssJEjm0p6WzBCld', text: 'Nandini Residential 13' },
  { image: 'https://lh3.googleusercontent.com/d/1_dQa9-W2cs1dPXmMbnpArSnl-DG6sIlb', text: 'Nandini Residential 14' },
  { image: 'https://lh3.googleusercontent.com/d/1aJ7C0b232vb3czbl0U2dGE2OB0N90IdX', text: 'Nandini Residential 15' },
  { image: 'https://lh3.googleusercontent.com/d/1dwEydqKIvICW89klojVZKP-fJOftn3Al', text: 'Nandini Residential 16' },
  { image: 'https://lh3.googleusercontent.com/d/1iMqso5DpJgyGsu48KirbsV5PcNaigMYv', text: 'Nandini Residential 17' },
];

const ORCHID_PARK_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1fQxUcOX6Xya8S1QgM-SEPknvST3Z-XPV', text: 'Corridor Perspective 01' },
  { image: 'https://lh3.googleusercontent.com/d/1N-2KEYobllj08RJwrnPILbo4LqfQX3qZ', text: 'Corridor Perspective 02' },
  { image: 'https://lh3.googleusercontent.com/d/1Q1acrIupIQ9GCs794TI1iUupjTGA2GBc', text: 'Corridor Perspective 03' },
  { image: 'https://lh3.googleusercontent.com/d/1R86eCEAlF7dCFwYBYvrm6_HoaadQvbIm', text: 'Corridor Perspective 04' },
  { image: 'https://lh3.googleusercontent.com/d/1RTuBOAay5eORqBGCF75beMzxvFP9oVVA', text: 'Corridor Perspective 05' },
  { image: 'https://lh3.googleusercontent.com/d/1UX7UD9LYciKhOU1lZAFGJhXZqTU9ZHhj', text: 'Corridor Perspective 06' },
  { image: 'https://lh3.googleusercontent.com/d/1VxvCk0NgIIE9Cwn8V9WyA8t-GEKIvY8o', text: 'Corridor Perspective 07' },
  { image: 'https://lh3.googleusercontent.com/d/1f9c0oNatpygcipVjuBuTEn6JukHXPiXT', text: 'Corridor Perspective 08' },
  { image: 'https://lh3.googleusercontent.com/d/1Ky7LbQVVv1HY7zykjsWSOg-6DEA67f3W', text: 'Corridor Perspective 09' },
  { image: 'https://lh3.googleusercontent.com/d/1jyyq5qsWmffsEPw3XTZ3n0zscrWFS9zh', text: 'Corridor Perspective 10' },
  { image: 'https://lh3.googleusercontent.com/d/1rq3SNAeWfGz6hnnrxzP7D5I2ieC7YnKA', text: 'Corridor Perspective 11' },
  { image: 'https://lh3.googleusercontent.com/d/1u1nBzdpWoc4yf0rsy9OzePYANYPfpwOn', text: 'Corridor Perspective 12' },
  { image: 'https://lh3.googleusercontent.com/d/1ybviARSsIUzcw9PBQshjJWhgT7pX-fKj', text: 'Corridor Perspective 13' },
];

const SASAN_BHAI_RESIDENTIAL_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1A7n2KoNaNadZKVmfg8rAfJLm45iip4Ki', text: 'Sasan Bhai Residential 01' },
  { image: 'https://lh3.googleusercontent.com/d/1CwpouFmp3RkObvO8v0kStEZr5Qho1upO', text: 'Sasan Bhai Residential 02' },
  { image: 'https://lh3.googleusercontent.com/d/1FpP771cL8vy2eMZZwTwtBGFve-Ip_sGU', text: 'Sasan Bhai Residential 03' },
  { image: 'https://lh3.googleusercontent.com/d/1UfmiDAau64UhaDRwp63ecE7kzN41Ha-F', text: 'Sasan Bhai Residential 04' },
  { image: 'https://lh3.googleusercontent.com/d/1VmORiXXnSwLwAMa6ZFZNUyFSeODRuJvZ', text: 'Sasan Bhai Residential 05' },
  { image: 'https://lh3.googleusercontent.com/d/1_YQJg8HPBwCQKx-h6UKQ4zKHCm8eSFfM', text: 'Sasan Bhai Residential 06' },
  { image: 'https://lh3.googleusercontent.com/d/1egyW-7Pk2mNGz2x_Yew2TvgZsTzTZhye', text: 'Sasan Bhai Residential 07' },
  { image: 'https://lh3.googleusercontent.com/d/1lSfBE5V_CdMKRaEKH7K6WcJvOPpxPorW', text: 'Sasan Bhai Residential 08' },
  { image: 'https://lh3.googleusercontent.com/d/1nZrTa5mHbMUJH8AzgkUXHcvWVAyOJ5w8', text: 'Sasan Bhai Residential 09' },
  { image: 'https://lh3.googleusercontent.com/d/1ttFAyDlfliiyrR1PL6-E4Cs9-_wB46B_', text: 'Sasan Bhai Residential 10' },
  { image: 'https://lh3.googleusercontent.com/d/1uJkc_WYTa2QKKj2wXn2Ru6ZAixQQ1dHP', text: 'Sasan Bhai Residential 11' },
  { image: 'https://lh3.googleusercontent.com/d/1v6qalvsM3Qea36VXgliizpmmhqogNXId', text: 'Sasan Bhai Residential 12' },
  { image: 'https://lh3.googleusercontent.com/d/1ypESvxpWtpNWPtPEMOEfZcGaWPCW3jHS', text: 'Sasan Bhai Residential 13' },
];

const PROJECTS_DATA = [
  {
    id: 'res-dsa-01',
    title: 'Lakeside Pavilion',
    subtitle: 'Synchronicity with Nature',
    description: 'A masterpiece of contemporary architecture situated by the lake, focusing on the seamless transition between indoor and outdoor spaces.',
    fullStory: 'Lakeside Pavilion represents a dialogue between the built environment and the fluid lines of the natural landscape.',
    metadata: [
      { label: 'Location', value: 'Udaipur, Rajasthan', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2023', icon: <Calendar size={16} /> },
      { label: 'Area', value: '18,500 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: LAKESIDE_PAVILION_GALLERY
  },
  {
    id: 'res-dsa-02',
    title: 'Modernist Villa',
    subtitle: 'Bhramanand Residential',
    description: 'A Sanctuary of Contemporary Elegance.',
    fullStory: 'Modernist Villa (Bhramanand) represents a pinnacle of residential design, where structural geometry meets organic warmth.',
    metadata: [
      { label: 'Location', value: 'Surat, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '12,000 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: MODERNIST_VILLA_GALLERY
  },
  {
    id: 'comm-dsa-01',
    title: 'Corporate Hub',
    subtitle: 'Urban Professionalism',
    description: 'A commercial masterpiece focusing on vertical connectivity.',
    fullStory: 'The Corporate Hub serves as the lungs of the project.',
    metadata: [
      { label: 'Location', value: 'Mumbai, Maharashtra', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '45,000 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: CORPORATE_HUB_GALLERY
  },
  {
    id: 'comm-dsa-03',
    title: 'Business Center',
    subtitle: 'Architectural Synergy',
    description: 'A landmark commercial hub designed for the modern professional ecosystem.',
    fullStory: 'The Business Center is more than just an office building; it is a meticulously crafted environment that fosters productivity through strategic spatial planning and advanced material usage.',
    metadata: [
      { label: 'Location', value: 'Ahmedabad, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '65,000 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: BUSINESS_CENTER_GALLERY
  },
  {
    id: 'comm-dsa-04',
    title: 'Iconic Shyamal',
    subtitle: 'Future Workspace',
    description: 'Corporate headquarters redefining human-centric design.',
    fullStory: 'The Iconic Shyamal project re-imagines the corporate workspace as a living ecosystem that balances individual focus with collective innovation.',
    metadata: [
      { label: 'Location', value: 'Surat, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '120,000 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: ICONIC_SHYAMAL_GALLERY
  },
  {
    id: 'comm-dsa-05',
    title: 'Safal Commercial',
    subtitle: 'Contemporary Excellence',
    description: 'A contemporary commercial landmark emphasizing purity of form and functional minimalism.',
    fullStory: 'Safal Commercial redefines the modern workspace with its focus on clean lines, open spaces, and integrated natural light.',
    metadata: [
      { label: 'Location', value: 'Ahmedabad, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '45,000 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: SAFAL_COMMERCIAL_GALLERY
  },
  {
    id: 'res-dsa-03',
    title: 'Aesthetic Elevation',
    subtitle: 'Vertical Statement',
    description: 'An exploration of verticality and shadow play.',
    fullStory: 'Aesthetic Elevation defines a new silhouette for the neighborhood.',
    metadata: [
      { label: 'Location', value: 'Delhi, India', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2023', icon: <Calendar size={16} /> },
      { label: 'Area', value: '8,000 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Concept', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: COMMON_GALLERY
  },
  { id: 'other-dsa-01', title: 'Design Concept', subtitle: 'Conceptual Framework', description: 'Internal research project.', fullStory: 'Detailed concept analysis.', metadata: [], galleryItems: COMMON_GALLERY },
  {
    id: 'res-dsa-04',
    title: 'Living Space',
    subtitle: 'Saransh Residential',
    description: 'A masterpiece of contemporary interior architecture and spatial harmony.',
    fullStory: 'Living Space (Saransh) is a celebration of refined living. Every detail is curated to enhance the human experience, combining luxurious materials with functional innovation.',
    metadata: [
      { label: 'Location', value: 'Surat, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '8,500 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: SARANSH_RESIDENTIAL_GALLERY
  },
  {
    id: 'res-dsa-05',
    title: 'Interior Detail',
    subtitle: 'Cloud Residential',
    description: 'A study in minimalist elegance and artisanal craftsmanship.',
    fullStory: 'Interior Detail (Cloud Residential) focuses on the intersection of form and texture. Each element is designed to contribute to a tranquil and inspiring living environment.',
    metadata: [
      { label: 'Location', value: 'Surat, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '5,000 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: INTERIOR_DETAIL_GALLERY
  },
  {
    id: 'res-dsa-06',
    title: 'Master Bedroom',
    subtitle: 'Residential Luxe',
    description: 'A masterpiece of balance, texture, and light.',
    fullStory: 'The Master Bedroom project aims to create a deeply personal sanctuary. Using a monochromatic palette enriched by varied textures, the space achieves a sense of calm and sophistication.',
    metadata: [
      { label: 'Location', value: 'Surat, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '1,200 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: MASTER_BEDROOM_GALLERY
  },
  {
    id: 'res-dsa-07',
    title: 'Minimalist Void',
    subtitle: 'Nandini Residential',
    description: 'An architectural expression of negative space and structural purity.',
    fullStory: 'Minimalist Void (Nandini Residential) explores the profound impact of simplicity. The design prioritizes breathability and fluid circulation, creating a space that feels both expansive and intimately connected to its surroundings.',
    metadata: [
      { label: 'Location', value: 'Ahmedabad, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '9,200 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: NANDINI_RESIDENTIAL_GALLERY
  },
  {
    id: 'res-dsa-08',
    title: 'Corridor Perspective',
    subtitle: 'Orchid Park Residential',
    description: 'A study in architectural perspective and rhythmic spatial design.',
    fullStory: 'Corridor Perspective (Orchid Park Residential) emphasizes the beauty of movement and transitions. The project uses linear elements and tactical lighting to create a sense of depth and architectural rhythm within the residence.',
    metadata: [
      { label: 'Location', value: 'Surat, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '6,800 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: ORCHID_PARK_GALLERY
  },
  { id: 'comm-dsa-02', title: 'Material Dialogue', subtitle: 'Tactile Experience', description: 'Materials.', fullStory: 'Sensory design.', metadata: [], galleryItems: MATERIAL_DIALOGUE_GALLERY },
  {
    id: 'res-dsa-09',
    title: 'Sasan Bhai Residential',
    subtitle: 'Residential Harmony',
    description: 'An architectural dialogue between light, stone, and craftsmanship.',
    fullStory: 'Sasan Bhai Residential (Parshure) represents a meticulous study in material textures and spatial rhythm. The design prioritizes the interplay of natural light with carefully selected surfaces, creating a sanctuary that is both sophisticated and profoundly peaceful.',
    metadata: [
      { label: 'Location', value: 'Surat, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '7,500 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: SASAN_BHAI_RESIDENTIAL_GALLERY
  }
];

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  
  const project = PROJECTS_DATA.find(p => p.id === id) || PROJECTS_DATA[0];
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = React.useState<'case-study' | 'gallery'>('case-study');
  const [gallerySubView, setGallerySubView] = React.useState<'immersion' | 'grid'>('immersion');

  const slideTo = (index: number) => {
    if (index < 0 || index >= project.galleryItems.length) return;
    setCurrentIndex(index);
    const container = scrollContainerRef.current;
    if (container) {
      const children = container.children;
      if (children[index]) {
        children[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [viewMode]);

  useEffect(() => {
    // Handling initial scroll and hash routing
    if (location.hash === '#gallery') {
      setViewMode('gallery');
    } else if (location.hash === '#casestudy') {
      setViewMode('case-study');
    }
  }, [location.hash]);

  return (
    <div className="bg-obsidian min-h-screen text-white">
      <Navbar />
      
      <main className="pt-32 pb-24">
        {/* Header Section */}
        <div className={cn("max-w-7xl mx-auto px-6 transition-all duration-700", viewMode === 'gallery' ? "opacity-0 invisible h-0 pointer-events-none" : "opacity-100 visible mb-20")}>
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-neon-cyan text-xs font-bold tracking-[0.3em] uppercase mb-12 hover:translate-x-[-10px] transition-transform">
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-neon-cyan text-[10px] font-bold tracking-[0.5em] mb-4 block uppercase border-l-2 border-neon-cyan pl-4">
                Case Study
              </span>
              <h1 className="text-5xl md:text-7xl font-sans font-bold leading-tight mb-8">
                {project.title.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? 'text-gradient' : ''}>{word} </span>
                ))}
              </h1>
              <p className="text-white/80 text-xl font-light leading-relaxed mb-10 max-w-xl">
                {project.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 border-y border-white/10 mb-10">
                {project.metadata.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2 text-white/40 uppercase text-[9px] font-bold tracking-widest">
                       {item.icon} {item.label}
                    </div>
                    <div className="text-xs font-medium text-white">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-6">
                <button 
                  onClick={() => setViewMode('case-study')}
                  className={cn(
                    "px-10 py-4 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all",
                    viewMode === 'case-study' ? "bg-white text-obsidian" : "border border-white/10 text-white hover:bg-white/5"
                  )}
                >
                  Case Study
                </button>
                <button 
                  onClick={() => setViewMode('gallery')}
                  className={cn(
                    "px-10 py-4 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all",
                    viewMode === 'gallery' ? "bg-white text-obsidian shadow-[0_0_20px_rgba(255,255,255,0.2)]" : "border border-white/10 text-white hover:bg-white/5"
                  )}
                >
                  Gallery
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="aspect-square rounded-3xl overflow-hidden glass border border-white/10"
            >
              <img 
                src={project.galleryItems[0].image} 
                alt={project.title} 
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Sticky Back Button for Gallery Mode */}
        {viewMode === 'gallery' && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed top-8 left-8 md:top-32 md:left-24 z-50 flex items-center gap-6"
          >
            <button 
              onClick={() => setViewMode('case-study')}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-obsidian flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:scale-110 active:scale-95 transition-all group"
              title="Back to Case Study"
            >
              <ArrowLeft size={20} className="md:size-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <div className="hidden lg:block">
              <span className="text-white/40 text-[10px] font-black tracking-[0.4em] uppercase block mb-1">Project</span>
              <h4 className="text-white text-sm font-bold tracking-widest uppercase">{project.title}</h4>
            </div>
          </motion.div>
        )}

        {/* Content Toggle */}
        <AnimatePresence mode="wait">
          {viewMode === 'case-study' ? (
            <motion.div
              key="case-study"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Narrative Section */}
              <section id="casestudy" className="py-24 bg-obsidian">
                <div className="max-w-4xl mx-auto px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                    <h2 className="text-3xl font-display font-thin tracking-wider border-b border-white/10 pb-6 uppercase">The Story</h2>
                    {project.fullStory.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-white/60 text-lg leading-relaxed font-light">
                        {paragraph.trim()}
                      </p>
                    ))}
                  </motion.div>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="gallery"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Infinite 3D Stack Gallery Section */}
              <section id="gallery" className="py-40 bg-black overflow-hidden border-y border-white/5 relative">
                <div className="max-w-7xl mx-auto px-6 mb-24 flex justify-between items-end relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-neon-cyan text-[10px] font-black tracking-[1em] uppercase block mb-4">Experiential Gallery</span>
                    <h2 className="text-white text-4xl md:text-6xl font-display font-thin tracking-tight uppercase">
                      Spatial <span className="text-gradient italic font-bold">Chronology</span>
                    </h2>
                  </motion.div>
                  
                  {/* Mode & Slider Controls */}
                  <div className="flex flex-col md:flex-row items-center gap-8 mb-2">
                    {/* View Toggle */}
                    <div className="flex p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-xl">
                      <button 
                        onClick={() => setGallerySubView('immersion')}
                        className={cn(
                          "px-6 py-2 rounded-full text-[9px] font-bold tracking-widest uppercase transition-all flex items-center gap-2",
                          gallerySubView === 'immersion' ? "bg-white text-black shadow-lg" : "text-white/40 hover:text-white"
                        )}
                      >
                        <Maximize2 size={12} /> Immersion
                      </button>
                      <button 
                        onClick={() => setGallerySubView('grid')}
                        className={cn(
                          "px-6 py-2 rounded-full text-[9px] font-bold tracking-widest uppercase transition-all flex items-center gap-2",
                          gallerySubView === 'grid' ? "bg-white text-black shadow-lg" : "text-white/40 hover:text-white"
                        )}
                      >
                        <LayoutGrid size={12} /> Grid
                      </button>
                    </div>

                    {gallerySubView === 'immersion' && (
                      <div className="flex gap-4">
                        <button 
                          onClick={() => slideTo((currentIndex - 1 + project.galleryItems.length) % project.galleryItems.length)}
                          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all group"
                        >
                          <ChevronLeft size={24} className="group-active:scale-90 transition-transform" />
                        </button>
                        <button 
                          onClick={() => slideTo((currentIndex + 1) % project.galleryItems.length)}
                          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all group"
                        >
                          <ChevronRight size={24} className="group-active:scale-90 transition-transform" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                {gallerySubView === 'immersion' ? (
                  <>
                    <div 
                      className="relative w-full overflow-visible pb-12 perspective-[2000px] mt-24"
                      style={{ height: '70vh', maxHeight: '700px' }}
                    >
                      <div className="flex items-center justify-center h-full relative">
                        <AnimatePresence initial={false}>
                          {[-2, -1, 0, 1, 2].map((offset) => {
                            const index = (currentIndex + offset + project.galleryItems.length) % project.galleryItems.length;
                            const item = project.galleryItems[index];
                            
                            return (
                              <motion.div
                                key={item.image}
                                initial={false}
                                animate={{ 
                                  opacity: 1 - Math.abs(offset) * 0.3,
                                  scale: 1 - Math.abs(offset) * 0.15,
                                  x: offset * (window.innerWidth < 768 ? 220 : 450),
                                  rotateY: offset * -25,
                                  z: -Math.abs(offset) * 150,
                                  zIndex: 10 - Math.abs(offset)
                                }}
                                transition={{ 
                                  type: "spring", 
                                  stiffness: 260, 
                                  damping: 30,
                                  opacity: { duration: 0.2 }
                                }}
                                className={cn(
                                  "absolute h-[60vh] md:h-[70vh] max-h-[800px] rounded-2xl overflow-hidden cursor-pointer selection:bg-none",
                                  offset === 0 
                                    ? "bg-white/5 border border-white/40 shadow-[0_40px_100px_-20px_rgba(255,255,255,0.15)] ring-1 ring-white/20" 
                                    : "bg-white/5 border border-white/10 opacity-30 grayscale blur-[1px]"
                                )}
                                style={{ 
                                  width: 'auto',
                                  minWidth: window.innerWidth < 768 ? '80vw' : '400px'
                                }}
                                onClick={() => {
                                  if (offset === 0) setSelectedImage(item.image);
                                  else slideTo(index);
                                }}
                              >
                                <div className="w-full h-full relative flex items-center justify-center">
                                  {/* Inner soft glow for the active image */}
                                  {offset === 0 && (
                                    <div className="absolute inset-0 bg-white/[0.02] pointer-events-none z-20" />
                                  )}
                                  <img
                                    src={item.image}
                                    alt={item.text}
                                    loading="lazy"
                                    className={cn(
                                      "h-full w-auto object-contain transition-all duration-1000",
                                      offset === 0 ? "scale-100" : "scale-95 blur-[2px]"
                                    )}
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                                
                                {offset === 0 && (
                                  <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex justify-end"
                                  >
                                    <div className="w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                                      <ZoomIn className="text-white" size={20} />
                                    </div>
                                  </motion.div>
                                )}
                              </motion.div>
                            );
                          })}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Connected Progress Line */}
                    <div className="max-w-5xl mx-auto px-6 mt-12 relative h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        className="absolute top-0 left-0 h-full bg-neon-cyan shadow-[0_0_15px_rgba(0,255,255,0.8)]"
                        initial={false}
                        animate={{ 
                          left: `${(currentIndex / project.galleryItems.length) * 100}%`,
                          width: `${(1 / project.galleryItems.length) * 100}%`
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                      {/* Segmentation markers */}
                      <div className="absolute inset-0 flex justify-between">
                        {project.galleryItems.map((_, i) => (
                          <div key={i} className="w-[1px] h-full bg-black/40" />
                        ))}
                      </div>
                    </div>

                    <div className="max-w-7xl mx-auto px-6 mt-10 flex items-center gap-6">
                       <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10" />
                       <p className="text-white/40 text-[10px] font-black tracking-[0.8em] uppercase whitespace-nowrap">
                         Visual Archive <span className="text-neon-cyan">{String(currentIndex + 1).padStart(2, '0')}</span> / {String(project.galleryItems.length).padStart(2, '0')}
                       </p>
                       <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10" />
                    </div>
                  </>
                ) : (
                  <div className="max-w-7xl mx-auto px-6 mt-12">
                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                       {project.galleryItems.map((item, i) => (
                         <motion.div
                           key={i}
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: i * 0.05 }}
                           className="aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10 cursor-pointer group relative shadow-2xl"
                           onClick={() => setSelectedImage(item.image)}
                         >
                           <img 
                             src={item.image} 
                             alt={item.text}
                             loading="lazy"
                             className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                             referrerPolicy="no-referrer"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                              <span className="text-white text-[10px] font-bold tracking-widest uppercase mb-1">{item.text}</span>
                              <div className="w-8 h-[1px] bg-neon-cyan" />
                           </div>
                         </motion.div>
                       ))}
                     </div>
                  </div>
                )}
              </section>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Lightbox / Zoom Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-10 md:p-20 overflow-hidden"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-8 left-8 text-white/50 hover:text-neon-cyan flex items-center gap-3 text-[10px] font-black tracking-[0.4em] uppercase transition-all z-10 group"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                Gallery
              </button>
              
              <button 
                className="absolute top-8 right-8 w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-all z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <X size={20} />
              </button>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 30 }}
                className="relative w-full h-full flex items-center justify-center pointer-events-none"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage} 
                  alt="Spatial View"
                  className="max-w-[90vw] max-h-[80vh] md:max-w-7xl md:max-h-[85vh] object-contain rounded-xl shadow-[0_0_100px_rgba(0,255,255,0.15)] border border-white/10 pointer-events-auto"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        {viewMode === 'case-study' && (
          <section className="py-24 bg-obsidian/50 text-center">
            <div className="max-w-7xl mx-auto px-6">
              <h3 className="text-3xl md:text-5xl font-light text-white mb-12">Interested in a similar vision?</h3>
              <Link to="/#contact">
                <button className="px-12 py-5 bg-white text-obsidian text-[10px] font-bold tracking-[0.4em] uppercase rounded-full hover:bg-neon-cyan hover:text-white transition-all shadow-xl">
                  Start a Conversation
                </button>
              </Link>
            </div>
          </section>
        )}
      </main>

      {viewMode === 'case-study' && <Footer />}
    </div>
  );
};
