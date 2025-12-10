"use client"

import { useEffect } from "react"

export default function SpeechCleanup() {
  useEffect(() => {
    const cleanup = () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel()
      }
    }

    // Cleanup on page visibility change (tab switch, minimize)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        cleanup()
      }
    }

    // Cleanup before page unload (refresh, close, navigate)
    const handleBeforeUnload = () => {
      cleanup()
    }

    // Cleanup on page hide (modern browsers)
    const handlePageHide = () => {
      cleanup()
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    window.addEventListener('beforeunload', handleBeforeUnload)
    window.addEventListener('pagehide', handlePageHide)

    // Cleanup on unmount
    return () => {
      cleanup()
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      window.removeEventListener('beforeunload', handleBeforeUnload)
      window.removeEventListener('pagehide', handlePageHide)
    }
  }, [])

  return null // This component doesn't render anything
}
