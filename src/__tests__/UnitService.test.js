import { UnitService } from '../service';
import { Request } from '../utils';

jest.mock('../utils', () => ({
  Request: {
    get: jest.fn()
  }
}));

describe('getUnits', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch data from the mock backend', async () => {
    const params = 'units';
    const prefix = '';
    const mockResponse = [
      {
        id: 1,
        name: 'Unit 1',
        description: 'Description 1'
      },
      {
        id: 2,
        name: 'Unit 2',
        description: 'Description 2'
      }
    ];
    Request.get.mockResolvedValue(mockResponse);

    const result = await UnitService.getUnits(params);

    expect(Request.get).toHaveBeenCalledWith(`${prefix}/${params}`);
    expect(result).toEqual(mockResponse);
  });

  it('should return undefined if the request fails', async () => {
    const params = 'units';
    const prefix = '';
    jest.spyOn(Request, 'get').mockImplementation(() => {
      return;
    });

    const result = await UnitService.getUnits(params);

    expect(Request.get).toHaveBeenCalledWith(`${prefix}/${params}`);
    expect(result).toBeUndefined();
  });
});
