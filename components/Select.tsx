'use client'

import { useState, useRef, useEffect } from 'react'

export interface Option {
  label: string
  value: string
}

export interface SelectProps {
  label?: string
  placeholder?: string
  options: Option[]
  value?: string
  onChange?: (value: string) => void
  name?: string
  className?: string
  disabled?: boolean
}

export default function Select({
  label,
  placeholder = 'Select an option',
  options,
  value,
  onChange,
  name,
  className = '',
  disabled = false,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find(option => option.value === value)
  const displayText = selectedOption ? selectedOption.label : placeholder

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
        setActiveIndex(-1)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault()
        if (isOpen && activeIndex >= 0) {
          const selectedValue = options[activeIndex].value
          onChange?.(selectedValue)
          setIsOpen(false)
          setActiveIndex(-1)
        } else {
          setIsOpen(!isOpen)
        }
        break

      case 'Escape':
        setIsOpen(false)
        setActiveIndex(-1)
        triggerRef.current?.focus()
        break

      case 'ArrowDown':
        event.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
        } else {
          setActiveIndex(prev => 
            prev < options.length - 1 ? prev + 1 : 0
          )
        }
        break

      case 'ArrowUp':
        event.preventDefault()
        if (!isOpen) {
          setIsOpen(true)
        } else {
          setActiveIndex(prev => 
            prev > 0 ? prev - 1 : options.length - 1
          )
        }
        break

      case 'Tab':
        setIsOpen(false)
        setActiveIndex(-1)
        break
    }
  }

  const handleOptionClick = (optionValue: string) => {
    onChange?.(optionValue)
    setIsOpen(false)
    setActiveIndex(-1)
    triggerRef.current?.focus()
  }

  const handleTriggerClick = () => {
    if (!disabled) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <div className={`relative ${className}`}>
      {/* Hidden input for form submission */}
      {name && (
        <input
          type="hidden"
          name={name}
          value={value || ''}
        />
      )}

      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-emw-white mb-2">
          {label}
        </label>
      )}

      {/* Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={handleTriggerClick}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        className={`form-control flex items-center justify-between gap-3 hover:border-white/30 ${
          isOpen ? 'border-white/50' : ''
        }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={name ? `${name}-menu` : undefined}
        aria-label={label || placeholder}
      >
        <span className={`${!selectedOption ? 'text-emw-white/50' : ''}`}>
          {displayText}
        </span>
        <svg
          className={`w-4 h-4 opacity-90 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          id={name ? `${name}-menu` : undefined}
          role="listbox"
          className="absolute z-50 mt-2 w-full rounded-xl border border-white/20 bg-emw-black text-emw-white shadow-lg max-h-60 overflow-auto"
        >
          {options.map((option, index) => (
            <div
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              data-active={index === activeIndex}
              onClick={() => handleOptionClick(option.value)}
              className={`
                text-sm px-3 py-2.5 rounded-lg cursor-pointer transition-colors duration-150
                hover:bg-emw-soft-green/20 data-[active=true]:bg-emw-soft-green/20
                ${option.value === value ? 'bg-emw-soft-green/10 border-l-2 border-emw-deep-green' : ''}
              `}
            >
              <div className="flex items-center justify-between">
                <span>{option.label}</span>
                {option.value === value && (
                  <svg
                    className="w-4 h-4 text-emw-deep-green"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
