'use client';

import { AppSidebar } from '@/components/layout';
import { FileText, LayoutDashboard, BarChart2 } from 'lucide-react';
import React from 'react';

// Navigation items derived from the NAV_ITEMS in feature-cards.md
const navItems = [
  { icon: <FileText size={16} />, label: 'New Request', href: '/dashboard/return-intake' },
  { icon: <LayoutDashboard size={16} />, label: 'Triage Desk', href: '/dashboard/triage-dashboard' },
  { icon: <BarChart2 size={16} />, label: 'ROI Reports', href: '/dashboard/roi-reporting' },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <AppSidebar items={navItems} projectName="Returns Triage Desk" />
      <div className="flex-1 ml-64 flex flex-col min-h-full">
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}