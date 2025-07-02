const allStudyData = [
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
        "Site": [
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
          "Upper GI",
          "Unknown",
          "Urological"
        ]
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
        "Tissue Type": [
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
          "Upper GI",
          "Unknown",
          "Urological"
        ]
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
        "Bone Scans",
        "Computed Tomography",
        "Fluorescence Imaging",
        "Histology slides",
        "Imaging Mass Cytometry",
        "Magnetic Resonance Imaging",
        "Positron Emission Tomography",
        "Tomosynthesis",
        "Ultrasound",
        "X-rays"
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
        "Bone Scans",
        "Computed Tomography",
        "Imaging Mass Cytometry",
        "Magnetic Resonance Imaging",
        "Mammography",
        "Positron Emission Tomography",
        "Tomosynthesis",
        "Ultrasound",
        "X-rays"
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
      "Primary site": [
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
const customItems = {};       // Structure: { "Study Name": { "Category": { "Custom Item": "Essential" | "Useful" } } }

const selectionDisplayContainer = document.getElementById('selected-items-container');
const downloadButton = document.getElementById('downloadSelections');

/**
 * MODIFIED: Updates the display to show '(Essential)' or '(Useful)' tags.
 */
function updateSelectionDisplay() {
    selectionDisplayContainer.innerHTML = '';
    let hasAnySelections = false;
    let outputContent = '';

    for (const studyBlock of allStudyData) {
        const studyName = Object.keys(studyBlock)[0];
        const studyPredefinedSelections = currentSelections[studyName] || {};
        const studyCustomSelections = customItems[studyName] || {};

        const allCategoriesForStudy = new Set([
            ...Object.keys(studyPredefinedSelections),
            ...Object.keys(studyCustomSelections)
        ]);

        let hasSelectionsInThisStudy = false;
        let studyOutput = '';

        for (const category of allCategoriesForStudy) {
            const selectedPredefined = studyPredefinedSelections[category] || {};
            const selectedCustom = studyCustomSelections[category] || {};
            const combinedSelectedItems = { ...selectedPredefined, ...selectedCustom };

            if (Object.keys(combinedSelectedItems).length > 0) {
                if (!hasSelectionsInThisStudy) {
                    studyOutput += `<div class="selected-study-header"><h3>${studyName}:</h3></div>`;
                    hasSelectionsInThisStudy = true;
                }
                studyOutput += `<div class="selected-category-container"><strong>- ${category}:</strong><ul>`;
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
    const otherCheckboxId = `checkbox-${studyName}-${category}-${itemValue}-${otherType}`.replace(/\s+/g, '-');
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
    textInput.disabled = !initialSelectionType;
    textInput.dataset.previousValue = initialValue;

    const createCheckbox = (type) => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `checkbox-${studyName}-${category}-${initialValue || 'custom'}-${type}-${Date.now()}`.replace(/\s+/g, '-');
        checkbox.checked = initialSelectionType === type;

        checkbox.addEventListener('change', (e) => {
            const currentText = textInput.value.trim();
            textInput.disabled = !e.target.checked && !document.getElementById(checkbox.id.replace(type, type === 'Essential' ? 'Useful' : 'Essential'))?.checked;

            if (e.target.checked && !currentText) {
                 textInput.focus();
                 return;
            }

            if (currentText) {
                handleCheckboxChange(e, studyName, category, currentText, type, true);
                textInput.dataset.previousValue = currentText;
            }
             // If this is the last custom input and it gets a value, create a new empty one
            if(e.target.checked && currentText && !parentElement.querySelector('.custom-item-input input[type="text"][value=""]')) {
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

        if (selectedType && newItemText !== oldItemValue) {
            // Remove old entry if it exists
            if (oldItemValue && customItems[studyName]?.[category]?.[oldItemValue]) {
                delete customItems[studyName][category][oldItemValue];
            }
            // Add new entry
            if (newItemText) {
                if (!customItems[studyName]) customItems[studyName] = {};
                if (!customItems[studyName][category]) customItems[studyName][category] = {};
                customItems[studyName][category][newItemText] = selectedType;
            }
            textInput.dataset.previousValue = newItemText;
            updateSelectionDisplay();
        }
    });

     textInput.addEventListener('blur', () => {
        if (!textInput.value.trim() && !essentialCheckbox.checked && !usefulCheckbox.checked) {
            // Check if it's not the last empty input before removing
              const allCustomInputs = parentElement.querySelectorAll('.custom-item-input input[type="text"]');
            if (allCustomInputs.length > 1) {
                  customInputDiv.remove();
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
            const safeItem = item.replace(/\s+/g, '-');
            checkbox.id = `checkbox-${studyName}-${category}-${safeItem}-${type}`.replace(/\s+/g, '-');
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
 * (No changes needed in this function)
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
        select.innerHTML = '<option value="">-- Select an option --</option>';
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
        createCheckboxes(studyName, labelText, currentData, levelContainer);
        revealedContentDiv.style.display = 'block';
    }
}


/**
 * MODIFIED: Renders the top-level study selectors into two columns.
 */
function renderTopLevelStudySections(allStudyData) {
    const leftColumn = document.getElementById('left-column');
    const rightColumn = document.getElementById('right-column');

    // Clear any previous content
    leftColumn.innerHTML = '';
    rightColumn.innerHTML = '';

    allStudyData.forEach(studyBlock => {
        const studyName = Object.keys(studyBlock)[0];
        const studyContent = studyBlock[studyName];

        const studySectionContainer = document.createElement('div');
        studySectionContainer.classList.add('study-section-container');
        studySectionContainer.id = `study-section-${studyName.replace(/\s+/g, '-')}`;

        const studyHeader = document.createElement('h2');
        studyHeader.textContent = studyName;
        studySectionContainer.appendChild(studyHeader);

        const initialSelectId = `select-initial-${studyName.replace(/\s+/g, '-')}-${Math.random().toString(36).substring(2, 9)}`;
        const initialSelect = document.createElement('select');
        initialSelect.id = initialSelectId;
        initialSelect.innerHTML = '<option value="">-- Select a Category for ' + studyName + ' --</option>';

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
        if (studyName === 'Patient study' || studyName === 'Mouse study') {
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

        const allCategoriesForStudy = new Set([
            ...Object.keys(studyPredefinedSelections),
            ...Object.keys(studyCustomSelections)
        ]);

        if (allCategoriesForStudy.size > 0) {
            let studyHasSelections = false;
            let studyOutput = `${studyName}:\n`;

            for (const category of allCategoriesForStudy) {
                const combinedItems = {
                    ...(studyPredefinedSelections[category] || {}),
                    ...(studyCustomSelections[category] || {})
                };

                if (Object.keys(combinedItems).length > 0) {
                    studyOutput += `- ${category}\n`;
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
    // MODIFIED: No longer passes parentElement as it's now hardcoded in the function
    renderTopLevelStudySections(allStudyData);
    updateSelectionDisplay();
    downloadButton.addEventListener('click', downloadSelections);
});
