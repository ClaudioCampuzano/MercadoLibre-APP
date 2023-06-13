# MercadoLibreAPP - Frontend

![](https://img.shields.io/badge/-Frontend-blue)

## Project Description

This project is a website developed in Next.js that uses the Mercado Libre API. The website has three main views. The first view displays a search box where users can search for specific products. The second view shows a list of products that match the search query. Finally, the third view displays detailed information about a selected product.

The website is integrated with the Mercado Libre API, [through an API](https://github.com/ClaudioCampuzano/MercadoLibre-API) which delivers the information already formatted, service to retrieve product information and display it to users. Users can search for products using keywords and get relevant results.

## :building_construction: Installation

```shell
brew install node@16 yarn
yarn install
echo "SERVER_HOST=http://localhost:3001/api" >> .env.local
```

## :running_man: Execution

```shell
yarn dev
```

## :framed_picture: Views

- http://localhost:3000
  ![Vista detalle](https://github.com/ClaudioCampuzano/Liion/assets/20999953/d486892a-8067-450d-bfb1-d1a241fcaa5c)
- http://localhost:3000/items?search=celular
  ![Vista lista](https://github.com/ClaudioCampuzano/Liion/assets/20999953/1cb00344-2e41-4593-9ebe-acfcaf571068)
- http://localhost:3000/items/MLA1154259540
  ![root](https://github.com/ClaudioCampuzano/Liion/assets/20999953/f364d06f-bb30-4f89-abaf-8f9f25cad6eb)

## :airplane: Future Works

- Adding unit tests for functionality testing to complement SnapShots
- Add automatic deployment with CD
- Add I18n to translations
