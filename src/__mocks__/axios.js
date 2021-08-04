const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: 'Piero',
          last: 'Rolland',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/35.jpg',
        },
        login: {
          username: 'greenpanda916',
        },
      },
    ],
  },
};

const testAxios = {
  get: jest.fn().mockResolvedValue(mockResponse),
};

export default testAxios;
