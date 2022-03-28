export interface Course {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const courses = [
  {
    id: 1,
    name: "Document It Right: A Nurse's Guide to Charting",
    price: 40,
    description: 'From the earliest beginnings of the nursing profession, nurses have carefully recorded their observations of patients and their interventions to help patients recover from illness and achieve optimal health. In the beginnings of the profession, the primary purpose of nurses’ notes was to verify that physician orders were completed. Today, professional nurses are vital partners with other healthcare professionals, and nursing documentation is an essential part of comprehensive patient care. Although documentation has always been an important part of nursing practice, the increasingly complex healthcare environment, litigious society and the diversity of settings in which patients receive care require that nurses pay more attention to documentation. This continuing education module outlines the importance of documentation, different formats and settings for documentation, and what nurses must document, including information about difficult situations.'
  },
  {
    id: 2,
    name: 'Utilization Management: A Core Course',
    price: 64,
    description: 'The healthcare management industry is in a constant state of change. Among the changes are the roles and functions of utilization management (UM), which has evolved as a system to evaluate medical necessity and appropriateness of care related to optimal outcomes. The terms utilization review (UR) and UM are often used interchangeably. UR is the process of reviewing use, delivery, and cost-effectiveness of healthcare. UM uses the same process, but encompasses additional functions, including procedures that improve patient outcomes and resource utilization. UM monitors appropriateness of care, resource allocation, and demonstration of medical necessity using specific criteria. This course describes the origins and purpose of UM, including a comparison of concurrent and retrospective review. It also provides an overview of UM roles and responsibilities, and defines the medical staff’s responsibility for the process.'
  },
  {
    id: 3,
    name: 'Pediatric Food Allergies',
    price: 15,
    description: 'Recommendations for prevention and treatment of food allergies have changed dramatically over the past ten years. Treatments have become more individualized, dependent not only on the patient but also the food allergy. Prevalence of food allergies has increased with complex clinical presentation, including multiple food allergies and eosinophilic disorders becoming more common. As new therapies have emerged, it has resulted in considerable variation in clinical practice and significant confusion among healthcare consumers as to the best treatment for food allergies. Guidelines for introduction of food allergens have also undergone significant revision. Food allergies can be life-threatening as well as increase risk of nutritional deficits and reduced quality of life. Staying current on developing trends in the prevention and treatment of food allergies and related disorders is vital for all healthcare providers.'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/