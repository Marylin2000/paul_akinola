export default function StructuredData() {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Paul Akinola",
    "jobTitle": "Growth Systems & GTM Architect",
    "description": "Expert in PLG motion, GTM systems, data infrastructure, and applied AI. Building scalable growth engines that transform customer acquisition, activation, and expansion.",
    "url": "https://paulakinola.com",
    "image": "https://paulakinola.com/images/3.png",
    "sameAs": [
      "https://linkedin.com/in/paulakinola",
      "https://github.com/paulakinola"
    ],
    "knowsAbout": [
      "Product-Led Growth",
      "Go-to-Market Strategy",
      "Growth Systems Architecture",
      "MarVis AI",
      "Signal Routing",
      "Customer Expansion",
      "Data Infrastructure",
      "Attribution Modeling",
      "Applied AI in GTM"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Growth Systems Architect",
      "description": "Designing and implementing scalable revenue operations and data-driven growth engines",
      "skills": [
        "PLG Motion & Activation",
        "Lifecycle Nurture Systems",
        "Scoring Models (PQL → PEQL → MQA)",
        "MQA Routing Systems",
        "Signal Architecture",
        "Lead Enrichment",
        "Multi-Touch Attribution",
        "AI-Powered GTM Automation"
      ]
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Independent Consultant"
    }
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Paul Akinola - Growth Systems & GTM Architect",
    "description": "Professional growth systems architecture and GTM consulting services",
    "url": "https://paulakinola.com",
    "logo": "https://paulakinola.com/images/3.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "paul@paulakinola.com",
      "contactType": "customer service"
    },
    "founder": {
      "@type": "Person",
      "name": "Paul Akinola"
    },
    "serviceType": [
      "Growth Systems Architecture",
      "GTM Strategy",
      "PLG Implementation",
      "Data Infrastructure",
      "Applied AI in GTM"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
    </>
  );
}