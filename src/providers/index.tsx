import React from 'react'
import NextUiProvider from './next-ui'

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <>
            <NextUiProvider>
                {children}
            </NextUiProvider>
        </>
    )
}
