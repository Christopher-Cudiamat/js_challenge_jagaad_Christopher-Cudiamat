export interface IProductData {
  [key: string]: string;
  about: string;
  best_price: boolean;
  booking_type: string;
  buy_multiplier: number;
  categories: ICategories[];
  city: ICity;
  cover_image_url: string;
  cutoff_time: string;
  daily: boolean;
  description: string;
  discount: number;
  duration: string;
  exclusive: boolean;
  features: IFeatures[] | [];
  flavours: IFlavours[] | [];
  food: [];
  free_cancellation: boolean;
  giftable: boolean;
  group_size: [];
  has_extra_customer_data: boolean;
  has_passenger_info: boolean;
  has_price_info_on_date: boolean;
  highlights: string[];
  included: string[];
  is_available_today: boolean;
  is_available_tomorrow: boolean;
  languages: ILanguages[];
  last_chance: boolean;
  latitude: number;
  likely_to_sell_out: boolean;
  longitude: number;
  max_confirmation_time: boolean;
  meeting_point: string;
  must_see: boolean;
  not_included: string[];
  open: boolean;
  operational_days: string;
  original_retail_price: IOriginalOrRetailPric;
  original_retail_price_without_service_fee: IOriginalOrRetailPric;
  relevance: number;
  relevance_venue: number;
  retail_price: IOriginalOrRetailPric;
  retail_price_without_service_fee: IOriginalOrRetailPric;
  reviews_aggregated_info: IReviewAggregatedInfo;
  reviews_avg: number;
  reviews_number: number;
  saves: number;
  service_fee: IServiceFee;
  servic: [];
  special_offer: boolean;
  temporary: boolean;
  ticket: boolean;
  ticket_not_included: boolean;
  title: string;
  top_seller: boolean;
  url: string;
  uuid: string;
  validity: string;
  verticals: IVerticals[];
  voucher_access_usage: string;
}

interface IVerticals {
  active: boolean;
  code: string;
  cover_image_url: string;
  id: number;
  meta_description: string;
  meta_title: string;
  name: string;
  relevance: number;
  slug: string;
  url: string;
}

interface IServiceFee {
  currency: string;
  formatted_iso_value: string;
  formatted_value: string;
  value: number;
}
interface IReviewAggregatedInfo {
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
}

interface IOriginalOrRetailPrice {
  currency: string;
  formatted_iso_value: string;
  formatted_value: string;
  value: number;
}

interface ILanguages {
  code: string;
  name: string;
}

interface ICategories {
  code: string;
  cover_image_url: string;
  event_image_url: string;
  id: number;
  level: string;
  name: string;
  url: string;
}

interface ICity {
  country: ICountry;
  cover_image_url: string;
  id: number;
  name: string;
  time_zone: string;
  url: string;
}

interface ICountry {
  id: number;
  iso_code: string;
  name: string;
}

interface IFeatures {
  code: string;
  name: string;
}

interface IFlavours {
  active: boolean;
  id: number;
  name: string;
  slug: string;
}
