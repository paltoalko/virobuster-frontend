import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import styles from '../styles/Details.module.css';

function createData(name: string, description: string) {
  return { name, description };
}

const rows = [
  createData(
    'Wymiary:',
    '540 x 540 x 1.640 mm (L x B x H) / 540 x 540 x 1,640 mm (L x W x H)'
  ),
  createData('Waga:', '39 kg'),
  createData('Moc wyjściowa:', '240 Watt, 230 - 240 V'),
  createData('Moc wyjściowa lampy:', '190 Watt'),
  createData('Moc wyjściowa wentylatora:', '150 m3/h - 800 m3/h (max.)'),
  createData('Natężenie przepływu powietrza:', '150 m3/h - 540 m3/h*'),
  createData(
    'HADR (Szybkość dostarczania higienicznego powietrza):',
    '> 670 m3/h*'
  ),
  createData(
    'Poziom ciśnienia akustycznego:',
    '29,4 - 53,9 dB(A)* Normalna praca 40 dB(A)'
  ),
  createData(
    'Bakteriobójcza dawka dezynfekująca:',
    '> 600 J/m2. Pojemność nominalna przy 1 sekundzie czasu ekspozycji.'
  ),
  createData(
    'Skuteczna dawka ekspozycji:',
    '133 - 407 J/m2. Minimalny wymóg zgodnie z DIN TS 67506, Class 100, zastosowanie w medycynie: 100 J/m2, minimalny wymóg zgodnie z BaFa: 120 J/m2*'
  ),
  createData(
    'Redukcja biologiczna:',
    '> 99,99 %. Potwierdzone przez biodozymetryczną walidację surogatów SARS-CoV-2 (MS2 & Phi6)'
  ),
  createData('Konserwacja:', 'Po 9,000 godzinach pracy'),
  createData('Zalecane użycie:', 'Do 180 m2 powierzchni na urządzenie'),
  createData(
    'Zakres dostawy:',
    'Gotowy do podłączenia i skonfigurowania, ruchome urządzenie'
  ),
  createData('Zezwolenia:', 'TÜV, CE'),
  createData(
    'Dowody skuteczności:',
    'Fraunhofer-Institut für Bauphysik IBP 2021 Hygieneinstitut biotec GmbH 2006, 2013, 2020; 2021 Kowalski 2009; HDZ NRW Ruhr-Universität Bochum 2009'
  ),
];

const Details: React.FC<{}> = ({}) => {
  return (
    <TableContainer className={styles.popUpsContainer}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption style={{ color: '#fafafa ', fontWeight: '200' }}>
          * W zależności od ilości przepływu powietrza
        </caption>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell
                component="th"
                scope="row"
                sx={{ color: '#fafafa', fontWeight: '300' }}
              >
                {row.name}
              </TableCell>
              <TableCell
                align="right"
                color="primary"
                sx={{ color: '#fafafa', fontWeight: '200' }}
              >
                {row.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Details;
