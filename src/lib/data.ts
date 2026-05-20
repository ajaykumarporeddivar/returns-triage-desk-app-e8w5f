import {
  DemoUser,
  Return,
  Customer,
  Product,
  RecentActivity,
} from './types';

// Helper function to generate ISO date strings
const getDate = (daysAgo: number): string => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString();
};

export const DEMO_USER: DemoUser = {
  id: 'user-olivia',
  name: 'Olivia Chen',
  email: 'olivia.chen@example.com',
  role: 'E-commerce Operations Manager',
  plan: 'Pro Plan',
  avatar: 'OC',
  joinedAt: '2023-08-15T10:00:00Z',
};

export const MOCK_RETURNS: Return[] = [
  {
    id: 'ret-001',
    customerName: 'Marcus Davis',
    customerEmail: 'marcus.d@example.com',
    orderId: 'ORD-78901',
    productName: 'Organic Cotton T-Shirt',
    quantity: 2,
    returnReason: 'too small',
    requestedAction: 'exchange',
    notes: 'Needs next size up, preferably in blue. Customer prefers quick resolution.',
    status: 'pending',
    createdAt: getDate(7),
    updatedAt: getDate(7),
    priorityScore: 95, // High priority
  },
  {
    id: 'ret-002',
    customerName: 'Sarah Kim',
    customerEmail: 'sarah.k@example.com',
    orderId: 'ORD-23456',
    productName: 'Bluetooth Earbuds Pro',
    quantity: 1,
    returnReason: 'defective',
    requestedAction: 'refund',
    notes: 'Left earbud not charging. Customer provided video proof.',
    status: 'approved',
    createdAt: getDate(10),
    updatedAt: getDate(5),
    priorityScore: 88, // Medium-high priority
  },
  {
    id: 'ret-003',
    customerName: 'David Lee',
    customerEmail: 'david.l@example.com',
    orderId: 'ORD-98765',
    productName: 'Ergonomic Desk Chair',
    quantity: 1,
    returnReason: 'damaged',
    requestedAction: 'refund',
    notes: 'Armrest arrived broken during shipping. Shipping box also damaged.',
    status: 'in_transit',
    createdAt: getDate(12),
    updatedAt: getDate(3),
    priorityScore: 70, // Medium priority
  },
  {
    id: 'ret-004',
    customerName: 'Emily White',
    customerEmail: 'emily.w@example.com',
    orderId: 'ORD-11223',
    productName: 'Smart Home Hub v2',
    quantity: 1,
    returnReason: 'no longer needed',
    requestedAction: 'store credit',
    notes: null,
    status: 'rejected',
    createdAt: getDate(15),
    updatedAt: getDate(8),
    priorityScore: 60, // Low priority
  },
  {
    id: 'ret-005',
    customerName: 'Michael Brown',
    customerEmail: 'michael.b@example.com',
    orderId: 'ORD-55667',
    productName: 'Gourmet Coffee Blend (Pack of 3)',
    quantity: 1,
    returnReason: 'wrong item',
    requestedAction: 'exchange',
    notes: 'Received "Espresso Dark Roast" instead of "Breakfast Blend".',
    status: 'processed',
    createdAt: getDate(20),
    updatedAt: getDate(1),
    priorityScore: 90, // High priority
  },
  {
    id: 'ret-006',
    customerName: 'Jessica Taylor',
    customerEmail: 'jessica.t@example.com',
    orderId: 'ORD-33445',
    productName: 'Premium Yoga Mat',
    quantity: 1,
    returnReason: 'other',
    requestedAction: 'refund',
    notes: 'Color mismatch with online image, appears much darker than advertised.',
    status: 'pending',
    createdAt: getDate(2),
    updatedAt: getDate(2),
    priorityScore: 98, // Urgent priority
  },
];

export const MOCK_CUSTOMERS: Customer[] = [
  {
    id: 'cust-001',
    firstName: 'Marcus',
    lastName: 'Davis',
    email: 'marcus.d@example.com',
    phone: '+1-555-123-4567',
    createdAt: getDate(100),
    updatedAt: getDate(50),
  },
  {
    id: 'cust-002',
    firstName: 'Sarah',
    lastName: 'Kim',
    email: 'sarah.k@example.com',
    phone: null,
    createdAt: getDate(120),
    updatedAt: getDate(60),
  },
  {
    id: 'cust-003',
    firstName: 'David',
    lastName: 'Lee',
    email: 'david.l@example.com',
    phone: '+1-555-987-6543',
    createdAt: getDate(80),
    updatedAt: getDate(40),
  },
  {
    id: 'cust-004',
    firstName: 'Emily',
    lastName: 'White',
    email: 'emily.w@example.com',
    phone: '+1-555-222-3333',
    createdAt: getDate(150),
    updatedAt: getDate(70),
  },
  {
    id: 'cust-005',
    firstName: 'Michael',
    lastName: 'Brown',
    email: 'michael.b@example.com',
    phone: null,
    createdAt: getDate(90),
    updatedAt: getDate(30),
  },
  {
    id: 'cust-006',
    firstName: 'Jessica',
    lastName: 'Taylor',
    email: 'jessica.t@example.com',
    phone: '+1-555-444-5555',
    createdAt: getDate(110),
    updatedAt: getDate(20),
  },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    name: 'Organic Cotton T-Shirt',
    sku: 'COTTON-TEE-BLU-M',
    price: 29.99,
    imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=T-Shirt', // Example placeholder image
    createdAt: getDate(200),
    updatedAt: getDate(100),
  },
  {
    id: 'prod-002',
    name: 'Bluetooth Earbuds Pro',
    sku: 'EBUDS-PRO-BLK',
    price: 129.99,
    imageUrl: 'https://via.placeholder.com/150/000000/FFFFFF?text=Earbuds',
    createdAt: getDate(180),
    updatedAt: getDate(90),
  },
  {
    id: 'prod-003',
    name: 'Ergonomic Desk Chair',
    sku: 'DESK-CHAIR-GRY',
    price: 349.99,
    imageUrl: 'https://via.placeholder.com/150/808080/FFFFFF?text=Chair',
    createdAt: getDate(250),
    updatedAt: getDate(120),
  },
  {
    id: 'prod-004',
    name: 'Smart Home Hub v2',
    sku: 'SMART-HUB-V2',
    price: 199.99,
    imageUrl: 'https://via.placeholder.com/150/FF4500/FFFFFF?text=Smart+Hub',
    createdAt: getDate(160),
    updatedAt: getDate(80),
  },
  {
    id: 'prod-005',
    name: 'Gourmet Coffee Blend (Pack of 3)',
    sku: 'COFFEE-BLEND-3PK',
    price: 35.50,
    imageUrl: 'https://via.placeholder.com/150/6F4E37/FFFFFF?text=Coffee',
    createdAt: getDate(210),
    updatedAt: getDate(110),
  },
  {
    id: 'prod-006',
    name: 'Premium Yoga Mat',
    sku: 'YOGA-MAT-PURP',
    price: 49.99,
    imageUrl: 'https://via.placeholder.com/150/8A2BE2/FFFFFF?text=Yoga+Mat',
    createdAt: getDate(190),
    updatedAt: getDate(95),
  },
];

export const STATS = {
  totalReturns: '2,345',
  totalReturnsGrowth: '+8%',
  pendingReturns: '128',
  pendingReturnsGrowth: '-15%',
  processedValue: '$184,320',
  processedValueGrowth: '+12%',
  avgProcessingTime: '2.4 days',
  avgProcessingTimeGrowth: '-5%',
};

export const CHART_DATA = {
  weekly: [42, 58, 51, 73, 88, 65, 79, 94], // Weekly returns count
  labels: ['Apr W1', 'Apr W2', 'Apr W3', 'Apr W4', 'May W1', 'May W2', 'May W3', 'May W4'],
  revenue: [18200, 22400, 19800, 31200, 28500, 33100, 29800, 35600], // Value of processed returns
};

export const RECENT_ACTIVITY: RecentActivity[] = [
  { id: 'act-001', action: 'Created new return request (ORD-33445)', user: 'Jessica Taylor', avatar: 'JT', time: '2 minutes ago', type: 'create' },
  { id: 'act-002', action: 'Approved return request (ORD-23456)', user: DEMO_USER.name, avatar: DEMO_USER.avatar, time: '1 hour ago', type: 'update' },
  { id: 'act-003', action: 'Updated status for ORD-98765 to In Transit', user: 'Mark Davis', avatar: 'MD', time: '3 hours ago', type: 'update' },
  { id: 'act-004', action: 'Rejected return request (ORD-11223)', user: DEMO_USER.name, avatar: DEMO_USER.avatar, time: '1 day ago', type: 'delete' },
  { id: 'act-005', action: 'Processed refund for ORD-55667', user: 'Olivia Chen', avatar: 'OC', time: '2 days ago', type: 'update' },
  { id: 'act-006', action: 'Received new return request (ORD-78901)', user: 'Marcus Davis', avatar: 'MD', time: '3 days ago', type: 'create' },
];

export function getById<T extends { id: string }>(arr: T[], id: string): T | undefined {
  return arr.find(x => x.id === id);
}