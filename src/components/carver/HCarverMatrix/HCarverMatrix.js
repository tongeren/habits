import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import carverAttributes from '../helpers/carver-attributes';

const rows = [
    {
        target: "lose weight", 
        scores: [5, 4, 1, 1, 5, 3],
        total: 19
    },
    {
        target: "change job",
        scores: [2, 3, 3, 4, 5, 4],
        total: 21
    },
    {
        target: "spend more time with family",
        scores: [3, 2, 3, 4, 4, 3],
        total: 19
    }
].sort((r1, r2) => (r2.total - r1.total));

const HCarverMatrix = () => (
    <TableContainer 
        data-testid="HCarverMatrix"
        component={ Paper }
    >
        <Table 
            sx={{ minWidth: 650 }} 
            size="small" 
        >
        <TableHead> 
            <TableRow
                sx={{ 
                    'td': { padding: 0 },
                    'th': { padding: '.2rem'}
                }}
            >
                <TableCell>POTENTIAL TARGETS</TableCell>
                { carverAttributes.map(attr => (
                    <TableCell 
                        key={ attr }
                        align="center"
                        sx={{ 'fontSize': '.8rem' }}
                    >
                        { attr }
                    </TableCell>
                )) }
                <TableCell align="center">TOTAL</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            { rows.map(row => (
                <TableRow
                    key={ row.target }
                    sx={{ 
                        'td': { padding: 0 },
                        'th': { padding: '.2rem'},
                        '&:last-child td, &:last-child th': { border: 0 } 
                    }}
                >
                    <TableCell component="th" scope="row">
                        { row.target }
                    </TableCell>
                    { row.scores.map((score, i) => (
                        <TableCell 
                            key={ i } 
                            align="center"
                        >
                            { score }
                        </TableCell>
                    ))}
                    <TableCell align="center">
                        { row.total }
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
);

export default HCarverMatrix;