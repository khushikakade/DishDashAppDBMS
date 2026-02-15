import Order, { IOrder } from '../models/order.model';

export const createOrder = async (orderData: IOrder): Promise<IOrder> => {
    const order = new Order(orderData);
    return await order.save();
};

export const getOrders = async (): Promise<IOrder[]> => {
    return await Order.find().populate('user', 'name').populate('restaurant', 'name');
};

export const getOrderById = async (id: string): Promise<IOrder | null> => {
    return await Order.findById(id).populate('user', 'name').populate('restaurant', 'name');
};

export const updateOrderStatus = async (id: string, status: string): Promise<IOrder | null> => {
    const order = await Order.findById(id);
    if (order) {
        order.status = status;
        return await order.save();
    }
    return null;
};
