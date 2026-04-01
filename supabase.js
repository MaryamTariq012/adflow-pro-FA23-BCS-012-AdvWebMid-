import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uxxtvejfoxblrmsdxdyn.supabase.co";
const supabaseKey = "sb_publishable_-qom35L8JIvJfaQrJ_Mw_pM8s8xsr";

export const supabase = createClient(supabaseUrl, supabaseKey);