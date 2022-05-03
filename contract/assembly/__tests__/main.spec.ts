import { storage, Context } from "near-sdk-as";

describe("Greeting ", () => {
  it("should be set and read", () => {
    storage.get<string>(Context.sender);
  });
});
