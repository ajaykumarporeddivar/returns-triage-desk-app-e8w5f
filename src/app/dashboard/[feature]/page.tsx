'use client'
import { useParams } from 'next/navigation'
import { useState, useMemo } from 'react'
import { Card, CardHeader, CardTitle, CardContent, Badge, Button, Input, Textarea, Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui'
import { AppHeader } from '@/components/layout'
import { formatDate } from '@/lib/utils'
import { MOCK_RETURNS, STATS } from '@/lib/data'
import { Search, Plus, Download, Eye, ArrowDownNarrowWide, ArrowUpNarrowWide, CheckCircle, XCircle } from 'lucide-react'
import { useApp } from '@/hooks/useApp'
import { Return } from '@/lib/types'
import { cn } from '@/components/ui' // Import cn for conditional classNames

// Helper for status badge variant
const getStatusBadgeVariant = (status: Return['status']) => {
  switch (status) {
    case 'pending':
      return 'warning'
    case 'approved':
    case 'processed':
      return 'success'
    case 'rejected':
      return 'error'
    case 'in_transit':
      return 'info'
    default:
      return 'info'
  }
}

// Helper for CSV export
const exportToCsv = (filename: