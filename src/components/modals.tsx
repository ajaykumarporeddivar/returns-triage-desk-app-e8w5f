'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { type ClassValue } from 'clsx'
import { cn, Modal, Badge, Button, Avatar, Input, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandShortcut } from '@/components/ui'
import { FileText, LayoutDashboard, BarChart2, Search, Command as CommandIcon, X, CheckCircle, Archive, Trash2 } from 'lucide-react'
import { Return } from '@/lib/types'
import { useDemoToast } from '@/hooks/useApp'

interface EntityDetailModalProps {
  item: Record<string, unknown> | null
  open: boolean
  onClose: () => void
  title: string
  onApprove?: (id: string) => void
  onArchive?: (id: string) => void
  onDelete?: (id: string) => void
}

export function EntityDetailModal({ item, open, onClose, title, onApprove, onArchive, onDelete }: EntityDetailModalProps) {
  const toast = useDemoToast()

  if (!item) return null

  const getStatusBadgeVariant = (status: string): 'warning' | 'success' | 'danger' | 'info' | 'secondary' => {
    switch (status) {
      case 'pending':
        return 'warning'
      case 'approved':
      case 'processed':
        return 'success'
      case 'rejected':
        return 'danger'
      case 'in_transit':
        return 'info'
      default:
        return 'secondary'
    }
  }

  const formatValue = (key: string, value: unknown): React.ReactNode => {
    if (typeof value === 'string' && (key.endsWith('At') || key.endsWith('Date'))) {
      try {
        const date = new Date(value);
        return date.toLocaleString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
      } catch (e) {
        return String(value); // Fallback for invalid date strings
      }
    }
    if (typeof value === 'number') {
      if (key === 'price' || key === 'amount') {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
      }
      return new Intl.NumberFormat('en-US').format(value);
    }
    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }
    if (value === null || value === undefined) {
      return <span className="text-zinc-400 italic">N/A</span>;
    }
    return String(value);
  }

  const currentStatus = (item.status as Return['status'] | undefined) || 'unknown';

  return (
    <Modal open={open} onClose={onClose} title={title}>
      <div className="relative p-6">
        <div className="absolute top-4 right-4">
          {item.status && <Badge variant={getStatusBadgeVariant(String(item.status))}>{String(item.status)}</Badge>}
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          {Object.entries(item).filter(([key]) => key !== 'id').map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <span className="text-sm font-medium text-zinc-500 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </span>
              <span className="mt-1 text-zinc-800 text-base break-words">
                {formatValue(key, value)}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 border-t border-zinc-200 px-6 py-4">
        {currentStatus === 'pending' && (
          <Button
            variant="primary"
            onClick={() => {
              onApprove?.(item.id as string);
              toast.show('Return request approved!', 'success');
              onClose();
            }}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            <CheckCircle className="h-4 w-4 mr-2" /> Approve
          </Button>
        )}
        <Button
          variant="secondary"
          onClick={() => {
            onArchive?.(item.id as string);
            toast.show('Return request archived!', 'info');
            onClose();
          }}
        >
          <Archive className="h-4 w-4 mr-2" /> Archive
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            onDelete?.(item.id as string);
            toast.show('Return request deleted!', 'error');
            onClose();
          }}
        >
          <Trash2 className="h-4 w-4 mr-2" /> Delete
        </Button>
      </div>
    </Modal>
  )
}

interface ConfirmModalProps {
  open: boolean
  onClose: () => void
  title: string
  message: string
  onConfirm: () => void
  confirmLabel?: string
  variant?: 'danger' | 'info'
}

export function ConfirmModal({
  open,
  onClose,
  title,
  message,
  onConfirm,
  confirmLabel = 'Confirm',
  variant = 'info',
}: ConfirmModalProps) {
  const handleConfirm = () => {
    onConfirm()
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} title={title}>
      <div className="p-6 text-zinc-700">
        <p>{message}</p>
      </div>
      <div className="flex items-center justify-end gap-2 border-t border-zinc-200 px-6 py-4">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant={variant === 'danger' ? 'danger' : 'primary'}
          onClick={handleConfirm}
        >
          {confirmLabel}
        </Button>
      </div>
    </Modal>
  )
}

interface CommandPaletteItem {
  label: string
  href: string
  icon?: React.ReactNode
  description?: string
}

interface CommandPaletteProps {
  open: boolean
  onClose: () => void
  items: CommandPaletteItem[]
}

export function CommandPalette({ open, onClose, items }: CommandPaletteProps) {
  const router = useRouter()
  const [search, setSearch] = useState('')

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        onClose() // Toggle functionality, if it's open, close it.
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [onClose])

  const handleSelect = (href: string) => {
    router.push(href)
    onClose()
  }

  const getIcon = (itemIcon: React.ReactNode | undefined, label: string) => {
    if (itemIcon) return itemIcon;
    if (label.includes('Request')) return <FileText className="h-4 w-4" />;
    if (label.includes('Dashboard') || label.includes('Triage')) return <LayoutDashboard className="h-4 w-4" />;
    if (label.includes('Report')) return <BarChart2 className="h-4 w-4" />;
    return <CommandIcon className="h-4 w-4" />;
  };

  const filteredItems = items.filter(item =>
    item.label.toLowerCase().includes(search.toLowerCase()) ||
    (item.description && item.description.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <CommandDialog open={open} onOpenChange={onClose}>
      <CommandInput placeholder="Type a command or search..." value={search} onValueChange={setSearch} />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {filteredItems.map((item, index) => (
            <CommandItem
              key={item.href}
              value={item.label}
              onSelect={() => handleSelect(item.href)}
              className="cursor-pointer"
            >
              {getIcon(item.icon, item.label)}
              <span>{item.label}</span>
              {item.description && (
                <span className="ml-auto text-zinc-400 text-xs">{item.description}</span>
              )}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}