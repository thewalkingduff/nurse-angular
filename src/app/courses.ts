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
    name: 'Common Pediatric Problems in Ambulatory Care',
    price: 38,
    description: 'Pediatric ambulatory care consists of well-child and preventive care and treating and managing acute and chronic health conditions. Nurses provide holistic care to the pediatric patient by synthesizing their nursing assessments with caregiver concerns. Nurses collaborate with the healthcare team to identify and address common pediatric health problems encountered in the ambulatory care setting.'
  },
  {
    id: 3,
    name: 'Understanding Stress and Immunity',
    price: 38,
    description: 'Stress can indirectly contribute to a wide array of maladies associated with either a hyper- or hypoactive state of immunity. Susceptibility to the common cold is increased, autoimmune symptoms are heightened, and allergies can be worsened by exams, divorce, or losing one’s job. Circumstances that contribute to stress for adults are not likely to improve any time soon. The field of psychoneuroimmunology is changing and expanding rapidly. This course provides a discussion of the current evidence regarding the direct and indirect ways the emotions of stress can impact the immune system and a person’s physical and mental health and well-being.'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/