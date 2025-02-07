// font.ts
import { Great_Vibes, Inter } from "next/font/google";

export const greatVibesFont = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-great-vibes',
  weight: ['400'],  // Great Vibes has one weight (400)
});

// You can customize the weight and style as needed
const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '700'], // Regular, Medium, Bold
    style: ['normal', 'italic'],   // Normal and Italic variants
    display: 'swap',                // Font-display property
  });
  