let texts = {}; // An object to hold the contents of all the text files
let language = 'english'; // The default language
let outputDiv; // The HTML element to display the output text
let buffer = ''; // A string to store previous output texts
let downloadButton;
let titles;


function preload() {
  // Load all the text files into the `texts` object
  texts['english'] = [
    loadStrings('CEenglish.txt'),
    loadStrings('TPenglish.txt'),
    loadStrings('SSBenglish.txt'),
    loadStrings('VCMenglish.txt'),
    loadStrings('NOTenglish.txt'),
    loadStrings('QNGenglish.txt'),
    loadStrings('Penglish.txt'),
    loadStrings('BBenglish.txt'),
    loadStrings('NTNSenglish.txt'),
    loadStrings('ISenglish.txt'),
    loadStrings('LMPenglish.txt'),
    loadStrings('KFenglish.txt'),
    loadStrings('Tenglish.txt'),
    loadStrings('Kenglish.txt'),
    loadStrings('Genglish.txt'),
  ];

  texts['french'] = [
    loadStrings('CEfrench.txt'),
    loadStrings('TPfrench.txt'),
    loadStrings('BBfrench.txt'),
    loadStrings('LMfrench.txt'),
    loadStrings('PPfrench.txt'),
    loadStrings('ISfrench.txt'),
    loadStrings('DMAfrench.txt'),
    loadStrings('LMPfrench.txt'),
    loadStrings('Kfrench.txt'),
    loadStrings('Gfrench.txt'),
    
  ];

  texts['german'] = [
    loadStrings('CEgerman.txt'),
    loadStrings('LMgerman.txt'),
    loadStrings('DMAgerman.txt'),

  ];

  texts['italian'] = [
    loadStrings('CEitalian.txt'),
    loadStrings('SSBitalian.txt'),
    loadStrings('VCMitalian.txt'),
    loadStrings('ENMitalian.txt'),
    loadStrings('LMitalian.txt'),
    loadStrings('NTNSitalian.txt'),
    loadStrings('ISitalian.txt'),
    loadStrings('SGitalian.txt'),
  ]

  texts['latin'] = [
    loadStrings('SGlatin.txt')
  ];

  texts['portuguese'] = [
    loadStrings('NOTportuguese.txt'),
    loadStrings('QNGportuguese.txt'),
    loadStrings('ENMportuguese.txt'),
    loadStrings('PPportuguese.txt'),

  ];

  texts['spanish'] = [
    loadStrings('Pspanish.txt'),
    loadStrings('ISspanish.txt'),
    loadStrings('KFspanish.txt'),
    loadStrings('Tspanish.txt'),

  ];

  texts['dutch'] = [
    loadStrings('ISdutch.txt'),
    
  ];

  texts['flemish'] = [
    loadStrings('Kflemish.txt'),
    
  ];

  texts['sounds'] = [
    loadStrings('VCMsounds.txt'),
    loadStrings('NOTsounds.txt'),
    loadStrings('QNGsounds.txt'),
    loadStrings('BBsounds.txt'),
    loadStrings('KFsounds.txt'),
    loadStrings('Ksounds.txt'),
    loadStrings('Gsounds.txt'),
  ];


}

function setup() {



  // Create the language options
  let languageList = createDiv();
  languageList.class('lista')
  languageList.style('font-family','Archivo')
  languageList.style('color','white')
  languageList.style('line-height','1.4em')
  languageList.style('font-size','1.5vw')
  languageList.position(0,0)
  languageList.child(createElement('div', '+ English').style('cursor', 'pointer').class('englishhover').mouseClicked(() => selectLanguage('english')));
  languageList.child(createElement('div', '+ French').style('cursor', 'pointer').class('frenchhover').mouseClicked(() => selectLanguage('french')));
  languageList.child(createElement('div', '+ German').style('cursor', 'pointer').class('germanhover').mouseClicked(() => selectLanguage('german')));
  languageList.child(createElement('div', '+ Italian').style('cursor', 'pointer').class('italianhover').mouseClicked(() => selectLanguage('italian')));
  languageList.child(createElement('div', '+ Latin').style('cursor', 'pointer').class('latinhover').mouseClicked(() => selectLanguage('latin')));
  languageList.child(createElement('div', '+ Portuguese').style('cursor', 'pointer').class('portuguesehover').mouseClicked(() => selectLanguage('portuguese')));
  languageList.child(createElement('div', '+ Spanish').style('cursor', 'pointer').class('spanishhover').mouseClicked(() => selectLanguage('spanish')));
  languageList.child(createElement('div', '+ Dutch').style('cursor', 'pointer').class('dutchhover').mouseClicked(() => selectLanguage('dutch')));
  languageList.child(createElement('div', '+ Flemish').style('cursor', 'pointer').class('flemishhover').mouseClicked(() => selectLanguage('flemish')));
  languageList.child(createElement('div', '+ Sounds').style('cursor', 'pointer').class('soundshover').mouseClicked(() => selectLanguage('sounds')));
  
  // Create the output div
  outputDiv = createDiv();
  outputDiv.class('generatedtext')
  outputDiv.position(0,0)

  let generatedSongText = createElement('div', 'Your generated song :');
  generatedSongText.class('generatedsongtext');
  generatedSongText.position(0, 0);
  generatedSongText.class("generated")

  // Create the "Download as PNG" button
  downloadButton = createButton('Download');
  downloadButton.class('downloadButton');
  downloadButton.position(0, 0);
  downloadButton.mouseClicked(downloadAsPNG);

  refreshButton = createButton('⟳');
  refreshButton.class('refreshButton');
  refreshButton.position(10, 0);
  refreshButton.style('font-size','1.7vw');
  refreshButton.mouseClicked(refreshText);


}

function refreshText() {
  // Clear the buffer and outputDiv
  buffer = '';
  outputDiv.html('');
}

function selectLanguage(selectedLanguage) {
  // Set the selected language
  language = selectedLanguage;

  // Choose a random text from the text files in the selected language
  let randomIndex = floor(random(texts[language].length));
  let randomLine = floor(random(texts[language][randomIndex].length));
  let contents = texts[language][randomIndex][randomLine];

  
  // Set the color for the output text based on the selected language
  let color;
  switch (language) {
    case 'english':
      color = '#fb631b';
      break;
    case 'french':
      color = '#23ab53';
      break;
    case 'german':
      color = '#ffb500';
      break;
    case 'italian':
      color = '#0ca3f2';
      break;
    case 'sounds':
      color = '#ffa3d3';
      break;
    case 'portuguese':
      color = '#9393f8';
      break;
    case 'spanish':
      color = '#019093';
      break;
    case 'dutch':
      color = '#03c0f5';
      break;
    case 'latin':
      color = '#db8b53';
      break;
    case 'flemish':
      color = '#f56678';
      break;


    default:
      color = 'black';
  }
  
  // Add the new text to the list of previous output texts with the selected color
  buffer += '<span style="color:' + color + '">' + contents + '</span><br>';

  // Check if the output div has been created yet
  if (outputDiv) {
    outputDiv.html(buffer);
    
  }

} 

function downloadAsPNG() {
  // Capture the `outputDiv` element as an image using html2canvas
  html2canvas(outputDiv.elt).then(function (canvas) {
    // Create a temporary link and set the image data as the href
    let link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'generated_text.png';
    link.click();
  });
}
