
DROP POLICY IF EXISTS "purchase_requests_insert_anon" ON purchase_requests;

CREATE POLICY "purchase_requests_insert_anon" ON purchase_requests
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    document_id IS NOT NULL
    AND full_name IS NOT NULL AND full_name <> ''
    AND email IS NOT NULL AND email <> ''
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  );
