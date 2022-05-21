import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import * as S from './styled';
// import { GlobalContext } from '../../contexts/GlobalContext';
// import { Toast } from '../../components/Toast'

const ShowModal = ({
    open,
    handleClose,
    product,
    productQuantity,
    setProductQuantity,
    addProduct,
    onChangeQuantity,
    initialQuantity,
    setModalQuantity,
    modalQuantity
}) => {

    // const handleChange = (event) => {
    // }



    const body = (
        <S.BodyModal>
            <p>Selecione a quantidade desejada</p>
            <FormControl fullWidth variant='outlined' color={'secondary'}>
                <InputLabel>Quantidade desejada</InputLabel>
                <Select
                    value={modalQuantity}
                    label='Quantidade desejada'
                >
                    <MenuItem value="" disabled style={{ display: 'none' }}></MenuItem>
                    <MenuItem onClick={() => setModalQuantity(1)} value={1}>1</MenuItem>
                    <MenuItem onClick={() => setModalQuantity(2)} value={2}>2</MenuItem>
                    <MenuItem onClick={() => setModalQuantity(3)} value={3}>3</MenuItem>
                    <MenuItem onClick={() => setModalQuantity(4)} value={4}>4</MenuItem>
                    <MenuItem onClick={() => setModalQuantity(5)} value={5}>5</MenuItem>
                </Select>
            </FormControl>
            <Button
                // () => onChangeQuantity(product) : 
                onClick={initialQuantity !== productQuantity ? () => onChangeQuantity(product) : () => addProduct(product)}
                color={'primary'}
            >
                Adicionar ao carrinho
            </Button>
        </S.BodyModal>
    );

    return (
        <div>
            <S.DivModal open={open} onClose={handleClose}>
                {body}
            </S.DivModal>
        </div>
    );
}

export default ShowModal