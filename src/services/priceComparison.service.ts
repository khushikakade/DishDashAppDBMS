import PriceComparison, { IPriceComparison } from '../models/priceComparison.model';

export const createPriceComparison = async (priceComparisonData: IPriceComparison) => {
  const priceComparison = new PriceComparison(priceComparisonData);
  return await priceComparison.save();
};

export const getPriceComparisons = async () => {
  return await PriceComparison.find({}).populate('user').populate('platform');
};

export const getPriceComparisonById = async (id: string) => {
  return await PriceComparison.findById(id).populate('user').populate('platform');
};

export const updatePriceComparison = async (id: string, priceComparisonData: Partial<IPriceComparison>) => {
  return await PriceComparison.findByIdAndUpdate(id, priceComparisonData, { new: true });
};

export const deletePriceComparison = async (id: string) => {
  return await PriceComparison.findByIdAndDelete(id);
};
