export type FilterOption = 'all' | 'winned' | 'losed'

export type FilterComponentProps = {
  onFilterChange: (filter: FilterOption) => void
}
