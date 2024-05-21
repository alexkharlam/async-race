import { PiCarProfileFill } from 'react-icons/pi';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { WinnerWithCarData } from '../../types/types.ts';
import { WINNERS_PAGE_LIMIT } from '../../data/config.ts';
 


type Props = {
  winners: WinnerWithCarData[];
};

const columns: GridColDef<WinnerWithCarData>[] = [
  { field: 'id', headerName: '№', width: 90, sortable: false },
  {
    field: 'color',
    headerName: 'Car',
    width: 150,
    sortable: false,
    renderCell: (params) => <PiCarProfileFill color={params.value} size={50} />,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'wins',
    headerName: 'Wins',
    width: 150,
  },
  {
    field: 'time',
    headerName: 'Best time (s)',
    width: 150,
    valueFormatter: (value: number) => (value ? value.toFixed(2) : ''),
  },
];

export default function WinnersTable({ winners }: Props) {
  return (
    <div className="bg-white">
      <DataGrid
        rows={winners}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: WINNERS_PAGE_LIMIT,
            },
          },
        }}
        pageSizeOptions={[WINNERS_PAGE_LIMIT]}
        disableRowSelectionOnClick
        disableColumnMenu
      />
    </div>
  );
}
