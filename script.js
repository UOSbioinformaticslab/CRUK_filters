const allStudyData = [
  // Modified Primary site structure to include a nested category
  {
    "Primary site": {
      "Primary sites": [
        "Breast",
        "Central Nervous System",
        "Colorectal",
        "Gynaecological",
        "Haematological",
        "Head and Neck",
        "Liver",
        "Lung",
        "Sarcoma",
        "Skin",
        "Unknown",
        "Upper GI",
        "Urological"
      ]
    }
  },
  {
    "Cancer SNOMED-CT": {
      "Nervous System Cancers": [
        "Anaplastic ganglioglioma",
        "Ependymoblastoma",
        "Ganglioneuroblastoma",
        "Glioblastoma multiforme",
        "Malignant neoplasm of nervous system",
        "Malignant neoplasm of nerve sheath origin",
        "Mixed glioma",
        "Neuroblastoma",
        "Oligodendroglioma",
        "Peripheral neuroectodermal tumor",
        "Pilomyxoid astrocytoma",
        "Pleomorphic xanthoastrocytoma",
        "Primitive neuroectodermal tumor"
      ],
      "Hematological and Lymphoid Cancers": [
        "Malignant immunoproliferative disease",
        "Malignant neoplasm of lymphoid, hematopoietic and/or related tissue",
        "Malignant white blood cell disorder",
        "Mast cell malignancy",
        "T-lymphoblastic leukemia/lymphoblastic lymphoma"
      ],
      "Sarcomas and Connective Tissue Cancers": [
        "Chordoma",
        "Malignant fibromatous neoplasm",
        "Malignant giant cell tumor of bone",
        "Malignant glomus tumor",
        "Malignant granular cell tumor",
        "Malignant neoplasm of skeletal system",
        "Malignant neoplasm of soft tissue",
        "Malignant neoplasm of muscle",
        "Malignant ossifying fibromyxoid tumor",
        "Malignant perivascular epithelioid cell neoplasm",
        "Malignant phosphaturic mesenchymal tumor",
        "Malignant rhabdoid tumor",
        "Malignant tenosynovial giant cell tumor",
        "Sarcoma",
        "Malignant neoplasm of connective tissue",
        "Malignant neoplasm of blood vessel"
      ],
      "Epithelial and Germ Cell Cancers": [
        "Choriocarcinoma",
        "Embryonal carcinoma",
        "Extragonadal germinoma",
        "Hidradenocarcinoma",
        "Malignant epithelial neoplasm",
        "Malignant melanoma",
        "Malignant teratoma",
        "Micropapillary urothelial carcinoma",
        "Mixed germ cell tumor",
        "Neuroendocrine neoplasm, malignant",
        "Polyembryoma",
        "Seminoma",
        "Yolk sac tumor"
      ],
      "Head, Neck, and Endocrine Cancers": [
        "Malignant neoplasm of head and/or neck",
        "Malignant neoplasm of endocrine gland",
        "Malignant vagal paraganglioma",
        "Malignant pheochromocytoma"
      ],
      "Cancers by Anatomic Region": [
        "Malignant neoplasm of abdomen",
        "Malignant neoplasm of back",
        "Malignant neoplasm of digestive system",
        "Malignant neoplasm of flank",
        "Malignant neoplasm of genitourinary organ",
        "Malignant neoplasm of inguinal region",
        "Malignant neoplasm of lower limb",
        "Malignant neoplasm of pelvis",
        "Malignant neoplasm of perineum",
        "Malignant neoplasm of respiratory system",
        "Malignant neoplasm of thorax",
        "Malignant neoplasm of trunk",
        "Malignant neoplasm of upper limb",
        "Malignant neoplasm of vertebral column region",
        "Malignant neoplasm of Gartner's duct"
      ],
      "Cancer Modifiers and General Statuses": [
        "Malignant acanthosis nigricans",
        "Malignant neoplasm after immunosuppressive therapy",
        "Malignant neoplasm in full remission",
        "Malignant neoplasm in partial remission",
        "Malignant neoplastic disease co-occurrent with human immunodeficiency virus infection",
        "Malignant neoplastic disease in mother complicating childbirth",
        "Malignant neoplastic disease in pregnancy",
        "Malignant tumor involving an organ by direct extension from bladder",
        "Malignant tumor involving an organ by direct extension from endometrium",
        "Malignant tumor involving an organ by direct extension from fallopian tube",
        "Malignant tumor involving an organ by direct extension from ovary",
        "Malignant tumor involving an organ by direct extension from prostate",
        "Malignant tumor involving an organ by direct extension from uterine cervix",
        "Malignant tumor involving an organ by direct extension from uterus",
        "Malignant tumor involving an organ by direct extension from vagina",
        "Malignant tumor involving vasa deferentia by direct extension from prostate",
        "Microsatellite instability-high solid malignant tumor",
        "Multiple malignancy",
        "Recurrent malignant neoplasm",
        "Refractory malignant neoplastic disease",
        "Relapsing malignant neoplastic disease",
        "Solid neoplasm with neurotrophic receptor tyrosine kinase gene fusion"
      ],
      "Broad/Unspecified Cancers": [
        "Malignant neoplasm of unknown origin",
        "Metastatic malignant neoplasm",
        "Primary malignant neoplasm"
      ]
    }
  },

  {
    "cancers - NDRS codes": {
    'Anus': ['Anus'],
     'Bladder': ['T1 non-muscle-invasive urothelial',
      'Ta/Tis non-muscle-invasive urothelial',
      'Unknown stage urothelial',
      'Muscle-invasive urothelial',
      'Other morphology or uncertain/unknown behaviour'],
     'Blood': ['Hodgkin lymphoma',
      'Essential thrombocythaemia (ET)',
      'Chronic myeloid leukaemia (CML)',
      'Chronic myelomonocytic leukaemia (CMML)',
      'Chronic lymphocytic leukaemia (CLL) or small lymphocytic lymphoma (SLL)',
      'Acute myeloid leukaemia (AML)',
      'Myeloma',
      'Acute lymphoblastic leukaemia (ALL)',
      'Diffuse large B-cell lymphoma (DLBCL) and other high grade mature B-cell neoplasms',
      'Lymphoplasmacytic lymphoma (LPL) or Waldenstrom',
      'Mantle cell lymphoma (MCL)',
      'Mature T-cell and NK-cell neoplasms',
      'Other haematological neoplasms',
      'Polycythaemia vera (PCV)',
      'Follicular lymphoma',
      'Marginal zone lymphoma (nodal, extranodal, MALT)'],
     'Bone': ['Bone'],
     'Bowel': ['Rectosigmoid junction', 'Rectum', 'Colon'],
     'Brain': ['Non-malignant brain',
      'Non-benign endocrine',
      'Benign endocrine',
      'Malignant brain'],
     'Breast': ['Breast'],
     'CUPS': ['Secondary malignant neoplasm of other and unspecified sites',
      'Secondary and unspecified malignant neoplasm of lymph nodes',
      'Secondary malignant neoplasm of respiratory and digestive organs',
      'Malignant neoplasm, without specification of site'],
     'Cervix': ['Cervix'],
     'Endocrine': ['Non-thyroid endocrine glands', 'Thyroid'],
     'Eye': ['Eye'],
     'Head_neck': ['Middle ear, and other and ill-defined head and neck sites',
      'Major salivary glands',
      'Nasal cavity and sinus',
      'Larynx',
      'Oropharynx',
      'Oral cavity',
      'Hypopharynx',
      'Nasopharynx'],
     'Heart': ['Heart, mediastinum, pleura, other and ill-defined'],
     'Kaposi': ['Kaposi sarcoma'],
     'Kidney': ['Papillary RCC',
      'Clear cell RCC',
      'Wilms (Nephroblastoma)',
      'Renal cell carcinoma NOS',
      'Other',
      'Chromophobe RCC'],
     'Liver': ['Liver excluding intrahepatic cholangiocarcinoma',
      'Ampulla of Vater',
      'Cholangiocarcinoma',
      'Gallbladder'],
     'Lung': ['NSCLC', 'SCLC'],
     'Mesothelioma': ['Mesothelioma'],
     'Oesophagus': ['Overlapping lesion and unspecified',
      'Oesophagogastric junction',
      'Upper and middle third',
      'Lower third'],
     'Ovary': ['Malignant epithelial',
      'Non-specific site',
      'Miscellaneous and unspecified',
      'Borderline',
      'Sex cord-stromal and germ cell'],
     'Pancreas': ['Carcinoma and Other', 'Neuroendocrine'],
     'Prostate': ['Prostate'],
     'Renal_pelvis': ['Renal pelvis and ureter'],
     'Sarcoma': ['Bone - Ewing sarcoma',
      'STS - Synovial',
      'Bone - Chondrosarcoma',
      'STS - Gastrointestinal stromal sarcoma (GIST)',
      'STS - Other malignant soft tissue tumours',
      'STS - Undifferentiated Sarcoma',
      'Bone - Bone tumours of intermediate behaviour',
      'STS - Myofibrosarcomas and other fibroblastic sarcomas',
      'STS - Rhabdomyosarcoma',
      'STS - Soft tissue tumours of intermediate behaviour',
      'STS - Dermatofibrosarcoma protuberans',
      'STS - Endometrial stromal sarcoma',
      'Bone - Other malignant bone tumours',
      'STS - Phyllodes',
      'STS - Leiomyosarcoma',
      'STS - Liposarcoma',
      'Bone - Chordoma',
      'STS - Malignant peripheral nerve sheath tumour (MPNST)',
      'STS - Myxoid fibroblastic sarcomas',
      'STS - Tumours of uncertain differentiation',
      'Bone - Osteosarcoma',
      'STS - Vascular Tumours'],
     'Skin_codes': ['Skin of lip',
      'Skin of lower limb, including hip',
      'Overlapping lesion of vulva',
      'Melanoma in situ of other and unspecified parts of face',
      'Melanoma in situ of upper limb, including shoulder',
      'Trichilemmal cyst',
      'Malignant melanoma of upper limb, including shoulder',
      'Malignant melanoma of lower limb, including hip',
      'Overlapping malignant melanoma of skin',
      'Malignant melanoma of other and unspecified parts of face',
      'Overlapping lesion of skin',
      'Skin of scalp and neck',
      'Melanoma in situ of other sites',
      'Malignant neoplasm of skin, unspecified',
      'Skin of trunk',
      'Labium majus',
      'Body of penis',
      'Skin of eyelid, including canthus',
      'Glans penis',
      'Scrotum - male genital organs',
      'Melanoma in situ, unspecified',
      'Skin of ear and external auricular canal',
      'External genital SCC in situ of penis',
      'Malignant melanoma of skin, unspecified',
      'External upper lip',
      'Melanoma in situ of ear and external auricular canal',
      'Malignant melanoma of scalp and neck',
      'Malignant melanoma of ear and external auricular canal',
      'External lower lip',
      'Commissure of lip',
      'Labium minus',
      'Melanoma in situ of lip',
      'External genital SCC in situ of vulva',
      'Overlapping lesion of penis',
      'Penis, unspecified',
      'Malignant melanoma of trunk',
      'Melanoma in situ of scalp and neck',
      'Malignant melanoma of eyelid, including canthus',
      'Overlapping lesion of lip',
      'Melanoma in situ of eyelid, including canthus',
      'Melanoma in situ of trunk',
      'External lip, unspecified',
      'Malignant melanoma of lip',
      'Vulva, unspecified',
      'Prepuce - penis',
      'Uncertain behaviour of skin',
      'Lip, unspecified',
      'Melanoma in situ of lower limb, including hip',
      'Clitoris',
      'Skin of upper limb, including shoulder',
      'Skin of other and unspecified parts of face'],
     'Skin_groups': ['cSCC', 'BCC', 'Melanoma', 'Rare'],
     'Small_intestine': ['Small intestine'],
     'Soft_tissue': ['Soft tissue'],
     'Stomach': ['Cardia and oesophagogastric junction',
      'Cardia',
      'Overlapping lesion and unspecified',
      'GIST',
      'Non-Cardia'],
     'Testes': ['Non-seminoma', 'Seminoma', 'Other'],
     'Thymus': ['Thymus'],
     'Urethra': ['Urethra'],
     'Uterus': ['Endometrial', 'Non-endometrial'],
     'Vagina': ['Vagina']}

  },
  {
    "cancers - ICD-O": {
        "Lip, oral cavity and pharynx": {
        "C00 LIP": ["C00.0 External upper lip", "C00.1 External lower lip", "C00.2 External lip, NOS", "C00.3 Mucosa of upper lip", "C00.4 Mucosa of lower lip", "C00.5 Mucosa of lip, NOS", "C00.6 Commissure of lip", "C00.8 Overlapping lesion of lip", "C00.9 Lip, NOS"],
         "C01 BASE OF TONGUE": ["C01.9 Base of tongue, NOS"],
         "C02 OTHER AND UNSPECIFIED PARTS OF TONGUE": ["C02.0 Dorsal surface of tongue, NOS", "C02.1 Border of tongue", "C02.2 Ventral surface of tongue, NOS", "C02.3 Anterior 2/3 of tongue, NOS", "C02.4 Lingual tonsil", "C02.8 Overlapping lesion of tongue", "C02.9 Tongue, NOS"],
         "C03 GUM": ["C03.0 Upper Gum", "C03.1 Lower gum", "C03.9 Gum, NOS"],
         "C04 FLOOR OF MOUTH": ["C04.0 Anterior floor of mouth", "C04.1 Lateral floor of mouth", "C04.8 Overlapping lesion of floor of mouth", "C04.9 Floor of mouth, NOS"], "C05 PALATE": ["C05.0 Hard palate", "C05.1 Soft palate, NOS", "C05.2 Uvula", "C05.8 Overlapping lesion of palate", "C05.9 Palate, NOS"], "C06 OTHER AND UNSPECIFIED PARTS OF MOUTH": ["C06.0 Cheeck mucosa", "C06.1 Vestibule of mouth", "C06.2 Retromolar area", "C06.8 Overlapping lesion of other and unspecified parts of mouth", "C06.9 Mouth, NOS"], "C07 PAROTID GLANID": ["C07.9 Parotid gland"], "C08 OTHER AND UNSPECIFIED MAJOR SALIVARY GLANDS": ["C08.0 Submandibular gland", "C08.1 Sublingual gland", "C08.8 Overlapping lesion of major salivary glands", "C08.9 Major salivary gland, NOS"], "C09 TONSIL": ["C09.0 Tonsillar fossa", "C09.1 Tonsillar pillar", "C09.8 Overlapping lesion of tonsil", "C09.9 Tonsil, NOS"], "C10 OROPHARYNX": ["C10.0 Vallecula", "C10.1 Anterior surface of epiglottis", "C10.2 Lateral wall of oropharynx", "C10.3 Posterior wall of oropharynx", "C10.4 Branchial cleft", "C10.8 Overlapping lesions of oropharynx", "C10.9 Oropharynx, NOS"], "C11 NASOPHARYNX": ["C11.0 Superior wall of nasopharynx", "C11.1 Posterior wall of nasopharynx", "C11.2 Lateral wall of nasopharynx", "C11.3 Anterior wall of nasopharynx", "C11.8 Overlapping lesion of nasopharynx", "C11.9 Nasopharynx, NOS"], "C12 PYRIFORM SINUS": ["C12.9 Pyriform sinus"], "C13 HYPOPHARYNX": ["C13.0 Postcricoid region", "C13.1 Hypopharyngeal aspect of aryepiglottic fold", "C13.2 Posterior wall of hypopharynx", "C13.8 Overlapping lesion of hypopharynx", "C13.9 Hypopharynx, NOS"], "C14 OTHER AND ILL-DEFINED SITES IN LIP, ORAL CAVITY AND PHARYNX": ["C14.0 Pharynx, NOS", "C14.2 Waldeyer ring", "C14.8 Overlapping lesion of lip, oral cavity and pharynx"]
         },
         "Digestive organs" :{
         "C15 ESOPHAGUS": ["C15.0 Cervical esophagus", "C15.1 Thoracic esophagus", "C15.2 Abdominal esophagus", "C15.3 Upper third of esophagus", "C15.4 Middle third of esophagus", "C15.5 Lower third of esophagus", "C15.8 Overlapping lesion of esophagus", "C15.9 Esophagus, NOS"], "C16 STOMACH": ["C16.0 Cardia, NOS", "C16.1 Fundus of stomach", "C16.2 Body of stomach", "C16.3 Gastric antrum", "C16.4 Pylorus", "C16.5 Lesser curvature of stomach, NOS", "C16.6 Greater curvature of stomach, NOS", "C16.8 Overlapping lesion of stomach", "C16.9 Stomach, NOS"], "C17 SMALL INTESTINE": ["C17.0 Duodenum", "C17.1 Jejunum", "C17.2 Ileum", "C17.3 Meckel diverticulum", "C17.8 Overlapping lesion of small intestine", "C17.9 Small intestine, NOS"], "C18 COLON": ["C18.0 Cecum", "C18.1 Appendix", "C18.2 Ascending colon", "C18.3 Hepatic flexure of colon", "C18.4 Transverse colon", "C18.5 Splenic flexure of colon", "C18.6 Descending colon", "C18.7 Sigmoid colon", "C18.8 Overlapping lesion of colon", "C18.9 Colon, NOS"], "C19 RECTOSIGMOID JUNCTION": ["C19.9 Rectosigmoid junction"], "C20 RECTUM": ["C20.9 Rectum, NOS"], "C21 ANUS AND ANAL CANAL": ["C21.0 Anus, NOS", "C21.1 Anal canal", "C21.2 Cloacogenic zone", "C21.8 Overlapping lesion of rectum, anus and anal canal"], "C22 LIVER AND INTRAHEPATIC BILE DUCTS": ["C22.0 Liver", "C22.1 intrahepatic bile duct"], "C23 GALLBLADDER": ["C23.9 Gallbladder"], "C24 OTHER AND UNSPECIFIED PARTS OF BILIARY TRACT": ["C24.0 Extrahepatic bile duct", "C24.1 Ampulla of Vater", "C24.8 Overlapping lesion of billiary tract", "C24.9 Billiary tract, NOS"], "C25 PANCREAS": ["C25.0 Head of pancreas", "C25.1 Body of pancreas", "C25.2 Tail of pancreas", "C25.3 Pancreatic duct", "C25.4 Islets of Langerhans", "C25.7 Other specified parts of pancreas", "C25.8 Overlapping lesion of pancreas", "C25.9 Pancreas, NOS"], "C26 OTHER AND ILL-DEFINED DIGESTIVE ORGANS": ["C26.0 Intestinal tract, NOS", "C26.8 Overlapping lesion of digestive system", "C26.9 Gastrointestinal tract, NOS"]
         },
         "Respiratory and intrathoracic organs": {
             "C30 NASAL CAVITY AND MIDDLE EAR": ["C30.0 Nasal cavity", "C30.1 Middle ear"], "C31 ACCESSORY SINUSES": ["C31.0 Maxillary sinus", "C31.1 Ethmoid sinus", "C31.2 Frontal sinus", "C31.3 Sphenoid sinus", "C31.8 Overlapping lesion of accessory sinuses", "C31.9 Accessory sinus, NOS"], "C32 LARYNX": ["C32.0 Glottis", "C32.1 Supraglottis", "C32.2 Subglottis", "C32.3 Laryngeal cartilage", "C32.8 Overlapping lesion of larynx", "C32.9 Larynx, NOS"], "C33 TRACHEA": ["C33.9 Trachea"], "C34 BRONCHUS AND LUNG": ["C34.0 Main bronchus", "C34.1 Upper lobe, lung", "C34.2 Middle lobe, lung", "C34.3 Lower lobe, lung", "C34.8 Overlapping lesion of lung", "C34.9 Lung, NOS"], "C37 THYMUS": ["C37.9 Thymus"], "C38 HEART, MEDIASTINUM, AND PLEURA": ["C38.0 Heart", "C38.1 Anterior mediastinum", "C38.2 Posterior mediastinum", "C38.3 Mediastinum, NOS", "C38.4 Pleura, NOS", "C38.8 Overlapping lesion of heart, mediastinum and pleura"], "C39 OTHER AND ILL-DEFINED SITES WITHIN RESPIRATORY SYSTEM AMD INTRATHORACIC ORGANS": ["C39.0 Upper respiratory tract, NOS", "C39.8 Overlapping lesion of respiratory system and intrathoracic organs", "C39.9 Ill-defined sites within respiratory system"]
             },
         "Bones and articular cartilage": {
            "C40 BONES, JOINTS AND ARTICULAR CARTILAGE OF LIMBS": ["C40.0 Long bones of upper limb, scapula and associated joints", "C40.1 Short bones of upper limb and associated joints", "C40.2 Long bones of lower limb and associated joints", "C40.3 Short bones of lower limb and associated joints", "C40.8 Overlapping lesion of bones, joints and articular cartilage of limbs", "C40.9 Bone of limb, NOS"], "C41 BONES, JOINTS AND ARTICULAR CARTILAGE OF OTHER AND UNSPECIFIED SITES": ["C41.0 Bones of skull and face and associated joints", "C41.1 Mandible", "C41.2 Vertebral column", "C41.3 Rib, sternum, clavicle and associated joints", "C41.4 Pelvic bones, sacrum, coccyx and associated joints", "C41.8 Overlapping lesion of bones, joints and articular cartilage", "C41.9 Bone, NOS"]
         },
         "Blood, bone marrow and immune": {
          "C42 HEMATOPOIETIC AND RETICULOENDOTHELIAL SYSTEMS": ["C42.0 Blood", "C42.1 Bone marrow", "C42.2 Spleen", "C42.3 Reticuloendothelial system, NOS", "C42.4 Hematopoietic system, NOS"
          ],
          "C43 MALIGNANT MELANOMA OF SKIN NCCS":[
            "C43.0 Malignant melanoma of lip",
            "C43.1 Malignant melanoma of eyelid, including canthus",
            "C43.2 Malignant melanoma of ear and external auricular canal",
            "C43.3 Malignant melanoma of other and unspecified parts of face",
            "C43.4 Malignant melanoma of scalp and neck",
            "C43.5 Malignant melanoma of trunk",
            "C43.6 Malignant melanoma of upper limb, including shoulder",
            "C43.7 Malignant melanoma of lower limb, including hip",
            "C43.8 Overlapping malignant melanoma of skin",
            "C43.9 Malignant melanoma of skin, unspecified"
         ],
         "C44 OTHER MALIGNANT NEOPLASMS OF SKIN NCCS": ["C44.0 Skin of lip, NOS", "C44.1 Eyelid", "C44.2 External ear", "C44.3 Skin of other and unspecified parts of face", "C44.4 Skin of scalp and neck", "C44.5 Skin of trunk", "C44.6 Skin of upper limb and shoulder", "C44.7 Skin of lower limb and hip", "C44.8 Overlapping lesion of skin", "C44.9 Skin, NOS"]
         },
         "Mesothelial and soft tissue":{
         "C45 MESOTHELIOMA NCCS":
            ["C45.0 Mesothelioma of pleura",
            "C45.1 Mesothelioma of peritoneum",
            "C45.2 Mesothelioma of pericardium",
            "C45.7 Mesothelioma of other sites",
            "C45.9 Mesothelioma, unspecified"],
          "C46 KAPOSI SARCOMA NCCS": [
        "C46.0 Kaposi sarcoma of skin",
        "C46.1 Kaposi sarcoma of soft tissue",
        "C46.2 Kaposi sarcoma of palate",
        "C46.3 Kaposi sarcoma of lymph nodes",
        "C46.7 Kaposi sarcoma of other sites",
        "C46.8 Kaposi sarcoma of multiple organs",
        "C46.9 Kaposi sarcoma, unspecified"],

         "C47 PERIPHERAL NERVES AND AUTONOMIC NERVOUS SYSTEM": ["C47.0 Peripheral nerves and autonomic nervous system of head, face, and neck", "C47.1 Peripheral nerves and autonomic nervous system of upper limb and shoulder", "C47.2 Peripheral nerves and autonomic nervous system of lower limb and hip", "C47.3 Peripheral nerves and autonomic nervous system of thorax", "C47.4 Peripheral nerves and autonomic nervous system of abdomen", "C47.5 Peripheral nerves and autonomic nervous system of pelvis", "C47.6 Peripheral nerves and autonomic nervous system of trunk, NOS", "C47.8 Overlapping lesion of peripheral nerves and autonomic nervous system", "C47.9 Autonomic nervous system, NOS"], "C48 RETROPERITONEUM AND PERITONEUM": ["C48.0 Retroperitoneum", "C48.1 Specified parts of peritoneum", "C48.2 Peritoneum, NOS", "C48.8 Overlapping lesion of retroperitoneum and peritoneum"], "C49 CONNECTIVE, SUBCUTANEOUS AND OTHER SOFT TISSUES": ["C49.0 Connective, Subcutaneous and other soft tissues of head, face, and neck", "C49.1 Connective, Subcutaneous and other soft tissues of upper limb and shoulder", "C49.2 Connective, Subcutaneous and other soft tissues of lower limb and hip", "C49.3 Connective, Subcutaneous and other soft tissues of thorax", "C49.4 Connective, Subcutaneous and other soft tissues of abdomen", "C49.5 Connective, Subcutaneous and other soft tissues of pelvis", "C49.6 Connective, Subcutaneous and other soft tissues of trunk, NOS", "C49.8 Overlapping lesion of connective, subcutaneous and other soft tissues", "C49.9 Connective, Subcutaneous and other soft tissues, NOS"]
         },
         "Breast": {
             "C50 BREAST": [
                "C50.0 Nipple",
                "C50.1 Central portion of breast",
                "C50.2 Upper-inner quadrant of breast",
                "C50.3 Lower-inner quadrant of breast",
                "C50.4 Upper-outer quadrant of breast",
                "C50.5 Lower-outer quadrant of breast",
                "C50.6 Axillary tail of breast",
                "C50.8 Overlapping lesion of breast",
                "C50.9 Breast, NOS"]
             },
         "Female genitals": {
            "C51 VULVA": ["C51.0 Labium majus", "C51.1 Labium minus", "C51.2 Clitorus", "C51.8 Overlapping lesion of vulva", "C51.9 Vulva, NOS"], "C52 VAGINA": ["C52.9 Vagina, NOS"], "C53 CERVIX UTERI": ["C53.0 Endocervix", "C53.1 Exocervix", "C53.8 Overlapping lesion of cervix uteri", "C53.9 Cervix uteri"], "C54 CORPUS UTERI": ["C54.0 Isthmus uteri", "C54.1 Endometrium", "C54.2 Myometrium", "C54.3 Fundus uteri", "C54.8 Overlapping lesion of corpus uteri", "C54.9 Corpus uteri"], "C55 UTERUS, NOS": ["C55.9 Uterus, NOS"], "C56 OVARY": ["C56.9 Ovary"], "C57 OTHER AN UNSPECIFIED FEMALE GENITAL ORGANS": ["C57.0 Fallopian tube", "C57.1 Broad ligament", "C57.2 Round ligament", "C57.3 Parametrium", "C57.4 Uterine adnexa", "C57.7 Other specified parts of female genital organs", "C57.8 Overlapping lesion of female genital organs", "C57.9 Female genital tract, NOS"], "C58 PLACENTA": ["C58.9 Placenta"]
            },
        "Male genitals":{
            "C60 PENIS": ["C60.0 Prepuce", "C60.1 Glans penis", "C60.2 Body of penis", "C60.8 Overlapping lesion of penis", "C60.9 Penis, NOS"], "C61 PROSTATE GLAND": ["C61.9 Prostate gland"], "C62 TESTIS": ["C62.0 Undescended testis", "C62.1 Descended testis", "C62.9 Testis, NOS"], "C63 OTHER AND UNSPECIFIED MALE GENITAL ORGANS": ["C63.0 Epididymis", "C63.1 Spermatic cord", "C63.2 Scrotum, NOS", "C63.7 Other specified parts of male genital organs", "C63.8 Overlapping lesion of male genital organs", "C63.9 Male genital organs, NOS"]
            },
         "Urinary tract": {
            "C64 KIDNEY": ["C64.9 Kidney, NOS"], "C65 RENAL PELVIS": ["C65.9 Renal pelvis"], "C66 URETER": ["C66.9 Ureter"], "C67 BLADDER": ["C67.0 Trigone of bladder", "C67.1 Dome of bladder", "C67.2 Lateral wall of bladder", "C67.3 Anterior wall of bladder", "C67.4 Posterior wall of bladder", "C67.5 Bladder neck", "C67.6 Ureteric orifice", "C67.7 Urachus", "C67.8 Overlapping lesion of bladder", "C67.9 Bladder, NOS"], "C68 OTHER AND UNSPECIFIED URINARY ORGANS": ["C68.0 Urethra", "C68.1 Paraurethral gland", "C68.8 Overlapping lesion of urinary organs", "C68.9 Urinary system, NOS"]
            },
         "Eye, brain and other parts of central nervous system": {
             "C69 EYE AND ADNEXA":
             ["C69.0 Conjunctiva", "C69.1 Cornea, NOS", "C69.2 Retina", "C69.3 Choroid", "C69.4 Ciliary body", "C69.5 Lacrimal gland", "C69.6 Orbit, NOS", "C69.8 Overlapping lesion of eye and adnexa", "C69.9 Eye, NOS"], "C70 MENINGES": ["C70.0 Cerebral meninges", "C70.1 Spinal meninges", "C70.9 Meninges, NOS"], "C71 BRAIN": ["C71.0 Cerebrum", "C71.1 Frontal lobe", "C71.2 Temporal lobe", "C71.3 Parietal lobe", "C71.4 Occipital lobe", "C71.5 Ventricle, NOS", "C71.6 Cerebellum, NOS", "C71.7 Brain stem", "C71.8 Overlapping lesion of brain", "C71.9 Brain, NOS"], "C72 SPINAL CORD, CRANIAL NERVES, AND OTHER PARTS OF CENTRAL NERVOUS SYSTEM": ["C72.0 Spinal cord", "C72.1 Cauda equina", "C72.2 Olfactory nerve", "C72.3 Optic nerve", "C72.4 Acoustic nerve", "C72.5 Cranial nerve, NOS", "C72.8 Overlapping lesion of brain and central nervous system", "C72.9 Nervous system, NOS"]
             },
         "Thyroid and other endocrine glands": {
            "C73 THYROID GLAND": ["C73.9 Thyroid gland"], "C74 ADRENAL GLAND": ["C74.0 Cortex of adrenal gland", "C74.1 Medulla of adrenal gland", "C74.9 Adrenal gland, NOS"], "C75 OTHER ENDOCRINE GLANDS AND RELATED STRUCTURES": ["C75.0 Parathyroid gland", "C75.1 Pituitary gland", "C75.2 Craniopharyngeal duct", "C75.3 Pineal gland", "C75.4 Carotid body", "C75.5 Aortic body and other paraganglia", "C75.8 Overlapping lesion of endocrine glands and related structures", "C75.9 Endocrine gland, NOS"]
         },
         "Ill-defined, secondary, and unspecified sites":{
             "C76 OTHER AND ILL-DEFINED SITES": ["C76.0 Head, face or neck, NOS", "C76.1 Thorax, NOS", "C76.2 Abdomen, NOS", "C76.3 Pelvis, NOS", "C76.4 Upper limb, NOS", "C76.5 Lower limb, NOS", "C76.7 Other ill-defined sites", "C76.8 Overlapping lesion of ill-defined sites"],
             "C77 LYMPH NODES": ["C77.0 Lymph nodes of head, face and neck", "C77.1 Intrathoracic lymph nodes", "C77.2 Intra-abdominal lymph nodes", "C77.3 Lymph nodes of axilla or arm", "C77.4 Lymph nodes of inguinal region or leg", "C77.5 Pelvic lymph nodes", "C77.8 Lymph nodes of multiple regions", "C77.9 Lymph node, NOS"],
             "C80 UNKNOWN PRIMARY SITE": ["C80.9 Unknown primary site"]
         },
         "Lymphoid, haematopoietic and related tissue": {
         'C81 Hodgkin lymphoma NCCS ': ['C81.0 Nodular lymphocyte predominant Hodgkin lymphoma',
      'C81.1 Nodular sclerosis (classical) Hodgkin lymphoma',
      'C81.2 Mixed cellularity (classical) Hodgkin lymphoma',
      'C81.3 Lymphocyte depleted (classical) Hodgkin lymphoma',
      'C81.4 Lymphocyte-rich (classical) Hodgkin lymphoma',
      'C81.7 Other (classical) Hodgkin lymphoma',
      'C81.9 Hodgkin lymphoma, unspecified'],
     'C82 Follicular lymphoma NCCS ': ['C82.0 Follicular lymphoma grade I',
      'C82.1 Follicular lymphoma grade II',
      'C82.2 Follicular lymphoma grade III, unspecified',
      'C82.3 Follicular lymphoma grade IIIa',
      'C82.4 Follicular lymphoma grade IIIb',
      'C82.5 Diffuse follicle centre lymphoma',
      'C82.6 Cutaneous follicle centre lymphoma',
      'C82.7 Other types of follicular lymphoma',
      'C82.9 Follicular lymphoma, unspecified'],
     'C83 Non-follicular lymphoma NCCS ': ['C83.0 Small cell B-cell lymphoma',
      'C83.1 Mantle cell lymphoma',
      'C83.3 Diffuse large B-cell lymphoma',
      'C83.5 Lymphoblastic (diffuse) lymphoma',
      'C83.7 Burkitt lymphoma',
      'C83.8 Other non-follicular lymphoma',
      'C83.9 Non-follicular (diffuse) lymphoma, unspecified'],
     'C84 Mature T/NK-cell lymphomas NCCS ': ['C84.0 Mycosis fungoides',
      'C84.1 Sézary disease',
      'C84.4 Peripheral T-cell lymphoma, not elsewhere classified',
      'C84.5 Other mature T/NK-cell lymphomas',
      'C84.6 Anaplastic large cell lymphoma, ALK-positive',
      'C84.7 Anaplastic large cell lymphoma, ALK-negative',
      'C84.8 Cutaneous T-cell lymphoma, unspecified',
      'C84.9 Mature T/NK-cell lymphoma, unspecified'],
     'C85 Other and unspecified types of non-Hodgkin lymphoma NCCS ': ['C85.1 B-cell lymphoma, unspecified',
      'C85.2 Mediastinal (thymic) large B-cell lymphoma',
      'C85.7 Other specified types of non-Hodgkin lymphoma',
      'C85.9 Non-Hodgkin lymphoma, unspecified'],
     'C86 Other specified types of T/NK-cell lymphoma NCCS ': ['C86.0 Extranodal NK/T-cell lymphoma, nasal type',
      'C86.1 Hepatosplenic T-cell lymphoma',
      'C86.2 Enteropathy-type (intestinal) T-cell lymphoma',
      'C86.3 Subcutaneous panniculitis-like T-cell lymphoma',
      'C86.4 Blastic NK-cell lymphoma',
      'C86.5 Angioimmunoblastic T-cell lymphoma',
      'C86.6 Primary cutaneous CD30-positive T-cell proliferations'],
     'C88 Malignant immunoproliferative diseases NCCS ': ['C88.0 Waldenström macroglobulinaemia',
      'C88.2 Other heavy chain disease',
      'C88.3 Immunoproliferative small intestinal disease',
      'C88.4 Extranodal marginal zone B-cell lymphoma of mucosa-associated lymphoid tissue [MALT-lyphoma]',
      'C88.7 Other malignant immunoproliferative diseases',
      'C88.9 Malignant immunoproliferative disease, unspecified'],
     'C90 Multiple myeloma and malignant plasma cell neoplasms NCCS ': ['C90.0 Multiple myeloma NCCS ',
      'C90.1 Plasma cell leukaemia',
      'C90.2 Extramedullary plasmacytoma',
      'C90.3 Solitary plasmacytoma'],
     'C91 Lymphoid leukaemia NCCS ': ['C91.0 Acute lymphoblastic leukaemia [ALL]',
      'C91.1 Chronic lymphocytic leukaemia of B-cell type',
      'C91.3 Prolymphocytic leukaemia of B-cell type',
      'C91.4 Hairy-cell leukaemia',
      'C91.5 Adult T-cell lymphoma/leukaemia [HTLV-1-associated]',
      'C91.6 Prolymphocytic leukaemia of T-cell type',
      'C91.7 Other lymphoid leukaemia',
      'C91.8 Mature B-cell leukaemia Burkitt-type',
      'C91.9 Lymphoid leukaemia, unspecified'],
     'C92 Myeloid leukaemia NCCS ': ['C92.0 Acute myeloblastic leukaemia [AML]',
      'C92.1 Chronic myeloid leukaemia [CML], BCR/ABL-positive',
      'C92.2 Atypical chronic myeloid leukaemia, BCR/ABL- negative',
      'C92.3 Myeloid sarcoma',
      'C92.4 Acute promyelocytic leukaemia [PML]',
      'C92.5 Acute myelomonocytic leukaemia',
      'C92.6 Acute myeloid leukaemia with 11q23-abnormality',
      'C92.7 Other myeloid leukaemia',
      'C92.8 Acute myeloid leukaemia with multilineage dysplasia',
      'C92.9 Myeloid leukaemia, unspecified'],
     'C93 Monocytic leukaemia NCCS ': ['C93.0 Acute monoblastic/monocytic leukaemia',
      'C93.1 Chronic myelomonocytic leukaemia',
      'C93.3 Juvenile myelomonocytic leukaemia',
      'C93.7 Other monocytic leukaemia',
      'C93.9 Monocytic leukaemia, unspecified'],
     'C94 Other leukaemias of specified cell type NCCS ': ['C94.0 Acute erythroid leukaemia',
      'C94.2 Acute megakaryoblastic leukaemia',
      'C94.3 Mast cell leukaemia',
      'C94.4 Acute panmyelosis with myelofibrosis',
      'C94.6 Myelodysplastic and myeloproliferative disease, not elsewhere classified',
      'C94.7 Other specified leukaemias',
      'C95 Leukaemia of unspecified cell type NCCS ',
      'C95.0 Acute leukaemia of unspecified cell type',
      'C95.1 Chronic leukaemia of unspecified cell type',
      'C95.7 Other leukaemia of unspecified cell type',
      'C95.9 Leukaemia, unspecified'],
     'C96 Other and unspecified malignant neoplasms of lymphoid, haematopoietic and related tissue NCCS ': ['C96.0 Multifocal and multisystemic (disseminated) Langerhans-cell histiocytosis [Letterer-Siwe disease]',
      'C96.2 Malignant mast cell tumour',
      'C96.4 Sarcoma of dendritic cells (accessory cells)',
      'C96.5 Multifocal and unisystemic Langerhans-cell histiocytosis',
      'C96.6 Unifocal Langerhans-cell histiocytosis',
      'C96.7 Other specified malignant neoplasms of lymphoid, haematopoietic and related tissue',
      'C96.8 Histiocytic sarcoma',
      'C96.9 Malignant neoplasm of lymphoid, haematopoietic and related tissue, unspecified']
      },
      "Malignant neoplasms of independent (primary) multiple sites" : [
      'C97 Malignant neoplasms of independent (primary) multiple sites'
      ]

    }
  },
  {
    "cancers - COSMIC codes": {
        "site":[
            'Adrenal gland',
            'Autonomic ganglia',
            'Biliary tract',
            'Bone',
            'Breast',
            'Central nervous system',
            'Cervix',
            'Endometrium',
            'Eye',
            'Fallopian tube',
            'Female genital tract (site indeterminate)',
            'Female genitourinary system',
            'Gastrointestinal tract (site indeterminate)',
            'Genital tract',
            'Haematopoietic and lymphoid tissue',
            'Kidney',
            'Large intestine',
            'Liver',
            'Lung',
            'Lymph node',
            'Mediastinum',
            'Meninges',
            'Midline organs',
            'Ns',
            'Oesophagus',
            'Ovary',
            'Pancreas',
            'Paratesticular tissues',
            'Parathyroid',
            'Penis']
         }
  },
  {
    "cancers - GDC codes": {
        "site": [
            "Bladder, nos",
            "Blood",
            "Breast, nos",
            "Cervix uteri",
            "Colon, nos",
            "Endometrium",
            "External ear",
            "Eyelid",
            "Female genital tract, nos",
            "Head, face or neck, nos",
            "Intestinal tract, nos",
            "Kidney, nos",
            "Larynx, nos",
            "Lower lobe, lung",
            "Lung, nos",
            "Lymph nodes of head, face and neck",
            "Main bronchus",
            "Middle lobe, lung",
            "Mouth, nos",
            "Not reported",
            "Ovary",
            "Overlapping lesion of lung",
            "Penis, nos",
            "Pharynx, nos",
            "Prostate gland",
            "Rectum, nos",
            "Skin of lip, nos",
            "Skin of lower limb and hip",
            "Skin of other and unspecified parts of face",
            "Skin, nos",
            "spleen",
            "thorax, nos",
            "thymus",
            "thyroid gland",
            "unknown",
            "upper limb, nos",
            "upper lobe, lung",
            "uterus, nos",
            "vulva, nos"
        ]
    }
  },
  {
    "In Vitro Study": {

        "Model": [
            "Organ on a Chip",
            "3D organoid (including on a chip)",
            "Organ slice"
        ],
        "Cell Source": [
          "Immortalised cell-line",
          "Patient derived",
          "Animal"
        ],
        "Treatment": [
           "Cell and cell-derived treatment",
           "Gene knock-down",
           "Medication",
           "Radiation"
        ]}
  },
  {
    "Animal Model": {
      "Animal": [
        "Chicken",
        "Dog",
        "Fruit fly",
        "Mouse",
        "Rabbit",
        "Rat"
      ],
       "Animal description": [
        "Genetically engineered",
        "Immuno-compromised",
        "Patient-Derived xenograft",
        "Syngeneic"
      ],
      "Biobank Samples": [
        "Bloods",
        "Cells",
        "DNA/RNA",
        "Other Fluids",
        "Tissues"
      ],
      "Biopsy & Lab Results": [
        "Biomarkers",
        "Flow Cytometry",
        "Immunohistochemistry"
      ],
      "Imaging Data": [
        "Bioluminescence Imaging",
        "Fluorescence Imaging",
        "Magnetic Resonance Imaging",
        "Medical photography",
        "Microscopy",
        "Nuclear medicine imaging procedure",
        "Radiographic imaging procedure",
        "Ultrasonography",
      ],
      "Longitudinal Follow up": [
        "Behavioural data",
        "Clinical observations",
        "Response outcomes",
        "Side effects",
        "Survival data"
      ],
      "Multi-omic Data": [
        "Circulating tumour cells",
        "Circulating tumour DNA",
        "Copy Number Variations",
        "Epigenetic Data",
        "Exosomes/Genomes",
        "Fusion Genes",
        "Germline Mutations",
        "Metabolomics",
        "Protein expression profiles",
        "RNA Sequence Expression Profile",
        "Single-cell",
        "Somatic Mutations",
        "Spatial Biology Data"
      ],
      "Treatments": [
        "Medication",
        "Cell and cell-derived treatments",
        "Micro-biome alterations",
        "Organ resection and other ablations",
        "Radiotherapies"
      ],
    }
  },
  {
    "Patient study": {
      "Background": [
        "Child and Young Person",
        "Seniors",
        "Demographic",
        "Family history",
        "Lifestyle",
        "Quality of life (eg Education and/or employment)"
      ],
      "Biobank Samples": [
        "Bloods",
        "Cells",
        "DNA/RNA",
        "Other Fluids",
        "Organoids",
        "Primary cell lines",
        "Tissues"
      ],
      "Biopsy Reports and Lab Results": [
        "Biomarkers",
        "Complete blood count",
        "H&E-stained tissue microarrays",
        "Immunohistochemistry",
        "Kidney function tests",
        "Liver function tests",
        "Other bodily fluid analyses",
        "Tumour details",
        "Urine tests"
      ],
      "Imaging Data": [
        "Bioluminescence Imaging",
        "Fluorescence Imaging",
        "Magnetic Resonance Imaging",
        "Medical photography",
        "Microscopy",
        "Nuclear medicine imaging procedure",
        "Radiographic imaging procedure",
        "Ultrasonography",
      ],
      "Longitudinal Follow up": [
        "Patient-Reported Outcomes",
        "Response outcomes",
        "Side effects",
        "Survival data"
      ],
      "Multi-omic Data": [
        "Circulating tumour cells",
        "Circulating tumour DNA",
        "Copy Number Variations",
        "Epigenetic Data",
        "Exosomes/Genomes",
        "Fusion Genes",
        "Germline Mutations",
        "Metabolomics",
        "Protein expression profiles",
        "RNA Sequence Expression Profile",
        "Single-cell",
        "Somatic Mutations",
        "Spatial Biology Data"
      ],
      "Treatments": [
        "Medication",
        "Organ resection and other ablations",
        "Radiotherapies"
      ]
    }
  },
  {
    "Population Study": {
      "Data Sources": [
        "Administrative data (e.g., insurance claims)",
        "Biobanks (population cohorts)",
        "Cancer registries",
        "Electronic Health Records (EHR)",
        "Environmental monitoring data",
        "National health surveys"
      ],
      "Interventions/Policies": [
        "Health education campaigns",
        "Policy changes",
        "Prevention programs",
        "Screening programs"
      ],
      "Outcomes Measured": [
        "Education/Employment",
        "Incidence",
        "Morbidity/Mortality",
        "Social well-being"
      ],
      "Population Demographics": [
        "Age",
        "Ethnicity",
        "Geographic location",
        "Sex",
        "Socioeconomic Status"
      ],
      "Risk Factors": [
        "Environmental",
        "Genetic",
        "Infections",
        "Lifestyle",
        "Medical history",
        "Occupational"
      ],
      "Study Design": [
        "Case-control study",
        "Cohort study",
        "Cross-sectional study",
        "Ecological study",
        "Intervention study"
      ]
    }
  }
];

const currentSelections = {}; // Structure: { "Study Name": { "Category": { "Item": "Essential" | "Useful" } } }
const customItems = {}; // Structure: { "Study Name": { "Category": { "Custom Item": "Essential" | "Useful" } } }

const selectionDisplayContainer = document.getElementById('selected-items-container');
const downloadButton = document.getElementById('downloadSelections');

/**
 * MODIFIED: Updates the display to show '(Essential)' or '(Useful)' tags.
 * Now correctly handles the 'Primary site' category as 'Site Types'.
 */
function updateSelectionDisplay() {
  selectionDisplayContainer.innerHTML = '';
  let hasAnySelections = false;
  let outputContent = '';

  for (const studyBlock of allStudyData) {
    const studyName = Object.keys(studyBlock)[0];
    const studyPredefinedSelections = currentSelections[studyName] || {};
    const studyCustomSelections = customItems[studyName] || {};

    let categoriesToIterate = new Set([
      ...Object.keys(studyPredefinedSelections),
      ...Object.keys(studyCustomSelections)
    ]);


    let hasSelectionsInThisStudy = false;
    let studyOutput = '';

    for (const category of categoriesToIterate) {
      const selectedPredefined = studyPredefinedSelections[category] || {};
      const selectedCustom = studyCustomSelections[category] || {};
      const combinedSelectedItems = { ...selectedPredefined, ...selectedCustom };

      if (Object.keys(combinedSelectedItems).length > 0) {
        if (!hasSelectionsInThisStudy) {
          studyOutput += `<div class="selected-study-header"><h3>${studyName}:</h3></div>`;
          hasSelectionsInThisStudy = true;
        }
        studyOutput += `<div class="selected-category-container"><strong>- ${category}:</strong><ul>`; // Always show category now
        for (const item in combinedSelectedItems) {
          const selectionType = combinedSelectedItems[item]; // This will be 'Essential' or 'Useful'
          studyOutput += `<li class="selected-item">${item} (${selectionType})</li>`;
        }
        studyOutput += `</ul></div>`;
        hasAnySelections = true;
      }
    }
    outputContent += studyOutput;
  }

  if (!hasAnySelections) {
    selectionDisplayContainer.innerHTML = '<p>No selections yet.</p>';
    downloadButton.disabled = true;
  } else {
    selectionDisplayContainer.innerHTML = outputContent;
    downloadButton.disabled = false;
  }
}


/**
 * MODIFIED: Handles the change event for checkboxes, now with selectionType ('Essential' or 'Useful').
 * Ensures that only one of the two checkboxes per item can be selected.
 */
function handleCheckboxChange(event, studyName, category, itemValue, selectionType, isCustom = false) {
  const checkbox = event.target;
  const isChecked = checkbox.checked;
  const targetSelections = isCustom ? customItems : currentSelections;

  // --- Logic to uncheck the other box ---
  const otherType = selectionType === 'Essential' ? 'Useful' : 'Essential';
  // Corrected ID generation for consistency, especially with custom items
  const safeItemValue = itemValue.replace(/\s+/g, '-').replace(/[^\w-]/g, ''); // Make it safer for ID
  const otherCheckboxId = `checkbox-${studyName.replace(/\s+/g, '-')}-${category.replace(/\s+/g, '-')}-${safeItemValue}-${otherType}`;
  const otherCheckbox = document.getElementById(otherCheckboxId);
  if (otherCheckbox && isChecked) {
    otherCheckbox.checked = false;
  }
  // --- End of uncheck logic ---

  // Ensure nested objects exist
  if (!targetSelections[studyName]) targetSelections[studyName] = {};
  if (!targetSelections[studyName][category]) targetSelections[studyName][category] = {};

  if (isChecked) {
    // Set the selection type ('Essential' or 'Useful')
    targetSelections[studyName][category][itemValue] = selectionType;
  } else {
    // If unchecked, remove the item
    delete targetSelections[studyName][category][itemValue];
  }

  // Clean up empty category objects
  if (Object.keys(targetSelections[studyName][category]).length === 0) {
    delete targetSelections[studyName][category];
  }
  // Clean up empty study objects
  if (Object.keys(targetSelections[studyName]).length === 0) {
    delete targetSelections[studyName];
  }

  updateSelectionDisplay();
}


/**
 * MODIFIED: Creates custom input with both 'Essential' and 'Useful' checkboxes.
 */
function createCustomInput(studyName, category, parentElement, initialValue = '', initialSelectionType = null) {
  const customInputDiv = document.createElement('div');
  customInputDiv.classList.add('checkbox-item-row', 'custom-item-input');

  const textInput = document.createElement('input');
  textInput.type = 'text';
  textInput.placeholder = 'New item...';
  textInput.value = initialValue;
  textInput.classList.add('item-label');
  textInput.disabled = !initialSelectionType; // Disabled if no initial selection type is set
  textInput.dataset.previousValue = initialValue; // Store the initial/previous value

  const createCheckbox = (type) => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    // Ensure unique and valid IDs for custom items
    const safeInitialValue = (initialValue || 'custom-item-' + Date.now()).replace(/\s+/g, '-').replace(/[^\w-]/g, '');
    checkbox.id = `checkbox-${studyName.replace(/\s+/g, '-')}-${category.replace(/\s+/g, '-')}-${safeInitialValue}-${type}`;
    checkbox.checked = initialSelectionType === type;

    checkbox.addEventListener('change', (e) => {
      const currentText = textInput.value.trim();
      const otherCheckboxId = checkbox.id.replace(type, type === 'Essential' ? 'Useful' : 'Essential');
      const otherCheckbox = document.getElementById(otherCheckboxId);

      // Enable/disable text input based on checkbox state
      textInput.disabled = !e.target.checked && !(otherCheckbox && otherCheckbox.checked);

      if (e.target.checked && !currentText) {
        textInput.focus();
        return; // Prevent immediate change if text is empty
      }

      if (currentText) {
        handleCheckboxChange(e, studyName, category, currentText, type, true);
        textInput.dataset.previousValue = currentText; // Update previous value after successful change
      }

      // If this is the last custom input and it gets a value, create a new empty one
      // This logic should only create a new input if a value is present and selected
      if (e.target.checked && currentText && !parentElement.querySelector('.custom-item-input input[type="text"][value=""]')) {
        createCustomInput(studyName, category, parentElement);
      }
    });
    return checkbox;
  };

  const essentialCheckbox = createCheckbox('Essential');
  const usefulCheckbox = createCheckbox('Useful');

  textInput.addEventListener('input', () => {
    const newItemText = textInput.value.trim();
    const oldItemValue = textInput.dataset.previousValue;
    const selectedType = essentialCheckbox.checked ? 'Essential' : (usefulCheckbox.checked ? 'Useful' : null);

    // Only proceed if a checkbox is selected and text has changed or is being added
    if (selectedType && newItemText !== oldItemValue) {
      // Remove old entry if it exists and had a previous value
      if (oldItemValue && customItems[studyName]?.[category]?.[oldItemValue]) {
        delete customItems[studyName][category][oldItemValue];
      }
      // Add new entry if new text is not empty
      if (newItemText) {
        if (!customItems[studyName]) customItems[studyName] = {};
        if (!customItems[studyName][category]) customItems[studyName][category] = {};
        customItems[studyName][category][newItemText] = selectedType;
      } else {
        // If text is cleared, ensure no entry exists for this input
        if (customItems[studyName]?.[category]?.[oldItemValue]) {
          delete customItems[studyName][category][oldItemValue];
        }
      }
      textInput.dataset.previousValue = newItemText; // Update previous value
      updateSelectionDisplay();
    }
  });

  textInput.addEventListener('blur', () => {
    const currentText = textInput.value.trim();
    // If the input is empty and no checkbox is checked, and it's not the only custom input, remove it.
    const isOnlyCustomInput = parentElement.querySelectorAll('.custom-item-input').length === 1;

    if (!currentText && !essentialCheckbox.checked && !usefulCheckbox.checked && !isOnlyCustomInput) {
      customInputDiv.remove();
      // Ensure data model is clean if this input represented a previous custom item
      const previousValue = textInput.dataset.previousValue;
      if (previousValue && customItems[studyName]?.[category]?.[previousValue]) {
        delete customItems[studyName][category][previousValue];
        // Clean up empty category/study if necessary after removal
        if (Object.keys(customItems[studyName][category]).length === 0) {
          delete customItems[studyName][category];
        }
        if (Object.keys(customItems[studyName]).length === 0) {
          delete customItems[studyName];
        }
        updateSelectionDisplay(); // Update display to reflect removal
      }
    }
  });

  customInputDiv.appendChild(textInput);
  customInputDiv.appendChild(essentialCheckbox);
  customInputDiv.appendChild(usefulCheckbox);
  parentElement.appendChild(customInputDiv);
}


/**
 * MODIFIED: Creates two checkboxes per item under 'Essential' and 'Useful' headers.
 */
function createCheckboxes(studyName, category, items, parentElement) {
  parentElement.innerHTML = ''; // Clear previous content

  // Create header row
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('checkbox-header-row');
  headerDiv.innerHTML = `
        <span class="item-label-header">Item</span>
        <span class="checkbox-header">Essential</span>
        <span class="checkbox-header">Useful</span>
    `;
  parentElement.appendChild(headerDiv);

  // Create rows for predefined items
  items.forEach(item => {
    const itemRowDiv = document.createElement('div');
    itemRowDiv.classList.add('checkbox-item-row');

    const label = document.createElement('label');
    label.textContent = item;
    label.classList.add('item-label');
    itemRowDiv.appendChild(label);

    const createCheckbox = (type) => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      // Ensure unique and valid IDs
      const safeItem = item.replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      checkbox.id = `checkbox-${studyName.replace(/\s+/g, '-')}-${category.replace(/\s+/g, '-')}-${safeItem}-${type}`;
      checkbox.value = item;

      const selection = currentSelections[studyName]?.[category]?.[item];
      if (selection === type) {
        checkbox.checked = true;
      }

      checkbox.addEventListener('change', (event) => handleCheckboxChange(event, studyName, category, item, type));
      return checkbox;
    };

    itemRowDiv.appendChild(createCheckbox('Essential'));
    itemRowDiv.appendChild(createCheckbox('Useful'));
    parentElement.appendChild(itemRowDiv);
  });

  // Add existing custom items for this category
  if (customItems[studyName] && customItems[studyName][category]) {
    for (const customItemValue in customItems[studyName][category]) {
      const selectionType = customItems[studyName][category][customItemValue];
      createCustomInput(studyName, category, parentElement, customItemValue, selectionType);
    }
  }

  // Add one empty custom input field for new additions
  createCustomInput(studyName, category, parentElement);
}

/**
 * Recursively renders the nested dictionary structure for a given study.
 * (No changes needed in this function, it handles sub-categories)
 */
function renderNestedStructure(studyName, labelText, currentData, parentElement) {
  const levelContainer = document.createElement('div');
  levelContainer.classList.add('level-container');
  parentElement.appendChild(levelContainer);

  const labelSpan = document.createElement('span');
  labelSpan.classList.add('level-label');
  labelSpan.textContent = labelText + ": ";
  levelContainer.appendChild(labelSpan);

  const revealedContentDiv = document.createElement('div');
  revealedContentDiv.classList.add('revealed-content');

  if (typeof currentData === 'object' && !Array.isArray(currentData)) {
    const selectOptions = Object.keys(currentData);
    const selectId = `select-${studyName.replace(/\s+/g, '-')}-${labelText.replace(/\s+/g, '-')}-${Math.random().toString(36).substring(2, 9)}`;

    const select = document.createElement('select');
    select.id = selectId;
    select.innerHTML = '<option value="">-- Select an option --</option>'; // Placeholder
    selectOptions.forEach(optionValue => {
      const option = document.createElement('option');
      option.value = optionValue;
      option.textContent = optionValue;
      select.appendChild(option);
    });
    levelContainer.appendChild(select);
    levelContainer.appendChild(revealedContentDiv);

    select.addEventListener('change', (event) => {
      const selectedOption = event.target.value;
      revealedContentDiv.innerHTML = '';
      revealedContentDiv.style.display = 'none';

      if (selectedOption) {
        const nextData = currentData[selectedOption];
        revealedContentDiv.style.display = 'block';
        renderNestedStructure(studyName, selectedOption, nextData, revealedContentDiv);
      }
    });
  } else if (Array.isArray(currentData)) {
    // This branch is for categories that directly contain lists of items
    createCheckboxes(studyName, labelText, currentData, levelContainer);
    revealedContentDiv.style.display = 'block'; // Ensure content is visible if checkboxes are directly rendered
  }
}


/**
 * MODIFIED: Renders the top-level study selectors into three columns.
 * Now "Primary site" is treated like other studies with an initial dropdown.
 */
function renderTopLevelStudySections(allStudyData) {
  const leftColumn = document.getElementById('left-column');
  const middleColumn = document.getElementById('middle-column');
  const rightColumn = document.getElementById('right-column');

  // Clear any previous content
  leftColumn.innerHTML = '';
  middleColumn.innerHTML = '';
  rightColumn.innerHTML = '';

  allStudyData.forEach(studyBlock => {
    const studyName = Object.keys(studyBlock)[0];
    const studyContent = studyBlock[studyName]; // This is now always an object (the categories)

    const studySectionContainer = document.createElement('div');
    studySectionContainer.classList.add('study-section-container');
    studySectionContainer.id = `study-section-${studyName.replace(/\s+/g, '-')}`;

    const studyHeader = document.createElement('h2');
    studyHeader.textContent = studyName;
    studySectionContainer.appendChild(studyHeader);

    // Always create an initial dropdown for top-level studies
    const initialSelectId = `select-initial-${studyName.replace(/\s+/g, '-')}-${Math.random().toString(36).substring(2, 9)}`;
    const initialSelect = document.createElement('select');
    initialSelect.id = initialSelectId;
    initialSelect.innerHTML = '<option value="">-- Select a Category --</option>'; // Generic placeholder

    Object.keys(studyContent).forEach(categoryName => {
      const option = document.createElement('option');
      option.value = categoryName;
      option.textContent = categoryName;
      initialSelect.appendChild(option);
    });

    studySectionContainer.appendChild(initialSelect);

    const revealedContentDiv = document.createElement('div');
    revealedContentDiv.classList.add('revealed-content');
    studySectionContainer.appendChild(revealedContentDiv);


    initialSelect.addEventListener('change', (event) => {
      const selectedInitialCategory = event.target.value;
      revealedContentDiv.innerHTML = '';
      revealedContentDiv.style.display = 'none';

      if (selectedInitialCategory) {
        const nextData = studyContent[selectedInitialCategory];
        revealedContentDiv.style.display = 'block';
        renderNestedStructure(studyName, selectedInitialCategory, nextData, revealedContentDiv);
      }
    });


    // Append the entire section to the correct column
    if (studyName === 'Animal Model' || studyName === 'Patient study') {
      middleColumn.appendChild(studySectionContainer);
    } else if (studyName === 'Primary site' || studyName === 'Cancer SNOMED-CT'
    || studyName === 'cancers - NDRS codes' || studyName === 'cancers - COSMIC codes'
    || studyName == "cancers - GDC codes"   || studyName == 'cancers - ICD-O' )   {
      leftColumn.appendChild(studySectionContainer);
    } else if (studyName === 'Population Study' || studyName === 'In Vitro Study') {
      rightColumn.appendChild(studySectionContainer);
    }
  });
}


/**
 * MODIFIED: Formats selections for download with the new tags.
 */
function formatSelectionsForDownload() {
  let output = "Your Selections:\n\n";
  let hasContent = false;

  for (const studyBlock of allStudyData) {
    const studyName = Object.keys(studyBlock)[0];
    const studyPredefinedSelections = currentSelections[studyName] || {};
    const studyCustomSelections = customItems[studyName] || {};

    let categoriesToProcess = new Set([
      ...Object.keys(studyPredefinedSelections),
      ...Object.keys(studyCustomSelections)
    ]);

    if (categoriesToProcess.size > 0) {
      let studyHasSelections = false;
      let studyOutput = `${studyName}:\n`;

      for (const category of categoriesToProcess) {
        const combinedItems = {
          ...(studyPredefinedSelections[category] || {}),
          ...(studyCustomSelections[category] || {})
        };

        if (Object.keys(combinedItems).length > 0) {
          studyOutput += `- ${category}\n`; // Always add category label now
          for (const item in combinedItems) {
            const selectionType = combinedItems[item];
            studyOutput += `    ${item} (${selectionType})\n`;
          }
          studyHasSelections = true;
          hasContent = true;
        }
      }
      if (studyHasSelections) {
        output += studyOutput + "\n";
      }
    }
  }

  return hasContent ? output : "No selections were made.";
}


/**
 * Triggers the download of the formatted selections as a text file.
 * (No changes needed in this function)
 */
function downloadSelections() {
  const content = formatSelectionsForDownload();
  const blob = new Blob([content], {
    type: 'text/plain'
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'selections.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

document.addEventListener('DOMContentLoaded', () => {
  renderTopLevelStudySections(allStudyData);
  updateSelectionDisplay();
  downloadButton.addEventListener('click', downloadSelections);
});