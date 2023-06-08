import { useEffect, useRef } from 'react'
import Resizable from 're-resizable'

declare global {
  interface Window {
    TradingView: any // Replace 'any' with the appropriate type for TradingView
  }
}

let tvScriptLoadingPromise: Promise<Event> | null

export default function TradingViewWidget(): JSX.Element {
  const onLoadScriptRef = useRef<(() => void) | null>()

  useEffect(() => {
    onLoadScriptRef.current = createWidget

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement('script')
        script.id = 'tradingview-widget-loading-script'
        script.src = 'https://s3.tradingview.com/tv.js'
        script.type = 'text/javascript'
        script.onload = resolve

        document.head.appendChild(script)
      })
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    )

    return () => {
      onLoadScriptRef.current = null
    }

    function createWidget() {
      if (
        document.getElementById('tradingview_06401') &&
        'TradingView' in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: 'BINANCE:BNBBUSD',
          interval: 'D',
          timezone: 'Etc/UTC',
          theme: 'dark',
          style: '1',
          locale: 'en',
          toolbar_bg: '#f1f3f6',
          enable_publishing: false,
          allow_symbol_change: true,
          enabled_features: ['header_fullscreen_button'],
          container_id: 'tradingview_06401'
        })
      }
    }
  }, [])

  return (
    <div className="tradingview-widget-container" style={{ height: '100%' }}>
      <div id="tradingview_06401" style={{ height: '100%' }} />
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow noreferrer"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  )
}
