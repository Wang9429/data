# AGENTS.md

## Cursor Cloud specific instructions

### Repository type

This is a **data-only** repository (Tax Foundation open datasets). There is no application server, build system, package manager, or test suite. Development work here means reading, validating, or analyzing the CSV files and their per-dataset `README.md` documentation.

### Services

| Service | Required | Notes |
|---------|----------|-------|
| *(none)* | No | No servers or databases to start |

### Working with the data

- **21 CSV files** across 7 dataset directories (see root `README.md` for the catalog).
- Each dataset folder has a `README.md` describing columns, methodology, and sources.
- **Encoding gotcha:** Most files are UTF-8, but `federal-income-tax-data-summary/Table 2.csv` through `Table 8.csv` use **Windows-1252 (cp1252)** encoding. Use `encoding='cp1252'` or `latin-1` when reading them in Python; UTF-8 will fail on en-dash and special characters.
- `world-corporate-tax-rates-and-gdp/world-corporate-tax-rates.csv` is UTF-8; see that dataset's README for Excel import tips.

### Suggested validation workflow

Python 3 is available on the VM. No repo dependencies need installing. To verify datasets load correctly:

```bash
python3 -c "
import csv
from pathlib import Path

def read_csv(p):
    for enc in ('utf-8', 'cp1252', 'latin-1'):
        try:
            with open(p, newline='', encoding=enc) as f:
                return list(csv.reader(f))
        except UnicodeDecodeError:
            continue

for p in sorted(Path('.').rglob('*.csv')):
    rows = read_csv(p)
    print(f'{p}: {len(rows)-1} rows')
"
```

### Lint / test / build

There are no lint, test, or build commands for this repository. Validation is manual: confirm CSVs parse and match the schema described in each dataset's README.
