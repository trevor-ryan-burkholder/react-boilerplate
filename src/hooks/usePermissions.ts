import { useQuery, type UseQueryResult } from '@tanstack/react-query';

import { useApiClient, ApiTarget } from '../api/useApiClient';
import type { Permission } from '../types';

type UsePermissionsOptions = {
  entityId?: string;
  enabled?: boolean;
  staleTime?: number;
  refetchOnWindowFocus?: boolean;
};

const DEFAULT_ENTITY_ID = '11e425ec-4694-4483-b66e-5d199045ce29';

const usePermissions = (
  options: UsePermissionsOptions = {},
): UseQueryResult<Permission[], Error> => {
  const {
    entityId = DEFAULT_ENTITY_ID,
    enabled = true,
    staleTime = 1000 * 60 * 5,
    refetchOnWindowFocus = false,
  } = options;

  const client = useApiClient(ApiTarget.Policy);

  return useQuery<Permission[], Error>({
    queryKey: ['permissions', entityId],
    queryFn: async () => {
      const res = await client.get(`users/me/scopes/${entityId}/permissions`);
      return res.status === 204 ? [] : res.data;
    },
    enabled: !!entityId && enabled,
    staleTime,
    refetchOnWindowFocus,
  });
};

export default usePermissions;
