export interface Project {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Cashier App',
    description: 'This web was created to facilitate the management of stock items in the warehouse and facilitate transactions.',
    image: '/images/Cashier.png', // Perbaikan typo dari Casshier ke Cashier
    slug: 'cashier-app',
  },
  {
    title: 'Webstudio',
    description: 'Professional website design platform. Makes it easy to create a website and hosting with various prices available.',
    image: '/images/WebStudio.png',
    slug: 'webstudio',
  },
  {
    title: 'E-commerce App',
    description: 'This web was created to facilitate the buying and selling of food, helping small businesses to market and receive orders.',
    image: '/images/Ecomerce.png',
    slug: 'ecommerce-app',
  },
];