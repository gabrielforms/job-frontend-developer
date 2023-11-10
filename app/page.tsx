'use client'

import React, { useState } from 'react';
import SearchComponent from './components/SearchComponent';
import SearchResultsComponent from './components/SearchResultsComponent';

export default function Page() {
  const [searchResults, setSearchResults] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const handleSearchResults = async (results: any) => {
    try {
      console.log("Entrou!")
      await setSearchResults(results);
      console.log("Resultado", searchResults);
      console.log("Saiu!");
    } catch (error) {
      console.error('Erro ao fazer a pesquisa:', error);
    } finally {
      setLoading(false);
      console.log("Saiu do finally!");
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      {/* Componente de pesquisa */}
      <SearchComponent onSearchResults={handleSearchResults} />

      {/* Renderize o componente de resultados apenas se a pesquisa estiver completa */}
      {loading ? (<div>Carregando...</div>) : (<SearchResultsComponent
        youtubeVideos={searchResults.youtubeVideos}
        ticketMasterAttraction={searchResults.ticketMasterAttraction}
        />)}
    </div>
  );


}