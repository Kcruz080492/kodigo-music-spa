import { useEffect, useState } from 'react'
import { MusicCard } from '../components/MusicCard'
import '../styles/Home.css'

interface DeezerTrack {
  id: number
  title: string
  artist: {
    name: string
  }
  album: {
    cover_medium: string
  }
}

const Home = () => {
  const [tracks, setTracks] = useState<DeezerTrack[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Consulta de canciones populares en Deezer usando un proxy para evitar CORS
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks', {
      headers: {
        'Origin': 'x-requested-with'
      }
    })
      .then(response => response.json())
      .then(data => {
        setTracks(data.data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error al obtener datos de Deezer:', error)
        setLoading(false)
      })
  }, [])

  return (
    <section className="home">
      <h2>Bienvenido a Kodigo Music</h2>
      <p>Explora tu música favorita al estilo de Spotify o Apple Music.</p>

      {loading ? <p>Cargando canciones...</p> : (
        <div className="music-grid">
          {tracks.map(track => (
            <MusicCard
              key={track.id}
              title={track.title}
              artist={track.artist.name}
              image={track.album.cover_medium}
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default Home