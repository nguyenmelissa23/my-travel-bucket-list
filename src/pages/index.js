import React from 'react';
import { Helmet } from 'react-helmet';

import { Marker, Popup } from 'react-leaflet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Map from 'components/Map';
import Snippet from 'components/Snippet';

import { useDestinations } from 'hooks';

// import '../assets/stylesheets/pages/_home.scsss'

const LOCATION = {
  lat: 0,
  lng: 0,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 2;


/**
 * MapEffect
 * @description This is an example of creating an effect used to zoom in and set a popup on load
 */

const IndexPage = () => {
	
  const mapSettings = {
    center: CENTER,
    defaultBaseMap: 'OpenStreetMap',
    zoom: DEFAULT_ZOOM,
  };

	const { destinations } = useDestinations();
	// console.log('destinations', destinations);

	async function mapEffect({ leafletElement: map } = {}) {
  	if ( !map ) return;
	}

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Map {...mapSettings}>
				{ destinations.map(destination => {
					const { id, name, location } = destination;
					const position = [location.latitude, location.longitude];
					return 
					(<Marker key={id} position={position}>
						<Popup>{ name }</Popup>
					</Marker>
					)
				})}x
			</Map>

			<h2>My Destinations</h2>
				<ul>
					{ destinations.map(destination => {
						const { id, name } = destination;
						return <li key={id}>{ name }</li>
					})}
				</ul>

      <Container type="content" className="text-center home-start">
        <h2>Still Getting Started?</h2>
        <p>Run the following in your terminal!</p>
        <Snippet>gatsby new [directory] https://github.com/colbyfayock/gatsby-starter-leaflet</Snippet>
        <p className="note">Note: Gatsby CLI required globally for the above command</p>
      </Container>
    </Layout>
  );
};

export default IndexPage;
