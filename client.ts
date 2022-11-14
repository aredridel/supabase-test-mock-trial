import { createClient } from "@supabase/supabase-js";

const KEY = "XXX";
const SUPABASE_URL = "https://localhost";

export const supabaseStaging = createClient(
  SUPABASE_URL,
  KEY
);
