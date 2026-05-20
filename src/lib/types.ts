export interface Return {
  id: string
  customerName: string
  customerEmail: string
  orderId: string
  productName: string
  quantity: number
  returnReason: 'damaged' | 'wrong item' | 'too small' | 'no longer needed' | 'defective' | 'other'
  requestedAction: 'refund' | 'exchange' | 'store credit'
  notes: string | null
  status: 'pending' | 'approved' | 'rejected' | 'in_transit' | 'processed'
  createdAt: string
  updatedAt: string
  priorityScore: number // Used for prioritizing returns in the dashboard
}

export interface Customer {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string | null
  createdAt: string
  updatedAt: string
}

export interface Product {
  id: string
  name: string
  sku: string
  price: number
  imageUrl: string | null
  createdAt: string
  updatedAt: string
}

export interface DemoUser {
  id: string
  name: string
  email: string
  role: string
  plan: string
  avatar: string
  joinedAt: string
}

export interface RecentActivity {
  id: string
  userId: string
  userName: string
  action: string
  targetType: 'return' | 'user' | 'report'
  targetId: string
  targetName: string
  createdAt: string
}

export type ApiResponse<T> = {
  data: T;
  success: boolean;
  message?: string;
  count?: number; // For lists
};