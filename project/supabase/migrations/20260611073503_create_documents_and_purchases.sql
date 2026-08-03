
CREATE TABLE IF NOT EXISTS documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  price_inr numeric(10,2) NOT NULL DEFAULT 0,
  price_usd numeric(10,2) NOT NULL DEFAULT 0,
  pages integer,
  file_type text DEFAULT 'PDF',
  is_featured boolean DEFAULT false,
  preview_text text,
  tags text[],
  created_at timestamptz DEFAULT now()
);

ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "documents_select_public" ON documents FOR SELECT
  TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS purchase_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id uuid REFERENCES documents(id) ON DELETE CASCADE,
  full_name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  message text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE purchase_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "purchase_requests_insert_anon" ON purchase_requests FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- Seed documents
INSERT INTO documents (title, description, category, price_inr, price_usd, pages, is_featured, preview_text, tags) VALUES
(
  'GMP Audit Checklist — Sterile Manufacturing',
  'Comprehensive 150-point audit checklist aligned with EU GMP Annex 1 (2022) and FDA 21 CFR Part 211. Covers cleanroom classification, HVAC, environmental monitoring, aseptic process, and personnel practices.',
  'Audit Checklists',
  4999, 60, 38, true,
  'This checklist provides a systematic framework for conducting internal and external GMP audits of sterile manufacturing facilities...',
  ARRAY['GMP', 'Sterile', 'Audit', 'Annex 1', 'FDA']
),
(
  'Data Integrity SOP Template Pack',
  'Ready-to-use SOP templates for data integrity governance covering ALCOA+ principles, raw data management, audit trail review, and data lifecycle management for both paper and electronic systems.',
  'SOPs',
  6999, 84, 52, true,
  'This SOP template pack provides a complete data integrity framework aligned with MHRA, FDA, and WHO guidance documents...',
  ARRAY['Data Integrity', 'ALCOA+', 'SOP', 'Electronic Records', '21 CFR Part 11']
),
(
  'Computer System Validation (CSV) Protocol Templates — GAMP 5',
  'Full suite of GAMP 5-aligned CSV templates including URS, FRS, DS, IQ/OQ/PQ protocols, Risk Assessment, and Validation Summary Report. Ready for LIMS, MES, ERP, or DMS validation.',
  'Validation Protocols',
  9999, 120, 95, true,
  'This CSV protocol template suite follows the GAMP 5 lifecycle approach and is pre-structured for validation of computerised systems in GxP environments...',
  ARRAY['CSV', 'GAMP 5', 'Validation', '21 CFR Part 11', 'Annex 11', 'LIMS']
),
(
  'Cleaning Validation Protocol & Report Template',
  'Scientifically-justified cleaning validation protocol template with acceptance criteria calculation methodology, swab/rinse sampling guides, analytical method suitability, and full report structure.',
  'Validation Protocols',
  5999, 72, 44, false,
  'This cleaning validation protocol template provides a robust framework for demonstrating that cleaning procedures effectively remove product residues...',
  ARRAY['Cleaning Validation', 'GMP', 'Protocol', 'Acceptance Criteria']
),
(
  'GDP Audit Checklist — Cold Chain & Temperature-Controlled Distribution',
  'Detailed audit checklist for Good Distribution Practice compliance covering warehousing, cold chain management, transportation qualification, returns handling, and wholesale dealer requirements.',
  'Audit Checklists',
  3999, 48, 28, false,
  'This GDP audit checklist is aligned with EU GDP Guidelines 2013/C 343/01 and WHO Technical Report Series guidance on pharmaceutical distribution...',
  ARRAY['GDP', 'Cold Chain', 'Distribution', 'Temperature Control', 'Audit']
),
(
  'Root Cause Analysis & CAPA SOP Template',
  'Structured RCA and CAPA SOP template using fishbone/Ishikawa, 5-Why, and fault tree methodologies. Includes deviation classification matrix, CAPA effectiveness verification criteria, and trend analysis tools.',
  'SOPs',
  4499, 54, 34, false,
  'This SOP template provides a comprehensive framework for conducting thorough root cause investigations and implementing effective corrective and preventive actions...',
  ARRAY['CAPA', 'Root Cause Analysis', 'Deviation', 'SOP', 'Quality']
),
(
  'GxP Training Programme — Foundation Level (Slide Deck + Facilitator Guide)',
  'Complete 8-module GxP training programme covering GMP basics, documentation practices, deviation management, data integrity, hygiene, and audit awareness. Includes 200+ slides and facilitator notes.',
  'Training Materials',
  7999, 96, 215, true,
  'This foundation-level GxP training programme is designed for new joiners and experienced staff requiring regulatory refresher training...',
  ARRAY['Training', 'GxP', 'GMP', 'Documentation', 'E-Learning Ready']
),
(
  'Change Control SOP & Form Templates',
  'Comprehensive change control SOP aligned with ICH Q10 and GMP requirements. Includes change request form, impact assessment matrix, risk classification guide, and regulatory notification decision tree.',
  'SOPs',
  3499, 42, 26, false,
  'This change control documentation pack provides a complete, regulatory-aligned framework for managing changes to products, processes, systems, and facilities...',
  ARRAY['Change Control', 'SOP', 'ICH Q10', 'GMP', 'Risk Management']
),
(
  'Environmental Monitoring Programme — Sterile Facilities',
  'Complete EMP template package for sterile manufacturing environments covering viable and non-viable monitoring, alert/action limit justification, trend analysis, and investigation triggers per EU GMP Annex 1.',
  'Templates & Forms',
  5499, 66, 48, false,
  'This Environmental Monitoring Programme template is designed for cleanroom facilities manufacturing sterile pharmaceutical products...',
  ARRAY['Environmental Monitoring', 'Sterile', 'Annex 1', 'Cleanroom', 'EMP']
),
(
  'Supplier Qualification SOP & Questionnaire Pack',
  'End-to-end supplier qualification documentation including risk-based qualification SOP, supplier questionnaire, on-site audit template, quality agreement template, and ongoing monitoring checklist.',
  'SOPs',
  6499, 78, 60, false,
  'This supplier qualification pack provides a risk-based approach to assessing and approving API, excipient, packaging material, and service suppliers...',
  ARRAY['Supplier Qualification', 'Vendor Audit', 'GMP', 'Risk-Based', 'Quality Agreement']
),
(
  'Process Validation Protocol Template — ICH Q8/Q9/Q10 Aligned',
  'Stage 1, 2 and 3 process validation protocol and report templates aligned with FDA Process Validation Guidance 2011 and ICH Q8/Q9/Q10. Includes CPP identification, PAT considerations, and continued process verification.',
  'Validation Protocols',
  8999, 108, 78, true,
  'This process validation documentation suite follows the three-stage lifecycle approach outlined in FDA guidance and provides a science and risk-based framework...',
  ARRAY['Process Validation', 'ICH Q8', 'ICH Q9', 'FDA', 'CPP', 'Lifecycle']
),
(
  'Annual Product Quality Review (APQR) Template',
  'Structured APQR/APR template with auto-calculation-ready tables for batch analysis, OOS/OOT trends, deviation summary, change history, stability, complaints, and regulatory commitments review.',
  'Templates & Forms',
  4999, 60, 42, false,
  'This Annual Product Quality Review template provides a comprehensive structure for fulfilling GMP requirements for periodic product quality reviews...',
  ARRAY['APQR', 'APR', 'Annual Review', 'GMP', 'Product Quality', 'Trending']
);
