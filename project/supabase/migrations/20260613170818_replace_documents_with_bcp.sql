
-- Add file_url column if not present
ALTER TABLE documents ADD COLUMN IF NOT EXISTS file_url text;

-- Remove all seeded placeholder documents
DELETE FROM documents;

-- Reset purchase requests linked to old docs (cascade handles it via FK)
-- Insert the real BCP document
INSERT INTO documents (
  title,
  description,
  category,
  price_inr,
  price_usd,
  pages,
  file_type,
  is_featured,
  preview_text,
  tags,
  file_url
) VALUES (
  'Business Continuity Plan (BCP) for Pharmaceutical and Bio-Pharma',
  'A comprehensive, ready-to-customise 146-page Business Continuity Plan template authored by Q-Exel GxP, Pune. Document No. QE/BCP0001. Covers all critical functions across a pharma and bio-pharma manufacturing site — Production (Upstream, Downstream, Fill-Finish), QA, QC, Microbiology, Regulatory Affairs, R&D, Engineering & Utilities, IT & Data Integrity, Warehouse & Cold Chain, HR, Safety & EHS.

Includes department-specific risk management matrices for HVAC, Power Outage, Water, Boiler, Cooling Tower, Chiller, Production, QA Batch Release, QC Analytical Testing, Microbiology, Regulatory Affairs, IT/GxP Systems, Warehouse & Cold Chain, Workforce, Fire, Flood, Earthquake, Pandemic, and more.

Fully aligned with ISO 22301:2019, ISO 9001:2015, GMP (FDA 21 CFR Parts 210 & 211, EU GMP, WHO), and ICH Q9. Includes BIA methodology, Recovery Time Objectives (RTOs), Critical Business Functions (CBFs) Matrix, BCP Committee structure, governance policy, training framework, scenario testing programme, and 6 Annexures (Critical Equipment List, Risk Assessment Matrix, Emergency Contact Templates, and more).

Ready to populate with your site-specific data — insert your firm name, effective date, and team details. This template may be used by clients of Q-Exel GxP Services in accordance with the License.',
  'Templates & Forms',
  1999.00,
  24.00,
  146,
  'PDF',
  true,
  'This Business Continuity Plan (BCP) template provides a comprehensive framework for pharmaceutical and bio-pharmaceutical organisations to maintain uninterrupted operations during disruptive events. Covers risk identification, business impact analysis, recovery strategies, communication protocols, and regulatory compliance across all site functions.',
  ARRAY['BCP', 'Business Continuity', 'ISO 22301', 'GMP', 'Risk Management', 'Pharma', 'Bio-Pharma', 'Template', 'FDA', 'EMA', 'WHO', 'ICH Q9'],
  '/documents/Bussiness_Continuity_Plan_(BCP)_for_Pharmaceutical_and_Bio-Pharma_11zon copy.pdf'
);
