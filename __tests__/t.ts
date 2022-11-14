import { supabaseStaging } from "../client";

function createMockQueryBuilder() {
	return {
		select: jest.fn(() => {
			return createMockFilterBuilder();
		})
	};
}

function createMockFilterBuilder() {
	return {
		eq: jest.fn().mockReturnValue({data: []})
	};
}

describe("thing", () => {
	beforeEach(() => {
		jest.spyOn(supabaseStaging, "from").mockImplementation(() => createMockQueryBuilder());
	});

	it("works", async () => {
		const {data, error} = await supabaseStaging.from('table-name').select('field1, field 2').eq('name', "thing");
		expect(error).toBeUndefined();
		expect(data).toEqual([])
	});
});
