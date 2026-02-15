import Redirection, { IRedirection } from '../models/redirection.model';

export const createRedirection = async (redirectionData: IRedirection) => {
  const redirection = new Redirection(redirectionData);
  return await redirection.save();
};

export const getRedirections = async () => {
  return await Redirection.find({}).populate('product').populate('priceComparison');
};

export const getRedirectionById = async (id: string) => {
  return await Redirection.findById(id).populate('product').populate('priceComparison');
};

export const updateRedirection = async (id: string, redirectionData: Partial<IRedirection>) => {
  return await Redirection.findByIdAndUpdate(id, redirectionData, { new: true });
};

export const deleteRedirection = async (id: string) => {
  return await Redirection.findByIdAndDelete(id);
};
