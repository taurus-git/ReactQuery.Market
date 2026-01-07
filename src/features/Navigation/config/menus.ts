import { MenuItem } from '@features/Navigation/types/navigation';

export const targetGroupConfig: MenuItem[] = [
  { id: 'men', label: 'Мужчинам', href: '/' },
  { id: 'women', label: 'Женщинам', href: '/women' },
  { id: 'kids', label: 'Детям', href: '/kids' },
];

export const infoLinksConfig: MenuItem[] = [
  { id: 'shops', label: 'Магазины', href: '/shops' },
  { id: 'help', label: 'Помощь', href: '/help' },
  { id: 'blogs', label: 'Блоги', href: '/blogs' },
];
