// src/data.ts

export interface ArticleData {
  date: string;
  title: string;
  imgSrc: string;
  text: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteData {
  siteTitle: string;
  siteSubtitle: string;
  headerNavItems: NavItem[];
  footerNavItems: NavItem[];
  articles: ArticleData[];
  copyright: string;
}

export const siteData: SiteData = {
  siteTitle: "Sartre's List",
  siteSubtitle: 'Better-Dressed People',
  headerNavItems: [
    { label: "Women's", href: '#' },
    { label: "Men's", href: '#' },
    { label: 'On the Street', href: '#' },
    { label: 'The Catwalk', href: '#' },
    { label: 'AdWatch', href: '#' },
    { label: 'About', href: '#' },
  ],
  footerNavItems: [
    { label: 'Home', href: '#' },
    { label: "Women's", href: '#' },
    { label: "Men's", href: '#' },
    { label: 'On the Street', href: '#' },
    { label: 'The Catwalk', href: '#' },
    { label: 'AdWatch', href: '#' },
    { label: 'About', href: '#' },
  ],
  articles: [
    {
      date: '11/12/20',
      title: 'On the Street in Brooklyn',
      imgSrc: '/images/blog-image-1.jpg',
      text: `Cray ipsum, dolor sit amet consectetur adipisicing elit. Repellat quidem
        deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni
        aliquid, laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias. Temporibus perspiciatis at
        impedit voluptas aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius quae corrupti
        optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat deserunt amet
        eaque dignissimos, iste sapiente magnam doloremque. Fugit, cum, cupiditate aliquam, mollitia quisquam sed nulla
        eveniet doloribus neque optio odio qui! Id architecto impedit consequatur rem quaerat voluptatibus pariatur
        quas, quod quisquam quo ab molestiae.`,
    },
    {
      date: '11/12/20',
      title: 'Vintage in Vogue',
      imgSrc: '/images/blog-image-2.jpg',
      text: `Selfies sunt, dolor sit amet consectetur adipisicing elit. Repellat quidem
        deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit
        officiis magni aliquid, laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias. Temporibus
        perspiciatis at impedit voluptas aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius
        quae corrupti optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat
        deserunt amet eaque dignissimos, iste sapiente magnam doloremque. Fugit, cum, cupiditate aliquam, mollitia
        quisquam sed nulla eveniet doloribus neque optio odio qui! Id architecto impedit consequatur rem quaerat voluptatibus pariatur quas, quod quisquam quo ab molestiae.`,
    },
  ],
  copyright: '© 2013 Valet Industries Inc.',
};
