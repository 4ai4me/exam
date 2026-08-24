const fs = require('fs');

// Read knowledge.js
const originalText = fs.readFileSync('src/knowledge.js', 'utf8');

// Let's parse out RAW and SCENARIOS
// In originalText, RAW starts at `const RAW = [` and ends before `const CONCEPTS =` or `const SCENARIOS =`
const rawStart = originalText.indexOf('const RAW = [');
const rawEnd = originalText.indexOf('const CONCEPTS = RAW.map');
const rawBlock = originalText.slice(rawStart + 'const RAW = '.length, rawEnd).trim().replace(/;$/, '');

// Parse rawBlock safely
const allRaw = JSON.parse(rawBlock);
console.log(`Parsed allRaw count: ${allRaw.length}`);

// For scenarios, let's find the SCENARIOS block
const scenariosStart = originalText.indexOf('const SCENARIOS = [');
const scenariosEnd = originalText.indexOf('function generateConceptQuestions()');
const scenariosBlock = originalText.slice(scenariosStart + 'const SCENARIOS = '.length, scenariosEnd).trim().replace(/;$/, '');

const allScenarios = JSON.parse(scenariosBlock);
console.log(`Parsed allScenarios count: ${allScenarios.length}`);

// UI and helper logic
const uiLogic = originalText.slice(scenariosEnd);

const CATEGORIES = [
  "기초 전장", "차단기·보호", "전원", "히터·온도", "모터·서보·인버터",
  "PLC·I/O", "센서", "통신·네트워크", "Safety", "UL·NFPA·IEC",
  "EMC·접지", "케이블·커넥터", "PANEL 제작·전장작업", "ECAD·EPLAN·CAD", "계산", "고장진단",
  "국제 표준"
];

// Ensure IDs for scenarios
allScenarios.forEach((s, idx) => {
  s.id = `sc-${idx + 1}`;
});

const assembledCode = `(function(){
'use strict';

const CATEGORIES = ${JSON.stringify(CATEGORIES, null, 2)};

// ${allRaw.length} Full Electrical Concepts with Real-world Field & International Standards
const RAW = ${JSON.stringify(allRaw, null, 2)};

const CONCEPTS = RAW.map((r, i) => ({
  id: "c-" + (i + 1),
  category: r[0],
  term: r[1],
  desc: r[2],
  use: r[3],
  caution: r[4],
  selection: r[5],
  failure: r[6],
  check: r[7],
  reference: r[8]
}));

const SCENARIOS = ${JSON.stringify(allScenarios, null, 2)};

${uiLogic}
`;

fs.writeFileSync('src/knowledge.js', assembledCode, 'utf8');
console.log("Successfully assembled clean src/knowledge.js!");
