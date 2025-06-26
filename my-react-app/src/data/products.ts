export interface StockLocation {
  id: string;
  name: string;
  quantity: number;
}

export interface Product {
  id: string;
  name: string;
  rate: string;
  image: string;
  stocks: StockLocation[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Nintendo Switch 2 + Mario Kart ',
    rate: '53999',
    image: 'https://micromini.in/wp-content/uploads/2025/06/71rAE29LsuL._SX679_.jpg',
    stocks: [
      { id: 'tambaram', name: 'Tambaram Stock', quantity: 25 },
      { id: 'mount-road', name: 'Mount Road Stock', quantity: 18 },
      { id: 'office', name: 'Office Stock', quantity: 12 }
    ]
  },
  {
    id: '2',
    name: 'Nex Playground Game System',
    rate: '27999',
    image: 'https://micromini.in/wp-content/uploads/2024/12/nex-650x650.jpg',
    stocks: [
      { id: 'tambaram', name: 'Tambaram Stock', quantity: 8 },
      { id: 'mount-road', name: 'Mount Road Stock', quantity: 20 },
      { id: 'office', name: 'Office Stock', quantity: 5 }
    ]
  },
  {
    id: '3',
    name: 'Meta Quest 3 512GB',
    rate: '50999',
    image: 'https://micromini.in/wp-content/uploads/2023/11/meta-3-512-gb.jpeg',
    stocks: [
      { id: 'tambaram', name: 'Tambaram Stock', quantity: 12 },
      { id: 'mount-road', name: 'Mount Road Stock', quantity: 8 },
      { id: 'office', name: 'Office Stock', quantity: 20 }
    ]
  },
  {
    id: '4',
    name: 'Sony PlayStation 5 Console Ps5 Pro White 2 TB',
    rate: '50999',
    image: 'https://micromini.in/wp-content/uploads/2024/12/GUEST_221282a8-da0b-415b-8668-91ac57594067.webp',
    stocks: [
      { id: 'tambaram', name: 'Tambaram Stock', quantity: 10 },
      { id: 'mount-road', name: 'Mount Road Stock', quantity: 10 },
      { id: 'office', name: 'Office Stock', quantity: 20 }
    ]
  }
];
