import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';

export const BodyModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 206px;
  max-width: 328px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background-color: #fff;
  border-radius: 10px;
  gap: 20px;
`

export const DivModal = styled(Modal)`
  display: flex;
  align-items: center;
  outline: none;
`