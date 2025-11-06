import { z } from "zod"

const FormulaSchema = z.object({
  formulas: z.array(
    z.object({
      name: z.string(),
      brand: z.string(),
      caloriesPerMl: z.number(),
      proteinPerMl: z.number(),
      description: z.string(),
      indications: z.array(z.string()),
      osmolality: z.number().optional(),
      fiberContent: z.string().optional(),
      specialFeatures: z.array(z.string()).optional(),
    }),
  ),
})

// Comprehensive enteral formula database
const ENTERAL_FORMULAS = [
  // ===== KATE FARMS (Plant-based) =====
  {
    name: "Kate Farms Standard 1.0",
    brand: "Kate Farms",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.035,
    description: "Plant-based, organic enteral formula with pea protein",
    indications: ["General nutrition", "Plant-based nutrition", "Dairy intolerance"],
    osmolality: 375,
    fiberContent: "7g per 325mL",
    specialFeatures: ["Plant-based", "Organic", "Non-GMO", "Dairy-free", "Soy-free"],
  },
  {
    name: "Kate Farms Standard 1.5",
    brand: "Kate Farms",
    caloriesPerMl: 1.5,
    proteinPerMl: 0.045,
    description: "Higher calorie plant-based enteral formula",
    indications: ["Increased caloric needs", "Fluid restriction", "Weight gain"],
    osmolality: 490,
    fiberContent: "7g per 325mL",
    specialFeatures: ["Plant-based", "High calorie", "Organic", "Dairy-free"],
  },
  {
    name: "Kate Farms Peptide 1.5",
    brand: "Kate Farms",
    caloriesPerMl: 1.5,
    proteinPerMl: 0.056,
    description: "Plant-based peptide formula for enhanced absorption",
    indications: ["Malabsorption", "GI compromise", "Critical care"],
    osmolality: 450,
    fiberContent: "Fiber-free",
    specialFeatures: ["Plant-based peptides", "Easy absorption", "Organic"],
  },

  // ===== COMPLEAT (Whole Food) =====
  {
    name: "Compleat Pediatric",
    brand: "Nestlé",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.038,
    description: "Whole food blended formula for pediatric patients",
    indications: ["Pediatric nutrition", "Whole food feeding", "Food tolerance"],
    osmolality: 390,
    fiberContent: "3.5g per 250mL",
    specialFeatures: ["Whole food blended", "Pediatric formula", "Natural food ingredients"],
  },
  {
    name: "Compleat",
    brand: "Nestlé",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.04,
    description: "Whole food blended enteral formula for adults",
    indications: ["General nutrition", "Whole food feeding", "Food tolerance"],
    osmolality: 390,
    fiberContent: "4g per 250mL",
    specialFeatures: ["Whole food blended", "Real food", "Natural ingredients", "Gluten-free"],
  },
  {
    name: "Compleat Plus",
    brand: "Nestlé",
    caloriesPerMl: 1.2,
    proteinPerMl: 0.052,
    description: "Higher calorie whole food blended formula",
    indications: ["Increased caloric needs", "Whole food preference", "Fluid restriction"],
    osmolality: 480,
    fiberContent: "5g per 250mL",
    specialFeatures: ["High calorie", "Whole food", "Increased nutrients"],
  },

  // ===== ELECARE (Hypoallergenic Pediatric) =====
  {
    name: "Elecare Jr.",
    brand: "Abbott",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.035,
    description: "Hypoallergenic elemental formula for children with allergies",
    indications: ["Food allergies", "Multiple protein intolerance", "Eosinophilic disorders"],
    osmolality: 630,
    fiberContent: "Fiber-free",
    specialFeatures: ["Elemental", "Hypoallergenic", "Pediatric", "Amino acid based"],
  },
  {
    name: "Elecare",
    brand: "Abbott",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.038,
    description: "Hypoallergenic elemental formula for severe allergies",
    indications: ["Multiple food allergies", "Eosinophilic disorders", "Severe malabsorption"],
    osmolality: 630,
    fiberContent: "Fiber-free",
    specialFeatures: ["Elemental", "Hypoallergenic", "Amino acid based", "Lactose-free"],
  },

  // ===== ABBOTT - STANDARD FORMULAS =====
  {
    name: "Jevity 1.0",
    brand: "Abbott",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.04,
    description: "Standard fiber-containing enteral formula",
    indications: ["General nutrition", "Long-term feeding", "GI tolerance"],
    osmolality: 300,
    fiberContent: "14g per 1000mL",
    specialFeatures: ["Fiber-containing", "Lactose-free", "Gluten-free"],
  },
  {
    name: "Jevity 1.2",
    brand: "Abbott",
    caloriesPerMl: 1.2,
    proteinPerMl: 0.056,
    description: "Higher calorie fiber-containing enteral formula",
    indications: ["Increased caloric needs", "Fluid restriction"],
    osmolality: 390,
    fiberContent: "14g per 1000mL",
    specialFeatures: ["High calorie", "Fiber-containing", "Lactose-free"],
  },
  {
    name: "Jevity 1.5",
    brand: "Abbott",
    caloriesPerMl: 1.5,
    proteinPerMl: 0.063,
    description: "Very high calorie fiber-containing formula",
    indications: ["Severe fluid restriction", "High caloric needs", "Weight gain"],
    osmolality: 465,
    fiberContent: "14g per 1000mL",
    specialFeatures: ["Very high calorie", "Concentrated", "Fiber-containing"],
  },
  {
    name: "Osmolite 1.0",
    brand: "Abbott",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.04,
    description: "Standard isotonic enteral formula without fiber",
    indications: ["GI intolerance", "Post-surgical", "Critical care"],
    osmolality: 300,
    fiberContent: "Fiber-free",
    specialFeatures: ["Isotonic", "Fiber-free", "Easy to digest"],
  },
  {
    name: "Osmolite 1.2",
    brand: "Abbott",
    caloriesPerMl: 1.2,
    proteinPerMl: 0.044,
    description: "Higher calorie isotonic enteral formula",
    indications: ["Increased caloric needs", "Fluid restriction", "Critical care"],
    osmolality: 360,
    fiberContent: "Fiber-free",
    specialFeatures: ["High calorie", "Isotonic", "Concentrated nutrition"],
  },
  {
    name: "Osmolite 1.5",
    brand: "Abbott",
    caloriesPerMl: 1.5,
    proteinPerMl: 0.063,
    description: "Very high calorie isotonic formula",
    indications: ["Severe fluid restriction", "High caloric needs"],
    osmolality: 450,
    fiberContent: "Fiber-free",
    specialFeatures: ["Very high calorie", "Isotonic", "Concentrated"],
  },

  // ===== ABBOTT - DISEASE-SPECIFIC =====
  {
    name: "Glucerna 1.0",
    brand: "Abbott",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.042,
    description: "Diabetes-specific enteral formula with modified carbohydrates",
    indications: ["Diabetes", "Glucose intolerance", "Metabolic syndrome"],
    osmolality: 355,
    fiberContent: "15g per 1000mL",
    specialFeatures: ["Diabetes-specific", "Slow-release carbs", "High fiber"],
  },
  {
    name: "Glucerna 1.5",
    brand: "Abbott",
    caloriesPerMl: 1.5,
    proteinPerMl: 0.06,
    description: "High calorie diabetes-specific formula",
    indications: ["Diabetes with high caloric needs", "Glucose intolerance"],
    osmolality: 465,
    fiberContent: "15g per 1000mL",
    specialFeatures: ["High calorie", "Diabetes-specific", "High fiber"],
  },
  {
    name: "Pulmocare",
    brand: "Abbott",
    caloriesPerMl: 1.5,
    proteinPerMl: 0.063,
    description: "High-fat, low-carb enteral formula for respiratory patients",
    indications: ["COPD", "Respiratory failure", "Ventilator patients"],
    osmolality: 475,
    fiberContent: "Fiber-free",
    specialFeatures: ["High fat", "Low CO2 production", "Concentrated"],
  },
  {
    name: "Nepro",
    brand: "Abbott",
    caloriesPerMl: 2.0,
    proteinPerMl: 0.081,
    description: "Renal enteral formula with modified protein and electrolytes",
    indications: ["Chronic kidney disease", "Dialysis", "Renal insufficiency"],
    osmolality: 665,
    fiberContent: "Fiber-free",
    specialFeatures: ["Renal-specific", "High calorie", "Modified electrolytes", "Low sodium"],
  },
  {
    name: "Nepro ML",
    brand: "Abbott",
    caloriesPerMl: 2.0,
    proteinPerMl: 0.07,
    description: "Renal formula with lower protein and phosphorus",
    indications: ["Chronic kidney disease", "Dialysis", "Mineral metabolism issues"],
    osmolality: 665,
    fiberContent: "Fiber-free",
    specialFeatures: ["Renal-specific", "Low protein", "Low phosphorus"],
  },
  {
    name: "Hepatic-Aid",
    brand: "Abbott",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.04,
    description: "Hepatic enteral formula for liver disease patients",
    indications: ["Cirrhosis", "Hepatic encephalopathy", "Liver disease"],
    osmolality: 310,
    fiberContent: "Fiber-free",
    specialFeatures: ["Hepatic formula", "Modified amino acids", "BCAA enriched"],
  },

  // ===== NESTLÉ/PEPTAMEN FORMULAS =====
  {
    name: "Vivonex T.E.N.",
    brand: "Nestlé",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.038,
    description: "Elemental enteral formula with free amino acids",
    indications: ["Malabsorption", "Crohn's disease", "Short gut syndrome"],
    osmolality: 630,
    fiberContent: "Fiber-free",
    specialFeatures: ["Elemental", "Pre-digested", "Hypoallergenic"],
  },
  {
    name: "Vivonex Plus",
    brand: "Nestlé",
    caloriesPerMl: 1.35,
    proteinPerMl: 0.048,
    description: "Higher calorie elemental formula",
    indications: ["Malabsorption with high caloric needs", "Severe GI disease"],
    osmolality: 810,
    fiberContent: "Fiber-free",
    specialFeatures: ["Elemental", "High calorie", "Hypoallergenic"],
  },
  {
    name: "Peptamen",
    brand: "Nestlé",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.04,
    description: "Semi-elemental enteral formula with peptides",
    indications: ["Maldigestion", "Pancreatitis", "IBD"],
    osmolality: 270,
    fiberContent: "Fiber-free",
    specialFeatures: ["Semi-elemental", "Easy absorption", "MCT oil"],
  },
  {
    name: "Peptamen 1.5",
    brand: "Nestlé",
    caloriesPerMl: 1.5,
    proteinPerMl: 0.063,
    description: "Higher calorie semi-elemental peptide formula",
    indications: ["Maldigestion with high needs", "Severe pancreatitis"],
    osmolality: 405,
    fiberContent: "Fiber-free",
    specialFeatures: ["Semi-elemental", "High calorie", "Easy absorption"],
  },
  {
    name: "Peptamen AF",
    brand: "Nestlé",
    caloriesPerMl: 1.2,
    proteinPerMl: 0.048,
    description: "Semi-elemental formula with added arginine and glutamine",
    indications: ["Wound healing", "Immune support", "GI disease"],
    osmolality: 300,
    fiberContent: "Fiber-free",
    specialFeatures: ["Peptides", "Arginine", "Glutamine", "Immunonutrition"],
  },
  {
    name: "Impact",
    brand: "Nestlé",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.056,
    description: "Immune-enhancing enteral formula with arginine, omega-3, nucleotides",
    indications: ["Surgery", "Trauma", "Immune compromise"],
    osmolality: 375,
    fiberContent: "Fiber-free",
    specialFeatures: ["Immune-enhancing", "Arginine", "Omega-3 fatty acids", "Nucleotides"],
  },
  {
    name: "Impact 1.5",
    brand: "Nestlé",
    caloriesPerMl: 1.5,
    proteinPerMl: 0.075,
    description: "High calorie immune-enhancing formula",
    indications: ["Surgery/trauma with high needs", "Critical care"],
    osmolality: 525,
    fiberContent: "Fiber-free",
    specialFeatures: ["High calorie", "Immune-enhancing", "Concentrated nutrition"],
  },
  {
    name: "Impact Peptide 1.5",
    brand: "Nestlé",
    caloriesPerMl: 1.5,
    proteinPerMl: 0.063,
    description: "High calorie peptide-based immune-enhancing formula",
    indications: ["GI compromise with high needs", "Peptide formula preferred"],
    osmolality: 500,
    fiberContent: "Fiber-free",
    specialFeatures: ["Peptides", "High calorie", "Immune-enhancing"],
  },
  {
    name: "Resource Glutamine",
    brand: "Nestlé",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.035,
    description: "Standard formula enhanced with glutamine",
    indications: ["Critical illness", "Gut healing", "Immune support"],
    osmolality: 295,
    fiberContent: "Fiber-free",
    specialFeatures: ["Glutamine enriched", "Immune support", "Gut health"],
  },

  // ===== WHOLE FOOD FORMULAS =====
  {
    name: "Real Food Blends",
    brand: "Real Food Blends",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.04,
    description: "Whole food enteral formula made from real ingredients",
    indications: ["Whole food nutrition", "Food allergies", "Natural feeding"],
    osmolality: 300,
    fiberContent: "Natural fiber from whole foods",
    specialFeatures: ["Whole food", "No artificial ingredients", "Allergen-friendly"],
  },
  {
    name: "Liquid Hope",
    brand: "Functional Formularies",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.04,
    description: "Organic whole food enteral formula",
    indications: ["Whole food nutrition", "Organic feeding", "Food sensitivities"],
    osmolality: 300,
    fiberContent: "Natural fiber from whole foods",
    specialFeatures: ["Organic", "Whole food", "Non-GMO", "Shelf-stable"],
  },
  {
    name: "Liquid Hope For Meals",
    brand: "Functional Formularies",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.035,
    description: "Organic whole food formula for meal replacement",
    indications: ["Partial oral/tube feeding", "Supplement nutrition"],
    osmolality: 320,
    fiberContent: "Natural fiber",
    specialFeatures: ["Organic", "Real food ingredients", "Balanced nutrition"],
  },

  // ===== NUTRICIA FORMULAS =====
  {
    name: "Nutrison",
    brand: "Nutricia",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.04,
    description: "Standard enteral formula for tube feeding",
    indications: ["General nutrition", "Long-term feeding"],
    osmolality: 285,
    fiberContent: "Fiber-free",
    specialFeatures: ["Lactose-free", "Gluten-free", "Standard formula"],
  },
  {
    name: "Nutrison 1.5",
    brand: "Nutricia",
    caloriesPerMl: 1.5,
    proteinPerMl: 0.06,
    description: "High calorie standard formula",
    indications: ["Fluid restriction", "High caloric needs"],
    osmolality: 420,
    fiberContent: "Fiber-free",
    specialFeatures: ["High calorie", "Concentrated", "Lactose-free"],
  },
  {
    name: "Nutrison Multi Fiber",
    brand: "Nutricia",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.04,
    description: "Formula with added dietary fiber",
    indications: ["General nutrition", "Constipation", "Bowel regulation"],
    osmolality: 300,
    fiberContent: "10g per 1000mL",
    specialFeatures: ["Multi-fiber blend", "Bowel health", "Standard calories"],
  },
  {
    name: "Nutrison Standard Fiber",
    brand: "Nutricia",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.04,
    description: "Fiber-enriched enteral formula",
    indications: ["General nutrition", "Diarrhea prevention", "GI health"],
    osmolality: 310,
    fiberContent: "9g per 1000mL",
    specialFeatures: ["Fiber-enriched", "Lactose-free", "Supports digestion"],
  },
  {
    name: "Nutrison Protein Plus",
    brand: "Nutricia",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.06,
    description: "High protein enteral formula",
    indications: ["High protein needs", "Wound healing", "Muscle recovery"],
    osmolality: 295,
    fiberContent: "Fiber-free",
    specialFeatures: ["High protein", "Muscle support", "Wound healing"],
  },
  {
    name: "Nutrison Diabet",
    brand: "Nutricia",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.04,
    description: "Diabetes-specific formula with controlled carbohydrates",
    indications: ["Diabetes", "Glucose intolerance"],
    osmolality: 310,
    fiberContent: "12g per 1000mL",
    specialFeatures: ["Diabetes-specific", "High fiber", "Slow-release carbs"],
  },

  // ===== FRESENIUS FORMULAS =====
  {
    name: "Fresubin 1000 Complete",
    brand: "Fresenius",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.04,
    description: "Nutritionally complete enteral formula",
    indications: ["General nutrition", "Complete nutrition"],
    osmolality: 285,
    fiberContent: "Fiber-free",
    specialFeatures: ["Complete formula", "Lactose-free", "Gluten-free"],
  },
  {
    name: "Fresubin 2kcal Drink",
    brand: "Fresenius",
    caloriesPerMl: 2.0,
    proteinPerMl: 0.075,
    description: "Very high calorie enteral formula concentrate",
    indications: ["Severe fluid restriction", "Very high caloric needs"],
    osmolality: 610,
    fiberContent: "Fiber-free",
    specialFeatures: ["Very high calorie", "Concentrated", "Drinkable"],
  },

  // ===== MEAD JOHNSON FORMULAS =====
  {
    name: "Enfocus Lipil",
    brand: "Mead Johnson",
    caloriesPerMl: 0.67,
    proteinPerMl: 0.018,
    description: "Pediatric protein hydrolysate formula",
    indications: ["Pediatric patients", "Allergy", "Sensitive digestion"],
    osmolality: 280,
    fiberContent: "Fiber-free",
    specialFeatures: ["Pediatric formula", "Protein hydrolysate", "Easy to digest"],
  },
  {
    name: "Portagen",
    brand: "Mead Johnson",
    caloriesPerMl: 1.0,
    proteinPerMl: 0.035,
    description: "Formula with MCT oil for fat malabsorption",
    indications: ["Fat malabsorption", "Cystic fibrosis", "Pancreatic insufficiency"],
    osmolality: 300,
    fiberContent: "Fiber-free",
    specialFeatures: ["MCT oil", "Easy fat absorption", "Low lactose"],
  },
]

// Smart search function that mimics AI behavior
function smartSearch(query: string, formulas: typeof ENTERAL_FORMULAS) {
  const searchTerm = query.toLowerCase().trim()

  // Define search patterns and their priorities
  const searchPatterns = [
    // Brand-specific searches
    { pattern: /kate\s*farms?/i, priority: 10, filter: (f: any) => f.brand === "Kate Farms" },
    { pattern: /abbott/i, priority: 10, filter: (f: any) => f.brand === "Abbott" },
    { pattern: /nestl[eé]/i, priority: 10, filter: (f: any) => f.brand === "Nestlé" },
    { pattern: /nutricia/i, priority: 10, filter: (f: any) => f.brand === "Nutricia" },
    { pattern: /fresenius/i, priority: 10, filter: (f: any) => f.brand === "Fresenius" },
    { pattern: /mead\s*johnson/i, priority: 10, filter: (f: any) => f.brand === "Mead Johnson" },

    // Formula-specific searches (high priority)
    {
      pattern: /compleat|whole.?food.?blended/i,
      priority: 9,
      filter: (f: any) =>
        f.name.includes("Compleat") ||
        (f.specialFeatures?.some((s: string) => s.toLowerCase().includes("whole food blended"))),
    },
    {
      pattern: /elecare|elemental.*allerg/i,
      priority: 9,
      filter: (f: any) =>
        f.name.includes("Elecare") ||
        (f.specialFeatures?.some((s: string) => s.toLowerCase().includes("hypoallergenic"))),
    },

    // Condition-specific searches
    {
      pattern: /diabetes|diabetic|glucerna/i,
      priority: 9,
      filter: (f: any) =>
        f.name.includes("Glucerna") || f.indications.some((i: string) => i.toLowerCase().includes("diabetes")),
    },
    {
      pattern: /copd|respiratory|pulmonary|pulmocare/i,
      priority: 9,
      filter: (f: any) =>
        f.name.includes("Pulmocare") ||
        f.indications.some((i: string) => i.toLowerCase().includes("copd") || i.toLowerCase().includes("respiratory")),
    },
    {
      pattern: /kidney|renal|nepro/i,
      priority: 9,
      filter: (f: any) =>
        f.name.includes("Nepro") ||
        f.indications.some((i: string) => i.toLowerCase().includes("kidney") || i.toLowerCase().includes("renal")),
    },
    {
      pattern: /liver|hepatic|hepatic-aid/i,
      priority: 9,
      filter: (f: any) =>
        f.name.includes("Hepatic") ||
        f.indications.some((i: string) => i.toLowerCase().includes("liver") || i.toLowerCase().includes("hepatic")),
    },
    {
      pattern: /allergy|allergic|hypoallergenic|elecare|elemental/i,
      priority: 9,
      filter: (f: any) =>
        f.indications.some((i: string) => i.toLowerCase().includes("allerg")) ||
        f.specialFeatures?.some((s: string) => s.toLowerCase().includes("hypoallergenic") || s.toLowerCase().includes("elemental")),
    },
    {
      pattern: /malabsorption|crohn|ibd|pancreat/i,
      priority: 9,
      filter: (f: any) =>
        f.indications.some(
          (i: string) =>
            i.toLowerCase().includes("malabsorption") ||
            i.toLowerCase().includes("crohn") ||
            i.toLowerCase().includes("ibd") ||
            i.toLowerCase().includes("pancreati"),
        ),
    },
    {
      pattern: /pediatric|kids|children/i,
      priority: 9,
      filter: (f: any) =>
        f.indications.some((i: string) => i.toLowerCase().includes("pediatric")) ||
        f.name.toLowerCase().includes("pediatric") ||
        f.name.toLowerCase().includes("jr"),
    },

    // Feature-specific searches
    {
      pattern: /plant.?based|organic|vegan/i,
      priority: 8,
      filter: (f: any) =>
        f.specialFeatures?.some(
          (s: string) => s.toLowerCase().includes("plant-based") || s.toLowerCase().includes("organic"),
        ),
    },
    {
      pattern: /elemental|vivonex|amino.?acid/i,
      priority: 8,
      filter: (f: any) =>
        f.name.includes("Vivonex") ||
        f.name.includes("Elecare") ||
        f.specialFeatures?.some((s: string) => s.toLowerCase().includes("elemental") || s.toLowerCase().includes("amino acid")),
    },
    {
      pattern: /peptide|peptamen|semi.?elemental/i,
      priority: 8,
      filter: (f: any) =>
        f.name.includes("Peptide") ||
        f.name.includes("Peptamen") ||
        f.specialFeatures?.some((s: string) => s.toLowerCase().includes("peptide") || s.toLowerCase().includes("semi-elemental")),
    },
    {
      pattern: /immune|arginine|glutamine|impact/i,
      priority: 8,
      filter: (f: any) =>
        f.name.includes("Impact") ||
        f.specialFeatures?.some(
          (s: string) =>
            s.toLowerCase().includes("immune") ||
            s.toLowerCase().includes("arginine") ||
            s.toLowerCase().includes("glutamine"),
        ),
    },
    { pattern: /high.?calorie?|1\.5|2\.0/i, priority: 7, filter: (f: any) => f.caloriesPerMl >= 1.5 },
    {
      pattern: /fiber.?free|no.?fiber/i,
      priority: 7,
      filter: (f: any) => f.fiberContent?.toLowerCase().includes("fiber-free"),
    },
    {
      pattern: /fiber|high.?fiber|multi.?fiber/i,
      priority: 7,
      filter: (f: any) => f.fiberContent && !f.fiberContent.toLowerCase().includes("fiber-free"),
    },
    {
      pattern: /whole.?food|real.?food|blended/i,
      priority: 8,
      filter: (f: any) =>
        f.brand === "Real Food Blends" ||
        f.brand === "Functional Formularies" ||
        f.specialFeatures?.some((s: string) => s.toLowerCase().includes("whole food")),
    },
    {
      pattern: /mct|fat.?absorption/i,
      priority: 7,
      filter: (f: any) =>
        f.specialFeatures?.some((s: string) => s.toLowerCase().includes("mct")) ||
        f.indications.some((i: string) => i.toLowerCase().includes("fat")),
    },

    // Nutritional searches
    { pattern: /standard|1\.0/i, priority: 5, filter: (f: any) => f.caloriesPerMl === 1.0 },
    {
      pattern: /isotonic|osmolite/i,
      priority: 7,
      filter: (f: any) =>
        f.name.includes("Osmolite") || f.specialFeatures?.some((s: string) => s.toLowerCase().includes("isotonic")),
    },
  ]

  const results: Array<{ formula: any; score: number }> = []

  // Apply pattern matching
  for (const pattern of searchPatterns) {
    if (pattern.pattern.test(searchTerm)) {
      const matches = formulas.filter(pattern.filter)
      matches.forEach((formula) => {
        const existing = results.find((r) => r.formula.name === formula.name)
        if (existing) {
          existing.score += pattern.priority
        } else {
          results.push({ formula, score: pattern.priority })
        }
      })
    }
  }

  // If no pattern matches, do general text search
  if (results.length === 0) {
    formulas.forEach((formula) => {
      let score = 0

      // Name match (highest priority)
      if (formula.name.toLowerCase().includes(searchTerm)) score += 10

      // Brand match
      if (formula.brand.toLowerCase().includes(searchTerm)) score += 8

      // Description match
      if (formula.description.toLowerCase().includes(searchTerm)) score += 6

      // Indications match
      if (formula.indications.some((indication: string) => indication.toLowerCase().includes(searchTerm))) score += 7

      // Special features match
      if (formula.specialFeatures?.some((feature: string) => feature.toLowerCase().includes(searchTerm))) score += 5

      if (score > 0) {
        results.push({ formula, score })
      }
    })
  }

  // Sort by score and return top 5
  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((r) => r.formula)
}

export async function POST(request: Request) {
  try {
    const { query } = await request.json()

    if (!query || query.trim().length === 0) {
      return Response.json({ error: "Search query is required" }, { status: 400 })
    }

    console.log("🔍 Smart searching for:", query)

    // Use smart search algorithm (no AI dependency)
    const filteredFormulas = smartSearch(query, ENTERAL_FORMULAS)

    console.log("✅ Smart search successful, found:", filteredFormulas.length, "formulas")
    return Response.json({ formulas: filteredFormulas })
  } catch (error) {
    console.error("❌ Search failed:", error)
    return Response.json({ error: "Failed to search formulas" }, { status: 500 })
  }
}
