export interface GameFooterProps {
  increaseHeight: () => void
  widgetHeight: string
  decreaseHeight: () => void
  isWidgetVisible: boolean
  setWidgetVisible: (isVisible: boolean) => void
}
