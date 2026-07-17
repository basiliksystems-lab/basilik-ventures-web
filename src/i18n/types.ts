export type Locale = "en" | "ar";

export interface Dictionary {
  nav: {
    about: string;
    services: string;
    markets: string;
    contact: string;
  };
  hero: {
    location: string;
    heading: string;
    subheading: string;
    cta_services: string;
    cta_about: string;
  };
  about: {
    label: string;
    heading_line1: string;
    heading_line2: string;
    heading_line3: string;
    paragraph1: string;
    paragraph2: string;
    stats: {
      headquarters: string;
      markets: string;
      model: string;
      license: string;
    };
  };
  services: {
    label: string;
    heading: string;
    subheading: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  markets: {
    label: string;
    heading: string;
    subheading: string;
    trade_corridors: string;
    regions: {
      name: string;
      markets: string;
      description: string;
    }[];
  };
  footer: {
    tagline: string;
    registered_office: string;
    contact: string;
    business_hours: string;
    hours_days: string;
    hours_time: string;
    copyright: string;
    location: string;
    address: {
      line1: string;
      line2: string;
      line3: string;
    };
  };
}
