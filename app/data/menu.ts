export type MenuItem = {
  name: string;
  description?: string;
  price: number;
  image?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  defaultImage: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: 'burgers',
    label: 'Бургеры',
    defaultImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=260&fit=crop',
    items: [
      { name: 'Чизбургер', description: 'булочка, котлета, помидор, маринованный огурец, салат, сыр пармезан, чесночный соус, кетчуп', price: 239, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=260&fit=crop' },
      { name: 'Гамбургер', description: 'булочка, котлета, помидор, маринованный огурец, салат, кетчуп, чесночный соус', price: 219, image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&h=260&fit=crop' },
      { name: 'Чиккен бургер', description: 'булочка, курица в панировке, огурец, помидор, салат, кетчуп, чесночный соус', price: 189, image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=260&fit=crop' },
      { name: 'Острый бургер', description: 'булочка, котлета, маринованный огурец, помидор, айсберг, соус острый, майонез', price: 239, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=260&fit=crop' },
      { name: 'Блек бургер', price: 249, image: '/images/black-burger.jpg' },
      { name: 'Бургер американец', price: 234, image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=260&fit=crop' },
      { name: 'Бургер мексиканец', price: 235, image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=260&fit=crop' },
      { name: 'Бургер британец', price: 249, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=260&fit=crop' },
    ],
  },
  {
    id: 'shawarma',
    label: 'Шаурма',
    defaultImage: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=260&fit=crop',
    items: [
      { name: 'Шаурма в пите', price: 249, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=260&fit=crop' },
      { name: 'Шаурма с говядиной', price: 239, image: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=400&h=260&fit=crop' },
      { name: 'Шаурма с говядиной двойной', price: 260, image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=260&fit=crop' },
      { name: 'Шаурма куриный', price: 219, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=260&fit=crop' },
      { name: 'Шаурма куриный двойной', price: 249, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=260&fit=crop' },
    ],
  },
  {
    id: 'school',
    label: 'Для школьников',
    defaultImage: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=260&fit=crop',
    items: [
      { name: 'Твистер', description: 'лаваш, огурец, помидор, куриный стрипсы, чесночный соус, кетчуп', price: 150, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=260&fit=crop' },
      { name: 'Лонгер', description: 'булочка, куриный стрипсы, огурец, помидор, чесночный соус', price: 165, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=260&fit=crop' },
      { name: 'Хот-дог', description: 'бутерброд, огурец свежий, огурец маринованный, кетчуп, майонез, сосиска халал', price: 199, image: 'https://images.unsplash.com/photo-1612392062631-94b5b5b8c5b1?w=400&h=260&fit=crop' },
      { name: 'Ролл цезарь', description: 'курица в панировке, салат, ломтик помидора, огурец, соус цезарь, сыр пармезан', price: 199, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=260&fit=crop' },
    ],
  },
  {
    id: 'pizza',
    label: 'Пицца',
    defaultImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=260&fit=crop',
    items: [
      { name: 'Мясной', description: '40см — 450с | 30см — 350с | цезарь соус, сыр моцарелла, мясо говядина', price: 350, image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400&h=260&fit=crop' },
      { name: 'Куриный', description: '40см — 450с | 30см — 350с | томатный соус, сыр моцарелла, мясо куриный', price: 350, image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&h=260&fit=crop' },
      { name: 'Маргарита', description: '40см — 429с | 30см — 350с | томатный соус, сыр моцарелла, помидоры', price: 350, image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=260&fit=crop' },
      { name: '4 сыра', description: '40см — 450с | 30см — 350с | сырный соус, сыр моцарелла, сыр чедер, сыр пармезан', price: 350, image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=260&fit=crop' },
      { name: 'Цезарь', description: '40см — 450с | 30см — 350с | цезарь соус, сыр моцарелла, курица, айсберг, сыр пармезан, помидор', price: 350, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=260&fit=crop' },
      { name: 'Ассорти', description: '40см — 450с | 30см — 350с | томатный соус, сыр моцарелла, пеперони, говядина, помидор, перец красный зелёный', price: 350, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=260&fit=crop' },
      { name: 'Домашний', description: '40см — 450с | 30см — 350с | томатный соус, сыр моцарелла, помидор, мясо куриный и говяжий', price: 350, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=260&fit=crop' },
      { name: 'Пепперонни', description: '40см — 450с | 30см — 350с | томатный соус, сыр моцарелла, пеперони', price: 350, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=260&fit=crop' },
      { name: '4 сезона', description: '40см — 450с | 30см — 350с | томатный соус, сыр моцарелла, пеперони, помидор, мясо куриный и говяжий', price: 350, image: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400&h=260&fit=crop' },
    ],
  },
  {
    id: 'rolls',
    label: 'Роллы',
    defaultImage: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=260&fit=crop',
    items: [
      { name: 'Филадельфия', price: 349, image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&h=260&fit=crop' },
      { name: 'Опалённый филадельфия', price: 359, image: 'https://images.unsplash.com/photo-1617196034099-58b4f3b9b7e3?w=400&h=260&fit=crop' },
      { name: 'Хоккайдо', price: 349, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=260&fit=crop' },
      { name: 'Сырный', price: 329, image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=400&h=260&fit=crop' },
      { name: 'Калифорния', price: 299, image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&h=260&fit=crop' },
      { name: 'Инь-Янь', price: 329, image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=260&fit=crop' },
      { name: 'Хоккайдо в массаге', price: 299, image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&h=260&fit=crop' },
      { name: 'Филадельфия в массаге', price: 319, image: 'https://images.unsplash.com/photo-1617196034099-58b4f3b9b7e3?w=400&h=260&fit=crop' },
      { name: 'Жаренный с лососем', price: 339, image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&h=260&fit=crop' },
      { name: 'Жаренный с угрём', price: 319, image: 'https://images.unsplash.com/photo-1617196034099-58b4f3b9b7e3?w=400&h=260&fit=crop' },
      { name: 'Жаренный жаркое лето', price: 319, image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&h=260&fit=crop' },
      { name: 'Жаренный куриный', price: 319, image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=260&fit=crop' },
      { name: 'Запечённый с лососем', price: 319, image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&h=260&fit=crop' },
      { name: 'Запечённый с угрём', price: 299, image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=400&h=260&fit=crop' },
      { name: 'Запечённый куриный', price: 299, image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=260&fit=crop' },
      { name: 'Запечённый с сыром', price: 299, image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&h=260&fit=crop' },
      { name: 'Запечённый с массагой', price: 299, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=260&fit=crop' },
      { name: 'Ролл с лососем', price: 249, image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&h=260&fit=crop' },
      { name: 'Ролл с угрём', price: 239, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=260&fit=crop' },
      { name: 'Ролл с курицей', price: 239, image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=260&fit=crop' },
      { name: 'Ролл с овощами', price: 269, image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&h=260&fit=crop' },
      { name: 'Ролл творожный', price: 199, image: 'https://images.unsplash.com/photo-1617196034099-58b4f3b9b7e3?w=400&h=260&fit=crop' },
      { name: 'Ролл с огурцом', price: 199, image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=400&h=260&fit=crop' },
      { name: 'Ролл микс', price: 229, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=260&fit=crop' },
    ],
  },
  {
    id: 'sets',
    label: 'Сеты',
    defaultImage: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&h=260&fit=crop',
    items: [
      { name: 'Сет №1', description: 'Филадельфия, калифорния, запечённый ролл с угрём, жаренный ролл с лососем, ролл с огурцом', price: 1199, image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&h=260&fit=crop' },
      { name: 'Сет №2', description: 'Опалённый филадельфия, хоккайдо в массаге, жаренный ролл с лососем, запечённый ролл с курицей, мини ролл творожный', price: 1249, image: 'https://images.unsplash.com/photo-1617196034099-58b4f3b9b7e3?w=400&h=260&fit=crop' },
      { name: 'Сет №3', description: 'Хоккайдо, инь-янь, жаренный ролл с курицей, запечённый ролл хитаки', price: 999, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=260&fit=crop' },
      { name: 'Сет №4', description: 'Жаренный ролл с лососем, жаренный ролл с угрём, запечённый ролл хитаки', price: 999, image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&h=260&fit=crop' },
      { name: 'Сет №5', description: 'Инь-Янь, запечённый ролл, ролл с огурцом', price: 699, image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=260&fit=crop' },
      { name: 'Сет №6', description: 'Хоккайдо, жаренный ролл с курицей, ролл с угрём', price: 749, image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=400&h=260&fit=crop' },
      { name: 'Сет №7', description: 'Сырный ролл, жаренный ролл с угрём, запечённый ролл хитаки', price: 749, image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&h=260&fit=crop' },
      { name: 'Сет №8', description: 'Филадельфия в массаге, запечённый ролл с угрём, ролл творожный', price: 699, image: 'https://images.unsplash.com/photo-1617196034099-58b4f3b9b7e3?w=400&h=260&fit=crop' },
    ],
  },
  {
    id: 'fryer',
    label: 'Фритюр',
    defaultImage: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=260&fit=crop',
    items: [
      { name: 'Нагетцы', price: 169, image: 'https://images.unsplash.com/photo-1611171711912-e3f8b1b4c8bb?w=400&h=260&fit=crop' },
      { name: 'Сырные палочки', price: 199, image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&h=260&fit=crop' },
      { name: 'Картофель Фри', description: '120гр — 90с | 200гр — 120с', price: 90, image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&h=260&fit=crop' },
      { name: 'Картофель по-деревенски', description: '120гр — 90с | 200гр — 120с', price: 90, image: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400&h=260&fit=crop' },
      { name: 'Куриные крылышки', description: '4шт — 169с | 8шт — 331с | 12шт — 486с | 16шт — 649с | 24шт — 979с | 32шт — 1305с', price: 169, image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=260&fit=crop' },
      { name: 'Крылышки в соусе барбекю', description: '4шт — 164с | 8шт — 329с | 12шт — 479с | 16шт — 649с | 24шт — 959с | 32шт — 1295с', price: 164, image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=260&fit=crop' },
      { name: 'Куриные стрипсы', description: '4шт — 161с | 6шт — 236с | 8шт — 309с | 12шт — 456с', price: 161, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=260&fit=crop' },
    ],
  },
  {
    id: 'dishes',
    label: 'Блюда',
    defaultImage: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=260&fit=crop',
    items: [
      { name: 'Стейк филе', description: 'жареный курица, салатный лист, огурец, помидор, лимон, чесночный соус', price: 299, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=260&fit=crop' },
      { name: 'Рамён с курицей', description: 'лапша, курица, яйцо, кунжут, зелень, специи', price: 219, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=260&fit=crop' },
      { name: 'Рамён говядина', description: 'лапша, мясо говядины, яйцо, кунжут, зелень, специи', price: 239, image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&h=260&fit=crop' },
    ],
  },
  {
    id: 'combo',
    label: 'Комбо',
    defaultImage: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=260&fit=crop',
    items: [
      { name: 'Комбо №1', description: 'Рамён куриный, фри, чай, лепёшка', price: 349, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=260&fit=crop' },
      { name: 'Комбо №2', description: 'Чиккен бургер, гамбургер, фри, кола 1л', price: 649, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=260&fit=crop' },
      { name: 'Комбо №3', description: 'Стрипсы 6шт, нагетцы 6шт, фри, соус на выбор, фанта/кола на выбор', price: 599, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=260&fit=crop' },
      { name: 'Комбо №4', description: 'Пицца мясной, крылышки 24шт, стрипсы 12шт, соус, кетчуп', price: 1799, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=260&fit=crop' },
      { name: 'Комбо №5', description: 'Пицца маргарита 40см, крылышки 12шт, фри, фанта/кола на выбор, соус кетчуп, соус сырный', price: 1099, image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=260&fit=crop' },
      { name: 'Комбо №6', description: 'Гамбургер, шаурма кур, фанта/кола 1л на выбор, пицца 4 сезона 40см', price: 1000, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=260&fit=crop' },
      { name: 'Комбо №7', description: 'Пицца маргарита 40см, пицца мясной 40см, пицца куриный 40см', price: 1099, image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=260&fit=crop' },
      { name: 'Комбо №8', description: 'Крылышки 4шт, шаурма кур, чай', price: 349, image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=260&fit=crop' },
    ],
  },
  {
    id: 'drinks',
    label: 'Напитки',
    defaultImage: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=260&fit=crop',
    items: [
      { name: 'Черный чай', price: 20, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=260&fit=crop' },
      { name: 'Зелёный чай', price: 20, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=260&fit=crop' },
      { name: 'Чай с лимоном', price: 50, image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=260&fit=crop' },
      { name: 'Чай с наватом', price: 30, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=260&fit=crop' },
      { name: 'Каркаде чай', price: 90, image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=260&fit=crop' },
      { name: 'Pepsi', description: '0.5л — 70с | 1л — 100с | 1.5л — 160с | 2л — 200с', price: 70, image: 'https://images.unsplash.com/photo-1532980400857-e8d9d275d858?w=400&h=260&fit=crop' },
      { name: 'Coca-Cola', description: '0.5л — 70с | 1л — 100с | 1.5л — 160с | 2л — 200с', price: 70, image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=260&fit=crop' },
      { name: 'Fanta', description: '0.5л — 70с | 1л — 100с | 1.5л — 160с | 2л — 200с', price: 70, image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=260&fit=crop' },
      { name: 'Fuce tea', description: 'ананас, манго, ромашка, персик | 0.5л — 70с | 1л — 100с', price: 70, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=260&fit=crop' },
      { name: 'Piko', description: 'смородина, апельсин | 0.5л — 85с | 1л — 150с', price: 85, image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=260&fit=crop' },
      { name: 'Piko мини', price: 50, image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=260&fit=crop' },
      { name: 'Flavis', description: 'гранат, груша, мохито, голубика, клубника | 0.5л — 85с | 1.25л — 150с', price: 85, image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=260&fit=crop' },
      { name: 'Bon aqua', description: '0.5л — 35с | 1л — 60с', price: 35, image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=260&fit=crop' },
    ],
  },
];
