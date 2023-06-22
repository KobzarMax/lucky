export type Tab = {
  id: string
  label: string
  component: React.ReactNode
}

export type TabsProps = {
  tabs: Tab[]
}
