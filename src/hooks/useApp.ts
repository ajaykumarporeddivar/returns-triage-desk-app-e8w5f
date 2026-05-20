'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Return } from '@/lib/types'

/**
 * Custom hook for SSR-safe localStorage interaction.
 * @param key The key to store the value under in localStorage.
 * @param initial The initial value if no item is found in localStorage.
 * @returns A tuple containing the stored value and a setter function.
 */
export function useLocalStorage<T>(key: string, initial: T): [T, (v: T) => void] {
  const [value, setValue] = useState<T>(initial)
  const isMounted = useRef(false)

  // Read from localStorage only on mount (client-side)
  useEffect(() => {
    isMounted.current = true
    try {
      const item = window.localStorage.getItem(key)
      if (item !== null) {
        setValue(JSON.parse(item))
      }
    } catch (error) {
      console.error(`Error reading from localStorage key "${key}":`, error)
      setValue(initial)
    }
  }, [key, initial])

  // Write to localStorage whenever value changes, but only after initial mount
  useEffect(() => {
    if (isMounted.current) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value))
      } catch (error) {
        console.error(`Error writing to localStorage key "${key}":`, error)
      }
    }
  }, [key, value])

  return [value, setValue]
}

/**
 * Custom hook for filtering a list of items based on search string and status.
 * @param items The array of items to filter.
 * @param fields The keys of the item objects to search within.
 * @returns An object containing filtered items, search string, search setter, status string, and status setter.
 */
export function useFilter<T extends Record<string, unknown>>(
  items: T[],
  fields: (keyof T)[]
): {
  filtered: T[]
  search: string
  setSearch: (s: string) => void
  status: string
  setStatus: (s: string) => void
} {
  const [search, setSearch] = useState<string>('')
  const [status, setStatus] = useState<string>('')

  const filtered = React.useMemo(() => {
    let currentItems = items

    // Apply search filter
    if (search) {
      const lowercasedSearch = search.toLowerCase()
      currentItems = currentItems.filter(item =>
        fields.some(field =>
          String(item[field] ?? '').toLowerCase().includes(lowercasedSearch)
        )
      )
    }

    // Apply status filter
    if (status && status !== 'all') {
      currentItems = currentItems.filter(item => {
        // Assuming status field exists and is a string for the target entity (Return)
        return (item as unknown as Return).status === status;
      });
    }

    return currentItems
  }, [items, search, status, fields])

  return { filtered, search, setSearch, status, setStatus }
}

/**
 * Custom hook for managing modal state.
 * @returns An object containing modal open state, open function, close function, and the active item.
 */
export function useModal<T = unknown>(): {
  isOpen: boolean
  open: (item?: T) => void
  close: () => void
  activeItem: T | null
} {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [activeItem, setActiveItem] = useState<T | null>(null)

  const open = useCallback((item?: T) => {
    setIsOpen(true)
    setActiveItem(item ?? null)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    setActiveItem(null)
  }, [])

  return { isOpen, open, close, activeItem }
}

/**
 * Custom hook for showing temporary toast notifications.
 * Auto-hides after 2.5 seconds.
 * @returns An object containing toast message, type, visibility, and a show function.
 */
export function useDemoToast(): {
  message: string
  type: 'success' | 'error' | 'info'
  visible: boolean
  show: (msg: string, type?: 'success' | 'error' | 'info') => void
} {
  const [message, setMessage] = useState<string>('')
  const [type, setType] = useState<'success' | 'error' | 'info'>('info')
  const [visible, setVisible] = useState<boolean>(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const show = useCallback((msg: string, toastType: 'success' | 'error' | 'info' = 'info') => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    setMessage(msg)
    setType(toastType)
    setVisible(true)
    timerRef.current = setTimeout(() => {
      setVisible(false)
      setMessage('')
    }, 2500) // Auto-hide after 2.5 seconds
  }, [])

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [])

  return { message, type, visible, show }
}