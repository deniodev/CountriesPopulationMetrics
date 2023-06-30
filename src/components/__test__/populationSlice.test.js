import { fetchApi } from '../../Redux/population/populationSlice';

describe('fetching from api', () => {
  test('data type', async () => {
    const data = await fetchApi();
    expect(data).toBeInstanceOf(Object);
  });

  test('data contains object indeed', async () => {
    const data = await fetchApi();
    expect.objectContaining(data);
  });
});
