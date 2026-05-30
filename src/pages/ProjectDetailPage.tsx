import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, MapPin, Calendar, Layers, ExternalLink, X, ZoomIn, ChevronLeft, ChevronRight, LayoutGrid, Maximize2 } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { cn } from '../lib/utils';
import { SafeImage } from '../components/SafeImage';

const ACHIRA_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1lT_rM9G9pB9t4vHywDCfQy7h5OHwJM41', text: 'Achira Diamond & Fashion 01' },
  { image: 'https://lh3.googleusercontent.com/d/17OkF3i4Ktbnkjw21ieEtiueXdcppqQhA', text: 'Achira Diamond & Fashion 06' },
  { image: 'https://lh3.googleusercontent.com/d/1UZf7kEu_LgU7H725aGhIs2oD3r7dxsaL', text: 'Achira Diamond & Fashion 04' },
  { image: 'https://lh3.googleusercontent.com/d/1Y3QaodVTdx_ksxe5y-mfymZj7Wvi7S5A', text: 'Achira Diamond & Fashion 05' },
  { image: 'https://lh3.googleusercontent.com/d/1Jm0ZUy_oREO0t6ttfPWcnmf5jSZuWpvF', text: 'Achira Diamond & Fashion 03' },
  { image: 'https://lh3.googleusercontent.com/d/1v0PzZVJ-f1rEYK4hCyYot3N8KYUN1Q6y', text: 'Achira Diamond & Fashion 09' },
  { image: 'https://lh3.googleusercontent.com/d/1vvr64lVDD2ffQrI-TCAB2SEE77dWXXw6', text: 'Achira Diamond & Fashion 10' },
  { image: 'https://lh3.googleusercontent.com/d/1u1DkDx7zmYAYkT-AcmXjNwfO2t9oTB0G', text: 'Achira Diamond & Fashion 08' },
  { image: 'https://lh3.googleusercontent.com/d/1Eqvv_Ja3NOyxumvWayVBr7tSOr-IWOfp', text: 'Achira Diamond & Fashion 02' },
  { image: 'https://lh3.googleusercontent.com/d/1o4AABMh5Ic8IFyfppdwKzNWguVJnMw9U', text: 'Achira Diamond & Fashion 07' },
];

const COMMON_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1zaZHAGa2m57NF8IZXKgQfkCN6--SVy3I', text: 'Common Project 01' },
  { image: 'https://lh3.googleusercontent.com/d/151kmI4LQypjKjzhQatTQCO-aAXyGuBhE', text: 'Common Project 02' },
  { image: 'https://lh3.googleusercontent.com/d/1GHRlkdpuKtOVQ9p2t35-pMhmfu9m8KRM', text: 'Common Project 03' },
  { image: 'https://lh3.googleusercontent.com/d/1H6q1qNWQHacRX-hMgou8B1FiWhRQChA9', text: 'Common Project 04' },
  { image: 'https://lh3.googleusercontent.com/d/1QLoxtToMtlmg-ipEwkZmSlumXOUQN8xl', text: 'Common Project 05' },
  { image: 'https://lh3.googleusercontent.com/d/1RAbB85Awvx_M7HDwpeLTHFHe_hVhD5Ei', text: 'Common Project 06' },
  { image: 'https://lh3.googleusercontent.com/d/1RN58UzcqRVb7YOuGg3ZnHoEAIeCcMHZq', text: 'Common Project 07' },
  { image: 'https://lh3.googleusercontent.com/d/1VizU1uLT7de9piaTNGn2dJ3PFC1Bqc9h', text: 'Common Project 08' },
  { image: 'https://lh3.googleusercontent.com/d/1iQmVJffURWt36pHSEUDtBVea6DohwNui', text: 'Common Project 09' },
  { image: 'https://lh3.googleusercontent.com/d/1ougaUOsunQBGofdyvOBG9Khbgdk0vqUv', text: 'Common Project 10' },
];

const JD_OFFICE_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1BFzYFW7w2D_fSzHxGGXC0jP_9NLJ1k0O', text: 'JD Office 03' },
  { image: 'https://lh3.googleusercontent.com/d/1_BEEwFeRswSl-qmhg6cGM3CSVZBNxitc', text: 'JD Office 01' },
  { image: 'https://lh3.googleusercontent.com/d/1CkRmnq0K-ewBzy-uuVEjirTl0h6cE7BW', text: 'JD Office 04' },
  { image: 'https://lh3.googleusercontent.com/d/1kMnsmwDnmA2vzMPlAAbgOr9qj2cimKGI', text: 'JD Office 07' },
  { image: 'https://lh3.googleusercontent.com/d/1kVIA1rr2w9edYSVfXK5zbkjj_flhmByK', text: 'JD Office 08' },
  { image: 'https://lh3.googleusercontent.com/d/12tqE2lUkckZfNKtOcibIy0UisiJcfyT1', text: 'JD Office 02' },
  { image: 'https://lh3.googleusercontent.com/d/1Y7u30gzvsxNrgdhMvs6XhsqzlEjpHY2i', text: 'JD Office 06' },
  { image: 'https://lh3.googleusercontent.com/d/1O52HcsPN87XM4fbK7Geh4MXe4Gd49je-', text: 'JD Office 05' },
];

const A_A_WEALTH_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1HitK9MepXCJqmoMaisI3_pUTzvYJZA00', text: 'A & A Wealth 11' },
  { image: 'https://lh3.googleusercontent.com/d/1NPceFslGWT3fUyWn6AGSqGJPxh0a4j1A', text: 'A & A Wealth 14' },
  { image: 'https://lh3.googleusercontent.com/d/1JHPhEFvokVoMViai2JRY2C97I_wcZ5Ap', text: 'A & A Wealth 12' },
  { image: 'https://lh3.googleusercontent.com/d/1QD35D6_0pT2a_j9vYk2IO5-BhrRbXrwc', text: 'A & A Wealth 16' },
  { image: 'https://lh3.googleusercontent.com/d/1Rg-tzflx4mY1yefb608u77YANq5xeFUk', text: 'A & A Wealth 17' },
  { image: 'https://lh3.googleusercontent.com/d/1MHk72anDHYgYGtCAuWJx2GWJ02Ts97UC', text: 'A & A Wealth 13' },
  { image: 'https://lh3.googleusercontent.com/d/1eKA1CHzewmgRmwNRWG_oI2s_fKYrSMDL', text: 'A & A Wealth 18' },
  { image: 'https://lh3.googleusercontent.com/d/1fsRJBocZlFhIge-FrFCk09hJwHK3Vqpt', text: 'A & A Wealth 19' },
  { image: 'https://lh3.googleusercontent.com/d/16UwjT1SSzMIS4bVDiB8ZcntJuJcSwtrQ', text: 'A & A Wealth 10' },
  { image: 'https://lh3.googleusercontent.com/d/1gtqBoeZxA4aXSYVrnm_ldNO2G0aOFjhJ', text: 'A & A Wealth 20' },
  { image: 'https://lh3.googleusercontent.com/d/14xLpEu59w4M4VNtvc7GaQid9pBAwQfd-', text: 'A & A Wealth 09' },
  { image: 'https://lh3.googleusercontent.com/d/1z1nVJt04BqT5iYcHD8cbRbvFmKg_flY_', text: 'A & A Wealth 22' },
  { image: 'https://lh3.googleusercontent.com/d/1O5txCTxKc9EoSV62XE9b09ds8eZtQ61r', text: 'A & A Wealth 15' },
  { image: 'https://lh3.googleusercontent.com/d/1kxc3WSIA8ddPNzX0dIpJ4FeGhQYu7uH2', text: 'A & A Wealth 21' },
  { image: 'https://lh3.googleusercontent.com/d/1-yVVcug6KYFWQvXMQntsOJWdJ7skf4Mh', text: 'A & A Wealth 08' },
];

const IFLAIR_WORKSPACE_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1N8Rh46dRnicb2zSSXZwqrSumYsCm-up9', text: 'iFlair 03' },
  { image: 'https://lh3.googleusercontent.com/d/1Wi0ySgvW2nXAkjt9VZO_142AScdkhoe5', text: 'iFlair 04' },
  { image: 'https://lh3.googleusercontent.com/d/1ZfjIAL296LD5uhCuifOGUUhAAFEkFWoB', text: 'iFlair 07' },
  { image: 'https://lh3.googleusercontent.com/d/16eaYwux7n_VlwXTQR_fu8tskpw3jWwnD', text: 'iFlair 02' },
  { image: 'https://lh3.googleusercontent.com/d/1w2v0x_u3_eykFh4KxJHv9UdmK4AL_PrY', text: 'iFlair 12' },
  { image: 'https://lh3.googleusercontent.com/d/1iOJPcTZWDkzZBs0jb1jNwOrGRley_zeQ', text: 'iFlair 10' },
  { image: 'https://lh3.googleusercontent.com/d/1cCkNNGVuquVa7qJsIwU3DaB3HmLywvn5', text: 'iFlair 08' },
];

const SAFAL_COMMERCIAL_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1bQaYUlnqM_dPlHGV4XSVuWHgsiwWkvKJ', text: 'Safal Office 03' },
  { image: 'https://lh3.googleusercontent.com/d/1i2Yqp-lSj_-Jjv7UUTPNFJDn0OhmvOr2', text: 'Safal Office 05' },
  { image: 'https://lh3.googleusercontent.com/d/1n1BRt7ypqRy_2DlVe1vLwKxtfrSIOAor', text: 'Safal Office 01' },
  { image: 'https://lh3.googleusercontent.com/d/1jx9ikwitul59OHtWCKjXauAn8yuHGl9D', text: 'Safal Office 06' },
  { image: 'https://lh3.googleusercontent.com/d/1lD3u17YibjQIBIiRWVuiSFOPZIB58mCa', text: 'Safal Office 07' },
  { image: 'https://lh3.googleusercontent.com/d/1GqZsuB4FzUy9H9QA2Cnm0_ZPTsVWxnhs', text: 'Safal Office 08' },
  { image: 'https://lh3.googleusercontent.com/d/1eCEPROlLE1VhRxUILd0_nU5a6H64Dafv', text: 'Safal Office 04' },
  { image: 'https://lh3.googleusercontent.com/d/1vwNtGPDkZXVNEBl7TLENW0tehdrUN8ht', text: 'Safal Office 09' },
  { image: 'https://lh3.googleusercontent.com/d/1x4dXgc6hRFY3orI353oZn6N5aqjmkWRt', text: 'Safal Office 10' },
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

const SUBTLE_SANCTUARY_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1WC-BXDJSfS3GKFozaBavmZkHfrGeWE8k', text: 'Subtle Sanctuary 01' },
  { image: 'https://lh3.googleusercontent.com/d/1QO4RG4r3lLjHg8LSxlGJgsL27ndNJQDR', text: 'Subtle Sanctuary 02' },
  { image: 'https://lh3.googleusercontent.com/d/1IvJZ2tMlDc86dsptcjWoTjVBbn2GLJXe', text: 'Subtle Sanctuary 03' },
  { image: 'https://lh3.googleusercontent.com/d/1cb-sHqV2zBhZm-q_xzutywoL5Mk38mOx', text: 'Subtle Sanctuary 04' },
  { image: 'https://lh3.googleusercontent.com/d/1xLanKg58lXAAA328ZnD6yl8yvAyOALJH', text: 'Subtle Sanctuary 05' },
  { image: 'https://lh3.googleusercontent.com/d/1VjfTyEtMHhfE8ISVmigmsRXnT6hq5Kys', text: 'Subtle Sanctuary 06' },
  { image: 'https://lh3.googleusercontent.com/d/1BARiFPF1WqG6Gn9NG_aY6jQQ3LLCGsNV', text: 'Subtle Sanctuary 07' },
  { image: 'https://lh3.googleusercontent.com/d/1-xZFO72fjLUBvo95ycdGYB5uHwjiJO9H', text: 'Subtle Sanctuary 08' },
  { image: 'https://lh3.googleusercontent.com/d/1BNBKIOSfwDEegRlGUvlblYBZr-DZIuWB', text: 'Subtle Sanctuary 09' },
  { image: 'https://lh3.googleusercontent.com/d/1wi9c6F4T_xObhVU0B-h9zlnGFRir8ZfQ', text: 'Subtle Sanctuary 10' },
  { image: 'https://lh3.googleusercontent.com/d/1WOJGEjV36yNHc436ycOM8yQoqZZA_KrT', text: 'Subtle Sanctuary 11' },
  { image: 'https://lh3.googleusercontent.com/d/1JvdV2Oq0F3D9CZThPXoueFh-5jyeB0_P', text: 'Subtle Sanctuary 12' },
];

const THE_WHITE_HOUSE_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1XibxVzxzjgvmI85XDUywtUpJTUus7bzM', text: 'The White House 01' },
  { image: 'https://lh3.googleusercontent.com/d/1GHRlkdpuKtOVQ9p2t35-pMhmfu9m8KRM', text: 'The White House 02' },
  { image: 'https://lh3.googleusercontent.com/d/1-muYkqhKVHIFcPnOTRMuHckfveopxo9M', text: 'The White House 03' },
  { image: 'https://lh3.googleusercontent.com/d/1H6q1qNWQHacRX-hMgou8B1FiWhRQChA9', text: 'The White House 04' },
  { image: 'https://lh3.googleusercontent.com/d/1RAbB85Awvx_M7HDwpeLTHFHe_hVhD5Ei', text: 'The White House 05' },
  { image: 'https://lh3.googleusercontent.com/d/19slMjCDOJX7utwGRjYTzXNSoClLzkPx_', text: 'The White House 06' },
  { image: 'https://lh3.googleusercontent.com/d/1DGldHecHJLmt7AkjiUlSn60qWGwIfH87', text: 'The White House 07' },
  { image: 'https://lh3.googleusercontent.com/d/18_7CMiYHoSYBhdpz3wpWKfoQkGwhUvof', text: 'The White House 08' },
  { image: 'https://lh3.googleusercontent.com/d/1VizU1uLT7de9piaTNGn2dJ3PFC1Bqc9h', text: 'The White House 09' },
  { image: 'https://lh3.googleusercontent.com/d/1Vr36TSJPInbGPkPCG5a42anV8U1T2vBD', text: 'The White House 10' },
  { image: 'https://lh3.googleusercontent.com/d/1iQmVJffURWt36pHSEUDtBVea6DohwNui', text: 'The White House 11' },
  { image: 'https://lh3.googleusercontent.com/d/1ougaUOsunQBGofdyvOBG9Khbgdk0vqUv', text: 'The White House 12' },
  { image: 'https://lh3.googleusercontent.com/d/151kmI4LQypjKjzhQatTQCO-aAXyGuBhE', text: 'The White House 13' },
  { image: 'https://lh3.googleusercontent.com/d/18ZAqVZ_dUvWc_Ty2yITX2JVYMpQl0C96', text: 'The White House 14' },
  { image: 'https://lh3.googleusercontent.com/d/1EsMLe08jkprzx3ZDo1GAcmzZH3N-Frpp', text: 'The White House 15' },
  { image: 'https://lh3.googleusercontent.com/d/1YyyJgCvAd-Q9_dcwhd7A7YLY_MGaTjuF', text: 'The White House 16' },
  { image: 'https://lh3.googleusercontent.com/d/1QLoxtToMtlmg-ipEwkZmSlumXOUQN8xl', text: 'The White House 17' },
];

const JS_HOUSE_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/10BiKxkWetqJZyJ6PSZ2caGL-ZfxNBFqR', text: 'JS House 01' },
  { image: 'https://lh3.googleusercontent.com/d/1A-GMMiT7zVSVme_9ANjVRoJpd6cbuNjY', text: 'JS House 02' },
  { image: 'https://lh3.googleusercontent.com/d/1ATpVoCZUuKvgssfy4TcClIPCA6v8K3yz', text: 'JS House 03' },
  { image: 'https://lh3.googleusercontent.com/d/1YdIQs-ELSXFpj8ZScb6cQejOWT92J_uQ', text: 'JS House 04' },
  { image: 'https://lh3.googleusercontent.com/d/1kBeDniq8YscJ_Y9hrfeT9AmRP1-FFg5b', text: 'JS House 05' },
  { image: 'https://lh3.googleusercontent.com/d/1aCHCMZzRq3yWKp1t2lsYUQoB8VAD9uTf', text: 'JS House 06' },
  { image: 'https://lh3.googleusercontent.com/d/1Jtygz6yRypusDtlq7NM9vOmUaqaC3T4e', text: 'JS House 07' },
  { image: 'https://lh3.googleusercontent.com/d/1WabygFuGy0R-tch71dg8WPoVUGGp8w9e', text: 'JS House 08' },
  { image: 'https://lh3.googleusercontent.com/d/10sHG9fUvsCcHyVbG2_bwNBtsMT9LXrnE', text: 'JS House 09' },
  { image: 'https://lh3.googleusercontent.com/d/1FBMPFeIONXF8zUrOAYtiScj7zijY5uVA', text: 'JS House 10' },
  { image: 'https://lh3.googleusercontent.com/d/13Q7hqay2vgWNX89s3LREPa6-6xR39cXr', text: 'JS House 11' },
  { image: 'https://lh3.googleusercontent.com/d/1WTeS-ivEHtUgCizv4QWCr-0OMg4-h8gT', text: 'JS House 12' },
  { image: 'https://lh3.googleusercontent.com/d/1SG-kw5nJPKxC0r-Bi5fySQQQTPXJ0DaX', text: 'JS House 13' },
];

const JD_BEDROOM_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1_WQe69FYXc7h9LienyBKK-gT7t7RPEiT', text: 'JD Bedroom 06' },
  { image: 'https://lh3.googleusercontent.com/d/1vDMbD7KuncbmdvOvunK56jqw2CQw8akU', text: 'JD Bedroom 09' },
  { image: 'https://lh3.googleusercontent.com/d/1QtyrH4BL03_19HDNi4U5L8jdjWxbGmqG', text: 'JD Bedroom 04' },
  { image: 'https://lh3.googleusercontent.com/d/1GTD1Ig-eWLW41JgPIFW94QHH3sBOX6gb', text: 'JD Bedroom 02' },
  { image: 'https://lh3.googleusercontent.com/d/1UlOsOlkAnM_Z-ohufO0QsFR1gQ7NzcnK', text: 'JD Bedroom 01' },
  { image: 'https://lh3.googleusercontent.com/d/1msgYwl4mraO6MAv113fFXBHP0jgEkW7n', text: 'JD Bedroom 08' },
  { image: 'https://lh3.googleusercontent.com/d/1OIqQK1dHsNWH90MLsNi_TgL24y-qD-67', text: 'JD Bedroom 03' },
  { image: 'https://lh3.googleusercontent.com/d/1zLZcMS7ehDmOXqZ3xftn68HSZIpPf-eG', text: 'JD Bedroom 10' },
  { image: 'https://lh3.googleusercontent.com/d/1baQRdM8j6H-uSZvmW8ERAHHU5_FqhMOL', text: 'JD Bedroom 07' },
  { image: 'https://lh3.googleusercontent.com/d/17DcOSeL0NDn-RTmQu1UJs7FuquZ1hGkl', text: 'JD Bedroom 05' },
  { image: 'https://lh3.googleusercontent.com/d/1zNL7CP90IA229Yj6BeTWvK_Su_mRzrRj', text: 'JD Bedroom 11' },
];

const DHS_HOUSE_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/14h7b7pMXC-VBaqBlaluV84FMPmJtgsv-', text: 'DHS House 01' },
  { image: 'https://lh3.googleusercontent.com/d/1xkHElGhMv4jn-CIUb44MF-EULoI7tVN9', text: 'DHS House 02' },
  { image: 'https://lh3.googleusercontent.com/d/1-o6huBAqCozx-bFOjuEzIhXETffgXmpO', text: 'DHS House 03' },
  { image: 'https://lh3.googleusercontent.com/d/1XPMjgJV5cm01cNRibpYxvZbUmkUY6NV4', text: 'DHS House 04' },
  { image: 'https://lh3.googleusercontent.com/d/18wghnSqoU4DceWGwb3OrGqMIb-bCrx_4', text: 'DHS House 05' },
  { image: 'https://lh3.googleusercontent.com/d/1qlBFCwSljLD0BHKzzcQLvhTz6CMEQ6vK', text: 'DHS House 06' },
  { image: 'https://lh3.googleusercontent.com/d/1N84kFIXt8RgGocPWEwGaF7Ei2E6TcQCl', text: 'DHS House 07' },
  { image: 'https://lh3.googleusercontent.com/d/1g-gFVfcAh7GKfJKGu8Ho_mxnW_KBXBRq', text: 'DHS House 08' },
  { image: 'https://lh3.googleusercontent.com/d/1oEXKw7H8EYCLaSppcS6RwI3cPr16_cPi', text: 'DHS House 09' },
  { image: 'https://lh3.googleusercontent.com/d/1bVVYnAZbYa0_9IOXRNHIvFMm6VlS8zXj', text: 'DHS House 10' },
  { image: 'https://lh3.googleusercontent.com/d/1YKi3G5pqqWpgkGck8vVD5lvCX6foAyHp', text: 'DHS House 11' },
  { image: 'https://lh3.googleusercontent.com/d/1mIw6i3D6_sdoSUAqZwnQvc1P5M_R8t35', text: 'DHS House 12' },
  { image: 'https://lh3.googleusercontent.com/d/1hQ3vkl0UAq3weXWq3YSLXtC7RgIfmhLh', text: 'DHS House 13' },
  { image: 'https://lh3.googleusercontent.com/d/1Tp97KZA5hxYBen4rOyf1nICCS9DHi12m', text: 'DHS House 14' },
  { image: 'https://lh3.googleusercontent.com/d/1yNLwkb9nnoYMjPtrXItN4TGaK4CrfCSi', text: 'DHS House 15' },
  { image: 'https://lh3.googleusercontent.com/d/1xx9p6jmi5997vpWR9EBJmH1VS_ab2r6S', text: 'DHS House 16' },
  { image: 'https://lh3.googleusercontent.com/d/1eJdYsvsf6gtdxLiPJ_qoQUuTPDlAcHCu', text: 'DHS House 17' },
];

const CP_HOUSE_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1-XK2PeqEicXTRsxfKrIE-5xmBX_MXFvt', text: 'CP House 02' },
  { image: 'https://lh3.googleusercontent.com/d/13T307RnsS1YhLREczMaA3LxGwzKPGd99', text: 'CP House 04' },
  { image: 'https://lh3.googleusercontent.com/d/13dT40m1keBawrXj_LTFiqHf5L68DurIW', text: 'CP House 05' },
  { image: 'https://lh3.googleusercontent.com/d/1L7tYlf_OOkys-2kNAs6c6BDGdyxthjgS', text: 'CP House 07' },
  { image: 'https://lh3.googleusercontent.com/d/14gq8RjKzOQX5GoDxZOu1LYdaitbyFaqT', text: 'CP House 06' },
  { image: 'https://lh3.googleusercontent.com/d/1WcsfUWRrmZ3_KCXMIssJEjm0p6WzBCld', text: 'CP House 13' },
  { image: 'https://lh3.googleusercontent.com/d/1OlTdX7oAFnvHokByvAo7CDRtG3Ev0jKh', text: 'CP House 10' },
  { image: 'https://lh3.googleusercontent.com/d/1dwEydqKIvICW89klojVZKP-fJOftn3Al', text: 'CP House 16' },
  { image: 'https://lh3.googleusercontent.com/d/1aJ7C0b232vb3czbl0U2dGE2OB0N90IdX', text: 'CP House 15' },
  { image: 'https://lh3.googleusercontent.com/d/1Tzq0ooCQnYLh-F6ns11Wfy1QK7K3W0jh', text: 'CP House 01' },
  { image: 'https://lh3.googleusercontent.com/d/1M7c0BZg5Nbhje6pCXcx6ArpwXfzrfpW8', text: 'CP House 09' },
  { image: 'https://lh3.googleusercontent.com/d/1LIvIFzb6MjxslW3Cn78ocU-0FcZqJflW', text: 'CP House 08' },
  { image: 'https://lh3.googleusercontent.com/d/1-KS2-GzBFXfm83kIsUHP0MnbRxuKSLEg', text: 'CP House 12' },
  { image: 'https://lh3.googleusercontent.com/d/11XftRsAgmFH5D7qMo63aC_DJqsgxkg8W', text: 'CP House 03' },
  { image: 'https://lh3.googleusercontent.com/d/1_dQa9-W2cs1dPXmMbnpArSnl-DG6sIlb', text: 'CP House 14' },
  { image: 'https://lh3.googleusercontent.com/d/1Ru7DZbc773GZXuWnQv2_v5USMbOhiagQ', text: 'CP House 11' },
  { image: 'https://lh3.googleusercontent.com/d/1iMqso5DpJgyGsu48KirbsV5PcNaigMYv', text: 'CP House 17' },
];

const ANCHOR_HOUSE_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1jyyq5qsWmffsEPw3XTZ3n0zscrWFS9zh', text: 'Anchor House 01' },
  { image: 'https://lh3.googleusercontent.com/d/1rq3SNAeWfGz6hnnrxzP7D5I2ieC7YnKA', text: 'Anchor House 11' },
  { image: 'https://lh3.googleusercontent.com/d/1UX7UD9LYciKhOU1lZAFGJhXZqTU9ZHhj', text: 'Anchor House 06' },
  { image: 'https://lh3.googleusercontent.com/d/1Q1acrIupIQ9GCs794TI1iUupjTGA2GBc', text: 'Anchor House 03' },
  { image: 'https://lh3.googleusercontent.com/d/1N-2KEYobllj08RJwrnPILbo4LqfQX3qZ', text: 'Anchor House 02' },
  { image: 'https://lh3.googleusercontent.com/d/1fQxUcOX6Xya8S1QgM-SEPknvST3Z-XPV', text: 'Anchor House 01' },
  { image: 'https://lh3.googleusercontent.com/d/1u1nBzdpWoc4yf0rsy9OzePYANYPfpwOn', text: 'Anchor House 12' },
  { image: 'https://lh3.googleusercontent.com/d/1ybviARSsIUzcw9PBQshjJWhgT7pX-fKj', text: 'Anchor House 13' },
  { image: 'https://lh3.googleusercontent.com/d/1R86eCEAlF7dCFwYBYvrm6_HoaadQvbIm', text: 'Anchor House 04' },
  { image: 'https://lh3.googleusercontent.com/d/1f9c0oNatpygcipVjuBuTEn6JukHXPiXT', text: 'Anchor House 08' },
  { image: 'https://lh3.googleusercontent.com/d/1Ky7LbQVVv1HY7zykjsWSOg-6DEA67f3W', text: 'Anchor House 09' },
  { image: 'https://lh3.googleusercontent.com/d/1VxvCk0NgIIE9Cwn8V9WyA8t-GEKIvY8o', text: 'Anchor House 07' },
];

const SHELA_HOUSE_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1v6qalvsM3Qea36VXgliizpmmhqogNXId', text: 'Shela House 12' },
  { image: 'https://lh3.googleusercontent.com/d/1FpP771cL8vy2eMZZwTwtBGFve-Ip_sGU', text: 'Shela House 03' },
  { image: 'https://lh3.googleusercontent.com/d/1A7n2KoNaNadZKVmfg8rAfJLm45iip4Ki', text: 'Shela House 01' },
  { image: 'https://lh3.googleusercontent.com/d/1nZrTa5mHbMUJH8AzgkUXHcvWVAyOJ5w8', text: 'Shela House 09' },
  { image: 'https://lh3.googleusercontent.com/d/1egyW-7Pk2mNGz2x_Yew2TvgZsTzTZhye', text: 'Shela House 07' },
  { image: 'https://lh3.googleusercontent.com/d/1ypESvxpWtpNWPtPEMOEfZcGaWPCW3jHS', text: 'Shela House 13' },
  { image: 'https://lh3.googleusercontent.com/d/1lSfBE5V_CdMKRaEKH7K6WcJvOPpxPorW', text: 'Shela House 08' },
  { image: 'https://lh3.googleusercontent.com/d/1ttFAyDlfliiyrR1PL6-E4Cs9-_wB46B_', text: 'Shela House 10' },
  { image: 'https://lh3.googleusercontent.com/d/1uJkc_WYTa2QKKj2wXn2Ru6ZAixQQ1dHP', text: 'Shela House 11' },
  { image: 'https://lh3.googleusercontent.com/d/1CwpouFmp3RkObvO8v0kStEZr5Qho1upO', text: 'Shela House 02' },
  { image: 'https://lh3.googleusercontent.com/d/1_YQJg8HPBwCQKx-h6UKQ4zKHCm8eSFfM', text: 'Shela House 06' },
  { image: 'https://lh3.googleusercontent.com/d/1VmORiXXnSwLwAMa6ZFZNUyFSeODRuJvZ', text: 'Shela House 05' },
  { image: 'https://lh3.googleusercontent.com/d/1UfmiDAau64UhaDRwp63ecE7kzN41Ha-F', text: 'Shela House 04' },
];

const SHLIP_AARON_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/10bqHIbfF1VJqrGk1I_iC9AyLh_aKscph', text: 'Shlip Aaron 01' },
  { image: 'https://lh3.googleusercontent.com/d/1W3WQQZozxeLqmqfLGkhsrE2YFcShJycD', text: 'Shlip Aaron 02' },
  { image: 'https://lh3.googleusercontent.com/d/1hLLKbRkEReJrsKZTUt-WcNRZ-2jKmJXu', text: 'Shlip Aaron 03' },
  { image: 'https://lh3.googleusercontent.com/d/1nCDhbW97MEx7Teo-E8-0FM74rds5iXr6', text: 'Shlip Aaron 04' },
  { image: 'https://lh3.googleusercontent.com/d/1EBDT9KSQ0tVHiK9YAPSf2V41Rkbmk_nV', text: 'Shlip Aaron 05' },
  { image: 'https://lh3.googleusercontent.com/d/1JB_YIBJWi0WTA9orjsZ7CkZ4idWl_czY', text: 'Shlip Aaron 06' },
  { image: 'https://lh3.googleusercontent.com/d/1f3UEQQ1VViht-LPMzcJ1YR4XnJe3FEM1', text: 'Shlip Aaron 07' },
  { image: 'https://lh3.googleusercontent.com/d/1sN2oH3O1ZuOl6CPssgOQXNVWE-gAe6Yf', text: 'Shlip Aaron 08' },
  { image: 'https://lh3.googleusercontent.com/d/12vmmKtDJg-KxJPSbW3wTTg8gOxsrMFwa', text: 'Shlip Aaron 09' },
];

const SERENE_SANCTUARY_GALLERY = [
  { image: 'https://lh3.googleusercontent.com/d/1QsttHHUU30BpKnsi4q0B7PflkFSSS-tC', text: 'Serene Sanctuary 09' },
  { image: 'https://lh3.googleusercontent.com/d/1mTB7CQQg8MkgoiS-Qa7h6o_tCfVlFEmf', text: 'Serene Sanctuary 05' },
  { image: 'https://lh3.googleusercontent.com/d/17jjex-QSnNd4raemP2w1lGnXyqZVXxH2', text: 'Serene Sanctuary 04' },
  { image: 'https://lh3.googleusercontent.com/d/1T8U7brn4ddyC2AvlBXLJe_Q6lR9r8gEB', text: 'Serene Sanctuary 06' },
  { image: 'https://lh3.googleusercontent.com/d/1F3pCKJ3AoRscrUBLCp7lq3CuVY6H9qgW', text: 'Serene Sanctuary 16' },
  { image: 'https://lh3.googleusercontent.com/d/1-z9QVSJHey4ihF6Pwnj26-KEnj-wKPUV', text: 'Serene Sanctuary 10' },
  { image: 'https://lh3.googleusercontent.com/d/1ae_z_ULFQn1kTQfpqTa3Vt-_7WILK8IE', text: 'Serene Sanctuary 02' },
  { image: 'https://lh3.googleusercontent.com/d/1ufZRa6G33BpKrYEXXOKOTHq-vQ5xN6PR', text: 'Serene Sanctuary 07' },
  { image: 'https://lh3.googleusercontent.com/d/1NoW7gqqjOV3Dz2aODL-nmgCU9FcPWcHy', text: 'Serene Sanctuary 19' },
  { image: 'https://lh3.googleusercontent.com/d/1kB8bKqSplggAku-hV9hXCH1--RAFnbxE', text: 'Serene Sanctuary 08' },
  { image: 'https://lh3.googleusercontent.com/d/1sEw3qv5oIFw8YwQtmPo5Tn6BB464yj1g', text: 'Serene Sanctuary 03' },
  { image: 'https://lh3.googleusercontent.com/d/1IxkAoyKkM9OVsFTMjLW8KPJOrCFBP9JC', text: 'Serene Sanctuary 18' },
  { image: 'https://lh3.googleusercontent.com/d/1TBIGzQIPLtYWcfJ16sodp_0ZSuc95Zqj', text: 'Serene Sanctuary 13' },
  { image: 'https://lh3.googleusercontent.com/d/1xa_ABORBe2sCrNePoc21R677hot-dV_a', text: 'Serene Sanctuary 11' },
  { image: 'https://lh3.googleusercontent.com/d/1NwhwZ0nGjvRJsBdTN4cdislcgS9PApia', text: 'Serene Sanctuary 14' },
  { image: 'https://lh3.googleusercontent.com/d/1tQ60KEteymlGcigB7chyC2Kx2_SsxPVY', text: 'Serene Sanctuary 12' },
  { image: 'https://lh3.googleusercontent.com/d/1IG8nb4fwVTieQAbDhM1y_K1QHyDY7Dme', text: 'Serene Sanctuary 17' },
  { image: 'https://lh3.googleusercontent.com/d/1-VJp1Hn1NrhjIisZ6Y8WI23s0HPvrdEh', text: 'Serene Sanctuary 01' },
  { image: 'https://lh3.googleusercontent.com/d/1fRywdtBR8KPW3elUsh2gVq1DDGUKaCZO', text: 'Serene Sanctuary 15' },
];

const PROJECTS_DATA = [
  {
    id: 'res-dsa-01',
    title: 'Subtle Sanctuary',
    subtitle: 'Synchronicity with Nature',
    description: 'This home interior combines simplicity, functionality, and modern design with soft color tones, spacious layouts, and refined finishes for comfortable everyday living',
    fullStory: 'This home interior combines simplicity, functionality, and modern design with soft color tones, spacious layouts, and refined finishes for comfortable everyday living',
    metadata: [
      { label: 'Location', value: 'Udaipur, Rajasthan', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2023', icon: <Calendar size={16} /> },
      { label: 'Area', value: '18,500 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: SUBTLE_SANCTUARY_GALLERY
  },
  {
    id: 'res-dsa-02',
    title: 'The White House',
    subtitle: 'The White Residential',
    description: 'The White House is a modern architectural masterpiece featuring clean lines, minimal aesthetics, and functional design tailored for luxury living.',
    fullStory: 'The White House is a modern architectural masterpiece featuring clean lines, minimal aesthetics, and functional design tailored for luxury living.',
    metadata: [
      { label: 'Location', value: 'Surat, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '12,000 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: THE_WHITE_HOUSE_GALLERY
  },
  {
    id: 'res-dsa-10',
    title: 'Serene Sanctuary',
    subtitle: 'Luxe Residential Living',
    heroImage: 'https://lh3.googleusercontent.com/d/1T8U7brn4ddyC2AvlBXLJe_Q6lR9r8gEB',
    description: 'Serene Sanctuary is an elegant luxury residential interior showcasing magnificent spatial design, sophisticated bespoke fittings, warm lighting, and a modern minimal layout that provides the ultimate cozy and premium comfort.',
    fullStory: 'Serene Sanctuary is designed to offer the ultimate cozy and premium comfort. Every corner is meticulously crafted to integrate warm ambient lighting with elegant material structures, premium wood bespoke accents, and highly functional layouts optimized for luxury everyday living. It represents a classic architectural balance between high-end modern sophistication and serene physical tranquility.',
    metadata: [
      { label: 'Location', value: 'Surat, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '11,500 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: SERENE_SANCTUARY_GALLERY
  },
  {
    id: 'comm-dsa-01',
    title: 'Achira Diamond & Fashion',
    subtitle: 'Boutique Commercial',
    description: 'Achira Diamond & Fashion is a premium boutique commercial project designed with a focus on sophisticated interiors, efficient layout, and modern lighting to create a professional business environment.',
    fullStory: 'Achira Diamond & Fashion is a premium boutique commercial project designed with a focus on sophisticated interiors, efficient layout, and modern lighting to create a professional business environment.',
    metadata: [
      { label: 'Location', value: 'Ahmedabad, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '3,500 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: ACHIRA_GALLERY
  },
  {
    id: 'comm-dsa-04',
    title: 'A & A Wealth',
    subtitle: 'Wealth Management',
    description: 'A & A Wealth is a modern commercial office space designed to create a professional yet comfortable working environment. The project features elegant interiors, premium materials, warm lighting, and smart space planning that together give the office a sophisticated and welcoming feel.',
    fullStory: 'A & A Wealth is a modern commercial office space designed to create a professional yet comfortable working environment. The project features elegant interiors, premium materials, warm lighting, and smart space planning that together give the office a sophisticated and welcoming feel.',
    metadata: [
      { label: 'Location', value: 'Surat, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '120,000 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: A_A_WEALTH_GALLERY
  },
  {
    id: 'comm-dsa-05',
    title: 'Safal',
    subtitle: 'Commercial Excellence',
    description: 'Safal is a modern commercial project designed with efficient space planning and premium detailing to create a professional business environment.',
    fullStory: 'Safal is a modern commercial project designed with efficient space planning and premium detailing to create a professional business environment.',
    metadata: [
      { label: 'Location', value: 'Ahmedabad, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '12,500 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: SAFAL_COMMERCIAL_GALLERY
  },
  {
    id: 'comm-dsa-06',
    title: 'iFlair',
    subtitle: 'Strategic Design',
    description: 'iFlair is a modern commercial office space designed with clean interiors, smart workspace planning, and contemporary aesthetics to create a comfortable and productive working environment.',
    fullStory: 'iFlair is a modern commercial office space designed with clean interiors, smart workspace planning, and contemporary aesthetics to create a comfortable and productive working environment.',
    metadata: [
      { label: 'Location', value: 'Ahmedabad, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '15,000 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: IFLAIR_WORKSPACE_GALLERY
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
  {
    id: 'res-dsa-04',
    title: 'JS House',
    subtitle: 'JS Residential',
    description: 'JS House is a modern residential interior designed with warm textures, elegant furniture, and a clean contemporary layout to create a comfortable and inviting living experience.',
    fullStory: 'JS House is a modern residential interior designed with warm textures, elegant furniture, and a clean contemporary layout to create a comfortable and inviting living experience.',
    metadata: [
      { label: 'Location', value: 'Surat, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '8,500 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: JS_HOUSE_GALLERY
  },
  {
    id: 'res-dsa-05',
    title: 'JD Bedroom',
    subtitle: 'JS House Residential',
    description: 'JS House Designed with a balance of luxury and comfort, this JD Bedroom offers modern interiors, rich textures, and a peaceful ambiance perfect for everyday relaxation.',
    fullStory: 'JS House Designed with a balance of luxury and comfort, this JD Bedroom offers modern interiors, rich textures, and a peaceful ambiance perfect for everyday relaxation.',
    metadata: [
      { label: 'Location', value: 'Surat, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '5,000 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: JD_BEDROOM_GALLERY
  },
  {
    id: 'res-dsa-06',
    title: 'DHS House',
    subtitle: 'DHS Residential',
    description: 'DHS House is a modern residential interior designed with clean lines, premium materials, and warm lighting to create a sophisticated and welcoming home environment.',
    fullStory: 'DHS House is a modern residential interior designed with clean lines, premium materials, and warm lighting to create a sophisticated and welcoming home environment.',
    metadata: [
      { label: 'Location', value: 'Surat, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '1,200 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: DHS_HOUSE_GALLERY
  },
  {
    id: 'res-dsa-07',
    title: 'CP House',
    subtitle: 'CP Residential',
    description: 'JS House This home interior combines simplicity and elegance through minimal design, soft color tones, and smart space planning for a modern everyday lifestyle.',
    fullStory: 'JS House This home interior combines simplicity and elegance through minimal design, soft color tones, and smart space planning for a modern everyday lifestyle.',
    metadata: [
      { label: 'Location', value: 'Ahmedabad, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '9,200 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: CP_HOUSE_GALLERY
  },
  {
    id: 'res-dsa-08',
    title: 'Anchor House',
    subtitle: 'Anchor Residential',
    description: 'Anchor House is a modern residential interior designed with warm tones, elegant wall detailing, and comfortable seating to create a calm and welcoming living space',
    fullStory: 'Anchor House is a modern residential interior designed with warm tones, elegant wall detailing, and comfortable seating to create a calm and welcoming living space',
    metadata: [
      { label: 'Location', value: 'Surat, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '6,800 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: ANCHOR_HOUSE_GALLERY
  },
  { id: 'comm-dsa-02', title: 'JD Office', subtitle: 'Tactile Experience', description: 'A premium JD office designed with elegant interiors, warm lighting, and modern detailing to create a professional yet luxurious workspace. The space combines comfort, sophistication, and functionality for a refined office experience.', fullStory: 'A premium JD office designed with elegant interiors, warm lighting, and modern detailing to create a professional yet luxurious workspace. The space combines comfort, sophistication, and functionality for a refined office experience.', metadata: [], galleryItems: JD_OFFICE_GALLERY },
  {
    id: 'res-dsa-09',
    title: 'Shela House',
    subtitle: 'Shela Residential',
    description: 'Shela House is a modern residential interior designed with clean lines, warm lighting, and elegant finishes that create a calm and welcoming living experience.',
    fullStory: 'Shela House is a modern residential interior designed with clean lines, warm lighting, and elegant finishes that create a calm and welcoming living experience.',
    metadata: [
      { label: 'Location', value: 'Surat, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '7,500 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: SHELA_HOUSE_GALLERY
  },
  {
    id: 'comm-dsa-07',
    title: 'Shlip Aaron',
    subtitle: 'Commercial Workspace',
    description: 'Shlip Aaron is a premium commercial office space featuring state-of-the-art office interiors, modern materials, sophisticated lighting designs, and highly functional workspace planning.',
    fullStory: 'Shlip Aaron is a premium commercial office space featuring state-of-the-art office interiors, modern materials, sophisticated lighting designs, and highly functional workspace planning.',
    metadata: [
      { label: 'Location', value: 'Ahmedabad, Gujarat', icon: <MapPin size={16} /> },
      { label: 'Year', value: '2024', icon: <Calendar size={16} /> },
      { label: 'Area', value: '10,000 sq.ft', icon: <Layers size={16} /> },
      { label: 'Status', value: 'Completed', icon: <ExternalLink size={16} /> },
    ],
    galleryItems: SHLIP_AARON_GALLERY
  }
];

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  
  const project = PROJECTS_DATA.find(p => p.id === id) || PROJECTS_DATA[0];
  const [viewMode, setViewMode] = React.useState<'case-study' | 'gallery'>('gallery');

  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isFirstRender = React.useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
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
          <button 
            onClick={() => navigate(-1)} 
            className="inline-flex items-center gap-2 text-neon-cyan text-xs font-bold tracking-[0.3em] uppercase mb-12 hover:translate-x-[-10px] transition-transform cursor-pointer"
          >
            <ArrowLeft size={16} /> Back to Projects
          </button>

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
                  className={cn(
                    "px-10 py-4 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all bg-white text-obsidian shadow-[0_0_20px_rgba(255,255,255,0.2)]"
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
              <SafeImage 
                src={(project as any).heroImage || project.galleryItems[0].image} 
                alt={project.title} 
                loading="lazy"
                objectFit="cover"
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>

        {/* Navigation Info */}
        {viewMode === 'gallery' && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed top-8 left-8 md:top-32 md:left-24 z-50 flex items-center gap-6"
          >
            <button 
              onClick={() => navigate(-1)}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-obsidian flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:scale-110 active:scale-95 transition-all group cursor-pointer"
              title="Back to Projects"
            >
              <ArrowLeft size={20} className="md:size-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <div className="hidden lg:block">
              <span className="text-white/40 text-[10px] font-black tracking-[0.4em] uppercase block mb-1">Project</span>
              <h4 className="text-white text-sm font-bold tracking-widest uppercase">{project.title}</h4>
            </div>
          </motion.div>
        )}

        {/* Gallery Content */}
        <AnimatePresence mode="wait">
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
                      Spatial <span className="text-gradient font-bold">Chronology</span>
                    </h2>
                  </motion.div>
                </div>
                
                <div className="max-w-7xl mx-auto px-6 mt-12 mb-20">
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
                         <SafeImage 
                           src={item.image} 
                           alt={item.text}
                           loading="lazy"
                           size="medium"
                           objectFit="cover"
                           className="w-full h-full transition-all duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-100"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                            <span className="text-white text-[10px] font-bold tracking-widest uppercase mb-1">{item.text}</span>
                            <div className="w-8 h-[1px] bg-neon-cyan" />
                         </div>
                       </motion.div>
                     ))}
                   </div>
                </div>
              </section>
            </motion.div>
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
                <div className="relative max-w-[95vw] max-h-[85vh] md:max-w-7xl md:max-h-[90vh] w-full h-full flex items-center justify-center p-4">
                  <SafeImage 
                     src={selectedImage} 
                     alt="Spatial View"
                     size="large"
                     objectFit="contain"
                     className="w-full h-full rounded-xl shadow-[0_0_100px_rgba(0,255,255,0.2)] border border-white/10 pointer-events-auto"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
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
      </main>

      <Footer />
    </div>
  );
};
