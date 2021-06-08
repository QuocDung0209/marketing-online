export const HeaderRoutes = [
  {
    label: 'Technologies',
    hasChildren: false,
    uri: '/technologies'
  },
  {
    label: 'Profile',
    hasChildren: false,
    uri: '/profile'
  },
  {
    label: 'Smartphone',
    hasChildren: true,
    uri: '/smartphone',
    children: [
      {
        label: 'Iphone',
        uri: '/smartphone/iphone'
      },
      {
        label: 'Samsung',
        uri: '/smartphone/samsung'
      }
    ]
  }
];
