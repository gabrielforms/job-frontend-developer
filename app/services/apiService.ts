import axios from 'axios';

const YouTubeAPIKey = process.env.NEXT_PUBLIC_REACT_APP_YOUTUBE_API_KEY;
const TicketmasterAPIKey = process.env.NEXT_PUBLIC_REACT_APP_TICKETMASTER_API_KEY;

const apiService = {
  getYouTubeVideos: async (searchTerm: string) => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: YouTubeAPIKey,
          q: searchTerm,
          part: 'snippet',
          maxResults: 10,
        },
      });
      return response.data.items;
    } catch (error) {
      console.error('Erro ao buscar vídeos do YouTube:', error);
      return [];
    }
  },

  getTicketmasterEvents: async (searchTerm: string) => {
    try {
        const response = await axios.get('https://app.ticketmaster.com/discovery/v2/attractions.json', {
        params: {
            apikey: TicketmasterAPIKey,
            keyword: searchTerm,
            size: 10, // Defina o tamanho desejado
        },
      });
      return response.data || [];
    } catch (error) {
      console.error('Erro ao buscar atração da Ticketmaster:', error);
      return [];
    }
  },
};

export default apiService;