"use strict";

const {
  db,
  models: { User, Clothing },
} = require("../server/db");
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  const users = await Promise.all([
    User.create({
      username: "Ataa",
      password: "password",
    }),
    User.create({
      username: "Lucy",
      password: "passwordone",
    }),
    User.create({
      username: "Elena",
      password: "passwordtwo",
    }),
    User.create({
      username: "Admin",
      password: "adminone",
      isAdmin: true,
    }),
  ]);

  const shoes = await Promise.all([
    Clothing.create({
      type: "shoes",
      name: "Converse X COMME des GARÇONS PLAY",
      price: 150.0,
      description: "Unisex high top shoe",
      quantity: 80,
      color: "Grey",
      rating: 4.66,
      imageUrl:
        "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221246M236000_1/comme-des-garcons-play-grey-converse-edition-half-heart-chuck-70-sneakers.jpg",
    }),
    Clothing.create({
      type: "shoes",
      name: "Converse X COMME des GARÇONS PLAY",
      price: 150.0,
      description: "Unisex low top shoe",
      quantity: 68,
      color: "Navy",
      rating: 3.47,
      imageUrl:
        "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221246M237001_1/comme-des-garcons-play-blue-converse-edition-half-heart-chuck-70-sneakers.jpg",
    }),
    Clothing.create({
      type: "shoes",
      name: "Converse X COMME des GARÇONS PLAY",
      price: 150.0,
      description: "Unisex high top shoe",
      quantity: 75,
      color: "Navy",
      rating: 4.32,
      imageURL:
        "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221246M236001_1/comme-des-garcons-play-blue-converse-edition-half-heart-chuck-70-sneakers.jpg",
    }),
    Clothing.create({
      type: "shoes",
      name: "Black Chuck Taylor All Star Platform Hi Sneakers",
      price: 150.0,
      description: "Unisex low top shoe",
      quantity: 23,
      color: "Grey",
      rating: 4.89,
      imageURL:
        "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221246M236000_1/comme-des-garcons-play-grey-converse-edition-half-heart-chuck-70-sneakers.jpg",
    }),
    Clothing.create({
      type: "shoes",
      name: "Beige Summer Daze Chuck 70 sneakers",
      price: 45.0,
      description: "Unisex low top shoe",
      quantity: 23,
      color: "Grey",
      rating: 2.39,
      imageURL:
        "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221246M236000_1/comme-des-garcons-play-grey-converse-edition-half-heart-chuck-70-sneakers.jpg",
    }),
  ]);

  const accessories = await Promise.all([
    Clothing.create({
      type: "accessories",
      name: "1.5mm Black Diamond Prong WG TL BVLA",
      price: 140.0,
      description: "earring",
      color: "gold",
      quantity: 5,
      imageUrl:
        "https://www.ninemoonspiercings.com/uploads/1/3/1/5/131540467/s939830397503292869_p463_i3_w2700.jpeg?width=2560?width=800",
    }),
    Clothing.create({
      type: "accessories",
      name: "Chubby Huggy Hoop, Silver (Single)",
      price: 38.0,
      description: "earring",
      color: "silver",
      quantity: 24,
      imageUrl:
        "https://www.catbirdnyc.com/media/catalog/product/cache/76a94e0cda397936c0138d2cf05d7fe1/h/u/huggiehoop-ss-p1.jpg",
    }),
    Clothing.create({
      type: "accessories",
      name: "Sweet Nothing Bracelet",
      price: 98.0,
      description: "bracelet",
      color: "gold",
      quantity: 40,
      imageUrl:
        "https://www.catbirdnyc.com/media/catalog/product/cache/76a94e0cda397936c0138d2cf05d7fe1/c/a/catbird-sweetnothingbracelet-yg-p1.jpg",
    }),
    Clothing.create({
      type: "accessories",
      name: "Mini Cloud Bag",
      price: 46.0,
      description: "bag",
      color: "apricot",
      quantity: 39,
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0851/3262/products/ea0316b8321c0af3b622b767c4c316141582bc2e-2048x2560_1200x1500.jpg?v=1629414849",
    }),
    Clothing.create({
      type: "accessories",
      name: "Pink & Gold Barocco Print Scarf",
      price: 129.0,
      description: "scarf",
      color: "pink",
      quantity: 12,
      imageUrl:
        "https://img.ssensemedia.com/images/f_auto,q_auto:best/212404F029000_1/versace-pink-and-gold-barocco-print-scarf.jpg",
    }),
  ]);
<<<<<<< HEAD

  const tops = await Promise.all([
    Clothing.create({
      type: "tops",
      name: "something top",
      price: 150.0,
      description: "shirt",
      color: "green",
      quantity: 89,
      ImageURL:
        "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221232F107011_1/rick-owens-silver-seb-blouse.jpg",
    }),
    Clothing.create({
      type: "tops",
      name: "something top",
      price: 140.0,
      description: "sweatshirt",
      color: "red",
      quantity: 56,
      ImageURL:
        "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221232F107011_1/rick-owens-silver-seb-blouse.jpg",
    }),
    Clothing.create({
      type: "tops",
      name: "something top",
      price: 130.0,
      description: "tank",
      color: "blue",
      quantity: 90,
      imageURL:
        "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221232F107011_1/rick-owens-silver-seb-blouse.jpg",
    }),
    Clothing.create({
      type: "tops",
      name: "something top",
      price: 130.0,
      description: "sweater",
      color: "gold",
      quantity: 78,
      imageURL:
        "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221232F107011_1/rick-owens-silver-seb-blouse.jpg",
    }),
    Clothing.create({
      type: "tops",
      name: "something top",
      price: 250.0,
      description: "jacket",
      color: "white",
      quantity: 67,
      imageURL:
        "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221232F107011_1/rick-owens-silver-seb-blouse.jpg",
    }),
  ]);
=======
}
// const accessories = [
//   {
//     type: "accessories",
//     name: "1.5mm Black Diamond Prong WG TL BVLA",
//     price: 140.0,
//     description: "earring",
//     color: "gold",
//     quantity: 5,
//     imageUrl:
//       "https://www.ninemoonspiercings.com/uploads/1/3/1/5/131540467/s939830397503292869_p463_i3_w2700.jpeg?width=2560?width=800",
//   },
//   {
//     type: "accessories",
//     name: "Chubby Huggy Hoop, Silver (Single)",
//     price: 38.0,
//     description: "earring",
//     color: "silver",
//     quantity: 24,
//     imageUrl:
//       "https://www.catbirdnyc.com/media/catalog/product/cache/76a94e0cda397936c0138d2cf05d7fe1/h/u/huggiehoop-ss-p1.jpg",
//   },
//   {
//     type: "accessories",
//     name: "Sweet Nothing Bracelet",
//     price: 98.0,
//     description: "bracelet",
//     color: "gold",
//     quantity: 40,
//     imageUrl:
//       "https://www.catbirdnyc.com/media/catalog/product/cache/76a94e0cda397936c0138d2cf05d7fe1/c/a/catbird-sweetnothingbracelet-yg-p1.jpg",
//   },
//   {
//     type: "accessories",
//     name: "Mini Cloud Bag",
//     price: 46.0,
//     description: "bag",
//     color: "apricot",
//     quantity: 39,
//     imageUrl:
//       "https://cdn.shopify.com/s/files/1/0851/3262/products/ea0316b8321c0af3b622b767c4c316141582bc2e-2048x2560_1200x1500.jpg?v=1629414849",
//   },
//   {
//     type: "accessories",
//     name: "Pink & Gold Barocco Print Scarf",
//     price: 129.0,
//     description: "scarf",
//     color: "pink",
//     quantity: 12,
//     imageUrl:
//       "https://img.ssensemedia.com/images/f_auto,q_auto:best/212404F029000_1/versace-pink-and-gold-barocco-print-scarf.jpg",
//   },
// ];

// const tops = [
//   {
//     type: "tops",
//     name: "something top",
//     price: 150.0,
//     description: "shirt",
//     color: "green",
//     quantity: 89,
//     ImageURL:
//       "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221232F107011_1/rick-owens-silver-seb-blouse.jpg",
//   },
//   {
//     type: "tops",
//     name: "something top",
//     price: 140.0,
//     description: "sweatshirt",
//     color: "red",
//     quantity: 56,
//     ImageURL:
//       "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221232F107011_1/rick-owens-silver-seb-blouse.jpg",
//   },
//   {
//     type: "tops",
//     name: "something top",
//     price: 130.0,
//     description: "tank",
//     color: "blue",
//     quantity: 90,
//     imageURL:
//       "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221232F107011_1/rick-owens-silver-seb-blouse.jpg",
//   },
//   {
//     type: "tops",
//     name: "something top",
//     price: 130.0,
//     description: "sweater",
//     color: "gold",
//     quantity: 78,
//     imageURL:
//       "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221232F107011_1/rick-owens-silver-seb-blouse.jpg",
//   },
//   {
//     type: "tops",
//     name: "something top",
//     price: 250.0,
//     description: "jacket",
//     color: "white",
//     quantity: 67,
//     imageURL:
//       "https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,q_auto/221232F107011_1/rick-owens-silver-seb-blouse.jpg",
//   },
// ];

// const pants = [
//   {
//     type: "pants",
//     name: "something pants",
//     price: 120.0,
//     description: "flowy skirt",
//     color: "yellow",
//     quantity: 999,
//     ImageURL:
//       "https://img.ssensemedia.com/images/f_auto,q_auto:best/212771F092000_1/toteme-yellow-raw-trim-skirt.jpg",
//   },
//   {
//     type: "pants",
//     name: "something pants",
//     price: 140.0,
//     description: "pencil skirt",
//     color: "orange",
//     quantity: 999,
//     ImageURL:
//       "https://img.ssensemedia.com/images/f_auto,q_auto:best/202387F090217_1/kenzo-orange-straight-miniskirt.jpg",
//   },
//   {
//     type: "pants",
//     name: "something pants",
//     price: 130.0,
//     description: "tapered pants",
//     color: "white",
//     quantity: 999,
//     imageURL:
//       "https://img.ssensemedia.com/images/f_auto,q_auto:best/212771F087003_1/toteme-white-city-sport-trousers.jpg",
//   },
//   {
//     type: "pants",
//     name: "something pants",
//     price: 140.0,
//     description: "baggy pants",
//     color: "black",
//     quantity: 999,
//     imageURL:
//       "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212704M191021_1/wooyoungmi-black-baggy-carpenter-trousers.jpg",
//   },
//   {
//     type: "pants",
//     name: "something pants",
//     price: 85.0,
//     description: "long short",
//     color: "pink",
//     quantity: 999,
//     imageURL:
//       "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211236F088057_1/collina-strada-ssense-exclusive-pink-flower-patch-shorts.jpg",
//   },
// ];

// const customer = [
//   {
//     username: "Ataa",
//     password: "password",
//   },
//   {
//     username: "Lucy",
//     password: "password1",
//   },
// ];

// const admin = [
//   {
//     username: "admin1",
//     password: "adminone",
//     isAdmin: true,
//   },
// ];
// // }

// Creating Users
// const seed = async () => {
//   try {
//     await db.sync({ force: true });
//     const Clothes = await Promise.all(
//       shoes.map((shoe) => {
//         Clothing.create(shoe);
//       })
//     );
//     // await Clothing.bulkCreate(pants);
//     // await Clothing.bulkCreate(accessories);
//     // await Clothing.bulkCreate(shoes);
//     // await User.bulkCreate(customer);
//     // await User.create(admin);
//   } catch (err) {
//     console.log(red(err));
//   }
//   console.log(`seeded successfully`);
// };

// const seed = async () => {
//   try {
//     await db.sync({ force: true });
//     await Clothing.bulkCreate(tops);
//     await Clothing.bulkCreate(pants);
//     await Clothing.bulkCreate(accessories);
//     await Clothing.bulkCreate(shoes);
//     await User.bulkCreate(customer);
//     await User.create(admin);
//   } catch (err) {
//     console.log(err);
//   }
// };
>>>>>>> 4c1da0ddbfa914222248cb13a24121add7e8b9c0

  const bottoms = await Promise.all([
    Clothing.create({
      type: "bottoms",
      name: "something pants",
      price: 120.0,
      description: "flowy skirt",
      color: "yellow",
      quantity: 999,
      ImageURL:
        "https://img.ssensemedia.com/images/f_auto,q_auto:best/212771F092000_1/toteme-yellow-raw-trim-skirt.jpg",
    }),
    Clothing.create({
      type: "bottoms",
      name: "something pants",
      price: 140.0,
      description: "pencil skirt",
      color: "orange",
      quantity: 999,
      ImageURL:
        "https://img.ssensemedia.com/images/f_auto,q_auto:best/202387F090217_1/kenzo-orange-straight-miniskirt.jpg",
    }),
    Clothing.create({
      type: "bottoms",
      name: "something pants",
      price: 130.0,
      description: "tapered pants",
      color: "white",
      quantity: 999,
      imageURL:
        "https://img.ssensemedia.com/images/f_auto,q_auto:best/212771F087003_1/toteme-white-city-sport-trousers.jpg",
    }),
    Clothing.create({
      type: "bottoms",
      name: "something pants",
      price: 140.0,
      description: "baggy pants",
      color: "black",
      quantity: 999,
      imageURL:
        "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/212704M191021_1/wooyoungmi-black-baggy-carpenter-trousers.jpg",
    }),
    Clothing.create({
      type: "bottoms",
      name: "something pants",
      price: 85.0,
      description: "long short",
      color: "pink",
      quantity: 999,
      imageURL:
        "https://img.ssensemedia.com/images/b_white,g_center,f_auto,q_auto:best/211236F088057_1/collina-strada-ssense-exclusive-pink-flower-patch-shorts.jpg",
    }),
  ]);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
