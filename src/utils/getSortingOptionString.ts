import { SortBy } from '@common/enums';

export const getSortingOptionString = (option: string) => {
  switch (option) {
    case SortBy.byNameAZ: {
      return 'By name A-Z';
    }
    case SortBy.byNameZA: {
      return 'By name Z-A';
    }
    case SortBy.byRateAsc: {
      return 'By rate(asc)';
    }
    case SortBy.byRateDsc: {
      return 'By rate(desc)';
    }
    case SortBy.highestPrice: {
      return 'Highest price';
    }
    case SortBy.lowestPrice: {
      return 'Lowest price';
    }
    default: {
      return 'Select';
    }
  }
};
