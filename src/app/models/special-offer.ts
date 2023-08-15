import { Portal } from './portal';
import { OrderType } from './order-type';
import { OrderPriceConditions } from './order-price-conditions';

export interface SpecialOffer {
  definition: {
    description: {
      marketingName: string;
      technicalName: string | null;
      description: string | null;
    };
    conditions: {
      portal: Portal;
      orderType: OrderType;
      benefitAmount: number | null;
      startDate: Date;
      endDate: Date | null;
      priceConditions: OrderPriceConditions;
      connectedWithOtherPromotions: boolean;
      backPromotion: boolean;
    };
  };
}