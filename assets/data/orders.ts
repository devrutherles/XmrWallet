type InventoryType = {
  trackingMethod: string;
}

export type OrderType = {
  name: string;
  formattedPrice: string;
  inventory: InventoryType
  mediaUrl: string;
}

const orders: Array<OrderType> = [
  {
    name: '0 WETH',
    formattedPrice: '0 USD',
    inventory: {
      trackingMethod: 'status',
    },
    mediaUrl: 'https://i.ibb.co/MD2MPkW/eth.png'
  },
  {
    name: '0 AXS',
    formattedPrice: '0 USD',
    inventory: {
      trackingMethod: 'status',
    },
    mediaUrl: 'https://i.ibb.co/kxRZV43/axs-removebg-1.png'
  },
  {
    name: '0 SLP',
    formattedPrice: '0 USD',
    inventory: {
      trackingMethod: 'status',
      
    },
    mediaUrl: 'https://i.ibb.co/37LNJ3N/elh.png'
  },
  {
    name: '0 USDC',
    formattedPrice: '0 USD',
    inventory: {
      trackingMethod: 'status',
    },
    mediaUrl: 'https://i.ibb.co/CnSKtR6/usdc.png'
  },
  {
    name: '0 Axie',
    formattedPrice: '0 USD',
    inventory: {
      trackingMethod: 'status',
    },
    mediaUrl: 'https://i.ibb.co/KshJ4Zb/3-32700-axie-infinity-is-a-digital-pet-community-founded.jpg'
  },
  {
    name: '0 Land Plot',
    formattedPrice: '0 USD',
    inventory: {
      trackingMethod: 'status',
    },
    mediaUrl: 'https://i.ibb.co/J2JkYVZ/land.png'
  },
  {
    name: '0 Land Item',
    formattedPrice: '0 USD',
    inventory: {
      trackingMethod: 'status',
    },
    mediaUrl: 'https://i.ibb.co/TY63Fkp/land-item.png'
  }
  
];

export default orders;
