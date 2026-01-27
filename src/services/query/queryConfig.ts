import { TIME } from '@shared/types/time.types';

export const QUERY_CONFIG = {
  critical: {
    staleTime: TIME.HOUR,
    gcTime: TIME.DAY,
  },
  dynamic: {
    staleTime: TIME.FIVE_MINUTES,
    gcTime: TIME.MINUTE * 30,
  },
} as const;
