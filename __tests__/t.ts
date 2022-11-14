import { supabaseStaging } from "../client";

describe("thing", () => {
	it("works", async () => {
		const {data, error} = await supabaseStaging.from('table-name').select('field1, field 2').eq('name', "thing");
		console.log(data, error);
	});
});
