import moment from 'moment-jalaali';

/**
 * @remarks convert time to iran time
 */

export const convertToIranTime = (targetTime: string): string =>
  moment(targetTime, 'MM/DD/YYYY').locale('fa').format('jYYYY/jM/jD');
