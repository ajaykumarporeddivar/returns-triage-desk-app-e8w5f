'use client';

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowDown, X, LoaderCircle, Eye, EyeOff } from 'lucide-react';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  href?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 rounded-lg';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-2.5 text-lg',
  };

  const variantStyles = {
    primary: 'bg-zinc-900 text-white hover:bg-zinc-700 disabled:bg-zinc-400 disabled:text-zinc-600',
    secondary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 border border-zinc-200 disabled:bg-zinc-50 disabled:text-zinc-400',
    outline: 'border border-zinc-300 text-zinc-700 hover:bg-zinc-50 disabled:text-zinc-400 disabled:border-zinc-200',
    ghost: 'text-zinc-700 hover:bg-zinc-100 disabled:text-zinc-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 disabled:bg-red-400',
  };

  const loadingStyles = loading ? 'pointer-events-none opacity-75' : '';
  const isDisabled = disabled || loading;

  const content = (
    <>
      {loading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </>
  );

  const buttonClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    loadingStyles,
    className
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} aria-disabled={isDisabled} tabIndex={isDisabled ? -1 : undefined}>
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      disabled={isDisabled}
      {...props}
    >
      {content}
    </button>
  );
}

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('bg-white border border-zinc-200 rounded-xl shadow-sm', className)}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('px-6 py-4 border-b border-zinc-200 flex items-center justify-between', className)}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <h3 className={cn('text-lg font-bold text-zinc-900 tracking-tight', className)}>
      {children}
    </h3>
  );
}

export function CardContent({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('p-6', className)}>
      {children}
    </div>
  );
}

export function Badge({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'purple' }) {
  const variantStyles = {
    default: 'bg-zinc-100 text-zinc-800',
    success: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-600 border border-amber-200',
    error: 'bg-red-50 text-red-600 border border-red-200',
    info: 'bg-blue-50 text-blue-600 border border-blue-200',
    purple: 'bg-purple-50 text-purple-600 border border-purple-200',
  };
  return (
    <span className={cn('inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium', variantStyles[variant])}>
      {children}
    </span>
  );
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  type?: 'text' | 'email' | 'password' | 'number';
}

export function Input({ label, placeholder, value, onChange, error, type = 'text', icon, disabled, className, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={cn('relative', className)}>
      {label && (
        <label htmlFor={props.id || label} className="block text-sm font-medium text-zinc-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className={cn(
            'block w-full rounded-md border-zinc-300 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 text-zinc-900 sm:text-sm',
            icon ? 'pl-10' : 'pl-3',
            error ? 'border-red-500 focus:border-red-500 focus:ring-red-500 pr-10' : '',
            disabled ? 'bg-zinc-50 text-zinc-500 cursor-not-allowed' : '',
            'py-2'
          )}
          {...props}
        />
        {type === 'password' && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-zinc-400 hover:text-zinc-600 focus:outline-none"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export function Spinner({ className }: { className?: string }) {
  return (
    <svg className={cn('animate-spin h-5 w-5 text-current', className)} viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
}

export function Avatar({ name, size = 'md', className }: { name: string; size?: 'xs' | 'sm' | 'md' | 'lg'; className?: string }) {
  const getInitials = (nameString: string) => {
    if (!nameString) return '';
    const parts = nameString.split(' ');
    if (parts.length > 1) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return parts[0][0].toUpperCase();
  };

  const nameHash = name ? name.charCodeAt(0) + name.charCodeAt(name.length - 1) : 0;
  const colors = [
    'bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-purple-500', 'bg-yellow-500', 'bg-indigo-500'
  ];
  const bgColor = colors[nameHash % colors.length];

  const sizeClasses = {
    xs: 'h-6 w-6 text-xs',
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg',
  };

  return (
    <div className={cn(
      'relative inline-flex items-center justify-center rounded-full text-white font-semibold flex-shrink-0',
      bgColor,
      sizeClasses[size],
      className
    )}>
      {getInitials(name)}
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
  sparkline?: number[];
}

export function StatCard({ title, value, change, changeType = 'neutral', icon, sparkline }: StatCardProps) {
  const changeColor = {
    up: 'text-emerald-600',
    down: 'text-red-500',
    neutral: 'text-zinc-500',
  };

  const renderSparkline = (data: number[]) => {
    if (data.length < 2) return null;

    const width = 40;
    const height = 20;
    const padding = 2; // Add a small padding to prevent points from touching the SVG edges

    const maxVal = Math.max(...data);
    const minVal = Math.min(...data);

    // Handle case where all values are the same
    const range = maxVal - minVal === 0 ? 1 : maxVal - minVal;

    const points = data.map((val, i) => {
      const x = (i / (data.length - 1)) * (width - 2 * padding) + padding;
      const y = height - ((val - minVal) / range) * (height - 2 * padding) - padding;
      return `${x},${y}`;
    }).join(' ');

    return (
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="ml-2">
        <polyline
          fill="none"
          stroke="#6366f1" // Tailwind indigo-500
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points={points}
        />
      </svg>
    );
  };

  return (
    <Card className="p-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-zinc-500">{title}</p>
          <div className="flex items-center mt-1">
            <p className="text-2xl font-bold text-zinc-900 tracking-tight">{value}</p>
            {sparkline && renderSparkline(sparkline)}
          </div>
        </div>
        {icon && <div className="ml-4 text-zinc-400">{icon}</div>}
      </div>
      {change && (
        <div className="mt-2 flex items-center text-sm">
          <span className={cn('flex items-center font-medium', changeColor[changeType])}>
            {changeType === 'up' && <ArrowUp className="h-4 w-4 mr-1" />}
            {changeType === 'down' && <ArrowDown className="h-4 w-4 mr-1" />}
            {change}
          </span>
          <span className="ml-2 text-zinc-500">vs last period</span>
        </div>
      )}
    </Card>
  );
}

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function Modal({ open, onClose, title, children, size = 'md' }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleEscape = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleEscape);
    } else {
      document.removeEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, handleEscape]);

  if (!open) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-3xl',
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-fadein">
      <div
        ref={modalRef}
        className={cn('bg-white rounded-2xl shadow-xl animate-slideup w-full', sizeClasses[size])}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="px-6 py-4 border-b border-zinc-200 flex items-center justify-between">
          <h3 id="modal-title" className="text-lg font-bold text-zinc-900 tracking-tight">
            {title}
          </h3>
          <Button variant="ghost" size="sm" onClick={onClose} aria-label="Close modal">
            <X className="h-5 w-5 text-zinc-500" />
          </Button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

interface EmptyStateProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="text-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-2xl bg-zinc-100 text-zinc-500">
        {icon}
      </div>
      <h3 className="mt-6 text-xl font-bold text-zinc-900 tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-zinc-600 max-w-md mx-auto">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

interface TableProps<T> {
  columns: Array<{ key: string; label: string; render?: (row: T) => React.ReactNode }>;
  data: T[];
  onRowClick?: (row: T) => void;
  className?: string;
}

export function Table<T extends { id: string }>({ columns, data, onRowClick, className }: TableProps<T>) {
  return (
    <div className={cn('overflow-x-auto rounded-xl border border-zinc-200 shadow-sm', className)}>
      <table className="min-w-full divide-y divide-zinc-200">
        <thead className="bg-zinc-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-zinc-200">
          {data.map((row, rowIndex) => (
            <tr
              key={row.id}
              className={cn(
                'group',
                onRowClick ? 'cursor-pointer hover:bg-zinc-50' : (rowIndex % 2 === 0 ? 'bg-white' : 'bg-zinc-50')
              )}
              onClick={onRowClick ? () => onRowClick(row) : undefined}
            >
              {columns.map((column) => (
                <td
                  key={`${row.id}-${column.key}`}
                  className="px-6 py-4 whitespace-nowrap text-sm text-zinc-600"
                >
                  {column.render ? column.render(row) : (row as any)[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}