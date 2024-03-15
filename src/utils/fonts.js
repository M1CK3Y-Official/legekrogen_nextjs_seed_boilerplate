import { Quicksand, Square_Peg } from 'next/font/google'

export const quicksandFont = Quicksand({
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});

export const squarepegFont = Square_Peg({
    weight: ['400'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});