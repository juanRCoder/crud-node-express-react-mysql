import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import useUsers from '../users.hooks';

export default function ListAllUsers() {
  const { users } = useUsers();
  const rows: string[] = users ? users.filter(n => n.name).map(n => n.name) : [];

  return (
    <TableContainer className='rounded-md outline outline-[1px] outline-slate-300 dark:outline-slate-500'>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell variant="head" size='medium'>
              Usuarios
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row}>
              <TableCell variant="footer" component="th" scope="row">
                <div className='flex items-center justify-between'>
                  <p className='text-base'>{row}</p>
                  <div className='flex gap-2'>
                    <Button variant='outlined' size='small' color='info'>actualizar</Button>
                    <Button variant='outlined' size='small' color='warning'>eliminar</Button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
