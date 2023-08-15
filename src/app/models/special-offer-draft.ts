import { OrderType } from './order-type';
import { OrderPriceConditions } from './order-price-conditions';
import { Portal } from './portal';

export interface SpecialOfferDraft {
  definition?: Partial<{
    description: Partial<{
      marketingName: string;
      technicalName: string;
      description: string;
    }>;
    conditions: Partial<{
      portal: Portal;
      orderType: OrderType;
      benefitAmount: number;
      startDate: Date;
      endDate: Date;
      priceConditions: OrderPriceConditions;
      connectedWithOtherPromotions: boolean;
      backPromotion: boolean;
    }>;
  }>;
}

