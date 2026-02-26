import React, { useEffect, useMemo, useState } from 'react';
import styles from './SortDropdown.module.scss';
import { SORT_OPTIONS, SortOption } from '@features/Sort/types/sort.types';
import { useSort } from '@features/Sort/hooks/useSort';
import { useOutsideClick } from '@shared/hooks/useOutsideClick';
import { Icon } from '@shared/ui/Icon/Icon';

interface SortDropdownProps {
  className?: string;
}

export const SortDropdown = ({ className }: SortDropdownProps) => {
  const { sortBy, order, setSort, isSortButtonActive } = useSort();
  const [isOpen, setIsOpen] = useState(false);

  const activeOption = useMemo(() => {
    return SORT_OPTIONS.find((option) => isSortButtonActive(option));
  }, [sortBy, order]);

  const activeLabel = activeOption?.label ?? SORT_OPTIONS[0].label;

  const toggle = () => {
    setIsOpen((prev) => {
      console.log(prev);
      return !prev;
    });
  };

  const handleSelect = (option: SortOption) => {
    setSort(option);
    setIsOpen(false);
  };

  const dropdownRef = useOutsideClick<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  });

  return (
    <div ref={dropdownRef} className={`${styles.dropdown} ${className ?? ''} position-relative`}>
      <div className={`${styles.dropdownControl} d-flex align-center`}>
        <span className={styles.sorLabel}>Сортировать по:</span>
        <button
          className={`${styles.trigger} w-100 d-flex align-center text-uppercase`}
          onClick={toggle}
        >
          <span className={`${styles.triggerButton}`}> {activeLabel}</span>
          <Icon
            className={`${styles.triggerIcon} ${isOpen ? 'rotate-180' : ''}`}
            name={'shevron'}
            size={12}
          />
        </button>
      </div>
      {isOpen && (
        <div className={`${styles.menu} position-absolute w-100`}>
          {SORT_OPTIONS.map((option) => {
            const active = isSortButtonActive(option);
            const className = `${styles.option} ${active ? styles.optionActive : ''} w-100 text-uppercase`;

            return (
              <button
                key={`${option.sortBy}-${option.order}`}
                className={className}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
