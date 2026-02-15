import Platform, { IPlatform } from '../models/platform.model';

export const createPlatform = async (platformData: IPlatform) => {
  const platform = new Platform(platformData);
  return await platform.save();
};

export const getPlatforms = async () => {
  return await Platform.find({});
};

export const getPlatformById = async (id: string) => {
  return await Platform.findById(id);
};

export const updatePlatform = async (id: string, platformData: Partial<IPlatform>) => {
  return await Platform.findByIdAndUpdate(id, platformData, { new: true });
};

export const deletePlatform = async (id: string) => {
  return await Platform.findByIdAndDelete(id);
};
