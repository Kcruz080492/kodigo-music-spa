import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://asqoiorfsomxkvbafivm.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzcW9pb3Jmc29teGt2YmFmaXZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3OTc3MjAsImV4cCI6MjA2ODM3MzcyMH0.8cNPmNllJQSqLsTZs9T0bOlXTHjPh5eryk_K-TdmFtM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)