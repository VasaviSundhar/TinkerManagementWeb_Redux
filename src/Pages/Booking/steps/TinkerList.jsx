import { useDispatch, useSelector } from 'react-redux';
import { setCustomerData } from '../../../store';

export default function TinkerList({tinkerList, bookingError}) {
const dispatch = useDispatch();
const customerData = useSelector((state) => state.customerData);

const handleClick = (e) => {
 
  const { name, value } = e.target;
  dispatch(setCustomerData({ ...customerData, [name]: value }));
}

    return(
        <div>
            <h1>Tinker List</h1>
            {bookingError.client && <span className="text-red-500 text-xs font-bold h-6 mt-3 leading-8 uppercase">{bookingError.client}</span>}
            {(Array.isArray(tinkerList) && tinkerList.length !== 0)? (
                tinkerList.map((item) => (
                <div key={item.id}>
                    <label className="ml-1">
                    <input className="mr-4" type="radio" name="client" value={item.id} onChange={handleClick}/>
                    {item.firstname} {item.lastname}
                    </label>
                </div>
                ))
                ) : (
                <div>No tinker available. Please Select another time slot</div>
            )}
        </div>
    )
}