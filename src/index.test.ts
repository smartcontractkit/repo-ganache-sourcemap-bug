import ganache from "ganache-core";

describe("it should report the wrong line", () => {
  it("reports the wrong line", async () => {
    console.log((ganache.provider() as any).options.seed);
    console.log("1");
    const x: any = {};
    console.log(x.a.s);
    console.log("1");
    console.log("1");
    console.log("1");
    console.log("1");
  });
});
