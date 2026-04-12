export type MenuVariant = {
  label: string;
  price: number;
};

export type MenuItem = {
  name: string;
  description?: string;
  price: number;
  image?: string;
  variants?: MenuVariant[];
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
      { name: 'Чизбургер', description: 'булочка, котлета, помидор, маринованный огурец, салат, сыр пармезан, чесночный соус, кетчуп', price: 239, image: '/images/burger-chiz.jpg' },
      { name: 'Гамбургер', description: 'булочка, котлета, помидор, маринованный огурец, салат, кетчуп, чесночный соус', price: 219, image: '/images/burger-hamburger.jpg' },
      { name: 'Чиккен бургер', description: 'булочка, курица в панировке, огурец, помидор, салат, кетчуп, чесночный соус', price: 189, image: '/images/burger-chicken.jpg' },
      { name: 'Острый бургер', description: 'булочка, котлета, маринованный огурец, помидор, айсберг, соус острый, майонез', price: 239, image: '/images/burger-spicy.jpg' },
      { name: 'Блек бургер', price: 249, image: '/images/black-burger.jpg' },
      { name: 'Бургер американец', price: 234, image: '/images/burger-american.jpg' },
      { name: 'Бургер мексиканец', price: 235, image: '/images/burger-mexican.jpg' },
      { name: 'Бургер британец', price: 249, image: '/images/burger-british.jpg' },
    ],
  },
  {
    id: 'shawarma',
    label: 'Шаурма',
    defaultImage: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=260&fit=crop',
    items: [
      { name: 'Шаурма в пите', price: 249, image: '/images/shawarma-pita.png' },
      { name: 'Шаурма с говядиной', price: 239, image: '/images/shawarma-beef.png' },
      { name: 'Шаурма с говядиной двойной', price: 260, image: '/images/shawarma-beef-double.png' },
      { name: 'Шаурма куриный', price: 219, image: '/images/shawarma-chicken.png' },
      { name: 'Шаурма куриный двойной', price: 249, image: '/images/shawarma-chicken-double.png' },
    ],
  },
  {
    id: 'school',
    label: 'Для школьников',
    defaultImage: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=260&fit=crop',
    items: [
      { name: 'Твистер', description: 'лаваш, огурец, помидор, куриный стрипсы, чесночный соус, кетчуп', price: 150, image: '/images/school-twister.jpeg' },
      { name: 'Лонгер', description: 'булочка, куриный стрипсы, огурец, помидор, чесночный соус', price: 165, image: '/images/school-longer.png' },
      { name: 'Хот-дог', description: 'бутерброд, огурец свежий, огурец маринованный, кетчуп, майонез, сосиска халал', price: 199, image: '/images/school-hotdog.jpeg' },
      { name: 'Ролл цезарь', description: 'курица в панировке, салат, ломтик помидора, огурец, соус цезарь, сыр пармезан', price: 199, image: '/images/school-roll-caesar.png' },
    ],
  },
  {
    id: 'pizza',
    label: 'Пицца',
    defaultImage: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=260&fit=crop',
    items: [
      { name: 'Мясной', description: 'цезарь соус, сыр моцарелла, мясо говядина', price: 450, image: '/images/pizza-meat.jpeg', variants: [{ label: '40 см', price: 450 }, { label: '30 см', price: 350 }] },
      { name: 'Куриный', description: 'томатный соус, сыр моцарелла, мясо куриный', price: 450, image: '/images/pizza-chicken.png', variants: [{ label: '40 см', price: 450 }, { label: '30 см', price: 350 }] },
      { name: 'Маргарита', description: 'томатный соус, сыр моцарелла, помидоры', price: 429, image: '/images/pizza-margarita.jpeg', variants: [{ label: '40 см', price: 429 }, { label: '30 см', price: 350 }] },
      { name: '4 сыра', description: 'сырный соус, сыр моцарелла, сыр чедер, сыр пармезан', price: 450, image: '/images/pizza-4cheese.jpeg', variants: [{ label: '40 см', price: 450 }, { label: '30 см', price: 350 }] },
      { name: 'Цезарь', description: 'цезарь соус, сыр моцарелла, курица, айсберг, сыр пармезан, помидор', price: 450, image: '/images/pizza-caesar.jpeg', variants: [{ label: '40 см', price: 450 }, { label: '30 см', price: 350 }] },
      { name: 'Ассорти', description: 'томатный соус, сыр моцарелла, пеперони, говядина, помидор, перец красный зелёный', price: 450, image: '/images/pizza-assorti.png', variants: [{ label: '40 см', price: 450 }, { label: '30 см', price: 350 }] },
      { name: 'Домашний', description: 'томатный соус, сыр моцарелла, помидор, мясо куриный и говяжий', price: 450, image: '/images/pizza-home.jpeg', variants: [{ label: '40 см', price: 450 }, { label: '30 см', price: 350 }] },
      { name: 'Пепперонни', description: 'томатный соус, сыр моцарелла, пеперони', price: 450, image: '/images/pizza-pepperoni.png', variants: [{ label: '40 см', price: 450 }, { label: '30 см', price: 350 }] },
      { name: '4 сезона', description: 'томатный соус, сыр моцарелла, пеперони, помидор, мясо куриный и говяжий', price: 450, image: '/images/pizza-4seasons.jpeg', variants: [{ label: '40 см', price: 450 }, { label: '30 см', price: 350 }] },
    ],
  },
  {
    id: 'rolls',
    label: 'Роллы',
    defaultImage: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=260&fit=crop',
    items: [
      { name: 'Филадельфия', price: 349, image: '/images/roll-philadelphia.jpeg' },
      { name: 'Опалённый филадельфия', price: 359, image: '/images/roll-philadelphia-burned.jpeg' },
      { name: 'Хоккайдо', price: 349, image: '/images/roll-hokkaido.jpeg' },
      { name: 'Сырный', price: 329, image: '/images/roll-cheese.png' },
      { name: 'Калифорния', price: 299, image: '/images/roll-california.jpeg' },
      { name: 'Инь-Янь', price: 329, image: '/images/roll-yin-yang.jpeg' },
      { name: 'Хоккайдо в массаге', price: 299, image: '/images/roll-hokkaido-massage.jpeg' },
      { name: 'Филадельфия в массаге', price: 319, image: '/images/roll-philadelphia-massage.jpeg' },
      { name: 'Жаренный с лососем', price: 339, image: '/images/roll-fried-salmon.jpeg' },
      { name: 'Жаренный с угрём', price: 319, image: '/images/roll-fried-eel.jpeg' },
      { name: 'Жаренный жаркое лето', price: 319, image: '/images/roll-fried-summer.jpeg' },
      { name: 'Жаренный куриный', price: 319, image: '/images/roll-fried-chicken.jpeg' },
      { name: 'Запечённый с лососем', price: 319, image: '/images/roll-baked-salmon.jpeg' },
      { name: 'Запечённый с угрём', price: 299, image: '/images/roll-baked-eel.jpeg' },
      { name: 'Запечённый куриный', price: 299, image: '/images/roll-baked-chicken.jpeg' },
      { name: 'Запечённый с сыром', price: 299, image: '/images/roll-baked-cheese.jpeg' },
      { name: 'Запечённый с массагой', price: 299, image: '/images/roll-baked-massage.jpeg' },
      { name: 'Ролл с лососем', price: 249, image: '/images/roll-salmon.jpeg' },
      { name: 'Ролл с угрём', price: 239, image: '/images/roll-eel.jpeg' },
      { name: 'Ролл с курицей', price: 239, image: '/images/roll-chicken.jpeg' },
      { name: 'Ролл с овощами', price: 269, image: '/images/roll-vegetables.jpeg' },
      { name: 'Ролл творожный', price: 199, image: '/images/roll-cottage.jpeg' },
      { name: 'Ролл с огурцом', price: 199, image: '/images/roll-cucumber.jpeg' },
      { name: 'Ролл микс', price: 229, image: '/images/roll-mix.jpeg' },
    ],
  },
  {
    id: 'sets',
    label: 'Сеты',
    defaultImage: 'https://images.unsplash.com/photo-1617196034183-421b4040ed20?w=400&h=260&fit=crop',
    items: [
      { name: 'Сет №1', description: 'Филадельфия, Калифорния, Запечённый ролл с угрём, Жаренный ролл с лососем, Ролл с огурцом', price: 1199, image: '/images/roll-philadelphia.jpeg' },
      { name: 'Сет №2', description: 'Опалённый филадельфия, Хоккайдо в массаге, Жаренный ролл с лососем, Запечённый ролл с курицей, Мини ролл творожный', price: 1249, image: '/images/roll-philadelphia-burned.jpeg' },
      { name: 'Сет №3', description: 'Хоккайдо, Инь-Янь, Жаренный ролл с курицей, Запечённый ролл хитаки', price: 999, image: '/images/roll-hokkaido.jpeg' },
      { name: 'Сет №4', description: 'Жаренный ролл с лососем, Жаренный ролл с угрём, Запечённый ролл хитаки', price: 999, image: '/images/roll-fried-salmon.jpeg' },
      { name: 'Сет №5', description: 'Инь-Янь, Запечённый ролл, Ролл с огурцом', price: 699, image: '/images/roll-yin-yang.jpeg' },
      { name: 'Сет №6', description: 'Хоккайдо, Жаренный ролл с курицей, Ролл с угрём', price: 749, image: '/images/roll-fried-chicken.jpeg' },
      { name: 'Сет №7', description: 'Сырный ролл, Жаренный ролл с угрём, Запечённый ролл хитаки', price: 749, image: '/images/roll-cheese.png' },
      { name: 'Сет №8', description: 'Филадельфия в массаге, Запечённый ролл с угрём, Ролл творожный', price: 699, image: '/images/roll-philadelphia-massage.jpeg' },
    ],
  },
  {
    id: 'fryer',
    label: 'Фритюр',
    defaultImage: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=260&fit=crop',
    items: [
      { name: 'Нагетцы', price: 169, image: '/images/fryer-nuggets.png' },
      { name: 'Сырные палочки', price: 199, image: '/images/fryer-cheese-sticks.jpeg' },
      { name: 'Картофель Фри', price: 90, image: '/images/fryer-fries.png', variants: [{ label: '120 гр', price: 90 }, { label: '200 гр', price: 120 }] },
      { name: 'Картофель по-деревенски', price: 90, image: '/images/fryer-potato-village.jpeg', variants: [{ label: '120 гр', price: 90 }, { label: '200 гр', price: 120 }] },
      { name: 'Куриные крылышки', price: 169, image: '/images/fryer-wings.jpg', variants: [{ label: '4 шт', price: 169 }, { label: '8 шт', price: 331 }, { label: '12 шт', price: 486 }, { label: '16 шт', price: 649 }, { label: '24 шт', price: 979 }, { label: '32 шт', price: 1305 }] },
      { name: 'Крылышки в соусе барбекю', price: 164, image: '/images/fryer-bbq-wings.jpeg', variants: [{ label: '4 шт', price: 164 }, { label: '8 шт', price: 329 }, { label: '12 шт', price: 479 }, { label: '16 шт', price: 649 }, { label: '24 шт', price: 959 }, { label: '32 шт', price: 1295 }] },
      { name: 'Куриные стрипсы', price: 161, image: '/images/fryer-strips.png', variants: [{ label: '4 шт', price: 161 }, { label: '6 шт', price: 236 }, { label: '8 шт', price: 309 }, { label: '12 шт', price: 456 }] },
    ],
  },
  {
    id: 'dishes',
    label: 'Блюда',
    defaultImage: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=260&fit=crop',
    items: [
      { name: 'Стейк филе', description: 'жареный курица, салатный лист, огурец, помидор, лимон, чесночный соус', price: 299, image: '/images/dish-steak.jpeg' },
      { name: 'Рамён с курицей', description: 'лапша, курица, яйцо, кунжут, зелень, специи', price: 219, image: '/images/dish-ramen-chicken.jpeg' },
      { name: 'Рамён говядина', description: 'лапша, мясо говядины, яйцо, кунжут, зелень, специи', price: 239, image: '/images/dish-ramen-beef.jpeg' },
    ],
  },
  {
    id: 'combo',
    label: 'Комбо',
    defaultImage: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400&h=260&fit=crop',
    items: [
      { name: 'Комбо №1', description: 'Рамён куриный, фри, чай, лепёшка', price: 349, image: '/images/combo-1.png' },
      { name: 'Комбо №2', description: 'Чиккен бургер, гамбургер, фри, кола 1л', price: 649, image: '/images/combo-2.png' },
      { name: 'Комбо №3', description: 'Стрипсы 6шт, нагетцы 6шт, фри, соус на выбор, фанта/кола на выбор', price: 599, image: '/images/combo-3.png' },
      { name: 'Комбо №4', description: 'Пицца мясной, крылышки 24шт, стрипсы 12шт, соус, кетчуп', price: 1799, image: '/images/combo-4.png' },
    ],
  },
  {
    id: 'drinks',
    label: 'Напитки',
    defaultImage: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=260&fit=crop',
    items: [
      { name: 'Черный чай', price: 20, image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=260&fit=crop' },
      { name: 'Pepsi', price: 70, image: '/images/drink-pepsi.png', variants: [{ label: '0.5 л', price: 70 }, { label: '1 л', price: 100 }, { label: '1.5 л', price: 160 }, { label: '2 л', price: 200 }] },
      { name: 'Coca-Cola', price: 70, image: '/images/drink-cola.png', variants: [{ label: '0.5 л', price: 70 }, { label: '1 л', price: 100 }, { label: '1.5 л', price: 160 }, { label: '2 л', price: 200 }] },
      { name: 'Bon aqua', price: 35, image: '/images/drink-bonaqua.png', variants: [{ label: '0.5 л', price: 35 }, { label: '1 л', price: 60 }] },
    ],
  },
];
