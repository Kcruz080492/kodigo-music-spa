// 📁 /src/components/MusicCard.tsx
import React, { useRef, useState } from 'react'
import { FaHeart, FaPlay, FaPause } from 'react-icons/fa'
import '../styles/MusicCard.css'

type MusicCardProps = {
  title: string
  artist: string
  image: string
  preview: string
}

export const MusicCard: React.FC<MusicCardProps> = ({ title, artist, image, preview }) => {
  const [liked, setLiked] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleLike = () => {
    setLiked(!liked)
  }

  return (
    <div className="music-card dark">
      <div className="image-container">
        <img src={image} alt={`Portada de ${title}`} />
      </div>
      <div className="music-info">
        <h3>{title}</h3>
        <p>{artist}</p>
      </div>
      <div className="button-group">
        <button className="play-button" onClick={togglePlay}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
          <FaHeart />
        </button>
        <audio ref={audioRef} src={preview} onEnded={() => setIsPlaying(false)} />
      </div>
    </div>
  )
}
