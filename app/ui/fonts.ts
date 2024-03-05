// 구글 폰트를 가져온디
import { Inter, Roboto, Roboto_Mono } from 'next/font/google';

// Inter라는 폰트 중에 laitin 부분 집합을 가져온다
export const inter = Inter({ subsets:["latin"] });

export const mono = Roboto_Mono({ subsets:["latin"], display:"swap"})

export const lusitana = Inter({ subsets:["latin"], weight:['400', '700']})