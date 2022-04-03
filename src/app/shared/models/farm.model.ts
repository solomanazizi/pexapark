export interface Farm {
  id: number;
  name: string;
  type: FarmType;
  totalCapacity: number;
}

export interface FarmCapacityData {
  farmId: number;
  capacityFactorData: DailyCapacityFactor[];
}

export interface DailyCapacityFactor {
  value: number;
  date: string;
  completeDataSet: boolean;
}

type FarmType = 'wind' | 'solar';
