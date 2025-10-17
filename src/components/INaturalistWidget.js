import { useEffect, useState } from 'react';

export default function INaturalistWidget() {
  const [observations, setObservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchObservations = async () => {
      try {
        setLoading(true);
        // Fetch observations from the project using iNaturalist API
        const response = await fetch(
          'https://api.inaturalist.org/v1/observations?project_id=215961&layout=small&per_page=16&order=desc&order_by=created_at&photos=true&sounds=false&geoprivacy=open'
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setObservations(data.results || []);
        setError(null);
      } catch (err) {
        console.error('INaturalistWidget: Error fetching observations:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchObservations();
  }, []);

  if (loading) {
    return (
      <div
        className="inat-widget"
        style={{
          fontFamily: 'Georgia, serif',
          padding: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '8px',
          margin: '20px 0',
        }}
      >
        <div className="inat-widget-header" style={{ marginBottom: '10px' }}>
          <a href="https://www.inaturalist.org">
            <img alt="iNaturalist" src="https://www.inaturalist.org/assets/logo-small.png" />
          </a>
        </div>
        <div style={{ textAlign: 'center', padding: '20px' }}>Loading observations...</div>
        <table className="inat-footer">
          <tbody>
            <tr className="inat-user">
              <td className="inat-value">
                <strong>
                  <a
                    rel="nofollow"
                    href="https://www.inaturalist.org/observations?project_id=215961"
                  >
                    View more observations from SaP - SW Jepson District on{' '}
                    <nobr>iNaturalist »</nobr>
                  </a>
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="inat-widget"
        style={{
          fontFamily: 'Georgia, serif',
          padding: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '8px',
          margin: '20px 0',
        }}
      >
        <div className="inat-widget-header" style={{ marginBottom: '10px' }}>
          <a href="https://www.inaturalist.org">
            <img alt="iNaturalist" src="https://www.inaturalist.org/assets/logo-small.png" />
          </a>
        </div>
        <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
          Error loading observations: {error}
        </div>
        <table className="inat-footer">
          <tbody>
            <tr className="inat-user">
              <td className="inat-value">
                <strong>
                  <a
                    rel="nofollow"
                    href="https://www.inaturalist.org/observations?project_id=215961"
                  >
                    View more observations from SaP - SW Jepson District on{' '}
                    <nobr>iNaturalist »</nobr>
                  </a>
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div
      className="inat-widget"
      style={{
        fontFamily: 'Georgia, serif',
        padding: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '8px',
        margin: '20px 0',
      }}
    >
      <div className="inat-widget-header" style={{ marginBottom: '10px' }}>
        <a href="https://www.inaturalist.org">
          <img alt="iNaturalist" src="https://www.inaturalist.org/assets/logo-small.png" />
        </a>
      </div>

      {observations.length > 0 ? (
        <div style={{ marginBottom: '15px' }}>
          <h4 style={{ margin: '0 0 15px 0', fontFamily: 'Trebuchet MS, Arial, sans-serif' }}>
            Recent Observations ({observations.length})
          </h4>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '6px',
              marginBottom: '10px',
            }}
          >
            {observations.slice(0, 16).map((observation) => (
              <div
                key={observation.id}
                style={{
                  position: 'relative',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              >
                <a
                  href={`https://www.inaturalist.org/observations/${observation.id}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: 'block' }}
                >
                  {observation.photos && observation.photos.length > 0 ? (
                    <img
                      src={observation.photos[0].url.replace('square', 'medium')}
                      alt={observation.species_guess || 'Observation'}
                      style={{
                        width: '100%',
                        aspectRatio: '1',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '100%',
                        aspectRatio: '1',
                        backgroundColor: '#ddd',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '10px',
                        color: '#666',
                      }}
                    >
                      No photo
                    </div>
                  )}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                      color: 'white',
                      padding: '4px 6px',
                      fontSize: '10px',
                      fontFamily: 'Trebuchet MS, Arial, sans-serif',
                    }}
                  >
                    {observation.species_guess
                      ? observation.species_guess.length > 12
                        ? observation.species_guess.substring(0, 12) + '...'
                        : observation.species_guess
                      : 'Unknown'}
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '20px', color: '#888' }}>
          No observations found
        </div>
      )}

      <table className="inat-footer">
        <tbody>
          <tr className="inat-user">
            <td className="inat-value">
              <strong>
                <a rel="nofollow" href="https://www.inaturalist.org/observations?project_id=215961">
                  View more observations from SaP - SW Jepson District on <nobr>iNaturalist »</nobr>
                </a>
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
