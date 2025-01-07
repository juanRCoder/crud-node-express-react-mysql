import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows: string[] = ['Frozen yoghurt', 'Ice cream sandwich', 'Eclair'];

export default function Users() {
  return (
    <TableContainer component={Paper} sx={{ m: "2rem" }} className="w-auto">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell variant="head" size='medium'>Usuarios</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row}>
              <TableCell variant="footer" component="th" scope="row" size='small'>
                {row}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
