import React, { Component } from "react";
import Card from "./components/Card";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      biers: [
        {
          name: "Guinness",
          color: "dark",
          id: 1,
          country: "Ireland",
          image_url:
            "https://dydza6t6xitx6.cloudfront.net/ci-guinness-extra-stout-2abc388ce9c3bb61.jpeg",
        },
        {
          name: "Stiegl",
          color: "light",
          id: 2,
          country: "Austria",
          image_url:
            "https://www.galatea.se/wp-content/uploads/2016/03/stiegl-goldbrau-500-ml.jpg",
        },
        {
          name: "Paulaner Hefe-Weißbier",
          color: "weiss",
          id: 3,
          country: "Germany",
          image_url:
            "https://www.paulaner.com/content/8-us/2-our-products/1-hefe-weizen/modules/1-product_intro-1uh606t/bottle-usa-1000x1550-hwbn-1.png",
        },
        {
          name: "Budweiser ",
          color: "light",
          id: 4,
          country: "Czech republic",
          image_url:
            "https://i1.wp.com/nlliquor.com/wp-content/uploads/2020/05/7230_m_v4.jpg?fit=960%2C1280&ssl=1",
        },
        {
          name: "Duckstein",
          color: "dark",
          id: 5,
          country: "Germany",
          img_url:
            "https://www.carlsberggroup.com/media/22851/de_duckstein-original.png",
        },
        {
          name: "Staropramen ",
          color: "light",
          id: 6,
          country: "Czech republic",
          img_url:
            "https://cdn02.plentymarkets.com/99cbvkn2wswt/item/images/409/full/Staropramen-Lager.jpg",
        },
        {
          name: "Berliner kindl ",
          color: "light",
          id: 7,
          country: "Germany",
          img_url:
            "https://cdn02.plentymarkets.com/q7p0kwea05gv/item/images/6489/full/22353.png",
        },
        {
          name: "Corona",
          color: "light",
          id: 8,
          country: "Mexico",
          img_url:
            "https://cdn02.plentymarkets.com/q7p0kwea05gv/item/images/6480/full/20571.png",
        },
        {
          name: "Tuborg",
          color: "light",
          id: 9,
          country: "Denmark",
          img_url:
            "https://5.imimg.com/data5/QR/FB/QZ/SELLER-11737895/tuborg-non-alcohoilc-beer-500x500.jpg",
        },
        {
          name: "Obolon",
          color: "light",
          id: 10,
          country: "Ukraine",
          img_url:
            "https://res.cloudinary.com/ratebeer/image/upload/w_250,c_limit/beer_4530.jpg",
        },
        {
          name: "Efes",
          color: "light",
          id: 11,
          country: "Turkey",
          img_url:
            "https://dydza6t6xitx6.cloudfront.net/ci-efes-pilsner-dd648610b801542b.png",
        },
        {
          name: "Kostritzer",
          color: "dark",
          id: 12,
          country: "Germany",
          img_url:
            "https://dydza6t6xitx6.cloudfront.net/ci-kostritzer-schwarzbier-lager-84211b9a8a968b81.png",
        },
      ],
    };
  }
  render() {

    return (

      this.state.biers.map((bier) => {
        return(
      <Card
        name={bier.name}
        color={bier.color}
        id={bier.id}
        country={bier.country}
        img_url={bier.image_url}
      />
      )
    })
    )

  }
}
