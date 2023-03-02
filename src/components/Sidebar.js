import Box from '@mui/material/Box'
import { width } from '@mui/system'
import FotoMontanha from './assets/img/FotoMontanha.jpeg'
import { ReactComponent as IconCarrinho} from './assets/img/carrinho.svg'
import { BsCartPlusFill as IconCarrinhoMais } from 'react-icons/bs'

const Sidebar = () => {
    return(
        <Box sx={{
            background: "#DDD",
            width: 200,
            height: 500
        }}>
            <h2>Sidebar</h2>
            <img
            style={{
                widht: 180,
                height: 123.83
            }}
            src="https://i.natgeofe.com/k/830b5d15-92db-429f-a80a-cc89b5700af5/mt-everest.jpg?w=374&h=257" alt="Mountain"
            />
            <hr/>
            <img
            style={{
                width: 180,
                heigh: 120
            }}
            src={FotoMontanha}
            alt="Mountain"
            />
            <hr/>
            <IconCarrinho
            style={{
                width: 30,
                height: 30
            }}
            />
            <hr/>
            <IconCarrinhoMais 
            style={{
                width: 40,
                height: 40,
                color: 'red'
            }}
            />
        </Box>
    )
}

export default Sidebar