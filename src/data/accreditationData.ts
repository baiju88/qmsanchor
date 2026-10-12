export interface AccreditationType {
  id: string;
  name: string;
  standard: string;
  desc: string;
  iconName: string;
}

export interface FacilitySizeTier {
  id: string;
  title: string;
  scope: string;
  details: {
    timeline: string;
    documentation: string;
    assessorDays: string;
    qualityManager: string;
    uncertaintyOrInfection: string;
    ptOrFire: string;
    supportPlan: string;
    estOfficialFees: string;
  };
}

export interface BoardData {
  title: string;
  fullName: string;
  tagline: string;
  governance: string;
  standardsBadge: string;
  types: AccreditationType[];
  sizes: FacilitySizeTier[];
}

export const ACCREDITATION_DATA: Record<'NABL' | 'NABH', BoardData> = {
  NABL: {
    title: 'NABL Accreditation Categories',
    fullName: 'National Accreditation Board for Testing and Calibration Laboratories',
    tagline: 'Autonomous body under DST & Quality Council of India (QCI) aligning with ILAC/APAC Mutual Recognition Arrangements.',
    governance: 'ISO/IEC 17011 compliant statutory authority for laboratory conformity assessment in India.',
    standardsBadge: 'ISO 15189 / ISO 17025 / ISO 17034',
    types: [
      {
        id: 'nabl-medical',
        name: 'Medical / Clinical Laboratories',
        standard: 'ISO 15189:2022',
        desc: 'Pathology, Biochemistry, Microbiology, Hematology, Histopathology & Molecular Diagnostics.',
        iconName: 'Microscope',
      },
      {
        id: 'nabl-testing',
        name: 'Testing Laboratories',
        standard: 'ISO/IEC 17025:2017',
        desc: 'Chemical, Biological, Mechanical, Electrical, Food/Water & Environmental testing facilities.',
        iconName: 'FlaskConical',
      },
      {
        id: 'nabl-calibration',
        name: 'Calibration Laboratories',
        standard: 'ISO/IEC 17025:2017',
        desc: 'Thermal, Mechanical, Electro-Technical, Fluid Flow & Optical calibration centers.',
        iconName: 'Compass',
      },
      {
        id: 'nabl-rmp',
        name: 'Reference Material Producers (RMP)',
        standard: 'ISO 17034:2016',
        desc: 'Certified Reference Materials (CRMs) producers, characterization, and matrix standards.',
        iconName: 'Boxes',
      },
      {
        id: 'nabl-ptp',
        name: 'Proficiency Testing Providers (PTP)',
        standard: 'ISO/IEC 17043:2023',
        desc: 'Inter-laboratory comparison providers, PT scheme organizers, and round-robin testing.',
        iconName: 'PieChart',
      },
    ],
    sizes: [
      {
        id: 'nabl-small',
        title: 'Small / Basic Facility',
        scope: 'Up to 10 Key Analyzers / Single Discipline',
        details: {
          timeline: '3 to 4 Months',
          documentation: 'Basic Tier 1-3 SOPs, Quality Manual (QM), Equipment Maintenance & IQC Logs, Sample Tracking Registers',
          assessorDays: '2 Assessor Mandays (1 Lead + 1 Technical Assessor)',
          qualityManager: 'Trained Quality Officer (4-day NABL training certificate completed)',
          uncertaintyOrInfection: 'MU calculated for core high-volume test parameters using ISO GUM guidelines',
          ptOrFire: 'Minimum 1 completed PT/EQAS cycle with satisfactory Z-scores prior to formal application',
          supportPlan: 'QMSAnchor Essential Starter Kit: SOP drafting, IQC charts, MU worksheets, and 1 Mock Audit',
          estOfficialFees: '₹22,000 - ₹35,000 + GST',
        },
      },
      {
        id: 'nabl-medium',
        title: 'Medium / Multi-Discipline Lab',
        scope: '11 to 30 Analyzers / 2-3 Core Disciplines',
        details: {
          timeline: '4 to 6 Months',
          documentation: 'Complete Tier 1 to Tier 4 Documentation, Risk Management registers, Method Verification dossiers',
          assessorDays: '3 to 4 Assessor Mandays (Lead + Multiple Technical Assessors)',
          qualityManager: 'Dedicated full-time Quality Manager with certified ISO 15189 / 17025 Lead Auditor training',
          uncertaintyOrInfection: 'Comprehensive Uncertainty Budgets, repeatability, reproducibility, and linearity reports',
          ptOrFire: 'Full PT/EQAS participation across all disciplines; documented root cause analysis for outliers',
          supportPlan: 'QMSAnchor Turnkey Implementation: Clause-by-clause drafting, internal audit, MRM, and portal filing',
          estOfficialFees: '₹45,000 - ₹68,000 + GST',
        },
      },
      {
        id: 'nabl-large',
        title: 'Large / Multi-Site Facility',
        scope: '30+ Equipment / High-Throughput / Hub & Spoke',
        details: {
          timeline: '6 to 9 Months',
          documentation: 'Enterprise Quality Governance, LIMS Integration protocols, Complete Method Validation dossiers',
          assessorDays: '5+ Assessor Mandays (Multi-site sampling protocol as per NABL 100 series)',
          qualityManager: 'Full Quality Department: Head of Quality + Deputy QM + Discipline Technical Leads',
          uncertaintyOrInfection: 'Advanced Monte Carlo MU modeling, matrix effects, sample stability protocols',
          ptOrFire: 'Comprehensive 4-Year PT Plan covering 100% of accredited parameters with international EQAS',
          supportPlan: 'QMSAnchor Enterprise Turnkey: On-site embedded consultant, mock assessments, and post-audit NC closure',
          estOfficialFees: '₹85,000 - ₹1,60,000+ + GST',
        },
      },
    ],
  },
  NABH: {
    title: 'NABH Accreditation Categories',
    fullName: 'National Accreditation Board for Hospitals & Healthcare Providers',
    tagline: 'Constituent board of QCI establishing national healthcare benchmarks, patient safety protocols, and clinical governance.',
    governance: 'ISQua EEA accredited national body for healthcare organizational excellence across India.',
    standardsBadge: 'NABH 5th/6th Edition / SHCO / Entry Level',
    types: [
      {
        id: 'nabh-hospitals',
        name: 'Hospitals (Full NABH)',
        standard: 'NABH 5th/6th Edition Standards',
        desc: 'Tertiary care, multi-specialty, and teaching hospitals requiring institutional clinical governance.',
        iconName: 'Building2',
      },
      {
        id: 'nabh-shco',
        name: 'Small Healthcare Org (SHCO)',
        standard: 'NABH SHCO Standards (Up to 50 beds)',
        desc: 'Nursing homes, surgical day-care units, maternity clinics, and small community hospitals.',
        iconName: 'Stethoscope',
      },
      {
        id: 'nabh-entry-hco',
        name: 'Entry Level NABH (HCO)',
        standard: 'Entry Level Healthcare Organization',
        desc: 'Structured intermediate milestone framework for mid-sized hospitals pursuing full accreditation.',
        iconName: 'ShieldCheck',
      },
      {
        id: 'nabh-ayush',
        name: 'AYUSH Hospitals',
        standard: 'AYUSH Accreditation Standards',
        desc: 'Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy inpatient healthcare centers.',
        iconName: 'Leaf',
      },
      {
        id: 'nabh-dental',
        name: 'Dental Clinics & Hospitals',
        standard: 'NABH Dental Care Standards',
        desc: 'Standalone dental polyclinics, oral surgery centers, and academic dental hospitals.',
        iconName: 'Smile',
      },
      {
        id: 'nabh-clinics',
        name: 'Allopathic Clinics & Daycare',
        standard: 'Primary & Specialty Clinic Standards',
        desc: 'Outpatient diagnostic clinics, day surgery centers, and specialty consultation suites.',
        iconName: 'UserCheck',
      },
      {
        id: 'nabh-bloodbank',
        name: 'Blood Centers & Transfusion',
        standard: 'NABH Blood Bank Standards',
        desc: 'Blood banks, apheresis centers, and component processing facilities.',
        iconName: 'Droplet',
      },
      {
        id: 'nabh-radiology',
        name: 'Medical Imaging / Radiology',
        standard: 'NABH MIS Standards (AERB Compliant)',
        desc: 'X-Ray, Ultrasound, CT, MRI, Mammography, and PET-CT imaging diagnostic centers.',
        iconName: 'Activity',
      },
    ],
    sizes: [
      {
        id: 'nabh-tier1',
        title: 'SHCO Tier 1 (1 to 15 Beds)',
        scope: 'Single Specialty Clinic / Daycare Unit',
        details: {
          timeline: '3 to 4 Months',
          documentation: 'Core Infection Control Manual, Emergency Code protocols, Patient Rights charter, BMW agreements',
          assessorDays: '1 Assessor Manday (1 Day On-site Assessment)',
          qualityManager: 'Clinical Coordinator or Senior Nurse trained on NABH Entry Level parameters',
          uncertaintyOrInfection: 'Hand hygiene compliance monitoring, BMW color coding, sterilization spore testing logs',
          ptOrFire: 'Valid Fire NOC/Provisional NOC, working fire extinguishers, clear emergency evacuation route maps',
          supportPlan: 'QMSAnchor SHCO Rapid Advisory: Standardized SOP bundle, statutory compliance tracker, and 1 Mock Audit',
          estOfficialFees: '₹15,000 - ₹28,000 + GST',
        },
      },
      {
        id: 'nabh-tier2',
        title: 'SHCO Tier 2 (16 to 50 Beds)',
        scope: 'Small Hospital / Nursing Home',
        details: {
          timeline: '4 to 6 Months',
          documentation: '10 NABH Core Chapter SOPs, High-Risk Medication Policy, Credentialing & Privileging Matrix',
          assessorDays: '2 Assessor Mandays (1 Principal Assessor + 1 Assessor)',
          qualityManager: 'Designated Quality Officer backed by an active multidisciplinary Quality & Safety Committee',
          uncertaintyOrInfection: 'Hospital Infection Control Committee (HICC), HAI surveillance (VAP, CAUTI, SSI), OT air swab logs',
          ptOrFire: 'Fire Hydrant/Alarm systems, Form 35 / Fire Department compliance, documented bi-annual mock drills',
          supportPlan: 'QMSAnchor Clinical Transformation Package: Complete documentation, staff training, and pre-assessment audit',
          estOfficialFees: '₹35,000 - ₹58,000 + GST',
        },
      },
      {
        id: 'nabh-tier3',
        title: 'HCO Large Facility (50+ to 500+ Beds)',
        scope: 'Full NABH Hospital / Multi-Specialty Facility',
        details: {
          timeline: '6 to 10 Months',
          documentation: '650+ Objective Elements, Clinical Governance Frameworks, Incident Management & Sentinel Event protocols',
          assessorDays: '6 to 9 Assessor Mandays (Team of 3 Assessors for 2 to 3 Days)',
          qualityManager: 'Full Quality Department: Head of Quality, Infection Control Officer, Safety Officer & Quality Champions',
          uncertaintyOrInfection: 'Full Antibiotic Stewardship Program (AMSP), monthly antibiograms, active HAI denominator tracking',
          ptOrFire: 'Automatic fire sprinkler network, HVAC HEPA positive-pressure validation, comprehensive disaster plan',
          supportPlan: 'QMSAnchor Enterprise Handholding: Dedicated Lead Assessor on-site, committee structuring, mock drills',
          estOfficialFees: '₹1,20,000 - ₹2,50,000+ + GST',
        },
      },
    ],
  },
};

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    score: number;
    feedback: string;
  }[];
}

export const READINESS_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Do you have a designated Quality Officer / Quality Manager trained in standard requirements?',
    options: [
      {
        text: 'Yes, fully certified with a recognized 4-day Lead Auditor / Assessor training course.',
        score: 20,
        feedback: 'Excellent: Your personnel meet statutory assessor qualifications.',
      },
      {
        text: 'Appointed internally, but formal standard training certification is still pending.',
        score: 10,
        feedback: 'Partially ready: Mandatory training certification must be completed prior to application.',
      },
      {
        text: 'No formal Quality Manager or Quality Officer designated at this time.',
        score: 0,
        feedback: 'Critical Gap: A designated quality custodian is mandatory for NABL and NABH.',
      },
    ],
  },
  {
    id: 2,
    question: 'Are Standard Operating Procedures (SOPs) and Quality Manual updated to current standard editions (e.g., ISO 15189:2022, ISO/IEC 17025:2017, NABH 5th/6th)?',
    options: [
      {
        text: 'Yes, 100% written, indexed with version control numbers, and implemented on the floor.',
        score: 20,
        feedback: 'Strong Documentation: Systems are codified and operational.',
      },
      {
        text: 'Partially documented; drafting is in progress but lacks alignment with latest clauses.',
        score: 10,
        feedback: 'Needs Harmonization: Cross-referencing against new clauses is required.',
      },
      {
        text: 'Minimal or outdated manuals with no structured version control or SOP index.',
        score: 0,
        feedback: 'High Priority Gap: Clause-by-clause SOP architecture must be authored.',
      },
    ],
  },
  {
    id: 3,
    question: 'Have you conducted at least one internal audit cycle and Management Review Meeting (MRM)?',
    options: [
      {
        text: 'Yes, completed with non-conformity (NC) reports, corrective actions, and signed MRM minutes.',
        score: 20,
        feedback: 'Compliance Achieved: Mandatory pre-condition for portal submission satisfied.',
      },
      {
        text: 'Internal audit completed, but MRM or NC closure documentation is pending.',
        score: 10,
        feedback: 'Nearly Ready: Management review meeting must be convened and documented.',
      },
      {
        text: 'Neither internal audit nor MRM has been scheduled or performed yet.',
        score: 0,
        feedback: 'Mandatory Requirement: Both must be executed before application submission.',
      },
    ],
  },
  {
    id: 4,
    question: 'For Labs: Enrolled in accredited PT/EQAS? For Hospitals: Statutory Fire NOC and Bio-Medical Waste (BMW) tie-up valid?',
    options: [
      {
        text: 'Fully compliant with valid certificates and documented root cause for any deviations.',
        score: 20,
        feedback: 'Statutory/Quality Baseline Solid: Key external validation is active.',
      },
      {
        text: 'In progress / Registration applied for, awaiting active cycles or formal NOC renewal.',
        score: 10,
        feedback: 'Follow-up Needed: Must obtain documentation before assessment dates.',
      },
      {
        text: 'Not initiated or expired without active renewals.',
        score: 0,
        feedback: 'Statutory Block: Assessments cannot proceed without statutory clearances.',
      },
    ],
  },
  {
    id: 5,
    question: 'Are equipment calibration logs (with unbroken SI traceability) or biomedical equipment preventive maintenance (PPM) logs maintained?',
    options: [
      {
        text: '100% up to date with metrological traceability calibration certificates and PPM stickers.',
        score: 20,
        feedback: 'Technical Precision High: Equipment files are audit-ready.',
      },
      {
        text: 'Key equipment calibrated, but minor ancillary tools or logs have gaps.',
        score: 10,
        feedback: 'Action Needed: Complete calibration matrix for all measuring devices.',
      },
      {
        text: 'Inconsistent calibration records or missing calibration certificates.',
        score: 0,
        feedback: 'High Technical Risk: Traceability is a non-negotiable NABL/NABH requirement.',
      },
    ],
  },
];
