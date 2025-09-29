import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import React from 'react';
import { vi, describe, it, expect } from 'vitest';

import { ApiTarget } from '../../api/useApiClient';
import { useApiQuery } from '../useApiQuery';

vi.mock('../../api/useApiClient', async () => {
  const actual = await vi.importActual('../../api/useApiClient');
  return {
    ...actual,
    useApiClient: () => ({
      get: vi.fn().mockResolvedValue({
        data: { message: 'Success!' },
      }),
    }),
  };
});

describe('useApiQuery', () => {
  const createWrapper = () => {
    const queryClient = new QueryClient();

    const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    Wrapper.displayName = 'QueryClientWrapper';

    return Wrapper;
  };

  it('successfully fetches data and returns it', async () => {
    const { result } = renderHook(
      () =>
        useApiQuery<{ message: string }>(ApiTarget.Eligibility, ['testQuery'], '/mock-endpoint'),
      {
        wrapper: createWrapper(),
      },
    );

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual({ message: 'Success!' });
    expect(result.current.isError).toBe(false);
  });

  it('throws an error when no data is returned', async () => {
    // Override mock to return undefined
    const mockClient = {
      get: vi.fn().mockResolvedValue({ data: null }),
    };

    vi.mocked(require('../../api/useApiClient').useApiClient).mockReturnValue(mockClient);

    const { result } = renderHook(
      () =>
        useApiQuery<{ message: string }>(ApiTarget.Eligibility, ['testQuery2'], '/empty-endpoint'),
      { wrapper: createWrapper() },
    );

    await waitFor(() => expect(result.current.data).toBeDefined());

    await waitFor(() => result.current.isError);

    expect(result.current.error).toBeInstanceOf(Error);
    expect(result.current.error?.message).toBe('Invalid response format');
  });
});
