import { supabaseStaging } from "../client";

jest.mock("../client", () => ({
  __esModule: true,
  supabaseStaging: {
	from: jest.fn(() => {
	  return {
		select: jest.fn(() => {
		  return {
			eq: jest.fn(() => {
			  return {data: []};
			})
		  }
		})
	  }
	})
  }
}));

describe("thing", () => {
	it("works", async () => {

		const {data, error} = await supabaseStaging.from('table-name').select('field1, field 2').eq('name', "thing");
		expect(error).toBeUndefined();
		expect(data).toEqual([])
	});
});
