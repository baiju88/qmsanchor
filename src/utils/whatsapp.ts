/**
 * Utility functions for WhatsApp automation and acknowledgment messaging
 * Target WhatsApp / Phone: 91 8762564150
 * Target Email: qmsanchor@gmail.com
 */

export const CONTACT_PHONE = '91 8762564150';
export const WHATSAPP_RAW_PHONE = '918762564150';
export const CONTACT_EMAIL = 'qmsanchor@gmail.com';

/**
 * Creates a clean wa.me link with encoded text message
 */
export function createWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_RAW_PHONE}?text=${encoded}`;
}

/**
 * Generates an automated acknowledgment message for the respondent
 */
export function generateAutomatedAcknowledgment(details: {
  refId: string;
  name: string;
  facilityName?: string;
  targetBoard: string;
  facilityScale?: string;
  email: string;
  phone: string;
  dateStr: string;
}): string {
  const facilityLine = details.facilityName ? `\n• Facility: ${details.facilityName}` : '';
  const scaleLine = details.facilityScale ? `\n• Scale/Scope: ${details.facilityScale}` : '';

  return `Dear ${details.name},

Thank you for contacting QMSAnchor Accreditation & Quality Advisory. We have successfully registered your Gap Audit Consultation Request.

━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 AUDIT CONSULTATION ACKNOWLEDGMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━
• Tracking Reference: ${details.refId}
• Target Board: ${details.targetBoard}${facilityLine}${scaleLine}
• Contact Registered: ${details.phone} (${details.email})
• Date Logged: ${details.dateStr}
• Status: Queue Allocated to Senior Lead Assessor

⏳ NEXT STEPS & TIMELINE:
1. Our technical advisory desk will review your facility profile within 24 business hours.
2. A Lead Assessor will initiate direct communication to schedule your preliminary on-site or virtual gap audit.
3. For immediate priority inquiries, message our desk directly on WhatsApp: +91 8762564150.

Warm regards,
Lead Accreditation Secretariat
QMSAnchor Quality Advisory
Email: ${CONTACT_EMAIL} | WhatsApp: +${CONTACT_PHONE}`;
}

/**
 * Builds the WhatsApp message payload for the Lead Consultant when a form is submitted
 */
export function buildConsultationWhatsAppMessage(data: {
  refId: string;
  name: string;
  phone: string;
  email: string;
  facilityName: string;
  targetBoard: string;
  facilityScale: string;
  objectives: string;
}): string {
  return `*🚨 NEW GAP AUDIT CONSULTATION REQUEST*
*Ref ID:* ${data.refId}

*Client Name:* ${data.name}
*Phone:* ${data.phone}
*Email:* ${data.email}
*Facility:* ${data.facilityName || 'Not specified'}
*Accreditation Board:* ${data.targetBoard}
*Facility Scale / Scope:* ${data.facilityScale || 'Standard'}

*Key Objectives / Identified Gaps:*
${data.objectives || 'End-to-end Gap Analysis and Accreditation Roadmap requested.'}

---
Sent via QMSAnchor Portal (Automated WhatsApp Integration)`;
}

/**
 * Builds email subject and body for client mailto trigger
 */
export function buildMailtoUrl(data: {
  refId: string;
  name: string;
  phone: string;
  email: string;
  facilityName: string;
  targetBoard: string;
  facilityScale: string;
  objectives: string;
}): string {
  const subject = `Gap Audit Consultation Request [${data.refId}] - ${data.facilityName || data.name}`;
  const body = `Dear QMSAnchor Advisory Team,

Please review my consultation request for Gap Analysis and Accreditation Advisory:

Reference ID: ${data.refId}
Client Name: ${data.name}
Contact Number: ${data.phone}
Email: ${data.email}
Facility Name: ${data.facilityName || 'N/A'}
Target Accreditation: ${data.targetBoard}
Facility Scale/Tier: ${data.facilityScale || 'N/A'}

Scope / Specific Gaps:
${data.objectives || 'General gap assessment and quality framework roadmap.'}

I look forward to receiving the preliminary review and timeline.

Best regards,
${data.name}`;

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
