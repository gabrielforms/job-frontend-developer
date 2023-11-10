import React, { useState } from 'react';
import apiService from '../services/apiService';

interface SearchComponentProps {
  onSearchResults: (results: any) => void;
}

function SearchComponent({ onSearchResults }: SearchComponentProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchComplete, setSearchComplete] = useState(false);
  const [isClassRemoved, setIsClassRemoved] = useState(false);

  const handleSearch = async () => {
    setIsClassRemoved(true);
    try {
      const youtubeVideos = await apiService.getYouTubeVideos(searchTerm);
      const ticketmasterEvents = await apiService.getTicketmasterEvents(searchTerm);
      if (ticketmasterEvents._embedded) {
        const ticketMasterAttraction = await ticketmasterEvents._embedded.attractions;
        const combinedResults = await { youtubeVideos, ticketMasterAttraction };
        console.log("Resultado", combinedResults);
  
        // Aguarde a conclusão da atualização do estado
        await onSearchResults(combinedResults);
      }
      else {
        const combinedResults = await { youtubeVideos };
        console.log("Resultado", combinedResults);
  
        // Aguarde a conclusão da atualização do estado
        await onSearchResults(combinedResults);
      }


      setSearchComplete(true);
    } catch (error) {
      console.error('Erro ao fazer a pesquisa:', error);
    }
  }

  return (
    <div>
      <div className={`flex justify-center items-center ${isClassRemoved ? '' : 'h-screen'}`}>
        <div className="w-1/3 border border-gray-300 p-4 rounded-lg shadow-lg">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300"
            placeholder="Pesquisar..."
          />
          <button
            className="mt-2 p-2 bg-blue-500 text-white rounded-md cursor-pointer"
            onClick={handleSearch}
          >
            Pesquisar
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;