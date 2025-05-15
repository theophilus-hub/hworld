import { Metadata } from 'next'

export const metadata = {
  title: 'Milestone Project Planner | Ad Hoc Services | Hworld',
  description: 'Expert planning services for construction and marine projects. We deliver tailored solutions with precision scheduling, resource optimization, and comprehensive project controls.',
  openGraph: {
    title: 'Milestone Project Planner | Ad Hoc Services | Hworld',
    description: 'Expert planning services for construction and marine projects. We deliver tailored solutions with precision scheduling, resource optimization, and comprehensive project controls.',
    url: 'https://hworldinc.com/adhoc',
    siteName: 'Hworld Inc',
    images: [
      {
        url: '/adhoc.jpg', // We'll create this image
        width: 1200,
        height: 630,
        alt: 'Milestone Project Planner - Ad Hoc Services',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Milestone Project Planner | Ad Hoc Services | Hworld',
    description: 'Expert planning services for construction and marine projects. We deliver tailored solutions with precision scheduling, resource optimization, and comprehensive project controls.',
    images: ['/adhoc.jpg'],
  },
}

export default function AdhocLayout({ children }) {
  return (
    <>
      {children}
    </>
  )
}
