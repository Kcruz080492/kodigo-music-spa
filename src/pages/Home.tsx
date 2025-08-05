import { useEffect, useState } from 'react';
import { MusicCard } from '../components/MusicCard';
import { supabase } from '../Lib/supabase';
import '../styles/Home.css';

interface Cancion {
  id: number;
  titulo: string;
  artista: string;
  imagen: string;
  preview: string;
}

const Home = () => {
  const [tracks, setTracks] = useState<Cancion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const { data, error } = await supabase
          .from('Cancion')
          .select('*');

        if (error) {
          console.error('Error de Supabase:', error);
          setError(`Error al cargar canciones: ${error.message}`);
        } else {
          console.log('Datos obtenidos:', data);
          setTracks(data || []);
        }
      } catch (err) {
        console.error('Error inesperado:', err);
        setError('Error inesperado al cargar las canciones');
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, []);

  if (loading) {
    return (
      <section className="home">
        <h2>Bienvenido a Kodigo Music</h2>
        <p>Cargando canciones...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="home">
        <h2>Bienvenido a Kodigo Music</h2>
        <p style={{ color: '#ff6b6b' }}>{error}</p>
        <button onClick={() => window.location.reload()}>
          Reintentar
        </button>
      </section>
    );
  }

  return (
    <section className="home">
      <h2>Bienvenido a Kodigo Music</h2>
      <p>Explora tu música favorita al estilo Kodigo Music.</p>

      {tracks.length === 0 ? (
        <p>No se encontraron canciones en la base de datos.</p>
      ) : (
        <div className="music-grid">
          {tracks.map(track => (
            <MusicCard
              key={track.id}
              title={track.titulo}
              artist={track.artista}
              image={track.imagen}
              preview={track.preview}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;