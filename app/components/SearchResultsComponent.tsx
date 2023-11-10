import React from 'react';
import Link from 'next/link';

interface SearchResultsComponentProps {
  youtubeVideos: any[];
  ticketMasterAttraction: any[];
}

interface ExternalLinks {
  [key: string]: string;
}

const SearchResultsComponent: React.FC<SearchResultsComponentProps> = ({ youtubeVideos, ticketMasterAttraction }) => {
  if (!youtubeVideos && !ticketMasterAttraction) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Resultados Youtube</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {youtubeVideos.map((video) => (
          <div key={video.id} className="bg-gray-100 p-4 rounded">
            <Link href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" passHref>
              <img
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.title}
                className="mb-2 cursor-pointer"
              />
            </Link>
            <p className="font-bold">{video.snippet.title}</p>
            <p>{video.snippet.description}</p>
            <p className="text-gray-500">Autor: {video.snippet.channelTitle}</p>
          </div>
        ))}
      </div>

      {ticketMasterAttraction && ticketMasterAttraction.length > 0 && (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Detalhes das Atrações</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ticketMasterAttraction.map((attraction) => (
              <div key={attraction.id} className="bg-white p-4 rounded-md shadow-md">
                <h4 className="text-lg font-semibold mb-2">{attraction.name}</h4>

                {attraction.images && attraction.images.length > 0 && (
                  <img
                    src={attraction.images[0].url}
                    alt={`Imagem da ${attraction.name}`}
                    className="w-full h-auto rounded-md mb-4"
                  />
                )}

                {attraction.externalLinks && (
                  <div>
                    <h5 className="text-md font-semibold mb-2">Redes Sociais da Atração</h5>
                    <ul>
                      {Object.entries(attraction.externalLinks as ExternalLinks).map(([socialMedia, link]) => (
                        <li key={socialMedia} className="mb-2">
                          <a
                            href={link[0][`url`]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            {socialMedia}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResultsComponent;
