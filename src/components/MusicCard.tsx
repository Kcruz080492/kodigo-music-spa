import React from 'react'
import { FaHeart, FaPlay } from 'react-icons/fa'
import '../styles/MusicCard.css'

type MusicCardProps = {
  title: string
  artist: string
  image: string
}

export const MusicCard: React.FC<MusicCardProps> = ({ title, artist, image }) => {
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
        <button className="play-button" title="Reproducir">
          <FaPlay />
        </button>
        <button className="like-button" title="Me gusta">
          <FaHeart />
        </button>
      </div>
    </div>
  )
}