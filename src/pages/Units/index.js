import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import CustomButton from '../../components/atoms/Button';
import { useNavigate } from 'react-router-dom';
import { getUnitsRequest } from '../../store/actions/unitsActions';

function Units() {
  const state = useSelector((state) => state);
  const { unitsReducer } = state;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  const listTodos = () => {
    dispatch(getUnitsRequest());
  };

  return (
    <div className="todos centered-pages">
      <div>
        <CustomButton title={'Back'} onClick={handleClick} loading={unitsReducer.isLoading} />
        <CustomButton
          title={'List Units'}
          onClick={listTodos}
          loading={unitsReducer.isLoading}
          async
        />
        <ToastContainer />
      </div>
    </div>
  );
}

export default Units;
