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
      { name: 'Острый бургер', description: 'булочка, котлета, маринованный огурец, помидор, айсберг, соус острый, майонез', price: 239, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=260&fit=crop' },
      { name: 'Бургер американец', price: 249, image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=260&fit=crop' },
      { name: 'Бургер мексиканец', price: 239, image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=260&fit=crop' },
      { name: 'Бургер британец', price: 239, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=260&fit=crop' },
      { name: 'Чизбургер', description: 'булочка, котлета, помидор, маринованный огурец, салат, сыр пармезан, чесночный соус, кетчуп', price: 245, image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=260&fit=crop' },
      { name: 'Гамбургер', description: 'булочка, котлета, помидор, маринованный огурец, салат, кетчуп, чесночный соус', price: 229, image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&h=260&fit=crop' },
      { name: 'Чиккен бургер', description: 'булочка, курица в панировке, огурец, помидор, салат, кетчуп, чесночный соус', price: 199, image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&h=260&fit=crop' },
      { name: 'Бургер тар-тар', description: 'булочка, курица в панировке, айсберг, помидор, маринованный огурец, соус тар-тар, кетчуп', price: 239, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&h=260&fit=crop' },
    ],
  },
  {
    id: 'shawarma',
    label: 'Шаурма',
    defaultImage: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=260&fit=crop',
    items: [
      { name: 'Шаурма в пите', description: 'лепёшка пите, мясо говядины, мясо куриный, огурец, помидор, картошка, фри, чесночный соус, кетчуп', price: 249, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=260&fit=crop' },
      { name: 'Шаурма говядина', description: 'лаваш, картошка фри, говядина, помидор, огурец, кетчуп, чесночный соус', price: 190, image: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=400&h=260&fit=crop' },
      { name: 'Шаурма говядина двойной', price: 280, image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=260&fit=crop' },
      { name: 'Шаурма куриный', price: 175, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=260&fit=crop' },
    ],
  },
  {
    id: 'twister',
    label: 'Твистеры',
    defaultImage: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=260&fit=crop',
    items: [
      { name: 'Твистер', description: 'лаваш, огурец, помидор, куриный стрипсы, чесночный соус, кетчуп', price: 165, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=260&fit=crop' },
      { name: 'Лонгер', description: 'булочка, куриный стрипсы, огурец, помидор, чесночный соус', price: 170, image: 'https://images.unsplash.com/photo-1484723091739-30anf1b3b97e?w=400&h=260&fit=crop' },
      { name: 'Хот-дог', description: 'бутерброд, огурец, свежий огурец, огурец маринованный, кетчуп, майонез, сосиска халол', price: 199, image: 'https://images.unsplash.com/photo-1612392062631-94b5b5b8c5b1?w=400&h=260&fit=crop' },
      { name: 'Ролл цезарь', description: 'курица в панировке, салат, ломтик помидора, огурец, соус цезарь, сыр пармезан', price: 199, image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=260&fit=crop' },
    ],
  },
  {
    id: 'pizza',
    label: 'Пицца',
    defaultImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=260&fit=crop',
    items: [
      { name: 'Пепперонни', description: 'томатный соус, сыр моцарелла, пеперони', price: 350, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=260&fit=crop' },
      { name: 'Цезарь', description: 'цезарь соус, сыр моцарелла, курица, айсберг, сыр пармезан, помидор', price: 380, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=260&fit=crop' },
      { name: 'Ассорти', description: 'томатный соус, сыр моцарелла, пеперони, говядина, помидор, перец', price: 400, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=260&fit=crop' },
      { name: 'Домашний', description: 'томатный соус, сыр моцарелла, помидор, мясо куриный и говяжий', price: 370, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=260&fit=crop' },
      { name: '4 сезона', description: 'томатный соус, сыр моцарелла, пеперони, помидор, мясо куриный и говяжий', price: 420, image: 'https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400&h=260&fit=crop' },
      { name: 'Мясной', description: 'цезарь соус, сыр моцарелла, мясо говядина', price: 390, image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=400&h=260&fit=crop' },
      { name: 'Куриный', description: 'томатный соус, сыр моцарелла, мясо куриный', price: 360, image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&h=260&fit=crop' },
      { name: 'Маргарита', description: 'томатный соус, сыр моцарелла, помидоры', price: 320, image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=260&fit=crop' },
      { name: '3 сыра', description: 'сырный соус, сыр моцарелла, сыр чедер, сыр пармезан', price: 380, image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&h=260&fit=crop' },
    ],
  },
  {
    id: 'rolls',
    label: 'Роллы',
    defaultImage: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=260&fit=crop',
    items: [
      { name: 'Филадельфия', price: 349, image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&h=260&fit=crop' },
      { name: 'Опалённый филадельфия', price: 359, image: 'https://images.unsplash.com/photo-1617196034099-58b4f3b9b7e3?w=400&h=260&fit=crop' },
      { name: 'Хоккайдо', price: 339, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=260&fit=crop' },
      { name: 'Сырный', price: 289, image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=400&h=260&fit=crop' },
      { name: 'Калифорния', price: 259, image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&h=260&fit=crop' },
      { name: 'Инь-Янь', price: 289, image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=260&fit=crop' },
      { name: 'Жареный с лососем', price: 299, image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&h=260&fit=crop' },
      { name: 'Жареный с угрём', price: 299, image: 'https://images.unsplash.com/photo-1617196034099-58b4f3b9b7e3?w=400&h=260&fit=crop' },
      { name: 'Жареный жаркое лето', price: 299, image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&h=260&fit=crop' },
      { name: 'Жареный куриный', price: 299, image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=260&fit=crop' },
      { name: 'Запечённый с лососем', price: 299, image: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&h=260&fit=crop' },
      { name: 'Запечённый с угрём', price: 299, image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=400&h=260&fit=crop' },
      { name: 'Запечённый хитаки', price: 299, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=260&fit=crop' },
      { name: 'Запечённый куриный', price: 299, image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=260&fit=crop' },
      { name: 'Ролл с лососем', price: 249, image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&h=260&fit=crop' },
      { name: 'Ролл с угрём', price: 249, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=260&fit=crop' },
      { name: 'Ролл с курицей', price: 249, image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400&h=260&fit=crop' },
      { name: 'Ролл с овощами', price: 249, image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400&h=260&fit=crop' },
    ],
  },
  {
    id: 'fryer',
    label: 'Фритюр',
    defaultImage: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=260&fit=crop',
    items: [
      { name: 'Острые крылышки', price: 200, image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=260&fit=crop' },
      { name: 'Крылышки в соусе барбекю', price: 220, image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=260&fit=crop' },
      { name: 'Стрипсы', price: 180, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=260&fit=crop' },
      { name: 'Нагетцы', price: 170, image: 'https://images.unsplash.com/photo-1611171711912-e3f8b1b4c8bb?w=400&h=260&fit=crop' },
      { name: 'Сырные палочки', price: 199, image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&h=260&fit=crop' },
      { name: 'Фри', price: 90, image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&h=260&fit=crop' },
      { name: 'Деревенский', price: 100, image: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400&h=260&fit=crop' },
    ],
  },
  {
    id: 'dishes',
    label: 'Блюда',
    defaultImage: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=260&fit=crop',
    items: [
      { name: 'Стейк филе', description: 'жареный курица, салатный лист, огурец, помидор, лимон, чесночный соус', price: 299, image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=260&fit=crop' },
      { name: 'Рамён с курицей', description: 'лапша, курица, яйцо, кунжут, зелень, специи', price: 220, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=260&fit=crop' },
      { name: 'Рамён говядина', description: 'лапша, мясо говядины, яйцо, кунжут, зелень, специи', price: 250, image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=400&h=260&fit=crop' },
    ],
  },
  {
    id: 'combo',
    label: 'Комбо',
    defaultImage: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=260&fit=crop',
    items: [
      { name: 'Комбо №1', description: 'Рамён куриный, фри, чай, лепёшка', price: 350, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=260&fit=crop' },
      { name: 'Комбо №2', description: 'Чиккен бургер, гамбургер, фри, кола 1л', price: 480, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=260&fit=crop' },
      { name: 'Комбо №3', description: 'Стрипсы 6шт, нагетцы 6шт, фри, соус на выбор, фанта/кола на выбор', price: 520, image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=260&fit=crop' },
      { name: 'Комбо №4', description: 'Пицца мясной, крылышки 24шт, стрипсы 12шт, соус, кетчуп', price: 1200, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=260&fit=crop' },
      { name: 'Комбо №5', description: 'Пицца маргарита 40см, крылышки 12шт, фри, фанта/кола, соус кетчуп, соус сырный', price: 900, image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=260&fit=crop' },
      { name: 'Комбо №6', description: 'Шаурма в пите кур, шаурма кур, фанта/кола 1л, пицца 4 сезона 40см', price: 850, image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=260&fit=crop' },
      { name: 'Комбо №7', description: 'Пицца маргарита 40см, пицца мясной 30см, пицца куриный 30см', price: 1100, image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=260&fit=crop' },
      { name: 'Комбо №8', description: 'Крылышки 4шт, шаурма кур, чай', price: 380, image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400&h=260&fit=crop' },
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
      { name: 'Пепси 0.5л', price: 70, image: 'https://images.unsplash.com/photo-1532980400857-e8d9d275d858?w=400&h=260&fit=crop' },
      { name: 'Кола 0.5л', price: 70, image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=260&fit=crop' },
      { name: 'Фанта 0.5л', price: 70, image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=260&fit=crop' },
      { name: 'Пепси 1л', price: 100, image: 'https://images.unsplash.com/photo-1532980400857-e8d9d275d858?w=400&h=260&fit=crop' },
      { name: 'Кола 1л', price: 100, image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=260&fit=crop' },
      { name: 'Фанта 1л', price: 100, image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=260&fit=crop' },
    ],
  },
];
