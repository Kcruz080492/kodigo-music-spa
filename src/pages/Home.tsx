import { useEffect, useState } from 'react';
import { MusicCard } from '../components/MusicCard';
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

  const supabaseUrl = 'https://asqoiorfsomxkvbafivm.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzcW9pb3Jmc29teGt2YmFmaXZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3OTc3MjAsImV4cCI6MjA2ODM3MzcyMH0.8cNPmNllJQSqLsTZs9T0bOlXTHjPh5eryk_K-TdmFtM';

  useEffect(() => {
    fetch(`${supabaseUrl}/rest/v1/Cancion`, {
      method: 'GET',
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setTracks(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener canciones:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="home">
      <h2>Bienvenido a Kodigo Music</h2>
      <p>Explora tu música favorita al estilo Kodigo Music.</p>

      {loading ? <p>Cargando canciones...</p> : (
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
