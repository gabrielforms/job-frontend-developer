'use client'

import React, { useState } from 'react';
import SearchComponent from './components/SearchComponent';
import SearchResultsComponent from './components/SearchResultsComponent';

export default function Page() {
  const [searchResults, setSearchResults] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const handleSearchResults = async (results: any) => {
    try {
      await setSearchResults(results);
    } catch (error) {
      console.error('Erro ao fazer a pesquisa:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <SearchComponent onSearchResults={handleSearchResults} />

      {loading ? (<div>Carregando...</div>) : (<SearchResultsComponent
        youtubeVideos={searchResults.youtubeVideos}
        ticketMasterAttraction={searchResults.ticketMasterAttraction}
        />)}
    </div>
  );


}