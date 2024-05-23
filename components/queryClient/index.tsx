"use client"

import { useState } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LayoutProps } from '@/types/common';

export const QueryClientComponent = ({
    children
}: LayoutProps) => {
    const [client] = useState(new QueryClient())

    return <QueryClientProvider client={client}>{children}</QueryClientProvider>
} 