# SSGS Calc

Una calcolatrice matematica Node.js con test automatizzati e integrazione continua, sviluppata per il laboratorio SSGS.

## Funzionalità 
- Operazioni base: addizione, sottrazione, moltiplicazione, divisione
- Potenza (elevamento a potenza)
- Gestione errori per divisione per zero
- Test unitari con copertura del codice
- Pipeline CI/CD integrata
- Report di coverage automatico

## Installazione

```bash
# Clona il repository
git clone https://github.com/tuo-username/ssgs-calc.git

# Entra nella cartella del progetto
cd ssgs-calc

# Installa le dipendenze
npm install
```

## Utilizzo come comando globale

Installa globalmente:
```bash
npm install -g
```
Esegui:
```
```bash
ssgs-calc
```
Utilizzo interattivo
```bash
$ npm start
```
Seleziona operazione: 
  Addizione
  Sottrazione
  Moltiplicazione
  Divisione
  Potenza

## Test 

Esegui i test unitari con coverage report:
```bash
npm test
```

**Output atteso:**
```
 PASS  __tests__/math.test.js
  ✓ adds 1 + 2 to equal 3 (3 ms)
  ✓ subtracts 5 - 2 to equal 3
  ✓ multiplies 3 * 2 to equal 6
  ✓ divides 6 / 2 to equal 3
  ✓ raises 2 to the power of 3 to equal 8
  ✓ divisione per zero genera errore (1 ms)
  ✓ somma con numeri negativi
  ✓ moltiplicazione per zero

----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------|---------|----------|---------|---------|-------------------
All files       |     100 |      100 |     100 |     100 |                   
 math.js        |     100 |      100 |     100 |     100 |                   
----------------|---------|----------|---------|---------|-------------------
```

## Pipeline CI/CD 🔄

La pipeline automatizzata include:
- Esecuzione test su ogni push e pull request
- Controllo qualità del codice
- Code coverage report
- Supporto per Node.js 20 LTS
- Cache delle dipendenze
- Upload degli artefatti di test

**Workflow principali:**
1. Trigger su `push` e `pull_request` verso il branch `main`
2. Setup ambiente Node.js 20.x
3. Installazione dipendenze con `npm ci`
4. Esecuzione test con coverage
5. Upload del report di coverage come artefatto

## Struttura del progetto 📁
```
ssgs-calc/
├── src/
│   ├── math.js    # Modulo delle funzioni matematiche
│   └── cli.js     # Interfaccia a linea di comando
├── __tests__/
│   └── math.test.js    # Test unitari
├── .github/
│   └── workflows/
│       └── test.yml    # Configurazione CI/CD
├── .gitignore          # File esclusi da git
├── package.json        # Configurazione progetto
└── README.md           # Documentazione
```

---

👤 **Autore**: Matteo Elezi  
📧 **Email**: 5283664@studenti.unige.it  
```