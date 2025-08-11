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
    "Primary site2": {
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
    "In Vitro Study": {
      "Cell Line Study": {
        "Cell Line Type": [
          "Adherent",
          "Suspension"
        ],
        "Cell Source": [
          "Human",
          "Mouse"
        ],
        "Genetic Modification": [
          "Edited",
          "Wild-type"
        ],
      },
      "Organ-on-a-Chip Study": {
        "Cell Source": [
          "Cell line",
          "Mouse",
          "Patient",
          "induced Pluripotent Stem Cell"
        ],
        "OOAC Platform/Type": [
          "Multi-organ",
          "Organ",
          "Tumour"
        ]
      },
      "Organoid Study": {
        "Organoid Source": [
          "Cell line",
          "Induced Pluripotent Stem Cell",
          "Mouse",
          "Patient"
        ],
      }
    }
  },
  {
    "Mouse study": {
      "Biobank Samples": [
        "Bloods",
        "Cells",
        "DNA/RNA",
        "Other Fluids",
        "Organoids",
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
        "Organ resection and other ablations",
        "Radiotherapies"
      ],
      "Tumour Model": [
        "Genetically engineered mouse model",
        "Patient-Derived xenograft",
        "Syngeneic"
      ]
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
    if (studyName === 'Mouse study' || studyName === 'Patient study') {
      leftColumn.appendChild(studySectionContainer);
    } else if (studyName === 'Primary site' || studyName === 'Primary site2') {
      middleColumn.appendChild(studySectionContainer);
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