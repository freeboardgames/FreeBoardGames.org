import MobileDetect from 'mobile-detect';
import { detectIsMobile } from './detectIsMobile';

jest.mock('mobile-detect');

describe('UaHelper', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    (MobileDetect as any).mockImplementation(() => {
      return { mobile: mockMobile, tablet: mockTablet };
    });
  });

  const mockMobile = jest.fn();
  const mockTablet = jest.fn();

  it('should return true if mobile and not tablet', () => {
    mockMobile.mockReturnValue(true);
    mockTablet.mockReturnValue(false);
    const result = detectIsMobile();
    expect(result).toBeTruthy();
  });
});
