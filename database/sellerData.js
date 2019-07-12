const sellerData = [
  { seller: 'Sigmund Wiegand', avgRating: 3 },
  { seller: 'Justine Heller', avgRating: 3 },
  { seller: 'Moses Jakubowski', avgRating: 3 },
  { seller: 'Keenan Barrows', avgRating: 3 },
  { seller: 'Otis Bradtke', avgRating: 4 },
  { seller: 'Jakayla Heathcote MD', avgRating: 3 },
  { seller: 'Gay Cartwright', avgRating: 4 },
  { seller: 'Talia Friesen', avgRating: 3 },
  { seller: 'Martine Windler', avgRating: 3 },
  { seller: 'Mrs. Libbie Streich', avgRating: 4 },
  { seller: 'Rosalind Sawayn', avgRating: 3 },
  { seller: 'Mrs. Alysha Harvey', avgRating: 3 },
  { seller: 'Tomas Hammes', avgRating: 3 },
  { seller: 'Seth Bechtelar PhD', avgRating: 4 },
  { seller: 'Emilie Jast', avgRating: 4 },
  { seller: 'Mrs. Imani Hamill', avgRating: 3 },
  { seller: 'Leta Turcotte', avgRating: 3 },
  { seller: 'Kale Bahringer', avgRating: 3 },
  { seller: 'Dejah Dickens', avgRating: 3 },
  { seller: 'Holly Fahey DDS', avgRating: 4 },
  { seller: 'Paxton Jaskolski', avgRating: 3 },
  { seller: 'Dallin Torphy', avgRating: 4 },
  { seller: 'Dr. Jose Grimes', avgRating: 3 },
  { seller: 'Tyrique Koss V', avgRating: 3 },
  { seller: 'Ralph Sanford', avgRating: 3 },
  { seller: 'Jacklyn Thompson', avgRating: 3 },
  { seller: 'Eric Oberbrunner', avgRating: 3 },
  { seller: 'Joyce Thiel', avgRating: 4 },
  { seller: 'Mr. Sabina Zulauf', avgRating: 4 },
  { seller: 'Randal Langosh', avgRating: 4 },
  { seller: 'Tressie Medhurst', avgRating: 4 },
  { seller: 'Mrs. Sarai Flatley', avgRating: 3 },
  { seller: 'Damian Schultz', avgRating: 3 },
  { seller: 'Maximo Hodkiewicz', avgRating: 4 },
  { seller: 'Trycia Labadie', avgRating: 3 },
  { seller: 'Leonora Bailey', avgRating: 3 },
  { seller: 'Federico Bailey', avgRating: 3 },
  { seller: "Camryn O'Keefe", avgRating: 4 },
  { seller: 'Lorenz Considine', avgRating: 3 },
  { seller: 'Landen Haag', avgRating: 4 },
  { seller: 'Cynthia Medhurst', avgRating: 3 },
  { seller: 'Kailyn Thompson IV', avgRating: 4 },
  { seller: 'Jamar White', avgRating: 3 },
  { seller: 'Rick Gerhold', avgRating: 3 },
  { seller: "Chandler O'Keefe V", avgRating: 4 },
  { seller: 'Dallas Kemmer', avgRating: 3 },
  { seller: 'Delbert Turner', avgRating: 3 },
  { seller: "Reilly O'Hara", avgRating: 3 },
  { seller: 'Amalia Bednar Jr.', avgRating: 4 },
  { seller: 'Shad Gleichner DVM', avgRating: 3 },
  { seller: 'Chase Smitham', avgRating: 3 },
  { seller: 'Kyla Veum', avgRating: 3 },
  { seller: 'Ms. Chaya Johnson', avgRating: 3 },
  { seller: 'Flavie Weimann', avgRating: 3 },
  { seller: 'Ms. Lauren Sporer', avgRating: 4 },
  { seller: 'Vilma Bartoletti Sr.', avgRating: 3 },
  { seller: 'Alexandra Wolf', avgRating: 3 },
  { seller: 'Ismael Kling', avgRating: 3 },
  { seller: 'Ms. Giovanna Runte', avgRating: 3 },
  { seller: 'Parker McKenzie', avgRating: 4 },
  { seller: 'Tabitha Balistreri', avgRating: 3 },
  { seller: 'Maudie McCullough', avgRating: 3 },
  { seller: 'Else Corkery', avgRating: 4 },
  { seller: 'Percival King', avgRating: 3 },
  { seller: 'Yoshiko Bayer DVM', avgRating: 3 },
  { seller: 'Filiberto Veum', avgRating: 4 },
  { seller: 'Mr. Bethel Olson', avgRating: 3 },
  { seller: 'Autumn Hodkiewicz', avgRating: 4 },
  { seller: 'Delilah Pollich', avgRating: 3 },
  { seller: 'Bonita Bogisich', avgRating: 4 },
  { seller: 'Jermaine Jones', avgRating: 3 },
  { seller: 'Gina Brown', avgRating: 3 },
  { seller: 'Heloise Hintz', avgRating: 4 },
  { seller: 'Jaquelin Murphy', avgRating: 3 },
  { seller: 'Ms. Doug Wolf', avgRating: 3 },
  { seller: 'Sydnie Marvin V', avgRating: 3 },
  { seller: 'Clare Will', avgRating: 3 },
  { seller: 'Tamara Becker MD', avgRating: 3 },
  { seller: 'Otho Nader', avgRating: 3 },
  { seller: 'Easter Mosciski', avgRating: 3 },
  { seller: 'Laila Stamm', avgRating: 3 },
  { seller: 'Dessie Ankunding', avgRating: 4 },
  { seller: 'Mr. Delta Vandervort', avgRating: 3 },
  { seller: 'Faye Davis', avgRating: 3 },
  { seller: 'Enrico Willms', avgRating: 3 },
  { seller: 'Rebeka Nikolaus', avgRating: 3 },
  { seller: 'Helen Stoltenberg', avgRating: 4 },
  { seller: 'Keely Reynolds', avgRating: 3 },
  { seller: 'Minnie Schultz', avgRating: 4 },
  { seller: 'Mr. Kyleigh Dickens', avgRating: 4 },
  { seller: 'Lauryn Breitenberg', avgRating: 3 },
  { seller: 'Amaya Welch', avgRating: 3 },
  { seller: 'Christina Donnelly', avgRating: 3 },
  { seller: 'Al Wintheiser', avgRating: 3 },
  { seller: 'Justyn Schowalter', avgRating: 3 },
  { seller: 'Tia Heller', avgRating: 3 },
  { seller: 'Dell Bednar', avgRating: 3 },
  { seller: 'Daphney Denesik', avgRating: 4 },
  { seller: 'Howell Rowe', avgRating: 3 },
  { seller: 'Manuela Kilback', avgRating: 3 }
];

module.exports = { sellerData };
