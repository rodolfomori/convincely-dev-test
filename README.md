# Convincely Dev Test
This challenge requires you to fetch JSON data from a REST API and render the output according to the supplied Figma designs.
You will also add the ability to sort and filter the items by name.

## Getting started
Clone this repo locally with:
`git clone https://bitbucket.org/ebex/convincely-challenge-react.git`

Install dependencies:
`yarn` 

Run local development server:
`yarn start` 

## Designs
Designs are available in Figma. Make sure to create a Figma account and log in if you would like to view measurements, css values etc.

https://www.figma.com/file/ARzmzeDE30PSCF7EtJtp8V/code-demo?node-id=0%3A1

## The API
This test uses the following endpoint, which will return a JSON list of all movies within the 'Lord of the Rings' franchise:
https://the-one-api.dev/v2/movie

This endpoint is authenticated using this Bearer token:
jhnSIPP46DZsewnkbDgl

Documentation for the endpoint can be found here:
https://the-one-api.dev/documentation

Both the url and apiToken are included in constants below.