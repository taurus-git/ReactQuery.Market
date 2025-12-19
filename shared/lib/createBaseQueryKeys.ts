import { QueryDomains } from '@shared/constants/queryDomains';

export const createBaseQueryKeys = <T extends QueryDomains>(baseKey: T) => ({
  all: [baseKey] as const,
  lists: () => [baseKey, 'list'] as const,
  details: () => [baseKey, 'detail'] as const,
});
