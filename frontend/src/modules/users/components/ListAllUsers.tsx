import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { User } from '../users.interfaces';

type ListAllUsersProps = {
  users: User[];
  onUnpdate: (bool: boolean, user: User) => void;
}

export default function ListAllUsers({ users, onUnpdate }: ListAllUsersProps) {
  return (
    <TableContainer className='rounded-md outline outline-[1px] outline-white/50'>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell variant="head" size='medium' className="border-r-[1px] border-white/50">
              Nombre
            </TableCell>
            <TableCell variant="head" size='medium'>
              Email
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.id}>
              <TableCell variant="footer" component="th" scope="row" className="border-r-[1px] border-white/50">
                <p className='text-base'>{row.name}</p>
              </TableCell>
              <TableCell variant="footer" component="th" scope="row">
                <div className='flex items-center justify-between'>
                  <p className='text-base'>{row.email}</p>
                  <div className='flex gap-2'>
                    <Button variant='outlined' size='small' color='info' onClick={()=>onUnpdate(true, row)}>actualizar</Button>
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
