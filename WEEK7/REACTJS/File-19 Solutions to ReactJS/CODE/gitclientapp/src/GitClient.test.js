// src/GitClient.test.js
import axios from 'axios';
import GitClient from './GitClient';

// ✅ Tell Jest to mock axios
jest.mock('axios');

describe('Git Client Tests', () => {
  test('should return repository names for techiesyed', async () => {
    const mockRepos = [
      { name: 'repo1' },
      { name: 'repo2' },
    ];

    // ✅ Mock axios.get to resolve with mockRepos
    axios.get.mockResolvedValue({ data: mockRepos });

    const client = new GitClient();
    const repos = await client.getRepositories('techiesyed');

    expect(repos).toEqual(['repo1', 'repo2']);
  });
});
