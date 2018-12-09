type IVisitor = {
  country: string;
  rockmanId: string;
  impressionNumber: number;
  page: string;
  xaid: string; // affiliateId
  cid: number; // integer normalized value of campaignId
  offer: number;
};

export default IVisitor