const menu={
  "Angebot":[
    {id:"A1",name:"2 Pizzen 30cm + Pasta + 1 Liter Cola",desc:"2 Pizzen 30cm + 1 Pasta Penne Gericht + 1 Liter Cola · Auswahl bitte in der Bemerkung angeben",price:24.90},
    {id:"A2",name:"2 Pizzen 33cm + Beilagensalat + 1 Liter Cola",desc:"außer Spezial Pizzen · Auswahl bitte in der Bemerkung angeben",price:29.90},
    {id:"A3",name:"2 Familien Pizzen + kleine Pommes + 1 Liter Cola",desc:"Auswahl bitte in der Bemerkung angeben",price:39.90}
  ],
  "Vorspeisen":[
    {id:"320",name:"Gambas al Aglio",desc:"Gambas in Knoblauchsauce",price:9.99},
    {id:"321",name:"Gamberetti al Aglio",desc:"Krabben in Knoblauchsauce",price:10.99},
    {id:"322",name:"Cocktail di Gamberetti",desc:"Krabben in Cocktailsauce",price:9.50},
    {id:"323",name:"Antipasti Misto Grande",desc:"großer gemischter Vorspeisenteller",price:13.50}
  ],
  "Pizza":[
    {id:"01",name:"Pizza Margherita",desc:"mit Käse",prices:[["30cm",8.00],["33cm",10.50]]},
    {id:"03",name:"Pizza Vesuvia",desc:"mit Paprika, Salami, Jalapenos und Truthahnschinken",prices:[["30cm",10.50],["33cm",11.50]]},
    {id:"04",name:"Pizza Salami",desc:"mit Salami",prices:[["30cm",9.50],["33cm",11.50]]},
    {id:"05",name:"Pizza Spinaci",desc:"mit Spinat und Knoblauch",prices:[["30cm",9.50],["33cm",11.50]]},
    {id:"06",name:"Pizza Funghi",desc:"mit frischen Champignons",prices:[["30cm",9.50],["33cm",11.50]]},
    {id:"07",name:"Pizza Capricciosa",desc:"mit Truthahnschinken, Champignons, Salami und Zwiebeln",prices:[["30cm",10.50],["33cm",12.50]]},
    {id:"08",name:"Pizza Tonno",desc:"mit Thunfisch und Zwiebeln",prices:[["30cm",10.50],["33cm",12.50]]},
    {id:"09",name:"Pizza Inferno",desc:"mit Salami und Peperoni",prices:[["30cm",9.50],["33cm",12.50]]},
    {id:"10a",name:"Pizza Parme e Rucola",desc:"mit Parmaschinken, Rucola, Tomaten und Mozzarella",prices:[["30cm",9.50],["33cm",12.50]]},
    {id:"11",name:"Pizza Kentucky",desc:"mit Hühnchenfleisch, Broccoli und Sauce Hollandaise",prices:[["30cm",10.50],["33cm",12.50]]},
    {id:"12",name:"Pizza Prosciutto e Funghi",desc:"mit Truthahnschinken und Champignons",prices:[["30cm",10.00],["33cm",12.50]]},
    {id:"13",name:"Pizza Pasta",desc:"mit Spaghetti und Hackfleischsauce",prices:[["30cm",10.00],["33cm",11.50]]},
    {id:"14",name:"Pizza Gyros",desc:"mit Gyrosfleisch, Zwiebeln, Jalapenos und Knoblauch",prices:[["30cm",10.50],["33cm",12.50]]},
    {id:"15",name:"Pizza Hawaii",desc:"mit Truthahnschinken und Ananas",prices:[["30cm",10.50],["33cm",12.50]]},
    {id:"20",name:"Pizza Prosciutto",desc:"mit Truthahnschinken",prices:[["30cm",9.50],["33cm",12.00]]},
    {id:"21",name:"Pizza Quattro Stagioni",desc:"mit Thunfisch, Paprika, Truthahnschinken, Champignons und Ei",prices:[["30cm",10.50],["33cm",12.50]]},
    {id:"22",name:"Pizza Vegetaria",desc:"mit Broccoli, Champignons, Paprika und Spinat",prices:[["30cm",10.50],["33cm",12.50]]},
    {id:"23",name:"Pizza Frutti di Mare",desc:"mit Meeresfrüchten und Knoblauch",prices:[["30cm",10.50],["33cm",12.50]]},
    {id:"26",name:"Pizza Romana",desc:"mit Zwiebeln, Peperoni, Fetakäse und Thunfisch",prices:[["30cm",10.50],["33cm",12.50]]},
    {id:"27",name:"Pizza Bombay Style",desc:"mit Hähnchenbrustfilet und Curry-Sauce",prices:[["30cm",10.50],["33cm",12.50]]},
    {id:"28",name:"Pizza Vulcano",desc:"mit Spinat, Paprika, Zwiebeln, Knoblauch und Jalapenos",prices:[["30cm",10.50],["33cm",12.50]]},
    {id:"29",name:"Pizza Pomodoro",desc:"mit frischen Tomaten, Mozzarella und Basilikum",prices:[["30cm",10.50],["33cm",12.50]]},
    {id:"30",name:"Pizza Diavolo",desc:"mit Champignons, Salami, Peperoni, Knoblauch und Thunfisch",prices:[["30cm",10.50],["33cm",12.50]]},
    {id:"31",name:"Pizza Quattro Formaggi",desc:"mit vier verschiedenen Käsesorten",prices:[["30cm",10.50],["33cm",12.50]]},
    {id:"32",name:"Pizza Hollandaise",desc:"mit Gyrosfleisch, Broccoli und Sauce Hollandaise",prices:[["30cm",11.00],["33cm",12.50]]},
    {id:"33",name:"Pizza BBQ",desc:"mit Hähnchenfleisch und BBQ-Sauce",prices:[["30cm",11.00],["33cm",12.50]]},
    {id:"34",name:"Pizza Salmone",desc:"mit Lachs, Spinat und Knoblauch",prices:[["30cm",11.00],["33cm",12.50]]},
    {id:"35",name:"Pizza Nain",desc:"mit Hähnchenfleisch, Broccoli, Zwiebeln und Sauce Hollandaise",prices:[["30cm",11.00],["33cm",12.50]]},
    {id:"36",name:"Pizza Scampi",desc:"mit Spinat, Shrimps und Knoblauch",prices:[["30cm",11.50],["33cm",13.00]]},
    {id:"37",name:"Pizza Gyros Spezial",desc:"mit Gyrosfleisch, Zwiebeln, Oliven, Peperoni und frischen Tomaten",prices:[["30cm",11.50],["33cm",13.00]]},
    {id:"39",name:"Pizza Sucuk",desc:"mit türkischer Knoblauchwurst, Peperoni und Zwiebeln",prices:[["30cm",11.50],["33cm",13.00]]},
    {id:"40",name:"Wunsch-Pizza",desc:"mit vier Zutaten nach eigener Wahl",prices:[["30cm",12.50],["33cm",13.50]]}
  ],
  "Spezial Pizza":[
    {id:"16a",name:"Pizza Chicken Masala",desc:"mit würzigen Chicken und Tikka Masala",prices:[["30cm",11.00],["33cm",12.50]]},
    {id:"17a",name:"Pizza Butter Chicken",desc:"mit Butter Chicken und ind. Gewürzen",prices:[["30cm",11.00],["33cm",12.50]]},
    {id:"18a",name:"Pizza Paneer",desc:"mit hausgem. Paneer Käse, rote Zwiebeln, Mozzarella, Paprika und ind. Gewürzen",prices:[["30cm",12.50],["33cm",13.50]]},
    {id:"19a",name:"Pizza Bombay Fire (sehr scharf)",desc:"mit Tandoori Chicken, Chilli, Jalapenos, Zwiebeln und Masala Sauce",prices:[["30cm",11.50],["33cm",13.00]]},
    {id:"45",name:"Pizza Polla Spezial",desc:"mit Käserand, Hähnchenbrustfilet und Jalapenos",prices:[["30cm",12.50],["33cm",15.50]]},
    {id:"46",name:"Pizza Hollandaise Spezial",desc:"mit Käserand, Gyrosfleisch und Sauce Hollandaise",prices:[["30cm",12.50],["33cm",15.50]]},
    {id:"47",name:"Pizza BBQ Spezial",desc:"mit Käserand, Hähnchenfleisch, Jalapenos und BBQ-Sauce",prices:[["30cm",12.50],["33cm",15.50]]},
    {id:"48",name:"Pizza Nain Spezial",desc:"mit Käserand, Hähnchenfleisch, Broccoli und Zwiebeln",prices:[["30cm",12.50],["33cm",15.50]]},
    {id:"300",name:"Pizza New York Style",desc:"mit extra viel New York Style Salami",prices:[["30cm",12.50],["33cm",13.00]]},
    {id:"301",name:"Pizza Cheeseburger",desc:"mit Rinderhackfleisch, roten Zwiebeln, Gewürzgurken, fr. Tomaten und Burgersauce",prices:[["30cm",12.99],["33cm",14.50]]},
    {id:"302",name:"Pizza Chicken Döner",desc:"mit Hähnchendönerfleisch, roten Zwiebeln, Romana Salat, Cocktailsauce und Knoblauchsauce",prices:[["30cm",12.99],["33cm",14.99]]},
    {id:"303",name:"Pizza Teriyaki Chicken",desc:"mit Hähnchenfleisch, Broccoli, Zwiebeln, Sesam und Teriyaki-Sauce",prices:[["30cm",12.99],["33cm",14.50]]},
    {id:"304",name:"Pizza Hot Dog",desc:"mit Würstchen, Gewürzgurken, Röstzwiebeln, Tomatenketchup und Remouladensauce",prices:[["30cm",12.50],["33cm",13.50]]}
  ],
  "vegane Pizza":[
    {id:"310",name:"Pizza Vegan Salami",desc:"mit veganer Salami, veganem Käse und Knoblauch",prices:[["30cm",13.49],["33cm",14.99]]},
    {id:"311",name:"Pizza Teriyaki della vegan",desc:"mit veganen Filetstücken, Broccoli, Zwiebeln, Sesam, Teriyaki-Sauce und veganem Käse",prices:[["30cm",14.50],["33cm",15.90]]},
    {id:"312",name:"Pizza della Döner (vegan)",desc:"mit veganen Filetstücken, roten Zwiebeln, Romana Salat, Cocktailsauce, Knoblauchsauce und veganem Käse",prices:[["30cm",14.50],["33cm",15.50]]}
  ],
  "Calzone":[
    {id:"41",name:"Calzone Mix",desc:"mit Truthahnschinken, Salami, Zwiebeln und Champignons",price:12.50},
    {id:"42",name:"Calzone Hawaii",desc:"mit Truthahnschinken und Ananas",price:12.50},
    {id:"43",name:"Calzone Döner",desc:"mit Dönerfleisch, Krautsalat und Zwiebeln",price:12.50},
    {id:"44",name:"Calzone Mafia",desc:"mit Dönerfleisch, Zwiebeln und Jalapenos",price:12.50},
    {id:"44a",name:"Calzone Weltmeister",desc:"mit Dönerfleisch, Tzatziki und Pommes",price:12.50}
  ],
  "Family - Party Pizza":[
    {id:"FP",name:"Family Pizza",desc:"40x40cm · Tomatensauce, Käse und Oregano · 2 gratis Zutaten nach Wahl",price:20.00},
    {id:"PP",name:"Party Pizza",desc:"40x60cm · Tomatensauce, Käse und Oregano · 3 gratis Zutaten nach Wahl",price:29.00}
  ],
  "Pizzabrötchen":[
    {id:"50",name:"Pizzabrötchen mit Käse",desc:"9 Stück",price:6.50},
    {id:"51",name:"Gefüllte Pizzabrötchen mit Käse und Truthahnschinken",desc:"9 Stück",price:8.00},
    {id:"52",name:"Gefüllte Pizzabrötchen mit Käse und Thunfisch",desc:"9 Stück",price:8.00},
    {id:"53",name:"Gefüllte Pizzabrötchen mit Käse und Salami",desc:"9 Stück",price:8.00},
    {id:"54",name:"Gefüllte Pizzabrötchen mit Spinat und Fetakäse",desc:"9 Stück",price:8.00},
    {id:"55",name:"Gefüllte Pizzabrötchen mit Gyrosfleisch",desc:"9 Stück",price:8.00},
    {id:"56",name:"Gefüllte Pizzabrötchen mit Sucuk",desc:"9 Stück",price:8.50},
    {id:"57",name:"Gefüllte Pizzabrötchen mit Hähnchenfleisch, Mais, Sauce Hollandaise",desc:"9 Stück",price:8.50},
    {id:"58",name:"Gefüllte Pizzabrötchen mit veganem Käse",desc:"9 Stück",price:9.50},
    {id:"59",name:"Gefüllte Pizzabrötchen mit veganer Salami und veganem Käse",desc:"9 Stück",price:10.99}
  ],
  "Nudelgerichte":[
    {id:"60",name:"Pasta Napoli",desc:"mit Tomatensauce",price:8.00},
    {id:"61",name:"Pasta Bolognese",desc:"mit Hackfleischsauce",price:8.50},
    {id:"62",name:"Pasta Carbonara",desc:"mit Truthahnschinken und Ei in Sahnesauce",price:8.50},
    {id:"63",name:"Pasta Aioli",desc:"mit Olivenöl, Peperoni und Knoblauch, mit frischen Tomaten",price:8.00},
    {id:"64",name:"Pasta Al Forno (überbacken)",desc:"mit Truthahnschinken, Champignons, Tomaten-Sahnesauce, mit Käse überbacken",price:9.00},
    {id:"65",name:"Pasta Frutti di Mare",desc:"mit Meeresfrüchte, Knoblauch und Tomaten-Sahnesauce",price:9.50},
    {id:"66",name:"Pasta A la Gamberetti",desc:"mit Shrimps und Knoblauch in Tomaten-Sahnesauce",price:9.50},
    {id:"67",name:"Pasta A la Panna",desc:"mit Truthahnschinken in Sahnesauce",price:8.50},
    {id:"68",name:"Pasta Gorgonzola",desc:"mit Gorgonzolakäse und Sahnesauce",price:9.00},
    {id:"69",name:"Pasta Lachs",desc:"mit Spinat, Lachs und Knoblauch in Sahnesauce",price:9.00},
    {id:"70",name:"Pasta Quattro Formaggi",desc:"mit vier verschiedenen Käsesorten",price:9.00},
    {id:"71",name:"Pasta Gratinati",desc:"mit Hackfleischsauce, Champignons, Sahnesauce und Käse überbacken",price:9.00},
    {id:"72",name:"Pasta Arrabiata",desc:"mit Thunfisch und Peperoni in Sahnesauce",price:8.50},
    {id:"73",name:"Pasta Pollo",desc:"mit Hähnchenfleisch, Broccoli und Champignons in Sahnesauce",price:9.50},
    {id:"74",name:"Pasta Spinaci",desc:"mit Spinat und Knoblauch in Sahnesauce",price:8.50},
    {id:"75",name:"Pasta Broccoli",desc:"mit Broccoli, Hähnchenfleisch und Knoblauch in Sahnesauce und Sauce Hollandaise",price:9.00},
    {id:"76",name:"Pasta Hawaii",desc:"mit Truthahnschinken, Ananas, Sahnesauce und mit Käse überbacken",price:9.00},
    {id:"77",name:"Pasta Chicken",desc:"mit Hähnchenfleisch und frischen Champignons in Sahnesauce",price:9.50},
    {id:"78",name:"Pasta Ragazzi",desc:"mit Hähnchenfleisch, Spinat, Knoblauch und pikanter Tomaten-Sahnesauce",price:9.50},
    {id:"79",name:"Pasta Alla Chef",desc:"mit Dönerfleisch, Knoblauch und Sauce Hollandaise mit Käse überbacken",price:10.50}
  ],
  "Aus dem Backofen":[
    {id:"85",name:"Lasagne mit Hackfleisch überbacken",desc:"",price:10.50},
    {id:"86",name:"Lasagne Spezial",desc:"mit Hackfleischsauce und Truthahnschinken",price:11.00},
    {id:"87",name:"Pasta Mista",desc:"3 verschiedene Nudelsorten mit Truthahnschinken in Sahnesauce",price:11.00},
    {id:"88",name:"Broccoli Auflauf",desc:"mit Kartoffeln, Broccoli, Hähnchenfleisch, Knoblauch und Sauce Hollandaise",price:11.00},
    {id:"89",name:"Drei versch. Gemüse Auflauf",desc:"mit Broccoli, Spinat, Champignons, Truthahnschinken in Sahnesauce",price:11.00},
    {id:"90",name:"Haschee-Auflauf",desc:"mit Hackfleisch, Kartoffeln, Paprika, Zwiebeln und Sahnesauce",price:11.50},
    {id:"91",name:"Kartoffeln-Gemüse-Pfanne",desc:"mit verschiedenem Gemüse, Kräutern und Käse-Sahnesauce",price:11.50},
    {id:"92",name:"Kartoffel Gyros-Pfanne",desc:"mit Gyrosfleisch, Kartoffeln, Knoblauch und Kräutern in Käse-Sahnesauce",price:11.50},
    {id:"93",name:"Kartoffeln-Hähnchen-Pfanne",desc:"mit Hähnchenfleisch, Kartoffeln, Zwiebeln, Peperoni und Tomaten, Sahnesauce",price:11.50},
    {id:"94",name:"Kartoffeln-Shrimps-Pfanne",desc:"mit Shrimps, Kartoffeln, Zwiebeln, Peperoni und Sahnesauce",price:11.50}
  ],
  "Salate":[
    {id:"95",name:"Insalata Verde",desc:"grüner Salat",price:5.50},
    {id:"96",name:"Krautsalat",desc:"",price:6.00},
    {id:"97a",name:"Insalata Pollo e Funghi",desc:"gemischter Salat mit gebr. Champignons und Hähnchenfleisch",price:9.50},
    {id:"98a",name:"Insalata Tricolore",desc:"gemischter Salat mit Mais, Mozzarella, Tomaten und Ei",price:8.50},
    {id:"99a",name:"Insalata Ragazzi",desc:"gemischter Salat mit Mozzarella, Vorderschinken, Oliven, Bohnen, Avocado und Ei",price:10.50},
    {id:"100",name:"Insalata Mista",desc:"grüner Salat mit Tomaten, Gurken und Mais",price:8.00},
    {id:"101a",name:"Insalata Tikka",desc:"gemischter Salat mit Hähnchenfleisch, Champignons und ind. Gewürzen",price:9.50},
    {id:"102",name:"Insalata Capricciosa",desc:"grüner Salat mit Tomate, Paprika, Gurken, Thunfisch und Ei",price:9.00},
    {id:"103",name:"Insalata Caprese",desc:"grüner Salat mit Tomaten, Mozzarella und Basilikum",price:9.00},
    {id:"104",name:"Insalata Primavera",desc:"gemischter Salat mit Ei, Truthahnschinken, Artischocken, Mais und Thunfisch",price:9.50},
    {id:"105",name:"Bauernsalat",desc:"gemischter Salat mit Fetakäse, Oliven und Peperoni",price:9.50},
    {id:"106",name:"Insalata di Shrimps",desc:"gemischter Salat mit gebr. Shrimps und Champignons",price:10.00},
    {id:"107",name:"Sommersalat",desc:"gemischter Salat mit gebratenem Putenbrustfilet, Champignons und Zwiebeln",price:10.00},
    {id:"108",name:"Insalata Döner",desc:"gemischter Salat mit Dönerfleisch",price:10.00},
    {id:"109a",name:"Insalata Mare",desc:"gemischter Salat mit gebr. Lachs und Gambas",price:11.90},
    {id:"111",name:"Hawaii Salat",desc:"gemischter Salat mit Truthahnschinken, Ananas und Käse",price:10.00}
  ],
  "Beilagen":[
    {id:"115",name:"Pizzabrötchen mit Kräuterbutter",desc:"8 Stk",price:4.50},
    {id:"116",name:"Pizzabrot mit Kräuterbutter",desc:"",price:4.50},
    {id:"116a",name:"Pizzabrot mit Käse",desc:"",price:4.50},
    {id:"117",name:"Pommes frites große Portion",desc:"",price:4.50},
    {id:"117a",name:"Pommes Frites kleine Portion",desc:"",price:3.00},
    {id:"119",name:"Portion Fetakäse",desc:"",price:4.50},
    {id:"120",name:"Portion milde Peperoni",desc:"",price:4.00},
    {id:"122",name:"Tzatziki, klein",desc:"kleine Portion",price:3.50},
    {id:"123",name:"Tzatziki, groß",desc:"große Portion",price:4.50},
    {id:"124",name:"Mini-Frühlingsrollen",desc:"10 Stk · mit Süß-Sauer Sauce",price:7.00},
    {id:"125",name:"Mozzarella Sticks",desc:"6 Stk.",price:7.00},
    {id:"126",name:"Animal Style Pommes",desc:"mit Cheddarkäse und Chili Cheese Sauce",price:8.00},
    {id:"127",name:"Pizzabrötchen mit Aioli",desc:"",price:4.50},
    {id:"128a",name:"extra Aioli",desc:"",price:1.50},
    {id:"128b",name:"extra Kräuterbutter",desc:"",price:1.50}
  ],
  "Snacks / Menüs":[
    {id:"129",name:"Calamaris mit Pommes Frites",desc:"",price:9.50},
    {id:"130",name:"Chicken Nuggets (6 Stück) mit Pommes und Süß-Saucer Sauce",desc:"",price:7.00},
    {id:"131",name:"Chicken Wings (6 Stk.) mit Pommes Frites und Süß-Sauer Sauce",desc:"",price:10.00},
    {id:"132",name:"Hamburger 100 gr. Patty",desc:"als Menü 12.00 €",price:6.00},
    {id:"133",name:"Cheesburger 100 gr. Patty",desc:"als Menü 12.50 €",price:6.50},
    {id:"134",name:"Big Chicken Burger 135 gr. Patty",desc:"als Menü 13.50 €",price:7.50},
    {id:"135",name:"Big Burger 200 gr. Doppelpatty",desc:"als Menü 13.50 €",price:9.00},
    {id:"136",name:"Chilli Burger 100 gr. Patty",desc:"als Menü 12.50 €",price:7.50}
  ],
  "Fleisch-Gerichte":[
    {id:"158",name:"Schnitzel Wiener Art",desc:"paniert mit Zitrone · Pommes frites und Salat",price:10.00},
    {id:"161",name:"Zwiebelschnitzel",desc:"mit gebratenen Zwiebeln · Pommes frites und Salat",price:10.50},
    {id:"162",name:"Jägerschnitzel",desc:"mit Jägersauce · Pommes frites und Salat",price:11.00},
    {id:"163",name:"Paprikaschnitzel",desc:"mit Paprikasauce · Pommes frites und Salat",price:11.00},
    {id:"164",name:"Rahmschnitzel",desc:"mit Champignons und Rahmsauce · Pommes frites und Salat",price:11.00},
    {id:"165",name:"Schnitzel Hollandaise",desc:"mit Sauce Hollandaise · Pommes frites und Salat",price:11.00},
    {id:"166",name:"Pfefferschnitzel",desc:"mit Pfefferrahmsauce · Pommes frites und Salat",price:11.00},
    {id:"167",name:"Hawaii-Schnitzel (überbacken)",desc:"mit Truthahnschinken, Ananas, Sahne und Käse überbacken · Pommes frites und Salat",price:12.50},
    {id:"168",name:"Schnitzel Babylon (überbacken)",desc:"mit Truthahnschinken, Champignons, Bolognese-Sahnesauce und Käse überbacken · Pommes frites und Salat",price:12.50}
  ],
  "Gyros vom Hähnchen":[
    {id:"170",name:"Gyros Pita",desc:"mit Salat, Zwiebeln, Tzatziki und Krautsalat",price:6.50},
    {id:"171",name:"Gyros komplett",desc:"mit Pommes frites ODER Reis, Salat, Tzatziki und Zwiebeln",price:10.50},
    {id:"172",name:"Gyros überbacken",desc:"mit Paprika, Zwiebeln, Tomatensauce, Käse und Salat",price:12.00}
  ],
  "indische Gerichte":[
    {id:"450",name:"vegetarische Pakora",desc:"gemischtes Gemüse in Kichererbsenmehl frittiert · mit Mango-, Tamarinde- und Minz-Dip",price:7.90},
    {id:"453",name:"Paneer Pakora",desc:"hausgemachter Frischkäse in Kichererbsenmehl frittiert · mit Mango-, Tamarinde- und Minz-Dip",price:8.90},
    {id:"454",name:"Chicken Pakora",desc:"Hähnchenfleisch in Kichererbsenmehl frittiert · mit Mango-, Tamarinde- und Minz-Dip",price:7.90},
    {id:"455",name:"Samosa",desc:"vegetarisch gefüllte Teigtaschen mit Kartoffeln und Erbsen · mit Mango-, Tamarinde- und Minz-Dip",price:7.90},
    {id:"456",name:"Fisch Pakora",desc:"Fisch in Kichererbsenmehl frittiert · mit Mango-, Tamarinde- und Minz-Dip",price:7.90}
  ],
  "vegetarische Hauptgerichte":[
    {id:"502",name:"Daal Makhni",desc:"gelbe und dunkle Linsen gekocht mit frischen Tomaten, roten Zwiebeln und milder Buttercurry · mit Reis",price:11.50},
    {id:"504",name:"Palak Paneer",desc:"Blattspinat mit selbstgemachtem Weichkäse, milde Würze · mit Reis",price:14.50},
    {id:"507",name:"Paneer Tikka Masala",desc:"gegrillter selbstgemachter Weichkäse mit Paprika, Zwiebeln, Ingwer, Knoblauch, Kurkuma in feiner Creme · mit Reis",price:13.50},
    {id:"508",name:"Sahi Paneer",desc:"hausgemachter Frischkäse mit Honig und Mandeln in Tomaten-Creme-Sauce · mit Reis",price:15.90}
  ],
  "Hauptgerichte Hähnchen":[
    {id:"550",name:"Butter Chicken",desc:"mariniertes gegrilltes Hähnchenfilet aus dem Tandoori-Ofen mit Tomaten, Cashewnüssen und Rosinen in köstlich feiner Sauce · mit Reis",price:13.50},
    {id:"551",name:"Chicken Curry",desc:"gegrilltes Hähnchenfilet nach pikant-würziger Punjabi Art · mit Reis",price:13.50},
    {id:"552",name:"Mango Chicken",desc:"Hähnchenfilet mit Mango in milder Creme-Curry · mit Reis",price:13.50},
    {id:"553",name:"Chicken Tikka Masala",desc:"Hähnchenfilet mit Paprika und Zwiebeln, abgeschmeckt mit Masalagewürzen · mit Reis",price:13.50},
    {id:"554",name:"Chicken Korma",desc:"Hähnchenfilet in Kokosnusssauce · mit Reis",price:13.50},
    {id:"555",name:"Chicken Chili",desc:"gebratenes Hähnchenfilet mit Paprika, Zwiebeln, grünem Chili, Ingwer, Knoblauch und Kurkuma · mit Reis",price:13.50},
    {id:"559",name:"Chicken Jalfrezi",desc:"Hähnchenbrustfilet mit Zwiebeln und Paprika in einer speziellen Jalfrezi-Currysauce · mit Reis",price:14.50},
    {id:"561",name:"Chicken Karahi",desc:"Hähnchenbrustfilet mit Cashew-nut-Pesto, Granatapfel in Currycremesauce · mit Reis",price:14.50},
    {id:"562",name:"Chicken Saag",desc:"Hähnchenbrustfilet mit Spinat und indischen Gewürzen · mit Reis",price:13.90}
  ],
  "Hauptgerichte Lamm":[
    {id:"570",name:"Lamm Curry",desc:"gebratenes Lammfleisch in Currysauce · mit Reis",price:15.50},
    {id:"571",name:"Lamm Korma",desc:"gebratenes Lammfleisch in Kokosnuss-Mandel-Sahnesauce · mit Reis",price:15.50},
    {id:"572",name:"Lamm Saag",desc:"gebratenes Lammfleisch mit Spinat und indischen Gewürzen · mit Reis",price:14.90},
    {id:"573",name:"Lamm Jalfrezi",desc:"gebratenes Lammfleisch mit Zwiebeln und Paprika in einer speziellen Jalfrezi-Currysauce · mit Reis",price:14.90}
  ],
  "Biryani":[
    {id:"600",name:"vegetarische Biryani",desc:"gebratener Reis mit Gemüse dazu Raita (Joghurtbeilage)",price:12.90},
    {id:"601",name:"Chicken Biryani",desc:"gebratenes und geschnetzeltes Hähnchenfilet, gebratener Reis, mit Paprika, Zwiebeln, dazu Raita (Joghurtbeilage)",price:14.90},
    {id:"602",name:"Lamm Biryani",desc:"gebratenes Lammfleisch, gebratener Reis, mit Paprika und Zwiebeln dazu Raita (Joghurtbeilage)",price:15.90},
    {id:"603",name:"Krabben Biryani",desc:"gebratener Reis, Krabben, Paprika und Zwiebeln, dazu Raita (Joghurtbeilage)",price:15.90}
  ],
  "indisches Brot":[
    {id:"611",name:"Raita",desc:"Joghurt mit Gurken, Tomaten, Zwiebeln und Gewürzen",price:3.90},
    {id:"612",name:"Garlic Naan",desc:"indisches Brot mit Butter und Knoblauch",price:3.50},
    {id:"613",name:"Butter Naan",desc:"indisches Brot mit Butter",price:3.50}
  ],
  "Desserts":[
    {id:"450",name:"Spaghetti Eis",desc:"",price:4.00},
    {id:"451",name:"Tiramisu",desc:"",price:4.50}
  ],
  "Getränke":[
    {id:"600",name:"Coca Cola",desc:"0,33L Dose oder 1L Flasche · alle Getränke inkl. Pfand",prices:[["0,33L",2.50],["1L",3.50]]},
    {id:"601",name:"Coca Cola light",desc:"0,33L Dose oder 1L Flasche · alle Getränke inkl. Pfand",prices:[["0,33L",2.50],["1L",3.50]]},
    {id:"602",name:"Fanta",desc:"0,33L Dose oder 1L Flasche · alle Getränke inkl. Pfand",prices:[["0,33L",2.50],["1L",3.50]]},
    {id:"603",name:"Sprite",desc:"0,33L Dose oder 1L Flasche · alle Getränke inkl. Pfand",prices:[["0,33L",2.50],["1L",3.50]]},
    {id:"604",name:"Wasser",desc:"0,5L · 1 Liter / 5 Euro",price:2.50},
    {id:"605",name:"Orangensaft",desc:"1L Flasche",price:3.00},
    {id:"606",name:"Multivitaminsaft",desc:"1L Flasche",price:3.00},
    {id:"610a",name:"Mango Lassi",desc:"0,3L · 15 Euro / Liter",price:4.50},
    {id:"607",name:"Kölsch",desc:"0,5L · 7 Euro / Liter",price:3.50},
    {id:"608",name:"Pils",desc:"0,5L · 7 Euro / Liter",price:3.50},
    {id:"609",name:"Weißwein",desc:"0,75L Flasche · 12,67 Euro / Liter",price:9.50},
    {id:"610",name:"Rotwein",desc:"0,75L Flasche · 12,67 Euro / Liter",price:9.50}
  ]
};

const categoryOrder=["Angebot","Vorspeisen","Pizza","Spezial Pizza","vegane Pizza","Calzone","Family - Party Pizza","Pizzabrötchen","Nudelgerichte","Aus dem Backofen","Salate","Beilagen","Snacks / Menüs","Fleisch-Gerichte","Gyros vom Hähnchen","indische Gerichte","vegetarische Hauptgerichte","Hauptgerichte Hähnchen","Hauptgerichte Lamm","Biryani","indisches Brot","Desserts","Getränke"];
const subCategories=new Set(["Spezial Pizza","vegane Pizza","Calzone","Family - Party Pizza","Gyros vom Hähnchen","vegetarische Hauptgerichte","Hauptgerichte Hähnchen","Hauptgerichte Lamm","Biryani","indisches Brot"]);
let activeCategory="Pizza";
let cart=[];

const money=n=>Number(n).toLocaleString('de-DE',{minimumFractionDigits:2,maximumFractionDigits:2})+' €';
const esc=s=>String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

function renderCategories(){
  const nav=document.getElementById('categoryNav');
  nav.innerHTML='';
  categoryOrder.forEach(cat=>{
    const b=document.createElement('button');
    b.className='cat-btn'+(cat===activeCategory?' active':'');
    b.textContent=cat;
    if(subCategories.has(cat)){
      b.style.paddingLeft='26px';
      b.style.fontSize='12px';
      b.style.color=cat===activeCategory?'#fff':'#59615d';
    }
    b.addEventListener('click',()=>{activeCategory=cat;document.getElementById('search').value='';renderCategories();renderProducts();});
    nav.appendChild(b);
  });
}

function addToCart(item,price,label=''){
  const key=activeCategory+'|'+item.id+'|'+label;
  const found=cart.find(x=>x.key===key);
  if(found) found.qty+=1;
  else cart.push({key,id:item.id,name:item.name,category:activeCategory,label,price,qty:1});
  renderCart();
}

function renderProducts(){
  const q=document.getElementById('search').value.trim().toLowerCase();
  const list=(menu[activeCategory]||[]).filter(x=>!q||x.name.toLowerCase().includes(q)||x.desc.toLowerCase().includes(q));
  document.getElementById('menuTitle').textContent=activeCategory;
  const products=document.getElementById('products');
  if(!list.length){products.innerHTML='<div class="coming"><strong>Keine Treffer</strong><p>Für diese Suche wurden keine Gerichte gefunden.</p></div>';return;}
  products.innerHTML=list.map(item=>{
    const priceHtml=item.prices?item.prices.map((p,i)=>`<button class="add" type="button" data-cat="${esc(activeCategory)}" data-id="${esc(item.id)}" data-idx="${i}">${esc(p[0])} · ${money(p[1])} +</button>`).join(''): `<button class="add" type="button" data-cat="${esc(activeCategory)}" data-id="${esc(item.id)}">${money(item.price)} +</button>`;
    const priceText=item.prices?'Auswahl: '+item.prices.map(p=>p[0]+' '+money(p[1])).join(' · '):money(item.price);
    return `<article class="product"><div><small>${esc(item.id)}</small><h3>${esc(item.name)}</h3>${item.desc?`<p>${esc(item.desc)}</p>`:''}</div><div class="product-bottom"><div class="prices"><span>${priceText}</span></div>${priceHtml}</div></article>`;
  }).join('');
  products.querySelectorAll('.add').forEach(btn=>btn.addEventListener('click',()=>{
    const cat=btn.dataset.cat;const item=(menu[cat]||[]).find(x=>String(x.id)===String(btn.dataset.id));
    if(!item)return;
    if(item.prices){const p=item.prices[Number(btn.dataset.idx)];addToCart(item,p[1],p[0]);}
    else addToCart(item,item.price,'');
  }));
}

function renderCart(){
  const items=document.getElementById('cartItems');
  const count=cart.reduce((s,x)=>s+x.qty,0);
  const total=cart.reduce((s,x)=>s+x.qty*x.price,0);
  document.getElementById('cartCount').textContent=count;
  document.getElementById('cartTotal').textContent=money(total);
  if(!cart.length){items.innerHTML='<p class="empty">Dein Warenkorb ist noch leer.</p>';return;}
  items.innerHTML=cart.map((x,i)=>`<div class="cart-row"><div><strong>${esc(x.name)}</strong><small>${esc(x.label||x.category)}</small></div><span>${x.qty} × ${money(x.price)}</span><button type="button" data-remove="${i}" aria-label="Entfernen">−</button></div>`).join('');
  items.querySelectorAll('[data-remove]').forEach(b=>b.addEventListener('click',()=>{const i=Number(b.dataset.remove);cart[i].qty--;if(cart[i].qty<=0)cart.splice(i,1);renderCart();}));
}

function openCart(){document.getElementById('cartPanel').classList.add('open');document.getElementById('overlay').classList.add('show');}
function closeCart(){document.getElementById('cartPanel').classList.remove('open');document.getElementById('overlay').classList.remove('show');}

document.getElementById('search').addEventListener('input',renderProducts);
document.getElementById('cartButton').addEventListener('click',openCart);
document.getElementById('closeCart').addEventListener('click',closeCart);
document.getElementById('overlay').addEventListener('click',closeCart);
document.getElementById('checkout').addEventListener('click',()=>{if(!cart.length){alert('Dein Warenkorb ist noch leer.');return;}alert('Der Warenkorb ist bereit. Für eine echte Online-Bestellung muss hier noch der Bestell-/Zahlungsdienst angebunden werden.');});
document.getElementById('deliveryButton').addEventListener('click',()=>document.getElementById('delivery').scrollIntoView({behavior:'smooth'}));

renderCategories();
renderProducts();
renderCart();
