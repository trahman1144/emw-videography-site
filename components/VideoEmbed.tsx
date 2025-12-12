'use client'

import { useState } from 'react'

interface VideoEmbedProps {
  url?: string
  src?: string
  title: string
  thumbnail?: string
  className?: string
}

export default function VideoEmbed({ url, src, title, thumbnail, className = '' }: VideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  // If src is provided, use it directly (full embed URL)
  // Otherwise, extract video ID from Vimeo or YouTube URL
  const getVideoId = (url: string) => {
    if (url.includes('vimeo.com')) {
      const match = url.match(/vimeo\.com\/video\/(\d+)/)
      return match ? match[1] : null
    }
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
      return match ? match[1] : null
    }
    return null
  }

  let embedUrl: string | null = null

  if (src) {
    // Use provided src directly
    embedUrl = src
  } else if (url) {
    // Check if URL is already a player/embed URL
    if (url.includes('player.vimeo.com/video/') || url.includes('youtube.com/embed/')) {
      // Use the URL directly, but ensure it has proper params
      embedUrl = url
    } else {
      // Legacy support: extract from URL
      const videoId = getVideoId(url)
      const isVimeo = url.includes('vimeo.com')
      const isYouTube = url.includes('youtube.com') || url.includes('youtu.be')

      if (videoId) {
        embedUrl = isVimeo
          ? `https://player.vimeo.com/video/${videoId}?autoplay=0&title=0&byline=0&portrait=0`
          : `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`
      }
    }
  }

  if (!embedUrl) {
    return (
      <div className={`aspect-video bg-emw-soft-green/20 rounded-lg flex items-center justify-center ${className}`}>
        <p className="text-emw-white">Invalid video URL</p>
      </div>
    )
  }

  // If src is provided, render iframe directly (no lazy loading)
  if (src) {
    return (
      <div className={`relative aspect-video bg-emw-black rounded-xl overflow-hidden ${className}`}>
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 h-full w-full rounded-xl border border-white/10"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    )
  }

  // Legacy support: lazy loading with thumbnail/play button
  return (
    <div className={`relative aspect-video bg-emw-black rounded-xl overflow-hidden ${className}`}>
      {!isLoaded && thumbnail && (
        <div className="absolute inset-0 flex items-center justify-center bg-emw-soft-green/20">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setIsLoaded(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/30 transition-colors duration-300"
            aria-label={`Play ${title}`}
          >
            <svg
              className="w-16 h-16 text-emw-white hover:text-emw-deep-green transition-colors duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      )}
      
      {isLoaded && (
        <iframe
          src={embedUrl}
          title={title}
          className="absolute inset-0 h-full w-full rounded-xl border border-white/10"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      )}
      
      {!thumbnail && !isLoaded && (
        <button
          onClick={() => setIsLoaded(true)}
          className="absolute inset-0 flex items-center justify-center bg-emw-soft-green/20 hover:bg-emw-soft-green/30 transition-colors duration-300"
          aria-label={`Play ${title}`}
        >
          <svg
            className="w-16 h-16 text-emw-white hover:text-emw-deep-green transition-colors duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      )}
    </div>
  )
}
