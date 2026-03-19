import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yash Patel — Portfolio V1',
  description: 'Original portfolio design of Yash Patel, Software Developer.',
};

export default function V1RouteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
