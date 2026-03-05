import PriceComparison from '../models/priceComparison.model';
import MenuItem from '../models/menuItem.model';
import Restaurant from '../models/restaurant.model';
import Location from '../models/location.model';
import Platform from '../models/platform.model';

export const createPriceComparison = async (priceComparisonData: any): Promise<PriceComparison> => {
  return await PriceComparison.create(priceComparisonData);
};

export const getPriceComparisons = async (): Promise<any[]> => {
  const menuItems = await MenuItem.findAll({
    include: [
      {
        model: Restaurant,
        include: [Location]
      },
      {
        model: PriceComparison,
        include: [Platform]
      }
    ]
  });

  return menuItems.map((item: any) => {
    const platforms = item.PriceComparisons
      .filter((pc: any) => pc.Platform.status === 'Active')
      .map((pc: any) => ({
        name: pc.Platform.name,
        price: parseFloat(pc.final_price),
        base_price: parseFloat(pc.platform_base_price),
        packaging: parseFloat(pc.packaging_charge),
        delivery: parseFloat(pc.delivery_fee),
        discount: parseFloat(pc.discount_percentage),
        link: `https://${pc.Platform.name.toLowerCase()}.com/search?q=${encodeURIComponent(item.item_name)}`,
      }));

    // Identify Best Deal
    if (platforms.length > 0) {
      const minPrice = Math.min(...platforms.map((p: any) => p.price));
      platforms.forEach((p: any) => {
        if (p.price === minPrice) p.isBest = true;
      });
    }

    return {
      id: item.item_id,
      name: item.item_name,
      description: `${item.item_name} from ${item.Restaurant.name} (${item.Restaurant.Location.area_name}). ${item.Restaurant.famous_for}.`,
      image: item.image_url || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800',
      platforms: platforms
    };
  });
};

export const getPriceComparisonById = async (id: number): Promise<PriceComparison | null> => {
  return await PriceComparison.findByPk(id);
};

export const updatePriceComparison = async (id: number, priceComparisonData: Partial<PriceComparison>): Promise<PriceComparison | null> => {
  await PriceComparison.update(priceComparisonData, { where: { id } });
  return await PriceComparison.findByPk(id);
};

export const deletePriceComparison = async (id: number): Promise<number> => {
  return await PriceComparison.destroy({ where: { id } });
};
