import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleURLButtonClick = (webUrl: string, newWindow?: boolean) => () => {
  window.open(webUrl, !newWindow ? '_self' : '_blank');
};
