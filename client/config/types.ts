import React from 'react'

export interface FC extends React.FC {
  getInitialProps?: (params: any) => Promise<any>
  Layout?: React.FC
  preload?: () => Promise<Preload>
}

interface Preload {
  default: React.FC
}

export interface RouteItem {
  path: string
  exact?: boolean
  Component: () => FC
}
