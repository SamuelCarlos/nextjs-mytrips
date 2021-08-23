import dynamic from 'next/dynamic'

import { NextSeo } from 'next-seo'

import LinkWrapper from 'components/LinkWrapper'

import { MapProps } from 'components/Map'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple place map where you can save your favorite spots around the world"
        canonical="https://my-trips.samuelcarvalho.com.br"
        openGraph={{
          url: 'https://my-trips.samuelcarvalho.com.br',
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
