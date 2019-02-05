import { expect } from "chai";

import submitMSISDN from "../main"

describe('assrock-pin/gr/default', () => {
  const gr_msisdn = '6987810599'

  it("should submit MSISDN correctly and return a function for submitting PIN", async () => {
    const submitPIN = await submitMSISDN(window, null, gr_msisdn)
    expect(typeof submitPIN).eq('function');
  });
})